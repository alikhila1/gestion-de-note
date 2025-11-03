package tn.enicarthage.services;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.enicarthage.entities.Absence;
import tn.enicarthage.entities.Etudiant;
import tn.enicarthage.entities.Etudiant_etranger;
import tn.enicarthage.entities.Etudiant_local;
import tn.enicarthage.entities.Matiere;
import tn.enicarthage.entities.Note;
import tn.enicarthage.repositories.AbsenceReposirtory;
import tn.enicarthage.repositories.EtudiantEtrangerRepository;
import tn.enicarthage.repositories.EtudiantLocalRepository;
import tn.enicarthage.repositories.MatiereRepository;

@Service
public class AbsenceService implements IAbsenceService {
	@Autowired
	AbsenceReposirtory AbsenceReposirtory;
	@Autowired
	EtudiantLocalRepository etudiantLocalRepository;

	@Autowired
	EtudiantEtrangerRepository etudiantEtrangerRepository;
	@Autowired
	MatiereRepository MatiereRepository;
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public void ajouterAbsence(Absence n) {
		// TODO Auto-generated method stub
		AbsenceReposirtory.save(n);

	}

	@Override
	public void supprimerAbsenceById(int id) {
		// TODO Auto-generated method stub
		AbsenceReposirtory.deleteById((Long) id);
	}

	@Override
	public void modifierAbsence(Absence n) {
		// TODO Auto-generated method stub
		AbsenceReposirtory.save(n);

	}

	@Override
	public List<Absence> listAbsences() {
		List<Absence> l = (List<Absence>) AbsenceReposirtory.findAll();
		return l;
	}

	public void ajouterAbsenceetudiant(Long idEtudiant, int idMatiere) {
		Etudiant_local etudiant = etudiantLocalRepository.findById(idEtudiant)
				.orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));
		Matiere matiere = MatiereRepository.findById(idMatiere);
		Absence absence = new Absence();
		absence.setDate(new Date());
		absence.setMat(matiere);
		absence.getEtudiants().add(etudiant);
		AbsenceReposirtory.save(absence);
	}

	public void ajouterAbsenceEtudiant(Long idEtudiant, int idMatiere) {
		Optional<Etudiant_local> etudiantLocalOpt = etudiantLocalRepository.findById(idEtudiant);

		if (etudiantLocalOpt.isPresent()) {
			Etudiant_local etudiantLocal = etudiantLocalOpt.get();

			Matiere matiere = MatiereRepository.findById(idMatiere);
			Absence absence = new Absence();
			absence.setDate(new Date());
			absence.setMat(matiere);
			etudiantLocal.getAbsences().add(absence);

			AbsenceReposirtory.save(absence);
		} else {
			Etudiant_etranger etudiantEtranger = etudiantEtrangerRepository.findById(idEtudiant)
					.orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));

			Matiere matiere = MatiereRepository.findById(idMatiere);
			Absence absence = new Absence();
			absence.setDate(new Date());
			absence.setMat(matiere);
			AbsenceReposirtory.save(absence);
		}
	}

	public Map<String, Integer> getNombreAbsencesParEtudiant() {
		Map<String, Integer> nombreAbsencesParEtudiant = new HashMap<>();
		List<Etudiant_local> etudiantsLocaux = (List<Etudiant_local>) etudiantLocalRepository.findAll();
		for (Etudiant_local etudiant : etudiantsLocaux) {
			int nombreAbsences = etudiant.getAbsences().size();
			nombreAbsencesParEtudiant.put(etudiant.getNom(), nombreAbsences);
		}

		List<Etudiant_etranger> etudiantsEtrangers = (List<Etudiant_etranger>) etudiantEtrangerRepository.findAll();
		for (Etudiant_etranger etudiant : etudiantsEtrangers) {
			int nombreAbsences = etudiant.getAbsences().size();
			nombreAbsencesParEtudiant.put(etudiant.getNom(), nombreAbsences);
		}

		return nombreAbsencesParEtudiant;
	}

	@Override
	public void ajouterAbsence(Long idEtudiant) {

	}

	public List<Etudiant_local> getEtudiantsLocaux() {
		return (List<Etudiant_local>) etudiantLocalRepository.findAll();
	}

	public List<Object[]> getNombreAbsencesParEtudiantParMatiere(Long idMatiere) {
		String queryStr = "SELECT etudiants_user_id, mat_matiere_id, COUNT(absence_id) AS nombre_absences "
				+ "FROM t_etud_local_absences "
				+ "JOIN t_absence ON t_etud_local_absences.absences_absence_id = t_absence.absence_id "
				+ "WHERE mat_matiere_id = :idMatiere " + "GROUP BY etudiants_user_id, mat_matiere_id";

		Query query = entityManager.createNativeQuery(queryStr);
		query.setParameter("idMatiere", idMatiere);
		return query.getResultList();
	}

	public List<Object[]> getNombreAbsencesParEtudiantParMatiereAndGroupe(Long idMatiere, Long idGroupe) {
		String queryStr = "SELECT t_etud_local.user_nom, t_etud_local.user_pre, t_etud_local.user_id AS etudiants_user_id, :idMatiere AS mat_matiere_id, :idGroupe AS grp_groupe_id, "
				+ "COALESCE(COUNT(t_absence.absence_id), 0) AS nombre_absences " + "FROM t_etud_local "
				+ "LEFT JOIN t_etud_local_absences ON t_etud_local.user_id = t_etud_local_absences.etudiants_user_id AND t_etud_local_absences.absences_absence_id IS NOT NULL "
				+ "LEFT JOIN t_absence ON t_etud_local_absences.absences_absence_id = t_absence.absence_id "
				+ "WHERE t_etud_local.grp_groupe_id = :idGroupe "
				+ "GROUP BY t_etud_local.user_nom, t_etud_local.user_pre, t_etud_local.user_id";

		Query query = entityManager.createNativeQuery(queryStr);
		query.setParameter("idMatiere", idMatiere);
		query.setParameter("idGroupe", idGroupe);

		return query.getResultList();
	}
	
	public List<Object[]> getNombreAbsencesParMatiere(Long idEtudiant) {
	    String queryStr = "SELECT etudiants_user_id, mat_matiere_id, COUNT(absence_id) AS nombre_absences " +
	                      "FROM t_etud_local_absences " +
	                      "JOIN t_absence ON t_etud_local_absences.absences_absence_id = t_absence.absence_id " +
	                      "WHERE etudiants_user_id = :idEtudiant " +
	                      "GROUP BY etudiants_user_id, mat_matiere_id";

	    Query query = entityManager.createNativeQuery(queryStr);
	    query.setParameter("idEtudiant", idEtudiant);
	    return query.getResultList();
	}

}

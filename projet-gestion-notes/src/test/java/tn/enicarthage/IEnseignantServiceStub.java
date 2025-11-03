package tn.enicarthage;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import tn.enicarthage.entities.Enseignant;
import tn.enicarthage.services.IEnseignantService;

class IEnseignantServiceStub implements IEnseignantService {

    @Override
    public List<Enseignant> listEnseignant() {
    	Enseignant enseignant1 = new Enseignant();
        enseignant1.setId(80L);
        enseignant1.setNom("John");
        enseignant1.setPrenom("Smith");
        
        Enseignant enseignant2 = new Enseignant();
        enseignant2.setId(81L);
        enseignant2.setNom("Jane");
        enseignant2.setPrenom("Doe");
        // Stub implementation, return sample data
        List<Enseignant> enseignants = new ArrayList<>();
        enseignants.add(enseignant1);
        enseignants.add(enseignant2);
        return enseignants;
    }

    @Override
    public Optional<Enseignant> getEnseignantLogged(String username, String password) {
        // Stub implementation, return a hardcoded enseignant
        Enseignant enseignant = new Enseignant();
        enseignant.setId(80L);
        enseignant.setNom("John");
        enseignant.setPrenom("Smith");
        return Optional.of(enseignant);
    }


	@Override
	public void supprimerEnseignantById(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Enseignant getEnseignantById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void modifierEnseignant(Enseignant e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public long countEnsignants() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void ajouterEnseignant(Enseignant e, int idGrp) {
		// TODO Auto-generated method stub
		
	}

    // Implement other methods similarly if needed
}

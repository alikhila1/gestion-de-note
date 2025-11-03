package tn.enicarthage;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import tn.enicarthage.entities.Enseignant;
import tn.enicarthage.repositories.EnseignantRepository;
import tn.enicarthage.services.EnseignantService;

public class EnseignantServiceTEST {

    @Autowired
    private EnseignantRepository enseignantRepository;

    @Autowired
    private EnseignantService enseignantService;

    private Enseignant enseignant1;
    private Enseignant enseignant2;

    @Before
    public void setUp() {
        enseignant1 = new Enseignant();
        enseignant1.setId(80L);
        enseignant1.setUsername("JohnDoe");
        enseignant1.setPassword("password1");
        enseignant1.setNom("Doe");
        enseignant1.setPrenom("John");

        enseignant1.setId(81L);
        enseignant2 = new Enseignant();
        enseignant2.setUsername("JaneDoe");
        enseignant2.setPassword("password2");
        enseignant2.setNom("Doe");
        enseignant2.setPrenom("Jane");
    }

    @Test
    public void testAjouterEnseignant() {
        enseignantService.ajouterEnseignant(enseignant1,2);
        verify(enseignantRepository, times(1)).save(enseignant1);
    }

    @Test
    public void testGetEnseignantById() {
        when(enseignantRepository.findById(80L)).thenReturn(Optional.of(enseignant1));
        Enseignant retrievedEnseignant = enseignantService.getEnseignantById(80);
        assertEquals(enseignant1, retrievedEnseignant);
    }

    @Test
    public void testModifierEnseignant() {
        enseignantService.modifierEnseignant(enseignant1);
        verify(enseignantRepository, times(1)).save(enseignant1);
    }

    @Test
    public void testSupprimerEnseignantById() {
        enseignantService.supprimerEnseignantById(80L);
        verify(enseignantRepository, times(1)).deleteById(80L);
    }

    @Test
    public void testListEnseignant() {
        List<Enseignant> enseignants = new ArrayList<>();
        enseignants.add(enseignant1);
        enseignants.add(enseignant2);
        when(enseignantRepository.findAll()).thenReturn(enseignants);
        List<Enseignant> retrievedEnseignants = enseignantService.listEnseignant();
        assertEquals(2, retrievedEnseignants.size());
    }

}

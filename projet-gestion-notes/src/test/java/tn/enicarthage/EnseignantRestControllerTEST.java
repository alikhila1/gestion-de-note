package tn.enicarthage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import tn.enicarthage.controllers.EnseignantRestController;
import tn.enicarthage.entities.Enseignant;
import tn.enicarthage.services.IEnseignantService;

public class EnseignantRestControllerTEST {

    private EnseignantRestController enseignantController;

    private IEnseignantService enseignantServiceStub;

    @BeforeEach
    public void setUp() {
        enseignantServiceStub = new IEnseignantServiceStub();
        enseignantController = new EnseignantRestController(enseignantServiceStub);
    }

    @Test
    public void testGetAllEnseignants() {
        List<Enseignant> enseignants = enseignantController.listEnseignants();

        assertEquals(2, enseignants.size());
        assertEquals("John", enseignants.get(0).getNom());
        assertEquals("Doe", enseignants.get(0).getPrenom());
        assertEquals("Jane", enseignants.get(1).getNom());
        assertEquals("Smith", enseignants.get(1).getPrenom());
    }

    @Test
    public void testGetEnseignantLogged() {
        Optional<Enseignant> enseignantOptional = enseignantController.getEnseignantLogged("john.doe", "password");

        assertTrue(enseignantOptional.isPresent());
        assertEquals("John", enseignantOptional.get().getNom());
        assertEquals("Doe", enseignantOptional.get().getPrenom());
    }

    // Other test methods can be added for other controller methods
}

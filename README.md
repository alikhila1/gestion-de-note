# 🎓 Application de Gestion d’Université — Angular & Spring Boot

Cette application web permet la **gestion complète d’une université** : étudiants, enseignants, notes, matières, départements, et plus encore.  
Elle repose sur une architecture **Full Stack moderne**, combinant **Angular** pour le frontend et **Spring Boot** pour le backend.

---

## 🧩 Structure du projet

/projet-gestion-universite/
│
├── frontend/ # Application Angular (interface utilisateur)
│ ├── src/
│ ├── package.json
│ └── ...
│
├── backend/ # Application Spring Boot (API REST)
│ ├── src/
│ ├── pom.xml
│ └── ...
│
└── README.md


---

## ⚙️ Technologies utilisées

### 🎨 Frontend
- **Angular 17**
- **TypeScript**
- **Bootstrap / Argon Dashboard**
- **Angular Material**
- **HttpClient / Axios** pour la communication REST

### 🖥️ Backend
- **Spring Boot 3**
- **Spring Data JPA / Hibernate**
- **Spring Security (JWT)**
- **MySQL** pour la base de données
- **Maven** pour la gestion des dépendances

---

## 🚀 Installation et exécution

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/<TON_UTILISATEUR_GITHUB>/projet-gestion-universite.git
cd projet-gestion-universite
2️⃣ Lancer le backend (Spring Boot)
cd backend
mvn clean install
mvn spring-boot:run
Par défaut, le backend démarre sur :
➡️ http://localhost:8080

3️⃣ Lancer le frontend (Angular)
cd frontend
npm install
ng serve
Par défaut, le frontend est accessible sur :
➡️ http://localhost:4200

🔗 Configuration de la connexion API
Dans le fichier :
frontend/src/environments/environment.ts
mets à jour l’URL du backend :

typescript
Copier le code
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
🧱 Construction pour la production
Frontend :
ng build --prod
➡️ Le dossier généré sera dans frontend/dist/.

Backend :
mvn package
➡️ Le JAR sera créé dans backend/target/.

🧑‍💻 Auteur
KHILA Ali
Ingénieur en Génie Informatique
💼 Full Stack Developer — Java • Angular • Spring Boot
📧 ali.khila@enicar.ucar.tn

🪪 Licence
Projet distribué sous licence MIT — libre d’utilisation et de modification.

✨ Développé avec passion pour la gestion numérique moderne des universités.

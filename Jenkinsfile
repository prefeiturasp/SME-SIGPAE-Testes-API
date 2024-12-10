pipeline {
    agent {
        docker {
            image 'node:16' 
            args '-u root:root' 
        }
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    stages {
        stage('CheckOut') {
            steps { checkout scm }
        }

        stage('Instalar Dependências') {
            steps { sh 'npm install' }
        }

        stage('Executar Testes Cypress') {
            steps { sh 'npx cypress run' }
        }

    }

    }
}

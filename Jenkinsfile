pipeline {
    agent {  node { label 'sme' }  }

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    stages {
        stage('CheckOut') {
            steps { checkout scm }
        }

        stage('Install') {
            when { anyOf { branch 'master' } }
            steps { sh 'npm install' }
        }

        stage('Executar Testes Cypress') {
            steps { sh 'npx cypress run' }
        }
    }
}

pipeline {
    agent { label 'SME-JENKINS-AGENT1' }

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
            when { anyOf { branch 'main' } }
            steps { sh 'npm install' }
        }

        stage('Executar Testes Cypress') {
            steps { sh 'npx cypress run' }
        }
    }
}

pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    agent {
        kubernetes {
            label 'builder'
            defaultContainer 'builder'
        }
    }

    stage('Instalar Dependências') {
            steps { sh 'npm install' }
        }

    stage('Executar Testes Cypress') {
            steps { sh 'npx cypress run' }
        }

    stages {
        stage('Build and Test') {
            steps {
                sh 'docker build -f Dockerfile . -t sme-sigpae-poc-testes:latest'
                sh 'docker run --rm sme-sigpae-poc-testes:latest'
            }
        }
    }
}

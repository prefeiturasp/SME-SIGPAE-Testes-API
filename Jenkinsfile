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
            steps { 
                checkout scm 
            }
        }

        stage('Testes Cypress') {
            steps { 
                sh 'docker build -f .\Dockerfile . -t sme-sigpae-poc-testes:latest'
                sh 'docker run --rm sme-sigpae-poc-testes:latest npx cypress run'
            }
        }

    }

}

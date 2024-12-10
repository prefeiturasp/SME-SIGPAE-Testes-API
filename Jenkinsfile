pipeline {
    agent { label 'sme' }

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    stages {
        stage('CheckOut') {
            steps { checkout scm }
        }

        stage('Build Docker Image') {
            steps {
                sh ' docker build -f ./Dockerfile . -t sme-sigpae-poc-testes:latest'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm sme-sigpae-poc-testes:latest npx cypress run'
            }
        }
    }
}
pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    agent {
        kubernetes {
            label 'cypress'
            defaultContainer 'cypress-13-6-6'
            yaml """
            apiVersion: v1
            kind: Pod
            metadata:
              labels:
                app: cypress
            spec:
              containers:
              - name: cypress
                image: cypress/base:latest
                resources:
                  limits:
                    memory: "4Gi"
                    cpu: "2"
                  requests:
                    memory: "2Gi"
                    cpu: "1"
            """
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'mkdir -p /home/jenkins/.cache/Cypress'
                sh 'chmod -R 777 /home/jenkins/.cache/Cypress'
                sh 'npm install'
            }
        }

        stage('Executar') {
            steps {
                sh '''
                    npx cypress run \
                        --headless \
                        --spec cypress/e2e/api/*
                '''
            }
        }
    }
}

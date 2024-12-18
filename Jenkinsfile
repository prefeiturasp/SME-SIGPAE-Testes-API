pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    agent { kubernetes {
        label 'cypress'
            defaultContainer 'cypress-13-6-6'
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
                sh 'chmod -R 777 /proc'
                sh 'mkdir -p /home/jenkins/.cache/Cypress'
                sh 'chmod -R 777 /home/jenkins/.cache/Cypress'
                sh 'npm install'
            }
        }

        stage('Verificar Dependências') {
            steps {
                sh 'npx cypress run'
            }
        }

            stage('Build Docker') {
                steps {
                    script {
                        sh "docker build -f ./Dockerfile . -t sme-sigpae-poc-testes:latest"
                        sh "docker run --rm sme-sigpae-poc-testes:latest npx cypress run"
                    }
                }
            }
        }
    }
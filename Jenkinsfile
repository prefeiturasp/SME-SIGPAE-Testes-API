pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    agent { kubernetes {
        label 'cypress'
            defaultContainer 'cypress'
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
                sh 'npm install'
            }
        }

        stage('Verificar Dependências') {
            steps {
                sh 'npm audit --production'
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
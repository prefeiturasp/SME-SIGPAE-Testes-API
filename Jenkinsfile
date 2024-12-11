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

            stage('Install Node.js') {
            steps {
                script {
                    sh '''
                        # Adicionar o repositório do NodeSource para instalar o Node.js
                        curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
                        # Instalar Node.js
                        sudo apt-get install -y nodejs
                        # Verificar a instalação
                        node -v
                        npm -v
                    '''
                }
            }
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
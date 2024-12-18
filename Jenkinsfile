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
                        --browser chrome \
                        -- --no-sandbox --disable-gpu --disable-software-rasterizer --no-zygote --disable-dev-shm-usage --disable-setuid-sandbox \
                        --spec cypress/e2e/api/*
                    '''
            }
        }
    }
}

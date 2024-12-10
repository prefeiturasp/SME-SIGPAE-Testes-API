pipeline {
    agent { label 'sme' }

    environment {
        NODE_VERSION = '22'  // Exemplo, ajuste conforme necessário
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    stages {
        stage('CheckOut') {
            steps { checkout scm }
        }

        stage('Instalar Node.js e npm') { 
            steps { 
                sh '''
                    #!/bin/bash
                    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} -o nodesource_setup.sh
                    bash nodesource_setup.sh
                    sudo apt-get install -y nodejs
                    node -v
                    npm -v
                ''' 
            } 
        }

        stage('Instalar Dependências') {
            steps { sh 'npm install' }
        }

        stage('Executar Testes Cypress') {
            steps { sh 'npx cypress run' }
        }

    }
}

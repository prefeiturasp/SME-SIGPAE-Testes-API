pipeline {
    agent {  node { label 'sme' }  }

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
                sh 'curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -' 
                sh 'apt-get install -y nodejs' 
                sh 'node -v' 
                sh 'npm -v' 
                } 
                }

        stage('Install') {
            when { anyOf { branch 'master' } }
            steps { sh 'npm install' }
        }

        stage('Executar Testes Cypress') {
            steps { sh 'npx cypress run' }
        }
    }
}

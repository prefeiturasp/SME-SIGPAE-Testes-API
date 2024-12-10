pipeline {
    agent { label 'SME-JENKINS-AGENT1' }

    environment {
        NODE_VERSION = '22.x'
    }

    stages {
        stage('Checkout do Código') {
            steps {
                checkout scm
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Arquivar Resultados') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4,cypress/screenshots/**/*.png,cypress/reports/**/*.json', allowEmptyArchive: true
            }
        }
    }

}

pipeline {
    agent {
        docker {
            image 'node'
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
            steps { checkout scm }
        }

        stage('Build and Test') {
            steps {
                sh 'docker build -f Dockerfile . -t sme-sigpae-poc-testes:latest'
                sh 'docker run --rm sme-sigpae-poc-testes:latest'
            }
        }
    }
}

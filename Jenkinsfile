pipeline {
    agent { label 'WFD-WIN11TC-021' }
    tools { nodejs "NodeJS" }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/11bce1098/Playwright_ReportPortal_Jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Publish Report') {
            steps {
                junit '**/test-results.xml'
                archiveArtifacts '**/test-results/*'
            }
        }
    }
}

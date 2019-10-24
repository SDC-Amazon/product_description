module.exports = {
    apps: [{
        name: 'Product_Description',
        script: './server/server.js'
    }],
    deploy: {
        production: {
        user: 'ubuntu',
        host: 'ec2-18-216-11-208.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/robTest.pem',
        ref: 'origin/dev',
        repo: 'git@github.com:Amishon/Product_Description.git', 
        path: '/home/ubuntu/Product_Description',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}
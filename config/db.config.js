const config={
  production :{
    DATABASE: process.env.MONGODB_URI
  },
  default : {
    SECRET: 'P@ssw0rd20!!',
    DATABASE: 'mongodb+srv://developer:all4maxim@niggr.prrfi.mongodb.net/storage?retryWrites=true&w=majority'
  }
}


exports.get = function get(env){
  return config[env] || config.default
}

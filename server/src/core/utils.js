var crypto = require('crypto')

const hash=(password,login,key='')=>{
    let shasum = crypto.createHash('sha256')
    key=key?key:crypto.randomBytes(48).toString('hex')

    shasum.update(password+key+password+password+key+login)
    return {hash:shasum.digest('hex'),key}
}

const newToken=()=>{
    return crypto.randomBytes(48).toString('hex')
}

const hashToken=(token)=>{
    let shasum = crypto.createHash('sha256')
    shasum.update(token+token)
    return shasum.digest('hex')
}

module.exports={
    hashPassword:hash,
    newToken,
    hashToken
}

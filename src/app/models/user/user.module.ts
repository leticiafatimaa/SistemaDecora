export class User { 
  id: number
  name: string
  email: string
  password: string
  userType: string

  public initializeWithJSON(json: any): User {
    this.id         = json.id;
    this.name       = json.name;
    this.email      = json.email;
    this.password   = json.password;
    this.userType   = json.userType;

    return this
}

  public toJSON() {
    return {
      id          : this.id,
      name        : this.name,
      email       : this.email,
      password    : this.password,
      userType    : this.userType
      
    }
  }

}
export class Post {
  public Id;
  public Nombre;
  public Apellido;
  public Cedula;
  public Contrasena1;
  public Contrasena2;  

  set(data: any){
    this.Id = data.idadmins;
    this.Nombre = data.nombres;
    this.Apellido = data.apellidos;
    this.Cedula = data.identificacion;
    this.Contrasena1 = data.contrasena;
    this.Contrasena2 = data.contrasenaconfi;  }
}

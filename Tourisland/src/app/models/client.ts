export class Client {
  public Id;
  public email;
  public nombres;
  public apellidos;
  public identificacion;
  public telefono;
  public direccion;
  public contrasena;
  public contraselaconfir;

  set(data: any) {
    this.Id = data.id;
    this.email = data.email;
    this.nombres = data.nombres;
    this.apellidos = data.apellidos;
    this.identificacion = data.identificacion;
    this.telefono = data.telefono;
    this.direccion = data.direccion;
    this.contrasena = data.contrasena;
    this.contraselaconfir = data.contraselaconfir;
  }
}

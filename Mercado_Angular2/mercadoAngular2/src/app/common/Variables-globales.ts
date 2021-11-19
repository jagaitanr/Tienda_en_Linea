export class VariablesGlobales{
  public static  detalle_producto: string = "articulo"; // variable global utilizado para ver el detalle del productos
  public static pagina_actual: string = "catalogo"; // variable para visualizar la página actual
  public static productosAnadidosImagen: String []=['','','','','','','','','','','','','','','','','','','',''];// array con las imagenes de cada producto
  public static productosAnadidosNombre: string[]=['','','','','','','','','','','','','','','','','','','','']; // se guardará un array con los nombres de los productos añadidos
  public static productosAnadidosPrecio: number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // se guardará un array con los precios de los productos añadidos
  public static productosAnadidosUdisponibles: number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // se guardará un array con las unidades disponibles de los productos añadidos
  public static productosAnadidosPosicion: number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // se guardará un array con los nombres de los productos añadidos la posicion  de 0-20 en el catalogo
  public static productosAnadidosApartados: number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // se guardará un array con los nombres de los productos añadidos apartados
  public static productosCanasta: number = 0; // productos de diferente nombre en canasta  
  public static productoenCanasta: string[]=['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false']; //para determinar que este producto ya fue agregado a la canasta
}
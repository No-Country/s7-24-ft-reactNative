# s7-24-ft-reactNative
init project
## Estructura de Carpetas  
* src    
    * models : Las interfaces de las entidades que participan en la aplicación.
    * hooks: Funciones reutilizabais del estado.
    * styles: Estilos CSS.
    * components: Componentes de la aplicación .
    * routes: Las distintas paginas de nuestras aplicación.
    * context: Los estados globales.
    * pages: Paginas de cada vista.
    * servicios: Servicios externos de otra aplicación .
    * adapters: Funciones adaptadoras de información por ejemplo un api ..
    

## Estructura Css ITCSS (Triangulo Invertido Css).

Organiza los archivos CSS de su proyecto de tal manera que pueda manejar mejor los detalles específicos de CSS como el espacio de nombres global, la cascada y la especificidad de los selectores . 

Settings : se usa con preprocesadores y contiene fuentes, definiciones de colores, etc. 

Tools :  funciones y mixins utilizados globalmente. Es importante no generar ningún CSS en las primeras 2 capas. 

Objects :  selectores basados ​​en clases que definen patrones de diseño no decorados, por ejemplo, el objeto multimedia conocido de OOCSS 

Utilities : utilidades y clases auxiliares con la capacidad de anular todo lo que sucede antes en el triángulo, por ejemplo, ocultar la clase auxiliar.

### Metodología BEM
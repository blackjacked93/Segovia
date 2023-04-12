CREATE database  app;
use app;


DROP TABLE IF EXISTS `Categorias`;

CREATE TABLE `Categorias`(
`id`  int  not null AUTO_INCREMENT , 
 `nombre` varchar(100) not null,
  `descripcion` text,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT charset=utf8mb4;

DROP TABLE IF EXISTS `Tiempos`

CREATE TABLE `Tiempos`(
`id`  int  not null AUTO_INCREMENT , 
 `videojuego` varchar(50) not null,
    `tiempo` time,
 `descripcion` text,
    PRIMARY KEY (`id`)
)     

DROP TABLE if  EXISTS `Reactivos`;

CREATE TABLE `Reactivos`(
    `id` int not null AUTO_INCREMENT,
    `nombre` varchar (200) not null,
      `opcion_1` varchar (200) not null,
      `opcion_2` varchar (200) not null,
      `opcion_3` varchar (200) not null,
      `correcta` varchar (200) not null,
    `idCategoria` int not null,
    PRIMARY KEY (`id`),
    KEY fk_reactivos_categorias_id (`idCategoria`),
    CONSTRAINT fk_reactivos_categorias FOREIGN key (`idCategoria`) REFERENCES
    Categorias(`id`)
) ENGINE=INNODB DEFAULT charset=utf8mb4;
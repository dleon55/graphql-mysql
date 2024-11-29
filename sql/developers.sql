-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
-- Anartz Mugika Ledo (mugan86@gmail.com)
--
-- Servidor: localhost
-- Tiempo de generación: 15-05-2020 a las 12:10:45
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.27

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `developers`
--
CREATE DATABASE IF NOT EXISTS `developers` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `developers`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Información de los diferentes lenguajes de programación';

--
-- Volcado de datos para la tabla `languages`
--

INSERT INTO `languages` (`id`, `name`) VALUES
(1, 'Swift'),
(2, 'Kotlin'),
(3, 'Javascript'),
(4, 'Typescript'),
(5, 'Java'),
(6, 'PHP'),
(7, 'Cobol'),
(8, 'Go'),
(10, 'C#');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT 'Identificador del desarrollador',
  `name` varchar(150) NOT NULL COMMENT 'Nombre y apellidos del desarrollador',
  `instructor` tinyint(4) NOT NULL DEFAULT '0',
  `twitter` varchar(100) NOT NULL,
  `web` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `instructor`, `twitter`, `web`) VALUES
(1, 'Ruslan González', 0, 'ruslangonzalez', 'https://github.com/ruslanguns'),
(2, 'Antonio Leiva', 1, 'lime_cl', 'https://antonioleiva.com'),
(3, 'Anartz Mugika', 1, 'mugan86', 'https://anartz-mugika.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users-languages`
--

CREATE TABLE `users-languages` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `language` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users-languages`
--

INSERT INTO `users-languages` (`id`, `user`, `language`) VALUES
(1, 1, 3),
(2, 1, 4),
(3, 2, 8),
(4, 2, 7),
(5, 2, 6),
(6, 2, 2),
(7, 2, 5),
(8, 1, 2),
(10, 3, 4),
(11, 3, 2),
(12, 3, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users-languages`
--
ALTER TABLE `users-languages`
  ADD PRIMARY KEY (`id`,`user`,`language`),
  ADD KEY `user` (`user`),
  ADD KEY `language` (`language`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del desarrollador', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users-languages`
--
ALTER TABLE `users-languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `users-languages`
--
ALTER TABLE `users-languages`
  ADD CONSTRAINT `language` FOREIGN KEY (`language`) REFERENCES `languages` (`id`),
  ADD CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `users` (`id`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

certificados/* Table for storing certificado data */
CREATE TABLE certificados (
  remesa INT,
  id_plantel INT,
  rvoe VARCHAR(50),
  estatus VARCHAR(100),
  folio VARCHAR(50) PRIMARY KEY,
  literal VARCHAR(50),
  tipo_certificado VARCHAR(100),
  nombre VARCHAR(255),
  numero_matricula VARCHAR(50),
  institucion_emisora VARCHAR(255),
  plantel VARCHAR(255),
  clave_centro_trabajo VARCHAR(50),
  plan_estudios VARCHAR(100),
  promedio FLOAT,
  promedio_literal VARCHAR(100),
  creditos_obtenidos VARCHAR(100),
  fecha_inicio_estudios DATE,
  fecha_fin_estudios DATE,
  tipo_documento VARCHAR(100),
  fecha_timbrado DATETIME,
  correo VARCHAR(100),
  telefono VARCHAR(50)
);

/* Table for storing institution catalog */
CREATE TABLE instituciones (
  id_institucion INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255)
);

/* Table for storing plantel catalog */
CREATE TABLE planteles (
  id_plantel INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255),
  clave_centro_trabajo VARCHAR(50)
);



/* Insert dummy data into certificados table */
INSERT INTO certificados (
  remesa, id_plantel, rvoe, estatus, folio, literal, tipo_certificado, nombre, numero_matricula,
  institucion_emisora, plantel, clave_centro_trabajo, plan_estudios, promedio, promedio_literal,
  creditos_obtenidos, fecha_inicio_estudios, fecha_fin_estudios, tipo_documento, fecha_timbrado, correo, telefono
) VALUES (
  271161, 3997, '19/1328', 'Registrado en el SIGED', 'CBG23533656', 'CBG', 'Certificado de terminación de estudios',
  'ALEXANDER FABIAN PEREZ LOPEZ', '15594', 'Direccion General del Bachillerato',
  'ESCUELA PREPARATORIA PARTICULAR INCORPORADA', '15PBH3997H', 'Bachillerato General', 7.4, 'Siete punto Cuatro',
  '332 de un total de 332', '2020-07-20', '2023-07-19', 'Certificado de terminación de estudios', '2023-07-21 17:18:21',
  'controlescolar_dgb@nube.sep.gob.mx', '55-3601-1000 Ext. 63329'
), (
  271162, 4001, '20/1456', 'Registrado en el SIGED', 'CBG23533657', 'CBG', 'Certificado de terminación de estudios',
  'MARIA FERNANDA GONZALEZ SANCHEZ', '15595', 'Direccion General del Bachillerato',
  'ESCUELA PREPARATORIA PARTICULAR INCORPORADA', '15PBH4001J', 'Bachillerato General', 8.1, 'Ocho punto Uno',
  '330 de un total de 332', '2020-08-15', '2023-08-15', 'Certificado de terminación de estudios', '2023-08-21 16:00:00',
  'controlescolar_dgb@nube.sep.gob.mx', '55-3601-1000 Ext. 63330'
), (
  271163, 4002, '21/1678', 'Registrado en el SIGED', 'CBG23533658', 'CBG', 'Certificado de terminación de estudios',
  'JUAN CARLOS HERNANDEZ MARTINEZ', '15596', 'Direccion General del Bachillerato',
  'ESCUELA PREPARATORIA OFICIAL', '15PBH4002K', 'Bachillerato General', 9.0, 'Nueve punto Cero',
  '332 de un total de 332', '2020-09-10', '2023-09-10', 'Certificado de terminación de estudios', '2023-09-25 10:45:00',
  'controlescolar_dgb@nube.sep.gob.mx', '55-3601-1000 Ext. 63331'
), (
  271164, 4003, '22/1987', 'Registrado en el SIGED', 'CBG23533659', 'CBG', 'Certificado de terminación de estudios',
  'LUIS MIGUEL RUIZ LOPEZ', '15597', 'Direccion General del Bachillerato',
  'ESCUELA PREPARATORIA TECNICA', '15PBH4003L', 'Bachillerato Tecnico', 7.8, 'Siete punto Ocho',
  '328 de un total de 332', '2020-10-05', '2023-10-05', 'Certificado de terminación de estudios', '2023-10-30 09:30:00',
  'controlescolar_dgb@nube.sep.gob.mx', '55-3601-1000 Ext. 63332'
);
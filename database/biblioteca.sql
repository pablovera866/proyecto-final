-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2023 a las 15:03:27
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `biografia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`id`, `nombre`, `nacionalidad`, `fecha_nacimiento`, `biografia`) VALUES
(1, 'Isabel Allende', 'Chile', '1942-08-02', 'Isabel Allende es una reconocida escritora chilena. Nacida el 2 de agosto de 1942 en Lima, Perú, es conocida por su estilo de escritura mágico y realista. Algunas de sus obras más famosas incluyen \"La casa de los espíritus\" y \"Paula\".'),
(2, 'Mary Shelley', 'Reino Unido', '1797-08-30', 'Mary Shelley fue una escritora británica, reconocida por ser la autora de la novela gótica \"Frankenstein\". Nacida el 30 de agosto de 1797 en Londres, Inglaterra, su obra maestra ha dejado una huella perdurable en la literatura.'),
(3, 'George Orwell', 'Reino Unido', '1903-06-25', 'George Orwell, cuyo nombre real era Eric Arthur Blair, fue un escritor y periodista británico. Nacido el 25 de junio de 1903 en Motihari, India Británica, es famoso por sus obras \"1984\" y \"Rebelión en la granja\", que exploran temas como el totalitarismo y la crítica social.'),
(4, 'Frank Miller', 'Estados Unidos', '1957-01-27', 'Frank Miller es un reconocido autor de cómics estadounidense. Nacido el 27 de enero de 1957 en Olney, Maryland, es conocido por su estilo oscuro y su influencia en obras como \"The Dark Knight Returns\" y \"Sin City\".'),
(5, 'Jorge Luis Borges', 'Argentina', '1898-08-24', 'Jorge Luis Borges fue un destacado escritor y ensayista argentino. Nacido el 24 de agosto de 1899 en Buenos Aires, es considerado uno de los grandes maestros de la literatura del siglo XX. Sus obras exploran la metaficción y los laberintos literarios.'),
(6, 'Alan Moore', 'Reino Unido', '1953-11-18', 'Alan Moore es un influyente escritor de cómics y novelista británico. Nacido el 18 de noviembre de 1953 en Northampton, Inglaterra, es conocido por obras como \"Watchmen\" y \"V de Vendetta\", que han revolucionado el género de los cómics.'),
(7, 'Narda Lepes', 'Argentina', '1972-07-29', 'Alan Moore es un influyente escritor de cómics y novelista británico. Nacido el 18 de noviembre de 1953 en Northampton, Inglaterra, es conocido por obras como \"Watchmen\" y \"V de Vendetta\", que han revolucionado el género de los cómics.'),
(8, 'Phillip K. Dick', 'Estados Unidos', '1928-12-16', 'Phillip K. Dick fue un influyente escritor de ciencia ficción estadounidense. Nacido el 16 de diciembre de 1928 en Chicago, Illinois, sus obras exploran temas de realidad alternativa, identidad y tecnología. Algunas de sus obras más conocidas son \"Blade Runner\" y \"El hombre en el castillo\".'),
(9, 'Lewis Carroll', 'Reino Unido', '1832-01-27', 'Lewis Carroll, cuyo nombre real era Charles Lutwidge Dodgson, fue un destacado escritor y matemático británico. Nacido el 27 de enero de 1832 en Daresbury, Inglaterra, es famoso por su obra \"Alicia en el país de las maravillas\", que ha capturado la imaginación de generaciones de lectores.'),
(10, 'Ray Bradbury', 'Estados Unidos', '1920-08-22', 'Lewis Carroll, cuyo nombre real era Charles Lutwidge Dodgson, fue un destacado escritor y matemático británico. Nacido el 27 de enero de 1832 en Daresbury, Inglaterra, es famoso por su obra \"Alicia en el país de las maravillas\", que ha capturado la imaginación de generaciones de lectores.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'Terror'),
(2, 'Infantil'),
(3, 'Comic'),
(4, 'Novela'),
(5, 'Cuento'),
(6, 'Recetas'),
(7, 'Biografia'),
(8, 'Suspenso'),
(9, 'Aventura'),
(10, 'Cientifico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `autor_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id`, `titulo`, `autor_id`, `categoria_id`) VALUES
(1, '1984', 3, 4),
(2, 'Ficciones', 5, 5),
(3, 'Platos de Estacion', 7, 6),
(4, 'Alicia en el Pais de las Maravillas', 9, 2),
(5, 'Watchmen', 6, 3),
(6, 'Frankenstein o el Moderno Prometeo', 2, 1),
(7, 'Rebelion en la Granja', 3, 4),
(8, 'El Aleph', 5, 5),
(9, 'La Casa de los Espiritus', 1, 4),
(10, 'Ronin', 4, 3),
(16, 'El Regreso del Caballero Oscuro', 4, 3),
(18, 'La Broma Asesina', 6, 3),
(19, 'A Través del Espejo', 9, 2),
(20, 'El Mortal Inmortal', 2, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_autor` (`autor_id`),
  ADD KEY `fk_categoria` (`categoria_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `fk_autor` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`),
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

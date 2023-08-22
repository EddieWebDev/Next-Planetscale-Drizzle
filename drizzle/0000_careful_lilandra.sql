-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category` varchar(255) NOT NULL,
	CONSTRAINT `categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `category` UNIQUE(`category`)
);
--> statement-breakpoint
CREATE TABLE `movies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`movie` varchar(255) NOT NULL,
	CONSTRAINT `movies_id` PRIMARY KEY(`id`),
	CONSTRAINT `movie` UNIQUE(`movie`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_name` varchar(240),
	`product_price` int,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`review` varchar(255) NOT NULL,
	`movie_id` int NOT NULL,
	`category_id` int NOT NULL,
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`),
	CONSTRAINT `review` UNIQUE(`review`)
);
--> statement-breakpoint
CREATE INDEX `category_id_idx` ON `reviews` (`category_id`);--> statement-breakpoint
CREATE INDEX `movie_id_idx` ON `reviews` (`movie_id`);
*/
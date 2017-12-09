<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['index_page'] = 'index.php';
$config['is_system_on'] = 'y';
$config['multiple_sites_enabled'] = 'n';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '4.0.1';
$config['encryption_key'] = '52dbdd7403c2d9e955bfd8bfe20c50a05bcc90df';
$config['session_crypt_key'] = '00bbd109e257cd107410fed42199bf163106a2ac';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'EEAlexAngkawijaya',
		'username' => 'root',
		'password' => 'eldyhaes',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);

// EOF
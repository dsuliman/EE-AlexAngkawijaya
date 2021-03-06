<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Service\Model\Column\Scalar;

use EllisLab\ExpressionEngine\Service\Model\Column\StaticType;

/**
 * Model Service Y/N Typed Column
 */
class YesNo extends StaticType {

	/**
	 * Called when the user gets the column
	 */
	public static function get($data)
	{
		return static::isTruthy($data) ? TRUE : FALSE;
	}

	/**
	 * Called when the user sets the column
	 */
	public static function set($data)
	{
		return $data;
	}

	/**
	 * Called when the data is fetched from the db
	 */
	public static function load($db_data)
	{
		return $db_data;
	}

	/**
	 * Called when the data is stored in the db
	 */
	public static function store($data)
	{
		return static::isTruthy($data) ? 'y' : 'n';
	}

	/**
	 * Our ee-aware truthyness check
	 */
	protected static function isTruthy($data)
	{
		return ($data === TRUE || $data === 'y' || $data === 1);
	}
}

// EOF

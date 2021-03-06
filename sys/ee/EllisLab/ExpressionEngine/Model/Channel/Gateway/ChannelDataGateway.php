<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Model\Channel\Gateway;

use EllisLab\ExpressionEngine\Model\Content\VariableColumnGateway;

/**
 * Channel Data Gateway
 */
class ChannelDataGateway extends VariableColumnGateway {

	protected static $_table_name = 'channel_data';
	protected static $_primary_key = 'entry_id';

	// Properties
	public $entry_id;
	public $channel_id;
	public $site_id;

}

// EOF

<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

/**
 * Emoticon Module update class
 */
class Emoticon_upd {

	var $version = '2.0.0';

	/**
	 * Module Installer
	 *
	 * @access	public
	 * @return	bool
	 */
	function install()
	{
		$data = array(
					'module_name' => 'Emoticon',
					'module_version' => $this->version,
					'has_cp_backend' => 'n'
					);

		ee()->db->insert('modules', $data);

		return TRUE;
	}

	/**
	 * Module Uninstaller
	 *
	 * @access	public
	 * @return	bool
	 */
	function uninstall()
	{
		ee()->db->select('module_id');
		$query = ee()->db->get_where('modules', array('module_name' => 'Emoticon'));

		ee()->db->where('module_id', $query->row('module_id'));
		ee()->db->delete('module_member_groups');

		ee()->db->where('module_name', 'Emoticon');
		ee()->db->delete('modules');

		ee()->db->where('class', 'Emoticon');
		ee()->db->delete('actions');

		ee()->db->where('class', 'Emoticon_mcp');
		ee()->db->delete('actions');

		return TRUE;
	}

	/**
	 * Module Updater
	 *
	 * @access	public
	 * @return	bool
	 */
	public function update($current='')
	{
		return TRUE;
	}
}
// END CLASS

// EOF

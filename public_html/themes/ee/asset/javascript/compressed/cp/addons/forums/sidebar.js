/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){$(".sidebar .folder-list .remove a.m-link").click(function(i){var t="."+$(this).attr("rel");$(t+" .checklist").html(""),$(t+" .checklist").append("<li>"+$(this).data("confirm")+"</li>"),$(t+" input[name='id']").val($(this).data("id")),i.preventDefault()})});
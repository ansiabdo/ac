// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// render
frappe.listview_settings['Assignment Transaction'] = {	
	get_indicator: function(doc) {
		var status_color = {
			"Draft": "grey",
			"Open": "darkgrey",
			"Assigned": "orange",
			"Received": "blue",
			"Replied": "black",
			"Completed": "green",
			"Cancelled": "red"
		};
		return [__(doc.status), status_color[doc.status], "status,=,"+doc.status];
	}
};

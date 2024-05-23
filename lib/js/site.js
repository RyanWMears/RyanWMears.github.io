function sendRequest(url, method = 'GET', data) {
    const d = $.Deferred();

    //logRequest(method, url, data);

    $.ajax(url, {
        method,
        data,
        cache: false,
        xhrFields: { withCredentials: true },
    }).done((result) => {
        d.resolve(method === 'GET' ? result : result);
    }).fail((xhr) => {
        d.reject(xhr.responseJSON ? xhr.responseJSON.Message : xhr.statusText);
    });

    return d.promise();
}

function logRequest(method, url, data) {
    const args = Object.keys(data || {}).map((key) => `${key}=${data[key]}`).join(' ');

    const logList = $('#requests ul');
    const time = DevExpress.localization.formatDate(new Date(), 'HH:mm:ss');
    const newItem = $('<li>').text([time, method, url.slice(URL.length), args].join(' '));

    logList.prepend(newItem);
}

function smoothScroll(elementId) {
	var element = document.getElementById(elementId);
	element.scrollIntoView({ behavior: 'smooth' });
}
$('#viewWorkBtn').dxButton({
	icon: 'arrowdown',
	stylingMode: 'outlined',
	text: 'View my work',
	type: 'success',
	onClick() {
		smoothScroll("section_about");
	},
});

$('#letsBuildBtn').dxButton({
	stylingMode: 'text',
	text: "Let's build something amazing together!",
	type: 'default',
	onClick() {
		smoothScroll("section_contact");
	},
});

$('#contactSubmitBtn').dxButton({
	stylingMode: 'contained',
	text: "Submit",
	type: 'default',
	onClick() {
		$('#contactForm').submit();
	},
});

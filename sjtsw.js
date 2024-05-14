function SJTSW_GetBrowserLanguage()
{
	return navigator.language || navigator.userLanguage;
}

function SJTSW_UpdatePageContent(translations, language)
{
	for (var key in translations[language])
	{
		if (translations[language].hasOwnProperty(key))
		{
			var element = document.getElementById(key);
			if (element)
			{
				element.innerHTML = translations[language][key];
			}
		}
	}
}

function SJTSW_TranslatePage()
{
	var browserLanguage = SJTSW_GetBrowserLanguage().split('-')[0];
	var languageInfoElement = document.createElement('p');

	if (translations[browserLanguage])
	{
		SJTSW_UpdatePageContent(translations, browserLanguage);
	}
	else
	{
		SJTSW_UpdatePageContent(translations, 'en');
	}
}

// Call the initialization function
SJTSW_TranslatePage();

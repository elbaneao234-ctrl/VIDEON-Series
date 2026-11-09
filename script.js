const episodeSets = (prefix, names) => names.map((name, index) => [
	`videos/${prefix}${index + 1}.mp4`,
	name,
	`Episodio ${index + 1} de la temporada.`,
	`img/miniatura${(index % 3) + 1}.jpg`
]);

const embedEpisodes = (urls) => urls.map((url, index) => [
	url,
	`Episodio ${index + 1}`,
	`Episodio ${index + 1} de la temporada.`,
	`img/miniatura${(index % 3) + 1}.jpg`,
	'iframe'
]);

const deathNoteEpisodes = [
	['e8w0XbqI', 'DzzI6JiQn1c81Z97eZ1H7JEyoeZ5rFcZDcP0titbA74', 'Renacimiento'],
	['ChhTRLiC', '-0I1x3RqMU6Euf558EEQSUy_wqpSRz7QHN3EjPY_TbU', 'Duelo'],
	['vgpQmYjD', 'QExi-qS1oZpOQkmjxZpfSgwB5VAjoozTaQzHHgtDudw', 'Negociaciones'],
	['nww23Bwb', 'yQn6NndRA50VMvV5CTHh3AovOmbv_hGRsRVjSi9e8G0', 'Persecución'],
	['qpg1hK6b', 'EujlCDMjLOVsobaN0Cet7ZXgjFWn4E42qghOvrUCPfE', 'Estrategia'],
	['WowFDSbS', 'DNJxTFgIoBb8Q7HFSbSvDZ2nmFDO6eQ9S4Bl-FJvLfE', 'Florecer'],
	['mkwCDYzD', 'QIqMp22lgwbYnupDy4hRy0mdoUWp-KpsY-mD_XfIFaY', 'Nublado'],
	['W9xjSA7b', 'G403sk8WEBwZpLID11DGmqtfEtJ4qD46aYy2RJ_MIso', 'Mirada'],
	['z4hXnJhD', '5xfen1ZaKccT1PWoMBuhQO9Q-Ev0EXX5gkmLcq8n_y4', 'Contacto'],
	['CsISXSzA', 'PF1oPkrEVmMvYXeK_PihVHWilPvk03pF0i6OUsNFcjY', 'Sospechas'],
	['ChJHnCbb', 'hjxyv9sNfVrm0I9X3OLR9AtyiznhrqaXxC-NaR41kss', 'Asalto'],
	['39ZT2a7C', 'C7mlMpioflTxdbZtiqjO5RUFs0ECgD7b-ZvCqQY5geU', 'Enamoramiento'],
	['uhA03Q4J', 'vmGxwsqcc1MlyUKaOQbTZHoWRIyl003fvhOM4rbPzrQ', 'Declaración'],
	['aoBBDbBD', 'eGBCtKrEquYXP3qXg7ieq_ZiHSvDOyJXlyTOR2AYfos', 'Amigos'],
	['jtwX1LJA', 'FoJ35JolNAlhCrJHRo01-9ni40SYFx_xyCJHf027ADM', 'Apuesta'],
	['foQA1aQb', 'OrtSEvbwiD7tLpN3Nsh4J6q6-F-biOjM26YNMCCcv0k', 'Decisión'],
	['C1RxmTQI', 'aPcTh6vyOXbSSllYCum6oySNsweF4h199xuelbqBXi8', 'Ejecución'],
	['HtQTjACC', 'RVnVMunwYMnKGa7OGbPXWsVxRtkcVUdKGWZkFOvDzNI', 'Compañeros'],
	['O0REgS6Y', 'JqKLWvRy05RBvF7Jnj1JwaIkcgm51E_J4Ld3tpun5t0', 'Matsuda'],
	['al5FlLBA', 'PY8FmPcCsmmSroS-GEwD8IM7egqbqhLSKOYrvy3zBj8', 'Improvisación'],
	['v1hVnbwT', 'rMeI9aUNi9tUTL0Kglun3Einp5BCy9r2o0ahiz9q5r0', 'Actividad'],
	['utBlCZ6D', 'HFLL-mxoJLlJL1eRYVot8M5gr_hnyOqXSUA5X1NCq-A', 'Inducción'],
	['nx5RlTKb', 'M9R3RnH278Gl8-NB06_x8dJ5XKXqP8WVzArNF3dOkmQ', 'Frenesí'],
	['b4AkRK7D', 'WTG0Gd3Io_6OISdg9lMCSPwpN49vL7y1jIH8z9wLnGk', 'Resurrección'],
	['PhgGVJjD', 'KZSJqszUekfSH-N_k145g9X6dsJl71gnYH_mUjQogPc', 'Silencio'],
	['D55BhDoK', '0C4w9PADP-GlI_GkCDNeR6REI-MKhaFk-ZNb8JFwwCU', 'Regeneración'],
	['Wko2mTSD', 'mbtagLAq9rJIItaNL5K6RKQ2_mG6B1c3jViIWG5sPg8', 'Secuestro'],
	['mshDARLI', 'K3BvGFA-7bywaQaNSD2aGQ61vj9EdzRFBg6q99tDnrY', 'Impaciencia'],
	['fkJiQSZb', 'HxSHsENMEz8fYm9QJT2V78gmGUHE9xWEMtechm1qBeE', 'Padre'],
	['29gC0ZiC', 'H3k-v-3LbwDsx0ThJhzneqKY4f08U8hbizaqDg02JB4', 'Justicia'],
	['6wZgTDTA', 'oqar4tOdtQqG0rQ5RmNFu3WCCuli_4-mG9EeH2omEAI', 'Cesión'],
	['WhARUJ6D', '1guq4pExVuBW4xOuA0iHF4j0-FbcJXCeDLQzhCb6n8o', 'Elección'],
	['LoB2DLzD', 'NLKJ5vSLZd_V1ofgbzPWduhv9MuVPW9CKb7kEReIIUI', 'Desprecio'],
	['uxgCGSTQ', 'yx6BjLOJnc1qphPbIIa_i7vV8RzPzvWejx0gXjYPaYw', 'Acecho'],
	['WgwmwJbK', 'b_Yio2AI8VuN-FLyI20_L2rPZzV7S0sKgptsYNBYAuA', 'Intento de asessinato'],
	['bkpymDSQ', 'XUsjhagy6PalqjijNQWlKOEabE2L8XU22M81cYW_YZM', '28 de enero'],
	['zo5QARKa', 'UldjxaMn3k3cR8nvnUW8RfbCvqXL-RvLI6eUpmUqQEo', 'Un nuevo mundo']
].map(([id, key, title], index) => [
	`https://mega.nz/embed/${id}#${key}`,
	`Episodio ${index + 1}`,
	title,
	index === 18
		? 'img/DeathNote/Portada-Tmp19-Cap1-DeathNote.jpg'
		: `img/DeathNote/Portada-Tmp1-Cap${index + 1}-DeathNote.jpg`,
	'iframe'
]);

const mushokuSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=NjR1YmNLT1E0R25nY21RYzY3NS9RNTM1MHhxNHpEMkpVQ2JRUTM4ek5ncEV2SXVuTjdZVmQvWlo0VklkNzA2VDJmVG96OGxsTTBhRWVDM1BNL1M1aHo0cHA1ZFlJQldHbzZVT1Q4M2FiRmc9OjprYXe8dMLOUPA88d_HdJXx&t=51ece4029cf46868d10fa2e1bef17b3f&op=NDQzMTI=', 'Episodio 1', 'Reencarnación sin empleo'],
    ['https://jkanime.net/jkplayer/um?e=RktOK0hqUTRMaDY3VjFpWC93M25UVHdBVjAySXNINTJScXlaTTl4cmQ4TlMyTEl1bTdYQTF4QWRHL1RFVzY1UmpoQyt3aFk3YzZhWitNTmNJNXR2MXorQS8wNG11SWZOM1J1eHY3bHF6Zmc9OjrmiS74A7KNMJDzUrIv_EOQ&t=c9b2c3e73b3b3f66e03d077fbf632764&op=NDQzMTM=', 'Episodio 2', 'Maestra'],
    ['https://jkanime.net/jkplayer/um?e=cFU4TGRETVBiWnR0YzFOc3I1dmdXVndScnhWTG4wbk9zdWphUFR5VkJsclNNWEI0MzZnWFlxQmZxYlB0Wk5QYXgzMFNqMmVXTERWVkE4ME9oUG85S2Rhd01ORVlPai9EY2p0ZkpLb0xFYzg9OjoJbhEJUb9Zh6VmMeY4CFTy&t=e3ed7cb7b47e4079cb9fef895846b3e2&op=NDQ0OTA=', 'Episodio 3', 'Un amigo'],
    ['https://jkanime.net/jkplayer/um?e=K2lvRWh5KzZ1ZGZ1RE85cjJWZnVseVN5OEVDTVd1bVdJRm10TmVNbENVaE8wQVJheWJ1T0wyUXN0cFBhYmdsM0pEVVRTVkFvU1FMOENWVDFzTlFkbG1ibnlIQUF4NWNoOWlHTHFhNXRyeFU9OjqdbP.IJXkLXAeEYebLHqJ0&t=1900820441f58be72e092e531f54adc1&op=NDQ1NTY=', 'Episodio 4', 'Reunión familiar de emergencia'],
    ['https://jkanime.net/jkplayer/um?e=N09HNXBTNGJ5MnhYY0VDNUhzNEZYUnZHelEzY1k5RjVyZk5zQWh4dTJTR0NNSmhGTW5ybGlpRzRocHNpL0pjakVkeXF2Mk8ram44RW5yRFgyOVl1cXN4VlI1UVplN2dYQkZBTmFQZGRLZVE9OjowOSd9LIk0o79tORTrePEs&t=b3d5cd16656bd872844d94e6c00ac9f3&op=NDQ2MjQ=', 'Episodio 5', 'Una joven y la violencia'],
    ['https://jkanime.net/jkplayer/um?e=cHJ3UlpINVJiRVVwZ3I5T3hwS1pxV1pCMndSMitYWTl5L0hYNnZ4NGd5bitCWVNYYkc3LzRkSTloZndOZnowTUgwelhMNlNnZTQ5dllUcFZxa1FTUkxPMGRmWjU1NWYyTDBzTE1HZEk5RzA9OjoNH_vNYgaC6PqWcgDFfb5Q&t=df9a2abe2ad3f2d8758b675ac8331ecf&op=NDQ2OTI=', 'Episodio 6', 'Un dia libre en Roa'],
    ['https://jkanime.net/jkplayer/um?e=RTRzelFRN0pGUFlRZm9LTnU0V0NBQ25xNXFINGxhS3RxQWp2QWlGVUNWVUpBdW5hU2owQVJSUVMyMWN6MlovUmJqS2xWek53QUZrMGJ3WG1YYWVLQUJlb1Rac2swS3JiTW5lSVA1bUlkOUk9Ojp87fipDRe42KshJj_wkDcT&t=f8139aafa67b26069e83dbe877a45468&op=NDQ3NjI=', 'Episodio 7', 'Lo que hay más allá del esfuerzo'],
    ['https://jkanime.net/jkplayer/um?e=U1RaMTJRdGhycHhaMFIrSVNjQjhlRzdiSUZiL2ZFV3dQYXZIMnZrNDVPZE1OdnB0TGx6emNDdUtkcFlDRFVkRzVPd2llU1loUVh6alFsME1uKzNCcWJvQlR4NllUcjlxdFFHS2E5azdGYms9OjqAGt0sgMwp6FZ3S.YEVbnk&t=98826328c3a60215e53b342560084571&op=NDQ4MzQ=', 'Episodio 8', 'Punto de inflexión 1'],
    ['https://jkanime.net/jkplayer/um?e=WUMxVllyZ0huSWdvakhyM2xObnZ6bit0T2ZtNWdIN0NFemVLTzFoOXkrSEFJaDBNamZ2UVVZTUpNMEZ6ZFpBU3hnU2MvMkNKK281dElpM09XZFJCTnA1aUJqMHRjWlZ3LzN2SmtmTCsxajQ9Ojo8g.C9Os1GfmhHuxqYYqeI&t=b79ebb75bdf9e00513b4560f357a69bc&op=NDQ5MDA=', 'Episodio 9', 'Un encuentro fortuito'],
    ['https://jkanime.net/jkplayer/um?e=cHJoSlBBVWNWMTczWHZtMklyYXVMZndvcytmNFpWVGloZ1AveThMYjJGM0RZMzRSUWRMQXB1elVVRlVsZTRWc2ZnQXhEaUNPUTZyZkhlbUh6b2YwaGlCWkVYQjkxb29YNmhoV1ZlVy9NSEE9Ojq3l2hkgUj67k6IUEXN1ugA&t=90505b01728d89083db9e5b1804b52d4&op=NDQ5NjY=', 'Episodio 10', 'El primer encargo y el valor de la vida'],
    ['https://jkanime.net/jkplayer/um?e=NUp1VFR6VkhNVUc4UW1hcGdBMzQ4azdQdHVDYnBKakxabEg3QjI3amVOdVFKOUt1eWFVeDJNYjVGck5FRVdFck9XNTl0VWtSNEhyMFczbWtVRGVSS01Fck1MeU1xd2phVmozaUxBNHBpbjg9OjqmtiR8lAtG94ouOGbpti0N&t=a7308ceb6bfe23ec59af4c75cd8885ce&op=NDUwMzk=', 'Episodio 11', 'Niños y guerreros'],
    ['https://jkanime.net/jkplayer/um?e=Y1VOZUUxY2RoWGZQY0VBcERYbUVmSXlPcUJtTE9qUHlySFBEbkRDT3JlM0M4WS92Mkc3SlZkVDFJU0lmcEE4UWZ0K1lBVFVNbU84cTNXUEZqbnJXSnc9PTo6xd7KGs.tbD3zB99_i16UAQ--&t=dcb388ff8ffd71d034c5be968bb13ef9&op=NDY4MTU=', 'Episodio 12', 'La mujer con los ojos de demoino'],
    ['https://jkanime.net/jkplayer/um?e=WU1NNjQ1NUc5NklKL0lMS2RaVWFzMXhCbXJOYWtwLzlhVUsvMjk5d1V0UjlibjV5M2xrYjlNOXFZU21FRjFIcmN2ZytlOHRDSlEzOTlwa09TV2VPb3c9PTo6qNbtj4kbHUqcL6hB5yW4mg--&t=73d20b039c7607c58dd816c7e9fa29ed&op=NDY4ODM=', 'Episodio 13', 'Conexiones perdidas'],
    ['https://jkanime.net/jkplayer/um?e=ZDFOTGpMaG9veUtnMzBHS3dST3RScmg0YUhrSWVUVFRaTHJWQW9BbGtyZnhwYnlrUW9WT3JvR1pHZnN1QXI0Wm1QdXJMRlZIbUx5MURROEdXZVplVGc9PTo6A90KG7HYzenocSYo_8VgOQ--&t=4269a9915e07e5906f7d552a0cf51179&op=NDY5NDY=', 'Episodio 14', 'Nada en la vida es gratis'],
    ['https://jkanime.net/jkplayer/um?e=TWNFcEFrbGdNK1pDN29Rb0xOamh6TmNrVVVoVXl4NUk0WFcyUzNLUFBzVExERDJSbW4yUmV6bjdkK3J1cUcwOVFxejlzZkN4d2VxbTRac29DWjFHSHc9PTo654dC4krd4nAqrWr2URWHkQ--&t=648065d6b81ecfa8cc16a36a1aadb0a1&op=NDcwMTA=', 'Episodio 15', 'La tranquila vida en la aldea Doldia'],
    ['https://jkanime.net/jkplayer/um?e=MlpDS3BiMGVaMnUzdzhqYTVsVXl6K25GVXJGS1lTMlIrVDg2K0s2czF0M2lXUFJ0UjZua3dENU5TQWNwV0dKaTQ1QzFGbUY2Y3BhUkVLa3VES0lTVnc9PTo63onQW9uHB3KXqOqDsmpqsA--&t=1b3792d7a5971736e7dd4932c8c20f74&op=NDcwODA=', 'Episodio 16', 'Conflicto familiar'],
    ['https://jkanime.net/jkplayer/um?e=RUh3RFVnUENjL2h1eG51ZlZDb2Q0ZHI4clEyZ0lEN0U2TEZlSWJ0Zjl1d2c1S0g3L3UxeWk2UDQ4cW9CbEJabjBzeTdKMU9Da0RUTUpEZW5qbkNZZXc9PTo6ch8SIDM1C2oV96ZGToi67A--&t=1b7f4b2c845aac58d112f6e7ca78e8f7&op=NDcxNDE=', 'Episodio 17', 'Reunión'],
    ['https://jkanime.net/jkplayer/um?e=ZDVxWU1DTTZHVUdsdk5xRzg4amh3bEhaSDZJTXRlbGUwMmVTd1FUNEFwYkxRWlg3RTJoZGdBYjBvdE50cVNNVUdQdHpvajZZK3JXSVZLaVJDb0E5d1E9PTo6vbPptqZSNvkN527OaNByFg--&t=ee5e316ecc89554a4609fa2f56eb3ca5&op=NDcyMTc=', 'Episodio 18', 'Viajes divididos'],
    ['https://jkanime.net/jkplayer/um?e=N1Jpb0FSSFJZU1Vnay9TaHErK1VUMDhwM21qTTY3cWpzY1daL1BKNE5DUjlTeS9jcnMwUGtQQTlEd0JlbEJpZnEyYjVRcXdLSHNSTEFRcW9xbTNsVnc9PTo64YICzcv0BDGbpZM0SFe.qQ--&t=f21ff2c15561bd5271169cb7b3e957c1&op=NDczMjY=', 'Episodio 19', 'Selección de ruta'],
    ['https://jkanime.net/jkplayer/um?e=UXZpQm1KL0s3TEZjbExiaUo4d0tRL2R4WDJ2QXoyTGJBK2dkdjRFa1h1YVp0UDB6dFVJYTl5TDY4ekc3TThmWmpabjJQMmluc3NxZk9uQURPbWQxVnc9PTo6hx2BwsvF6qFiQsTuiB8pNg--&t=08be83f454d1b25bc644a44783b8b7d2&op=NDczODA=', 'Episodio 20', 'El nacimiento de mi hermana mejor, la criada'],
    ['https://jkanime.net/jkplayer/um?e=NEpWcmVoTWh5M0R1bUJPdWJMT0hrVlNJQ3VWc1o3NEJKSTQ0M2U4S2h3SXloRFFLMGY0ck5SWllFSmp2Z0ZYU2d4SUdsMWJxRHhpTHFxdElFNDBuRlE9PTo6p57lnemIRS9KUGSJmWZZeg--&t=9ad5546678148565e647bff60c2e7163&op=NDc0ODY=', 'Episodio 21', 'Punto de inflexion 2'],
    ['https://jkanime.net/jkplayer/um?e=dVhDL0lkdXAxOEJrSCt0dXNRNDNRVytsaC84SkNPdlZnYmtoTDY3cVgySGFySTRaRWRUK3JUZ3RtdU1VTzhwcDFmQ2tLM0RaaDBVVkxIdEk4SEs2TlE9PTo60TOrvKpap0hCz3buXgTosA--&t=0054c9f76e4f89e69f3cfbc10a5d7560&op=NDc1NDc=', 'Episodio 22', 'Sueños y realidad'],
    ['https://jkanime.net/jkplayer/um?e=MExKUEdlVnRyUGZMWVMwVWxNMy9RN3NYUjJQWGQ2bVgxSkJZSnFIcnRPc1VSbDBlV3NHYVdJcjc0dGVydElGMlE3emFraDhlZE4ycUJNdVFjUmE0blE9PTo60Eqz9Ayb70saEgmuDha0_g--&t=4aa29ca00d7fb2c2a06f51bd15ebf772&op=NDc3ODc=', 'Episodio 23', 'Despierta y da un paso']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Mushoku/Portada-Tmp1-Cap${index + 1}-Mushoku.jpg`,
    'iframe'
]);

const mushokuSeason2Episodes = [
    ['https://jkanime.net/jkplayer/um?e=d3dJOWY0QnpyT1FTeHZvU08rL0lHVUtMbEcyZ1U2NlFxN3JaZndyeE9ReFlFWEE3ZzFrb3FWbVZtS0xOQ0JxYm04NlViM1dISklpOWIxYmFYNTRWK3d2NHJPclpCNXE0VllKWGdWTDczWlk9OjpoUMZwG_6L0obwYdh4n4Vr&t=99d2ba94750dc7d072f9eb25129d7c0f&op=NTMyOTI=', 'Episodio 0', 'La guarda espaldas Fitts'],
    ['https://jkanime.net/jkplayer/um?e=VEJOUVpkQlh2bnVKRHk2bDNzd1piS05ZMlVjM0crR01IZ3NVR055WnN4NGhWc1RvdEpSNk9IVUVzS2xzbjE3OXZNUDR6eUxVQkJmSlUzZXdVRWoyRlE9PTo6JDOaoGgo2MTfPVmSS6rq.Q--&t=e3806ee77d0e7b7190ce751cb01a313a&op=NTMzNTc=', 'Episodio 1', 'El mago descorazonado'],
    ['https://jkanime.net/jkplayer/um?e=YWxvWEVsei9jOWtmTFZScWNwTU5MZ05tVDdLR2hVMnNBSWl2Ujd4Uys3T1FKaEhFR3RUTUhqU3VhUDNWKzh6RUpFZk8zNVducjVyUGNSMVJpS1ZjcWc9PTo6VMZZWrDiFdyF9NmGzaBigA--&t=91349a3a19b33b040b950e41d12b76ee&op=NTM0MzE=', 'Episodio 2', 'El bosque a medianoche'],
    ['https://jkanime.net/jkplayer/um?e=Y2xzR0xENFZkRVhHTUp0dVJoa0RzeTdFMlNzVmlhUVg2eHpINmxWb1hBK0pzTUJoRUxvY28rSEx1VVlLSFR5OU55Y1hsYURqRXpacXhqZDlDVE84aWVSUUpqY3BVQUZOcWxFWWltQk1ObnM9Ojq9aDC.TzVKVVuYBbL510BZ&t=86c45936b865b478445e53b7e86f950f&op=NTM1MDg=', 'Episodio 3', 'Acercamiento repentino'],
    ['https://jkanime.net/jkplayer/um?e=cWRXQzNjM2QvSm1TWGtmcG5MdFAyaW41MHpWSE45azNNZk8yeUdwUGppZWhPSXJYWVd3c3lKeHNSL3ZwL1BlUHJ4UHBSZnFsUldmSUoxTDlxZy9FSHVtWG9tV2o0NTJqVkVRbmhBOS9EWHM9Ojqwu76_Uuy6ohSg.AU8KDks&t=d8f7c9428b19b77df5cda83a7500af7c&op=NTM2MDE=', 'Episodio 4', 'Carta de invitación'],
    ['https://jkanime.net/jkplayer/um?e=ekRVMU8zWDRPRnpCNkM5NEZKUFhDckdYem45bHhxOTJBVExTMW0vem5SSXl2VnhxTFVPRFdJZHdzZkM3TjBpMWNhbmdtYXRjc2NCYm5iQXUydEVrR1JvN21aUDNQWDNDenFuVzlaTCtNZ1U9OjrdiD8yRxfnCTHwr.LCY3iC&t=06696711623eb807463b9d3d479ac56b&op=NTM2NzE=', 'Episodio 5', 'La Universidad Mágica de Ranoa'],
    ['https://jkanime.net/jkplayer/um?e=K04xVEt5WkVVejdvbDZ6dzVadE43TGtHdk1zaFVQRmhsaE9tVHFCVEo5VWlQT2JYdHBqSnhpUUNqYmNmeThLRG5qOXVrb2JqS0pVZEdDQ3ZNandzOUU2cUdkM1NEY1hXcXpDS3IxTythZk09OjqOXWYMfrhzNN89uq6mXtIP&t=b603fd1803a895c4f696ebeceffe4fee&op=NTM3MjU=', 'Episodio 6', 'No quiero morir'],
    ['https://jkanime.net/jkplayer/um?e=YXJkNzRUSE5tZmxtdWdUMlRYS2xReWgrV0hUR1BPQ3ZzRG4rZTdTbmRxUWU4WW1DMjR4aDViY0RoVnFUZytTWDRoQyt3dGdiNnlDSkNLRWR4cExYWHRWNUtycEZNY1V0aGdYU0p1aHZ1VTA9OjrHqAYLIDHqC.7iwtWvAjmg&t=63374bf7f4745952e48b94c576e99a6e&op=NTM4MjM=', 'Episodio 7', 'Secuestro y confinamiento de unas jóvenes bestias'],
    ['https://jkanime.net/jkplayer/um?e=emRKbXlBczdrREFWSkJnam5nWlhOMXV5b2ZPNldwcDNBMFc3K1FobFhCaE51MXdhbG5hWSsxQ3JkQXZBMU5UZGYrVVEwTS9VK1Z4OVhwNGNTK3E0RVVYOFBhQUNtaHp2Mkp1d0RDd1JYVmM9OjoyuhVPo2BAv4jyCl.l.1Oy&t=8e7138291e1f49666097c87d8aa5aa5d&op=NTM4OTU=', 'Episodio 8', 'Un compañero angustioso'],
    ['https://jkanime.net/jkplayer/um?e=Q3dPVTBCdnB5OVdTNWc2YTA2RDZ3dGxsd3lmR1VCZ0VXZzNEZmdqeUppVXlncktLdEJHVkxhc2FablFDZkVxcGE1OWQxWW54WXQvcUVmYUd4Zm14SVNHTWgwSGdmZDVjZUp0bGlBaDdaaW89OjrP8YaRXFiW5TqPoO3mkn0J&t=fbf707cc380a1e95e3bc614c3c3f030c&op=NTM5ODE=', 'Episodio 9', 'La máscara blanca'],
    ['https://jkanime.net/jkplayer/um?e=QmlZTU5aRXkxSk9kRWZQcTFLWWdqSVFZckNKaHhvVk9QSVFCWVNLY0lvcjRoeTFTY2VqOFhWZmtXakkwMEZYOHNPSjV3ZVkxekRSb2xON2gyZC9zbTA0QWhrWnRyOHVwajdld3Zvc2EycTQ9OjrFqqfgpnJlsAIlI.HDn395&t=9bd36c10ff1cfc37d53df4efb9970fe3&op=NTQwNjA=', 'Episodio 10', 'Estos sentimientos'],
    ['https://jkanime.net/jkplayer/um?e=cEdTR05GeGlrQTJxZTBwVU1KUG9DcDBCbHk4YWxWL05vcktVY1lqcjJnQWhueklHOFM3UDZoOXRFNXhHMXAyVFVZWFh0VnVmTnorZkMyY3lvR0M5NXc9PTo6PJg2cY1QvdE82paQww50ZA--&t=8319c312cb7f3122f1aa2dfb4cfb8969&op=NTQxNDQ=', 'Episodio 11', 'Para ti'],
    ['https://jkanime.net/jkplayer/um?e=Q3NSSkFKcXNCclRwU1hnbXgzR2k4a2R5WHpibGVPNk9HeWZLb29HQnJDeVloT3BwU3VpY1pmdDAzWTBFN3NhS1pxM3QrNWhMTWpJNjZEa251QlhUN0p3M1ZIM0NhLzlSSDg5M1Rjd1RydjA9OjothgU815x9CJSUOu5UqS2l&t=601858549a65755f68b5ec3465c0d00a&op=NTQyMTg=', 'Episodio 12', 'Quiero decírtelo'],
    ['https://jkanime.net/jkplayer/um?e=cVpjZWViN1paUjZpSTdHQzhENzYra29JbnlLYzlZd2pldTFZUUJaMFh2RTFPbmFjM01GTlJ5NnErYURadkE1TmpnbmtIejdZaDdRNWd1YU00MytlUFlYRmRMWGt4b3lIOFdkb3ZGdWZuTUE9Ojqawb69Xqe03iibo8ns6AX9&t=d345960630e2971cd75a4c21ddc0cd16&op=NTY3Nzc=', 'Episodio 13', 'Mi hogar de ensueño'],
    ['https://jkanime.net/jkplayer/um?e=aGMyTlFEbm0zVE5Cc1lCZ2w0Ymd4aTVGWDZCam5pV3NubHJkdS8xTUZuY2hHTlEvZWhMRWRYSFc4UkhyM21sMHpYNnV6aGhWY3ZPcFlDWUptQmF3WnZLZExEYnZBNmdrenhQU0l5U2hGck09Ojo03APZyiqSW6HfvtkkgGnp&t=5495ab28ec837d17f003237e5b630c2d&op=NTY4Njc=', 'Episodio 14', 'Banquete de boda'],
    ['https://jkanime.net/jkplayer/um?e=QmorZk8yWVZpL0xTcGpYVm5QWXRMMU9vdnFWTWVmS1Bqc01TbUo4V08xeFErSVA1ODVTYXBCb1M0ZkllRXd2a2hUZ2YxcDlMOEYwMTNYZHVuUGpTOVNqT01Bbkg3blZxWW9FNnFkZzBVK289Ojr2M7H2Z_B3_Ae47o35eUvi&t=3790b911c954b04a45ded469d1e4ee39&op=NTY5NjE=', 'Episodio 15', 'Lejano'],
    ['https://jkanime.net/jkplayer/um?e=T2hBY05JUk9CWW0xTjlpSVVJTGlYK3dCSGxJbnFUbEtNbVNIREdiMmRPOHFuNjBSZUhncHFmRWhwUzRZbTRVdW1PRC9oaTNaVUR6UFVNb2FCMGhudDVuSWpFa0lNcGtqWFRBRW5YSmtQL3c9OjrofJ3EDr09OX6z1AmKB2LG&t=cd18669c22c2844e336ef95f2409ccdf&op=NTcwNDc=', 'Episodio 16','Norn y Aisha'],
    ['https://jkanime.net/jkplayer/um?e=UEQxKzhOUVdsRUs4aVcvbFQ4Q1FrcnVWRXFSaGo5a1V1TEQ1OFlMZ1VDSGpNWGhiNS96OVVGUEdyRWgzUWRCcktzcHU5ZGpDUDJuZnJXTStKU095MHNKNnVuQkwwRmFtWGR0aFFuK2MxVXMzRW1yYXc0N0xEa2hldXZtTGxTY3U6Oo8htLOc7Qy3UYyeET4L548-&t=02d796bc40c3aeafdc0c8ff57c262047&op=NTcxMzU=', 'Episodio 17', 'Los sentimientos de mi hermano mayor'],
    ['https://jkanime.net/jkplayer/um?e=bDU2NnZXcEtmY0Q1cXBFSVZycTVWeWF6WmRVL3A1dG4rcDljM1lwMEZKZDhxVlVlQ0dKdW92ZVN2cjZ4ZmphbUFGVEM0NWxsd21ES1RSMGF1RWlncVozazExWmVBWTlPbTFIMXd0aHowMW89Ojqsd57YX6KBMpFwMZZOJms4&t=96b0006235c2dafddeeea1eb7ffe475b&op=NTcyMjM=', 'Episodio 18', 'Punto de inflexión 3'],
    ['https://jkanime.net/jkplayer/um?e=K0RkUkNsY0cyMitLdGpqd1lKcUczQjA2VE1IWUh1NGpFenF1S1BVd01pZ0ZDVEIwRkYzeU03a3ExRTNRQ3FkSFVjTGk4VHpmMnpkZzBNSkZCdDVBNDAvZ3d4SVBYUmIvZ3FBNG4xZHV3eTg9Ojq5iVCnOvBUjvnKVvXf5Zsh&t=8c7b120d624959725210b6583fc6c8ad&op=NTczOTQ=', 'Episodio 19', 'Viaje desértico'],
    ['https://jkanime.net/jkplayer/um?e=WWMweGF1aSt1MFIzMjRvTFY2cE0zd2pKWTBMdWtocGxqeG9uOGZQZG1MMXF0NUl1Z2JHa2g4ZFBKUDdiSktqaldkU2pZN0tDZDEyY21lRVA0YjhmdWU1U1hVS2hBaGFUdjNmRDRMNmU3d2M9OjoGsE9rdmGuirUzDLi._rcl&t=b5847d57af29d07544892597e26cb9fb&op=NTc0Nzc=', 'Episodio 20', 'Entrada al laberinto'],
    ['https://jkanime.net/jkplayer/um?e=aTBMQXByekFLTGhnam9KY1JIbUd4QXZKS1pDTE9raFNta0tZenZRTHA2V053azhuTFMyd0NLdWN2RXV3WU11ZXF2QUNRMVNwazdwOTZlMGZTRFpWMms4eTZ0Y1ArSzQ1M0tGNmNVU0JWMEk9Ojoaq14cTwI7zn.Ca9eIlh0Z&t=19673d298dd6a3043279a6294a87e3e3&op=NTc1NjQ=', 'Episodio 21', 'Circulos mágicos del sexto estrato'],
    ['https://jkanime.net/jkplayer/um?e=bDFtU1hHYTlpTGlib05hcjlpbWVUT3dlNktWOCtCa21MMENMMkJrRFYyNWlDclg5MjB5Q1lKYTJhWkdBY3JSS2Y1VGJneEF4NHdEeDc4MU1BL1Q5bGtVYkZjVmc0NTZWTytkc0RjWGtISG1UT2svQndkNXo1eEZGUTlkU2I3QXQ6OkvOR93fnmsxw1mw1i3mqlk-&t=cea328ba82d77ce6070299466ec854cd&op=NTc2NDc=', 'Episodio 22', 'Padres'],
	['https://jkanime.net/jkplayer/um?e=eDcranVlNnk3VHZrSFFycDhjWEpVVnVTRW0vUlJNUHRWRUhTVEdFaUF3K3hoMVNzU05rU1dab2dNSWF2WkNieEFmb1ArQ01hbFhuTjRVb0VkQVB3akJEK25uOUZLSEdUK01zbFVBTTZRSmM9OjoPpL.N2yT0fkkMgbHoOm1C&t=58c87895c5069e0adaec0bf1e15ce9b5&op=NTc3MDM=', 'Episodio 23', 'Volvamos a casa'],
	['https://jkanime.net/jkplayer/um?e=Z1g3S2Z1OERCT1NYQThrOENYcUxRNUF4a2RJQ2ZYTnhGVGgvQlMwM3hWcFptaDNhNTF2QTF1N1paajBidVdUZFVGZFVabDBqM1I5Z00yV3NiSFNOamxvMlFGRDRVcG1KTVFTYnp6RWJ1OGM9OjpmWCcU67p5AXh8mjc9wVkA&t=acd6b03bcec8a6bad96a99b4e7750748&op=NTc3NTY=', 'Episodio 24', 'Sucesión']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Mushoku/Portada-Tmp2-Cap${index + 1}-Mushoku.jpg`,
    'iframe'
]);

const mushokuSeason3Episodes = [
	['https://mega.nz/embed/iwQlDZTY#RYBw4JpdsK90U9sk29uXR5AZliB-NYh8KrWouiwpHLA', 'Arde, Perra Rabiosa'],
	['https://mega.nz/embed/jhhwCZ5Q#3Hiqfev_YhF8AmuP5xRt5skzstDBOXHz6rolmIbvpMs', 'Ladra, Perra Rabiosa'],
	['https://mega.nz/embed/2pxizaha#VvVMlbXzcw1EF3PG3iGoyHHdoT-OyIOJt3cU4ZzqEwY', 'La rutina de vuelta a casa'],
	['https://mega.nz/embed/S9ZBzKyT#CmPhZg5mKRzL_1dRhxjPrMLpd49ObF5EzmSaLjIGyFc', 'Un mago con magia acuática de rango real'],
	['https://mega.nz/embed/awpRnbwS#Bg8BHU6nftwqiuYuHpfKiba5z_mFPEqAhSUIILhajIM', 'Celebraciones'],
	['https://mega.nz/embed/Xsh2jaLA#Cb6TJAYs42rLv3AOXhpFUB1mEv4wE5peSdU9DAYuFts', '¿Otro caos?'],
	['https://mega.nz/embed/D9oUUI5b#mMdWns2vp5sGeK5PzUkUE5JjpnOnnJfUq_acU3S-0SM', 'Cuarta etapa'],
	['https://mega.nz/embed/O4IF2RaL#2zN6w3fqevW5PPa1nxZ1rnW4zySZC27EKxTjjD4NUKY', 'La fortaleza aérea'],
	['https://mega.nz/embed/bkgCkJRS#ov2tn4qWLu5vgMVSFcZq1NGkzYwH6G1m-ZBFZBPkgYQ', 'Lamentos'],
	['https://mega.nz/embed/m9RgjJJa#yaA58zc_wF575gf1jSvzZC_I4MtpDxXgnUsdx_1K8Jc', 'Audiencia con un rey demonio inmortal'],
	['https://mega.nz/embed/XwZD2AJb#pMKJwldUTTLmWioqGeuAf3NzxNFNvTsvwcl8alNvPvU', 'Punto de inflexión 4'],
	['https://mega.nz/embed/LwQmhYLK#zN_Egg6hKYZjoh6FWBostgGtP1aWC6h95lIvVFadOvE', 'Un final y un comienzo'],
	['https://mega.nz/embed/b8hDRa5D#L0y-Z6BLLmq7vTWINFhT1imFB_ioP_nkNscHfnvz_a8', 'El diario'],
	['https://mega.nz/embed/3pRRGIqT#rmHspBpJlZKI43-BLwuKGEX0BkFgiWv_ZCETwpiYSyc', 'Determinación'],
].map(([url, description], index) => [
	url,
	`Capítulo ${index + 1}`,
	description,
	`img/Mushoku/Portada-Tmp3-Cap${index + 1}-Mushoku.jpg`,
	'iframe'
]);

const inazumaSeason1Episodes = [
	['https://mega.nz/embed/qWxShCrT#nvmBgyJW0DKXPfoCYDRLrMjEVUzHLmvPWGKe4fym-Es', 'Episodio 1', '¡Juguemos Al Fútbol!'],
	['https://www.youtube.com/embed/i6T6RCSdaiM', 'Episodio 2', '¡AQUÍ ESTÁ LA ROYAL ACADEMY!'],
	['https://mega.nz/embed/bTQhiIST#EgREvPxAw1yK-hkiMTOcha4j6RVOjwDRkBpGooEtsNE', 'Episodio 3', '¡BUSQUEMOS LA TÉCNICA DEFINITIVA!'],
	['https://mega.nz/embed/aDQkkZbJ#YY4-jTXUqKcEW6xpwQWjyFiskv-7MmNZ9cze7iUsoWQ', 'Episodio 4', '¡HA LLEGADO EL DRAGÓN!'],
	['https://mega.nz/embed/KTBQAQDD#2cvYcz7GxvYJp-gLZeFDW8VmaxOf4VRWSKtNkais2k4', 'Episodio 5', '¿DÓNDE ESTÁ EL CUADERNO SECRETO?'],
	['https://mega.nz/embed/vHRFFT4C#-YZGDBrOg_FsEHjXsa7CRkoOgbUC1lRNbBt840xsuAU', 'Episodio 6', '¡ESTE ES EL TRAMPOLÍN RELÁMPAGO!'],
	['https://mega.nz/embed/TaATEYwB#jJ4oF8XD5R8RM4zASh6iJ7UG1dDtlf4dToUpi1G8_7c', 'Episodio 7', 'DUELO EN LA RIVERA'],
	['https://mega.nz/embed/6DRkxaiB#016hnGQIBtOiaZg2C0OSW1uY96zTdGnSAQ9Pg0gNCg0', 'Episodio 8', '¡LOS TEMIBLES FUTBOLISTAS CIBORG!'],
	['https://mega.nz/embed/7fhjmbpZ#vXildiAWsVCONGDmfFgVQJmAXIqI5oX5l4tLo9N_OAc', 'Episodio 9', '¡LEVANTA, WILLY!'],
	['https://mega.nz/embed/COZQgD4S#383cnUUBh28ZrYtGg8a-5lWyEEULUjzjXSNep0tFcLo', 'Episodio 10', 'EL ESPÍA DE LA ROYAL ACADEMY'],
	['https://www.youtube.com/embed/zZGvO42kzO8', 'Episodio 11', '¡ENCONTREMOS UN ENTRENADOR!'],
	['https://mega.nz/embed/qfRWxJgB#T9rZv9dFliyg7aWdlI_HeWefsFxBzQ4JmpmJTeU4cPM', 'Episodio 12', '¡FINAL CONTRA LA ROYAL ACADEMY, PRIMERA PARTE!'],
	['https://mega.nz/embed/DHIT1Shb#MmuIEAoBg51MSdoeA3S_A2t3G_Nq7Frk6kMmHsizjMs', 'Episodio 13', '¡FINAL CONTRA LA ROYAL ACADEMY, SEGUNDA PARTE!'],
	['https://mega.nz/embed/GCRDTCyI#skQudpLrhMbfotlhedhQ6K3CTjeDDI_xN54doVYj2Fg', 'Episodio 14', '¡EL EQUIPO LEGENDARIO!'],
	['https://mega.nz/embed/XDoykRTC#LryQ55hjIOWEl_hHHOjpM5vZPUoEFQiR88rU5PHt2h8', 'Episodio 15', '¡POR FIN COMIENZA EL TORNEO NACIONAL!'],
	['https://www.youtube.com/embed/rdW-woiPh1E', 'Episodio 16', '¡VENZAMOS A LA ESCUELA NINJA!'],
	['https://mega.nz/embed/GPxXmTJT#h4Go3BEnlTRDtR_asbJtmSDW-pigy_FOlfwegy8KK4U', 'Episodio 17', '¡LA DECISIÓN DE JUDE!'],
	['https://mega.nz/embed/GTg13bgK#wKVqG1o1qz3-dyZbXKyjaeLtV_pfEkwE26dMoAOHnKM', 'Episodio 18', '¡ROMPED LA MURALLA INFINITA!'],
	['https://mega.nz/embed/SbQGXQZa#eSi_JgAvVmnBNxLCsD0ktsZm0TyGeTAi3kvbmPowOD8', 'Episodio 19', '¡VUELVE UN GENIO!'],
	['https://mega.nz/embed/PKJhDSJD#XKmEYxH3I1U9HokoNMd8LXmq0ZNj--d3gH73XZsN_0c', 'Episodio 20', 'LA TÉCNICA DEFINITIVA, ¡EL TRIÁNGULO Z!'],
	['https://mega.nz/embed/zWg2STzY#6utTBxPcjFYsCVvdZiMD1RH29zzDURG305XCwiJAQck', 'Episodio 21', '¡UN FEROZ DUELO CON EL KIRKWOOD!'],
	['https://mega.nz/embed/SKIQxLSB#Cvt_BTx9dKFPlbuBD1xJtwubbm6Y8AAXfz3RSeWXYvs', 'Episodio 22', 'SUPERARÉ LA MANO CELESTIAL'],
	['https://mega.nz/embed/aTo3GKBC#CYRCaFQDLhng5ESiCyXe4qhCqUtnQVN1ZiaVXyzxy9g', 'Episodio 23', '¡EL DESAFÍO DE UN DIOS!'],
	['https://mega.nz/embed/mXZ2lCIJ#6djSpYy_G636lug8a-vw2trLMYtkgacymA-Bmw1MU5U', 'Episodio 24', '¡A LA CONCENTRACIÓN!'],
	['https://www.youtube.com/embed/8qnPb1gQNas', 'Episodio 25', 'EL PARTIDO DEFINITIVO: 1ª PARTE'],
	['https://mega.nz/embed/iCpBTBjY#YVt5vhvlHAP5KsfcbrId5QbXUIc-bMVVehyDcIjba5w', 'Episodio 26', '¡EL PARTIDO DEFINITIVO 2ª PARTE: ¡DIVINIDAD CONTRA MAGIA!']
].map(([url, title, description], index) => [
	url,
	title,
	description,
	`img/Inazuma/Portada-Tmp1-Cap${index + 1}-Inazuma.jpg`,
	'iframe'
]);

const inazumaSeason2Episodes = [
	['https://mega.nz/embed/OGJUlLwK#niuaUP6bjG7AKuiXg6hpmu3bsLuI-YVH-HpVcainOzM', '¡QUE VIENEN LOS EXTRATERRESTRES!'],
	['https://mega.nz/embed/uOQ1TS7b#2l09V7SLc3J1mxG0wrMFZDAdz9Humvj6NPDnI4Ku4lo', '¡LA PARTIDA DEL RAIMON!'],
	['https://mega.nz/embed/6aolSTwa#Rnf_Np-Ho0ctG-RrKNa0uYEA0vOOy32yBfQc_bIUAkA', '¡DERROTEMOS A LOS ONCE DE NEGRO!'],
	['https://mega.nz/embed/2Ggi1KRI#x3ap_zKo6C7TDgeBoLLGbhUx3aC4NphjyWAivtO16Go', '¡LA AMENAZA DE LA ACADEMIA ALIUS!'],
	['https://mega.nz/embed/ySxAxB5A#6JIG1XT1Wiq2vrg9n42-It4yiWYkQMmycZp-O-q0we8', '¡BUSCANDO AL DELANTERO LEGENDARIO!'],
	['https://mega.nz/embed/7fxQDZbR#5eNWA-VUl0L_UpE8EOwne-lrlusc-cH5YtjLSrKoiGw', '¡EL PRÍNCIPE DE LA NIEVE!'],
	['https://mega.nz/embed/eTghXSKA#9b7uDvd7qC3z8MuBsmWzeBQ2SL2Rdo1fqgp-9OPwwuQ', '¿QUIÉN ES EL DELANTERO ESTRELLA?'],
	['https://mega.nz/embed/OaoygCyQ#ymaSKJs5nLkMMau_2hkse8Uo7oPDdlSBtD9GFQsCIAY', '¡LA ACADEMIA ALIUS ATACA!'],
	['https://mega.nz/embed/jfJ2BZaK#cCeI-9LIp4Qo0gUgxVJmgqGGAovmLtrhUPPD-cfcgcY', '¡EL ATAQUE DE ÉPSILON!'],
	['https://mega.nz/embed/WOoDWJhK#u_jvst1YUgOvc9cpmBPa9WclJwR84Brhw0LMW6FDEnA', '¡LA FUERZA OCULTA!'],
	['https://mega.nz/embed/uCw10JBT#NoRSp13hnVk3sbbswDiCeB0LQ_MFrUd3qbpZaCK6GPs', '¡EL CONTRAATAQUE DE LA ROYAL -- PRIMERA PARTE!'],
	['https://mega.nz/embed/XCADlCqS#Ngiyd7BpLpUqv_Kql1gUXcTXuaRvNFn7YQYnTLCpXaQ', '¡EL CONTRAATAQUE DE LA ROYAL -- SEGUNDA PARTE!'],
	['https://mega.nz/embed/mHgy1CST#yNyi0pJ41LyShR6NYzzuuwCh0nLd5Am1KGuYOqi5kMU', '¡LA ÚLTIMA VENTISCA DE GUIVERNO!'],
	['https://www.youtube.com/embed/MvUeRbABPMs', '¡ERIK, EN EL MAYOR DE LOS PELIGROS!'],
	['https://mega.nz/embed/LGAljLLD#LwjiATJhYn2Wwg4N_X8T_6XBQNx72h26nZ9c6iNF0vc', '¡LA TRAMPA DE DVALIN!'],
	['https://mega.nz/embed/2fJ0QIzT#K9Fm2frzhu3w9eOmYM1WrG3BBf47wVwyj3KLA5EDmYA', 'UN PARTIDO AL ROJO. ¡EL GAFE DE ÉPSILON!'],
	['https://mega.nz/embed/KfYTgQYb#BPmag1NZwvrNYV8kRcUmM4IUr7qz7DArKEGrqM8woZs', '¡LA ULTRA SUPERTÉCNICA DEL ABUELO!'],
	['https://mega.nz/embed/TWwFkQaa#x1iERdmhkSX3f0oR9q0SOXLq5MSkuosPSALJC16oKec', '¡LA OTRA MANO MÁGICA!'],
	['https://mega.nz/embed/qHZh2Jbb#Tv1xBhqj7JR2lWjC98er15xxYrK4aCVpQfsGG_9rjNo', '¡GÉNESIS, EL EQUIPO MÁS FUERTE!'],
	['https://mega.nz/embed/iDpg3YJR#1VpZK7bXwRMhjXuTCYbRfEQa1D0h2NhmAHnlJIS9IcI', '¡LA PRUEBA DEL CAPITÁN!'],
	['https://mega.nz/embed/2XwAzRLC#twXNkXFbTtMROK0cVKmxm9zYhOPx73suR9KLy_IDEF4', '¡GRAN DUELO EN LOS MARES DEL SUR!'],
	['https://mega.nz/embed/WK4HQbSD#1ySwTAPT_VEJSQTrq8YrSd0ga73sOnIVJCxrMPk-zbU', '¡EL DELANTERO DE FUEGO!'],
	['https://mega.nz/embed/7bZ2XYqQ#rsv68n-dSNeJ_lkj2RW37jDnZFB1r3cDVXvFRc0LBV4', 'EL FÚTBOL RITMO ¡QUÉ LOCURA!'],
	['https://mega.nz/embed/qLwjxQQS#jhSqki_WRWJ2WkUjalmJ-WtkWhf8p27kb9Q6a2T5FE0', '¡EL RUGIDO DEL SÚPER PUÑO INVENCIBLE!'],
	['https://mega.nz/embed/eLJykLaK#7Ta5Nz5EGXpjhp9vhVGqrjOHhIKwj_uToI_7y1mcQxc', '¡EL NUEVO ÉPSILON CONTRAATACA!'],
	['https://mega.nz/embed/rSpCBQya#aLNUwVhpOrhJPwDbNKf7-EzNkjNqA_0-FcFxUCRbs8g', '¡EL REGRESO DEL FUEGO!'],
	['https://mega.nz/embed/6KIViBKI#pMoET7gLeuYXu2FGNHKj45op8CVxzIfl7-RZ2PZXL-M', '¡EL EQUIPO DIAMOND, LA NIEBLA HELADA!'],
	['https://www.youtube.com/embed/CUnTYNVwqHA', '¡BYRON LOVE, EL SALVADOR!'],
	['https://mega.nz/embed/2TpCjC6B#Uoifs9BYys9E3gxxMwwhNrhO43X2OE12kTHhTK9VV7M', '¡EL NUEVO RETO DE MARK EVANS!'],
	['https://mega.nz/embed/TD4EWC4A#8fC8gct6KeEuRts8hb3x-YPcVuGcuALqZFctCLfjXdc', '¡DUELO! ¡MARK CONTRA AXEL!'],
	['https://mega.nz/embed/2bJCwQhb#6QjP1y4jvTLoT3Gfur2_z9ziF899EU8SP9frLvfwa8c', '¡CAOS, UN EQUIPO PRODIGIOSO!'],
	['https://mega.nz/embed/jfQGWDTb#SBpNxe9D7dg1nxZNyMY5B6JqHgccK32nf3qnZoQoSjM', '¡LA EXPLOSIÓN DE LA VENTISCA DE FUEGO!'],
	['https://mega.nz/embed/vKI1kQoY#vVQSys4izRbRibIBpJdCRK2x9b9bIJjglf0kHq-KENA', '¡POR FIN, EN LA ACADEMIA ALIUS!'],
	['https://mega.nz/embed/XCYTAIQL#1E381e8gjABbzqMEJCW0PkiaVw0g3EE5EdfdDBbwxJU', '¡LA AUTÉNTICA NATURALEZA DE LA ACADEMIA ALIUS!'],
	['https://mega.nz/embed/mXwH1JgQ#je-LDQ0NuTWPqW_esoZkzTz-8ZoaezZqcRxSIms5HQ4', '¡EL PARTIDO DEFINITIVO! GÉNESIS, PRIMERA PARTE'],
	['https://www.youtube.com/embed/GCOUNTJKJ80?si=zjLe3NlMVzczjPKP', '¡EL PARTIDO DEFINITIVO! GÉNESIS, SEGUNDA PARTE'],
	['https://mega.nz/embed/CWYlDDAL#VG5-_751oihYPUPBcrSfftj7NwLIGrCMAeka0766z-I', '¡LA AMENAZA CONTINUA!'],
	['https://mega.nz/embed/PD4XwA5Z#MAL41LkbzVrdT-VM-YEAE3V1LNJG1RWLXlS9rAo-NVU', '¡DUELO!¡RAIMON CONTRA RAIMON!'],
	['https://mega.nz/embed/DfwADZaA#mi7vUrOfn1OXqQE0t2uzs8iQGs7HRDHegmVrw8Jj4jM', '¡LA ULTRA-SUPERTÉCNICA DE LA AMISTAD'],
	['https://mega.nz/embed/KOIhyTbD#B3EEEc6Rcfvck6x9C4hNP0R7GA6ZJGWwskWX5l_CkVI', 'EL CAMINO AL MEJOR EQUIPO DEL MUNDO: LA VENTISCA'],
	['https://mega.nz/embed/3HRVELLK#6J9muMD7s7sdUeTn5z2QFYYtUi2Uz-R9uoj6KHU1DgU', 'EL CAMINO AL MEJOR EQUIPO DEL MUNDO: EL FUEGO']
].map(([url, description], index) => [
	url,
	`Episodio ${index + 1}`,
	description,
	`img/Inazuma/Portada-Tmp2-Cap${index + 1}-Inazuma.jpg`,
	'iframe'
]);

const inazumaSeason3Episodes = [
	['https://mega.nz/embed/zlpx0SpQ#G_-pIrVApb3A-oxixsCgkgy37nYM9Y40_o1jBnzvu4k', '¡La reunión de la selección japonesa!'],
	['https://mega.nz/embed/rx5gBCaK#d4DVwcVb0crvvjU2aOK1KW9sG1865Za8tJ2C_yBIjR4', '¡El nacimiento de Inazuma Japón!'],
	['https://mega.nz/embed/WpgggASS#Mg-rpTy7dIkEfBjKYqvuN_AphYiscuTtnPWUmE01w0s', 'El entrenador maldito'],
	['https://mega.nz/embed/uh4DxTyb#9Z-JXod9L_K1-S_p9kNJWV6vgonQmKVeh62ZNAFrTXM', '¡Se levanta el telón! ¡El reto del mundial!'],
	['https://mega.nz/embed/GoBw3bDZ#fHl_Z8vrVQ5f2bmNMqy_CyNdcHW_UPHVky3DzKakrgk', '¡Remontemos a los Big Waves!'],
	['https://www.youtube.com/embed/m8kEJPztBmA', '¡Los Leones del Desierto! ¡Unos impetuosos guerreros!'],
	['https://mega.nz/embed/X8ZjBSob#dtRUqw48Vs8dqg5f8hPVjK8z2TgUVoUVHSv3jc2Rg70', '¡El despertar de Austin!'],
	['https://mega.nz/embed/Hwp2jQYK#PNWyO3J1IMGt1x8tHqCGPJXsJZExaGTBZSabEwovUeM', 'Un gran duelo: ¡Mark contra Archer!'],
	['https://mega.nz/embed/T4IWWTIK#jiJu42CunJRMXxOlfotPu-2W6TQvT5k01J9V79ze3Gk', '¿Cambio de selección? ¡El mayor de los desafíos!'],
	['https://mega.nz/embed/yo5FgboQ#8dm6G-mQU6o9OPpJv-0b9hqlXe-bkEUB7713El9RSqo', '¡La selección de Kudou contra el equipo de Hitomiko!'],
	['https://mega.nz/embed/D4QDma4S#1CU6yf9diUHn0P4rgy9gX6SHLdzxYbKcNMb4Ws062EY', '¡La técnica especial de Fuyuka!'],
	['https://mega.nz/embed/agglhbZR#8qzGxv0LlcCBS5YtYxCZFIxu0AQe7SYgEjWnUwF54Vk', '¡La decisión de Goenji!'],
	['https://www.youtube.com/embed/-SFtlTipqM8', '¡El último partido!'],
	['https://mega.nz/embed/LtgSTBpK#zjVybw1qssjYE1ZYyOCWjplJVCIOkP5r8tMtymctso4', '¡Asia más fuerte! ¡Dragón de Fuego!'],
	['https://mega.nz/embed/mxZQiJyD#Ald7bEFtRbvt0rcDWVPEsTF_oZtpo_oDaoQv0dVFrMM', '¡La táctica perfecta! ¡Perfecta zona de presión!'],
	['https://mega.nz/embed/DhAHVQJC#Ks_mKvM61z_lo3VYg-tM2BO6ODWSdWkjsMGvJ1m7SNo', '¡Levántate, capitán!'],
	['https://mega.nz/embed/zoxGQAxK#hyYQSBuULra3fw8t1lQy1JZVQraG-Gr7djGxQUC4qnM', '¡A buscar! ¡Nuestro boleto para las internacionales!'],
	['https://mega.nz/embed/yhhX2DJa#qEN3Pr6fdDBWvW22WfJSs7fU4_-_dD_DFjP1k6vUF5c', '¡Aquí estamos! ¡El torneo mundial!'],
	['https://mega.nz/embed/64Zg2IRT#B0F5_DClXoSg7iCMlQM3BdGSRD9EVUiZlJAG8FcYahQ', '¡Choque! ¡Esto es a nivel mundial!'],
	['https://mega.nz/embed/b95gWAyC#IbkXkX0kUFDy0l9hT_sKbyBuRUJoPwtsYmls13413QA', '¡Los caballeros absolutos! ¡Caballeros de la reina! / ¡Está completa! ¡Mi propia técnica Hissatsu!'],
	['https://mega.nz/embed/K5Jz0SBI#eHbaI1-O0BDxHYsmxBDSkM0YFfYOH2AACnD6ruSm9Y4', '¡Vamos más allá de la Mano Invencible!'],
	['https://mega.nz/embed/3xZV2b7T#VYRxVrxOuK5IZGT0K-I99eqAq-bMWQcFvL3Rn0S__f4', '¡La maldición imperial! I Parte'],
	['https://mega.nz/embed/zth31S6Z#d5rf9D7x9zEXJ7UuXJEvF7NBW5khV1ZY5rUz4US79Ec', '¡La maldición imperial! II Parte'],
	['https://mega.nz/embed/a4YyGb7S#rS4PsksPgypeZYg_uED9qu2N1eFiEzd11jH-nomXpqk', '¡Espeluznante! ¡El otro Kido!'],
	['https://mega.nz/embed/D9YnkaxK#JHvd5KCGO9FA4jZibAczwkipOm9shJrJtXh1WYYSJKc', '¡El más fuerte cara a cara! ¡Pingüinos vs. Pingüinos!'],
	['https://mega.nz/embed/O9oFxS5A#FS-HaudpIprZvxShx86mU9I25d3hMAl49AKM6sqvung', '¡El amurallamiento fortaleza!'],
	['https://www.youtube.com/embed/-Y2HTOkLBjE', '¡Desesperación absoluta! ¡Inazuma Japón pierde?!'],
	['https://mega.nz/embed/30wHFJza#gYju-OlJYRhfn0EEikcRQynn-rHGBAQNT5NtU89A688', '¡El secreto de Fuyupe!'],
	['https://mega.nz/embed/bw5XVbzJ#_1lJHPvb448ItP6TviH6ffW9BYQ1NhctLBffIcTkdl0', '¡Ichinose, final patada de salida!'],
	['https://mega.nz/embed/P5JB3K5L#verd5JC7oXi3JaGmZ_n11RPfHOrz3m5KAcTN_m6gYOU', '¡Todos fuera de la amistad! ¡Endo vs. Ichinose!'],
	['https://mega.nz/embed/PlAD3bLC#Ej1eVjv9ld4YxvMuyBaE4yZwm3Fkkkh7WRgo7e2q-oE', 'La determinación de Phoenix'],
	['https://mega.nz/embed/vpImWDhZ#KUFrJYG7n9FuQH8F_K_ydY4LeyA8AeKDTA_5i9U9j0c', '¡Milagro! Encuentro con un Kappa'],
	['https://mega.nz/embed/65YRRRBa#IoJz2DkcZApP2cZHKbn3X04FkAwHTesnFIG8x7izhIo', '¡Increíble! ¡Maou The Hand VS Odin Sword!'],
	['https://mega.nz/embed/ywpy2LgD#_Ri293eXkfOQCn8tL4tuvGreuKABEal4zB_CsL7Pokc', '¡Recuerdos recuperados! ¡La verdad sobre Fuyuppe!'],
	['https://mega.nz/embed/f55nSIaC#YtkRDJQiY1-On1TETC18YZNYAXITUKJz4-HFcaFlm_M', '¡A un paso de la fase final! ¡La decisión de Fidio!'],
	['https://mega.nz/embed/ftIwGIzL#IS8KHQ3BSuUZ_Bre00VzeuGFbffb5u7Y8ATkjrYivd4', '¡La mejor de las supertácticas! ¡El Contraataque Cattenacchio!'],
	['https://mega.nz/embed/agYi0ZJD#q5wJPEiAtUjgDGb8vlhTjDTtT-ohoKwsXwl0gRkF2zQ', '¡Duelo explosivo! ¡Fidio contra Endo!'],
	['https://www.youtube.com/embed/No0ZYYdATtY', '¡Kageyama y su último reto!'],
	['https://mega.nz/embed/K85DDaqT#wJnuHtYCgYjW5-_nsaZOV4kY0UROOZXG8aWY2ZZyg3o', '¡El último cuaderno del abuelo!'],
	['https://mega.nz/embed/jwxknCoB#V-0lmduSgqejq2n6Bx3oSPsRHkXkdZM_hyMdh7mQ1qs', '¡La leyenda de Liocott!'],
	['https://mega.nz/embed/nshGCL6C#WGv6T3qvAAocJTLM6K4v6B9cBjGqSbu3Gs7n-onHUYE', '¡El Sky Team!'],
	['https://mega.nz/embed/75hGXCLI#9BeMen10OMFFO_9EUIMlKSp_wMKMkr2a46RsNxzlQXw', '¡El Dark Team!'],
	['https://mega.nz/embed/6g5VmQAS#7pjQfF7Y3PyBCS4nBHuQdndrnGGHXMw9KZw6KatpMnA', '¡El Ángel Oscuro, la llegada del rey de los dioses!'],
	['https://mega.nz/embed/z8xBTALA#9fm7vs5nUTBDAFeq8XZCV2kBjJqlMy7mss4Ph95EIO0', 'La oscuridad de Kingudamu'],
	['https://mega.nz/embed/X4pQWJzB#wvhnPfPh9WldUrgHdORrc-lvQlpkAlQO66WafFTKzxI', '¡La conspiración de Garshield Bayhan!'],
	['https://mega.nz/embed/3oYzEZ6Y#VYCNcXBcvrZgrihMnJ0QV0ms0yOBpL7UpPx7wBR1Opc', '¡Inazuma Japón contra Kingudamu!'],
	['https://www.youtube.com/embed/oKcol1yw9lI', '¡El contraataque de Kingudamu!'],
	['https://mega.nz/embed/SkYRyDAZ#Ypn6ZM9VAPFgQB3AEhxOLkxKVXAKbPorJ1NTARU8wZQ', '¡La maravilla de The Little Giants!'],
	['https://mega.nz/embed/Cg53hJKL#8F1y2s3PcSEI8JnR9uD0wsi1L-0jBUG9Tlx1RLfXm0w', '¡El ataque de los humanos reforzados definitivos!'],
	['https://mega.nz/embed/74JEiTJI#ge61pxuGBTuYajdkuMsTN1gVNZh_q5Zyhr7tgqBrASA', '¡El aterrador Garshield Bayhan!'],
	['https://mega.nz/embed/j440lSbK#9w-RKPZpPw0ZLJwFwJ1EyYyZgyKJkKq7v7AQXHM0AWc', '¡El más fuerte de los rivales!'],
	['https://mega.nz/embed/3hBB0I7Q#o05SG_tAQZuGBhsirBoRMabwTNSU2dP6kQS8QFOG9NE', '¡Entrenamiento amistoso especial con Fidio!'],
	['https://mega.nz/embed/uhQSnAbJ#FFBh-YJw_f3Tb-YviUDBbZCx6jpTKejaVo3bVaRn_Fw', '¡Once lemas para ganar el mundial!'],
	['https://mega.nz/embed/7soHXZiY#M_zNSrhthvbTkwCzsVRREchtpbyGQOa0c1gGRUJF2eg', '¡El duelo final de Inazuma Japón!'],
	['https://mega.nz/embed/qoh3ga7R#iOQYXkolns_INdemz_bmF6ddcbPcBwySC0Px3trKi60', '¡Duelo en la cumbre: The Little Giants! 1ª parte'],
	['https://mega.nz/embed/ylJlDI4Q#uu6tTRaGZSPoodjh3vY6ZCxWmqqlCIL1VuLLOCFON5Y', '¡Duelo en la cumbre: The Little Giants! 2ª parte'],
	['https://www.youtube.com/embed/xLSlzxCUZR8', '¡Al fin la conclusión! ¡Los mejores del mundo!'],
	['https://mega.nz/embed/Cw5nEKYT#wvFei5GcMKeaL7VkhnJwTi33dOqPIhMUUYubIHKN9P0', '¡Lágrimas en la graduación!'],
	['https://www.youtube.com/embed/IS62xv_yrw4', '¡Un saque hacia el mañana!']
].map(([url, description], index) => [
	url,
	index === 19
		? 'Episodios 20 y 21'
		: `Episodio ${index >= 20 ? index + 2 : index + 1}`,
	description,
	`img/Inazuma/Portada-Tmp3-Cap${index + 1}-Inazuma.jpg`,
	'iframe'
]);

const chainsawSeason1Episodes = [
	['https://mega.nz/embed/1e8CmDJQ#IeVExP6uFRqnq9m3a3UtESnqteRUmAu5IQN9Bhgsg1Q', 'Episodio 1', 'Un perro y una motosierra', 'img/Chainsaw/Portada-Tmp1-Cap1-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/1G8ziYQY#gHUnywM3QAQNoWH0ULzmQMfFBAOl4WeFwICuOUuzngQ', 'Episodio 2', 'Llegada a Tokio', 'img/Chainsaw/Portada-Tmp1-Cap2-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/0CN3xIbT#aE0DU62aHKjPqnwq7vy_wmwndwX9bCrYkLltuoWi8KY', 'Episodio 3', 'El paradero de Nyako', 'img/Chainsaw/Portada-Tmp1-Cap3-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/NPlgxCAA#YhgmBuKZxnVXKQrrh9zPYaNkqiQljJK3SPlwk9kv0k8', 'Episodio 4', 'Rescate', 'img/Chainsaw/Portada-Tmp1-Cap4-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/gD9EmS6K#kVmgQ0K_kNd6E5fzxpVt7uHDvR5HCkQQfV7uK7BTN2E', 'Episodio 5', 'Demonio Pistola', 'img/Chainsaw/Portada-Tmp1-Cap5-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/UPUgmTqY#LVmhBtVtJ84MHPrMKeJ3DstTwY66mLWJDwHM6BgrTAo', 'Episodio 6', 'Matar a Denji', 'img/Chainsaw/Portada-Tmp1-Cap6-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/1GcGCDCa#IG0ftT-TvNhPGErGcr12eGZHsQm_gQXe9MqO-_R9Q9Q', 'Episodio 7', 'El sabor de un beso', 'img/Chainsaw/Portada-Tmp1-Cap7-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/J3NWQCzT#sOMg77r8JVzhhiaq38DDZD-Pl50KaN-hIO5TKU0FT6Q', 'Episodio 8', 'Tiroteo', 'img/Chainsaw/Portada-Tmp1-Cap8-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/da8ilbpD#NbTHS9W_XU-TkC1v8GdeXJqcjqIr1I20N4kfLtyPOi8', 'Episodio 9', 'Desde Kioto', 'img/Chainsaw/Portada-Tmp1-Cap9-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/trkXRARQ#HcEzWwkcj_1Z7iPSvLYfHvnOa0lbYlrq6XpxTblDeRo', 'Episodio 10', 'Magullado y maltratado', 'img/Chainsaw/Portada-Tmp1-Cap10-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/AHFwUYrY#2FY5yWexgwgjiHCn1a6jVuW--X6gbkTNtbsPuXtUaLc', 'Episodio 11', 'Comienzo de la misión', 'img/Chainsaw/Portada-Tmp1-Cap11-Chainsaw.jpg', 'iframe'],
	['https://mega.nz/embed/Bv8mwTzI#0C_CpdEOtb7JOHp72gxEGhjJFYv9-l4zwPCAiUU3fIo', 'Episodio 12', 'Espada vs Motosierra', 'img/Chainsaw/Portada-Tmp1-Cap12-Chainsaw.jpg', 'iframe']
];

const chainsawMovie1Episodes = [
    ['https://mega.nz/embed/rMkyVRrT#8TDv6IbX9MlebS07mEKVvWSh3XtCE7gMfCfZgUPmKKE', 'Opción 1: MEGA', 'Chainsaw Man: El arco de Reze'],
    ['https://jkanime.net/jkplayer/um?e=Ymk0bGNqL3E5OVdwTGkwQnNyMG0wZjVmR1lMYXBTYjdLSm1lUGd1SjlhVEh3L2dmREJTMXRTVEdlTjdVK1ZhSTZnTHRKUjdxNU12QitlV2JYOU9NY3o0NGMyRGdNdzJEQjdvS0R1OXlRTDA9OjoMhjdtCw0n3lbFRWbxnwoZ&t=8f87754b4e9f4a5d2ac3f10358d62527&op=Njk4MTI=', 'Opción 1: Jkanime', 'Chainsaw Man: El arco de Reze'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Chainsaw/Portada-Movie1-Cap${index + 1}-Chainsaw.jpg`,
    'iframe'
]);

const vinlandSeason1Episodes = [
	['https://mega.nz/embed/arI3wayA#hSzqrNMvxga-6tWbUAZYjUAk0TAoF40INwU1oxjjVBk', 'Episodio 1', 'En cualquier otro lugar', 'img/Vinland/Portada-Tmp1-Cap1-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/DjRDwKST#JnA2R-T1ygCRwdb2fwkO5pjdWpSdYsP51sy0__jfdCg', 'Episodio 2', 'Espada', 'img/Vinland/Portada-Tmp1-Cap2-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/a3QFlShS#Dj_FGKuBYil637C67tEIAGeKopHL0jrtVstTgF3-iTs', 'Episodio 3', 'Trol', 'img/Vinland/Portada-Tmp1-Cap3-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/m1gS3SiL#SBuRKrXhKM1AICajEBhCjaridX2V67uS7AizFuVdZM4', 'Episodio 4', 'Un verdadero guerrero', 'img/Vinland/Portada-Tmp1-Cap4-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/66QRTS6B#Izsuk6DSvxMa52ar0sgDHnX-rvkwPzPYkE28ugPwGzA', 'Episodio 5', 'El hijo del Trol', 'img/Vinland/Portada-Tmp1-Cap5-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/juQxnSIJ#ORjRfWJRA9TI_KvaYhR5V42pFZMsZf9huufudWAbf8A', 'Episodio 6', 'Empieza el viaje', 'img/Vinland/Portada-Tmp1-Cap6-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/6f4l3aJR#bweZVxB3BIB7mMXFvpfgfOMTQ-oUCjYm_2PvH586sEE', 'Episodio 7', 'Los Normandos', 'img/Vinland/Portada-Tmp1-Cap7-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/nfxlyARK#ebBxSbX-4etT4XGhjr6h3nufCUzzsWpmjXR-aIhb6hI', 'Episodio 8', 'Más allá del límite del mar', 'img/Vinland/Portada-Tmp1-Cap8-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/Xb4zkIhL#gVAvLcSbuwhSt0T2oZgBqF7yzQU0kLWc4apDYkN1Nhs', 'Episodio 9', 'La batalla del Puente de Londres', 'img/Vinland/Portada-Tmp1-Cap9-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/OKoXwQBb#68yUiyMqCDeTt3x5zeNdy3KTSYLQN6NenufTGnaXqlg', 'Episodio 10', 'Ragnarök', 'img/Vinland/Portada-Tmp1-Cap10-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/6KZwzIiA#BWN6Tx8j2F0IPxSwfoYf0qno3HJp0TAP2zC6e8-2Tg4', 'Episodio 11', 'Una apuesta', 'img/Vinland/Portada-Tmp1-Cap11-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/HagRBQzY#fpDIRMyYYJMyP3iydKYvGBLdN66368c_FBX3PiYqaOY', 'Episodio 12', 'La tierra en la lejana orilla', 'img/Vinland/Portada-Tmp1-Cap12-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/HLhTwADR#J-O2E5V3LkOlS311in3WuXoK0whXngC89DrCmL2qkAA', 'Episodio 13', 'Hijo de un héroe', 'img/Vinland/Portada-Tmp1-Cap13-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/jaQGDYTS#hXvVyNTZufj0pZhFPNwloFz-x1jBTYkmpIu8gVyHkw8', 'Episodio 14', 'La luz del amanecer', 'img/Vinland/Portada-Tmp1-Cap14-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/6PZizKQZ#8JQG3u8GZhFQnmX_LY5eU-wg7kzDDmZnBhoOoox8bso', 'Episodio 15', 'Después de Yule', 'img/Vinland/Portada-Tmp1-Cap15-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/PeA0DACb#Xq_0qpsaTUCp21O68cGFDY4bpk8QKO5TCpnU22nmSeQ', 'Episodio 16', 'Historia de bestias', 'img/Vinland/Portada-Tmp1-Cap16-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/bLIznaKB#TAGalvFGoB-VApqRjtKZ10C878uzKmQK9kQmeTuVg3U', 'Episodio 17', 'Sirviente', 'img/Vinland/Portada-Tmp1-Cap17-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/2shmQKJA#LXvgUDXA_6t-g4F0M96cG-RtfofYf7kR-qeYxnAGhag', 'Episodio 18', 'Fuera de la cuna', 'img/Vinland/Portada-Tmp1-Cap18-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/WoxEjKAC#7MmqzapkDbExijgE7osmOIWHMV7RqMRLOYwdPcROpT4', 'Episodio 19', 'Un frente unido', 'img/Vinland/Portada-Tmp1-Cap19-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/a5wG3YiS#4QGHbZH1YZfgMtBqh0WwxXqiGoURo3cFWNK2VRU_7cY', 'Episodio 20', 'Corona', 'img/Vinland/Portada-Tmp1-Cap20-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/Xk1TASpY#pI8PSjQJ-BryIJbAeG_x2xjG0jdAvRRbTAnp9PVZvL4', 'Episodio 21', 'Reencuentro', 'img/Vinland/Portada-Tmp1-Cap21-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/atVh0KgS#ByJruQ4hQIp5CUo7vKvgW4gQMn-ymd4zLiaMjMaOGEk', 'Episodio 22', 'Lobo solitario', 'img/Vinland/Portada-Tmp1-Cap22-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/3lhwiIiR#AIdyGQXQ8W04uzGclei1oZ-NB45ZgM6w8Rm-JGFObf0', 'Episodio 23', 'Error de cálculo', 'img/Vinland/Portada-Tmp1-Cap23-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/Ll5iwCjA#Bbojp_l29Gg-zSke_9CS82N71D1C7T1BNecx3R8J9-A', 'Episodio 24', 'Fin Del Prólogo', 'img/Vinland/Portada-Tmp1-Cap24-Vinland.jpg', 'iframe']
];

const vinlandSeason2Episodes = [
	['https://mega.nz/embed/ZGkQxDaQ#TrR6MAGwwP2PZfJf58niB_a7vJnkyAd7RT1Arc5pt-U', 'Episodio 1', 'Esclavo', 'img/Vinland/Portada-Tmp2-Cap1-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/IDMx2Y6S#WihOyZSqtZD00wN2engPxBsUF4Cep-cYAf7FyIG4Rlo', 'Episodio 2', 'La granja de Ketil', 'img/Vinland/Portada-Tmp2-Cap2-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/Aas2SZhI#SL18bar2IBl9yxcTlgGgP_dWsd1z7Ey1fYLTqAgtWyY', 'Episodio 3', 'Serpiente', 'img/Vinland/Portada-Tmp2-Cap3-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/sGsXzTQR#0WaumlERXok61VPoVeCHLMqIn2EI02kse1ZgS43Hfcg', 'Episodio 4', 'Despertar', 'img/Vinland/Portada-Tmp2-Cap4-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/wXEiyTLI#gc57MYPDGw16Q4FplQlrXNHIhFDxyVzzim6TZROeB-4', 'Episodio 5', 'Camino de sangre', 'img/Vinland/Portada-Tmp2-Cap5-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/8bt0ibZa#Lu97xJ3FmQXnSvJKlJil7a7Abe_I_MDXQwLewXn-bgQ', 'Episodio 6', 'Necesitamos un caballo', 'img/Vinland/Portada-Tmp2-Cap6-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/4CtAULqB#Ml-3dNxLLcouQmPZC4HOu9nsc-L8-nTl1sHy_7LPpo4', 'Episodio 7', 'Ketil Puño de Hierro', 'img/Vinland/Portada-Tmp2-Cap7-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/5D00jYTT#cY4b2MCFUYBNHoNZRIxF64fbw6phIo8Q-0P4NIxpcX4', 'Episodio 8', 'Un hombre vacío', 'img/Vinland/Portada-Tmp2-Cap8-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/CRlUXK7L#jF7IWumbYsk0R7I5tM9Yldggqc530bRWWP_A3Ts8D_g', 'Episodio 9', 'Juramento', 'img/Vinland/Portada-Tmp2-Cap9-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/gTMxxJ5A#7rhpYZXZT7-bu8N4ITSJFI0wQtvmspun45yNOCmRryw', 'Episodio 10', 'La cabeza maldita', 'img/Vinland/Portada-Tmp2-Cap10-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/FTEzVR5D#M14XDy3vKjsz-1-khUbACksF7JN6QFGW31ZFbE3VhMw', 'Episodio 11', 'Reyes y espadas', 'img/Vinland/Portada-Tmp2-Cap11-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/JfsnhBwL#97PYnQ7pbkxwexpgk-JCJdMlyFYzqJWG9_pFKyCHOic', 'Episodio 12', 'Por el amor perdido', 'img/Vinland/Portada-Tmp2-Cap12-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/YxkQmIwS#o3_KFr_PXsSODa7KChlBSO9IQkoF3_dBQj3pKeticWM', 'Episodio 13', 'Nubarrones', 'img/Vinland/Portada-Tmp2-Cap13-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/ckBgxK5J#j3CNxg_FjqQaLFLr2XPfWzikey6tvvhvwVfLzZAJ0zE', 'Episodio 14', 'Libertad', 'img/Vinland/Portada-Tmp2-Cap14-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/59lCkLbZ#TkqPngi0nBnlxVelysjsN1ezsQsmq09jKYsMFmcUQcY', 'Episodio 15', 'Tormenta', 'img/Vinland/Portada-Tmp2-Cap15-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/lg5nlbzQ#mE-5BnZ1pocCdyZw8f2_ZGEnY8HgqhePA2u4kZFuH5o', 'Episodio 16', 'Un gran propósito', 'img/Vinland/Portada-Tmp2-Cap16-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/tKNxWYwB#DhKc-miF1l-8Njj7UMbuFVOsyI3lKXUvRDb0RX9TYUM', 'Episodio 17', 'El camino a casa', 'img/Vinland/Portada-Tmp2-Cap17-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/8gxQ3bKI#leupnRC8lPX7tg26SHzorFLz76Ttrtyo3hEjLUPN71Q', 'Episodio 18', 'El primer método', 'img/Vinland/Portada-Tmp2-Cap18-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/p04HjbaL#z7uXypmI5Svq4mwTX9lryyEMCnU-SLO37YtNhPPMJ4I', 'Episodio 19', 'La batalla de la granja de Ketil', 'img/Vinland/Portada-Tmp2-Cap19-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/Nr83hKCI#RefGrYWAG03FgrHFYSRtqeNwJBfQG9fo8hSMzgqIBjQ', 'Episodio 20', 'Dolor', 'img/Vinland/Portada-Tmp2-Cap20-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/RzNTTaDI#4v0D6-wUW8z2JNUc8nSRD1vQCmQOHTgRr3zEKotDIuU', 'Episodio 21', 'Coraje', 'img/Vinland/Portada-Tmp2-Cap21-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/JGkmmbba#79dFCnBi5zppf8Bzk3l3DXhz7xjrMRO75KUWlvC5AP4', 'Episodio 22', 'El rey de la rebelión', 'img/Vinland/Portada-Tmp2-Cap22-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/g6FAkTCb#Mv5a7-SDb4faptqjU-18l3IdOG5rao4avOEt7La3pHw', 'Episodio 23', 'Dos caminos', 'img/Vinland/Portada-Tmp2-Cap23-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/xntUHZpA#5I2DDTWqVOwLRrFpaYoW3hnfIj4Zj3bXhvuV2OuHvPI', 'Episodio 24', 'Hogar', 'img/Vinland/Portada-Tmp2-Cap24-Vinland.jpg', 'iframe']
];

let hunterRemainingUrls = [];

const hunterEpisodeSet = (arc, titles, urls, thumbnailPrefix) => {
	const sourceUrls = urls?.length
		? (hunterRemainingUrls = urls.slice(titles.length), urls)
		: hunterRemainingUrls.splice(0, titles.length);
	const getThumbnailPath = (index) => {
		if (thumbnailPrefix === 'Tmp1' && index === 14) {
			return 'img/HxH/Portada-Tmp15-Cap1-HxH.jpg';
		}

		if (thumbnailPrefix === 'Tmp1' && index === 15) {
			return 'img/HxH/Portada-Tmp16-Cap1-HxH.jpg';
		}

		return `img/HxH/Portada-${thumbnailPrefix}-Cap${index + 1}-HxH.jpg`;
	};

	return titles.map((title, index) => [
		sourceUrls[index] || '',
		`Episodio ${index + 1}`,
		title,
		getThumbnailPath(index),
		'iframe'
	]);
};

const hunterExamEpisodes = hunterEpisodeSet('El Examen del Cazador', [
	'Viaje x y x Amigos', 'Prueba x de x Pruebas', 'Rivales x por x Supervivencia', 'Esperanza x y x Ambición', 'Hisoka x es x Sigiloso', 'Una x Tarea x Inesperada', 'Enfrentamiento x por x la x Aeronave', '¿Decisión x por x mayoría?', 'Cuidado x con los x Prisioneros', 'Trampa x para la x Trampa', 'Problema x Con Las x Apuestas', 'Última Prueba x Por x Resolver', 'Carta x de x Gon', 'Golpear x Al x Objetivo', 'Lucha x De x Engaños', 'Derrota x y x Desgracia', 'Trampa x En El x Agujero', 'Una x Importante x Entrevista', 'No puedo ganar x Y x No puedo perder', 'Inesperado Giro x De x Eventos', 'Problema x De x Hermanos', 'Un x Perro Guardián x Peligroso', 'El Deber x De x Un Guardia', 'La x Familia x Zoldyck', 'Un x Duelo x De x Canjes', 'Antes x Y x Después'
], [
	'https://jkanime.net/jkplayer/um?e=QS9hTGIvVk1VRDd1eWJJVjNPaHI2eHdqaUJOYUVzOFo3c2I0SVpISUpzUjdWakFyV1B2ZVlibW9qS21ucERra21RS0VwYnliaDF4ZEdyMmpHVUZFekE9PTo6MsPZ4vFtFUUqkjS3L0_LpA--&t=abe6c9167b9dbf35afc623218eaefe13&op=MTI2MzU=',
	'https://jkanime.net/jkplayer/um?e=L2FUT3VEcHVkRzdwa3h5cGZNOVBYL2pyNTVUZkFGUCtEZkdxN0hDOGczVTRiK1ZEZkdlSTRSN3pCZVBEL1NTZW42OFdjUlV1cUpzVTlRbFNnbjR2Y3c9PTo6V9c7HGVcAwvrco5sWa.wpA--&t=e735133a3cde8ee533d95d2150e869e5&op=MTI2NTg=',
	'https://jkanime.net/jkplayer/um?e=ZWhYL1lUT1JqY0Z5TlpaWGtvQ3VzUnpzS3dVZGZicFpQdHd3Ty9DVElmZEc1dFdFbW4wZGV6RUpFaTRDNzRnbjlhSTZERkgxZWtFcmpxNTBScTBENEE9PTo6VxhkSDfv8shw6eFStGZOmg--&t=597073e68fcefaa6bdf39ca6b399c28c&op=MTI3Mzk=',
	'https://jkanime.net/jkplayer/um?e=RHJuYzJrWUlibHdldm1BOTRTcFYrWGhYVkJsRm9EL3lpTURmU2h0Q3VobmZ1M3VWdFBQZi95ajNpZFRnOWd2REVwSFdIRlRZRTljd1c4eTMvWkRhRnc9PTo6pbjW75OfE0kd8rK3XNmgGw--&t=d4e879aca51d48e0feba3112f0d1b8cd&op=MTMwMTI=',
	'https://jkanime.net/jkplayer/um?e=RE1kSXcyWlR6VzdyUDFaeDZYNnhnQ2VjY3JYSzdON2tnd01aelV2L1RVUnlJRVVLOVJ5eGk0ajNIOWtyS1hOenJDZFo1dHNDMXdFd2NXbEgzZzJWTHc9PTo68V6ACNWHsNGGFuaXCmm8Ow--&t=76c7c563b32ad9d8d09c72a2d17c90e1&op=MTMwMjk=',
	'https://jkanime.net/jkplayer/um?e=amxuVTNxZk9OMVV2bkFSRVI0a0ZxQ2ZKamdFZWU5Kzk1eFYybVQ2SWllUlgrSGdCeVZOQjFrQU1vQ0x5a2lEOWM1eHA3Q3RnQTZQcjBlalJYc3dldHc9PTo6rfaz5tVuyLsIGVgFD9SBMA--&t=88250d62de314beb6755c137ec4e4933&op=MTMwNTk=',
	'https://jkanime.net/jkplayer/um?e=ZjJaelY4ejhTYUFEUmdiZW5rcXUxOWRybktlY2FLc2l2bTBydnltL0JuWjNDRDBzTnVWc2ZYbGdFN3ZpUDFNSlVYQWp1a2w4OVhlaTBFQytjWUsrVHc9PTo6sjiKqKElxDWIQppnUE0mAQ--&t=646680a2406b2430bde8761a48e4a2ed&op=MTMxMDM=',
	'https://jkanime.net/jkplayer/um?e=WDk5TnV0dXRqcWs2VWVncGVmb3dLSUJzcnJmUVdGT1ZYbGVVM2lsa2d4SWVVSG1qdjdoc1dma0hEWmNSVEw4UC9sUUZjWk5qYnFYOEtTa0pBeURUSFE9PTo6lSSMsKyjMpjFpUzq5hh8Ww--&t=b0f7ec2784174fdce2f2de20d3941d96&op=MTMzMDU=',
	'https://jkanime.net/jkplayer/um?e=M1lkM2RVZUR1dG9KYmlnNkdkR0JZczhtODIzWFdxRDFkcXlzd2NNTjNBcTVKdDlaY1hUaW9TOWJXeDNNMHBXbHhqVlQzNnVmU0FPU05tS3V1UjJFeXc9PTo678ZDQ0_vDIkMEyrzsyDBKw--&t=e1f2362693f1b502f5ebd68cbd0ad87a&op=MTMzMTU=',
	'https://jkanime.net/jkplayer/um?e=N1NITDdUSVMrbnM3OU5uQWczOEdSY2xHQitUUHIxbzBOaEZUeGtGNTNDTnFjdk5NQ2NFenRIdlI3ODU1akZMVzgxdE40RWZ5eU01ZmpXblROWVJHemc9PTo6RcrACPNcGOyxox8b.ZBH4A--&t=8f94eafb14366ce488946e40d8b4694e&op=MTMzOTk=',
	'https://jkanime.net/jkplayer/um?e=WVhDSllBN0FycGJGT0orRStxVDYxa3lqS1AyRnFJMisrZENWdVhRdTJUMUxWRnJZUVBnRUFINnVJMmk2UXhHbVNXY3NDMDNjclBjamlraHBDQmVkQWc9PTo654AoSRIY2K4aBa_08MskVg--&t=1288625a4bdcf1109ff5adca3bd33753&op=MTM2OTI=',
	'https://jkanime.net/jkplayer/um?e=RDVoRFBleXlId2thZkw1WXN6VlV3UUQvT1hkbVZScXBaOU9pYTUvYVZWeFlXNkVFZnFGQStOUjg1OGczR3BSUTdza3lQK3g3WEFZUnpDVzQrUnBIbkE9PTo6K8q6WIhmECHeVkfUPQod4A--&t=70fa3e3aed5e5da45f0114c00fadfb41f&op=MTM4NjU=',
	'https://jkanime.net/jkplayer/um?e=djQvcDZpVmYrOGRyTVlHWWczWm1OS3J1dnZ4WkR0NU1FZGNnTEtIRGhieURWbnZDV3hGZUorbGpycVlIV2JlMTZIakNHblczOE5hTjFIK0Z3ZkJFM2c9PTo6Fg0BYVqpqSg42K7d_IOQ3w--&t=734805fc5d2ef6208c3e0e405b0b62ce&op=MTQwOTI=',
	'https://jkanime.net/jkplayer/um?e=bjd4ZXZOMFIvcDlXUnNLcWtpNTFzY0pPKzR4M2FaMWxpSm9obTFRQTllSGV0b3g0b1Z0UFExTG5GbkJPc01wdnJBRmpYQVByMTg4Q1V5VVQwcXcwanc9PTo6Vm2iemIKbUYwYyc4YRg0oQ--&t=eb6bdd281dfc2688a42174679b8e5bbd&op=MTQzNDg=',
	'https://jkanime.net/jkplayer/um?e=cWlHTE5YRTYwNWhsUjVTQkh3amJXTWgyL25FMVp0aVhBY0dTU2hGN3YrOUZHNHJOQ2NXVW8xd2FycXI1V25FSzdKNG5pVXRBZ1RpMzBUR2MvRzNIZnc9PTo6NC0NltO37wS_y5LnkQroYA--&t=395af6444dfab37005c07b8264090296&op=MTQ1Mzg=',
	'https://jkanime.net/jkplayer/um?e=MGFPKzRic2Fzb1k5clRBWWMzZUN6Sm5UM3VUT3NIakI3QXhweGRzTEdRcUdCYlNoWXZoYTBMak9QaDhqVDUyQTU1cVRqWlBzWG1HSHA2QkpHMmJFd0E9PTo6F_4jmcNATat6fcSkbzebEw--&t=7ce7fe98a64dd1ef509fedb677fcea5a&op=MTQ1NzY=',
	'https://jkanime.net/jkplayer/um?e=Q1owc1NZeHdzeHU5bEQyNGNLUldZU3FyQzNFVVN6cjJyODh5bllSZ2RLamdRbGQrb1VQUEttajBYZWxsRjZyOXEvM3NIZVBtbDFCSHBWbkFSZklORHc9PTo6pDZEE2q2ywGxzZ5OKFMFQQ--&t=9fa8928c270076c0ef75e4182d8266b4&op=MTQ2MTI=',
	'https://jkanime.net/jkplayer/um?e=RWQzR1BtNHdobFRKWHBUeEoybEIyUGxtMitvTWloZElFaGh5QmhVTGZJMFpUanRjbjIzYWlqOWU0cjJsRjVwazV2dW5GZ25yTURvcUFDRjVzc2swcWc9PTo6Uef6J5OUcRZi38DPeY01bA--&t=e0ef383bd743acb4ef8081b4657d1813&op=MTQ2NTY=',
	'https://jkanime.net/jkplayer/um?e=RzBPRDB1YWlqL045SVVSc1hwUGwzVXVoWDkvV2JCL0pzK1pac2NNMXdPZ1FwOVJ5YmRhY3pFWWxYQlJnT2hzdkR3cGpRdjE5NTVqcnoycFcyQm5Icnc9PTo6d7pBqQFNtpPV0tsqyTt8uA--&t=ce2f2c502e5d4a00b8909503dad1d127&op=MTQ4MDU=',
	'https://jkanime.net/jkplayer/um?e=VVB0K0Fra2NzZloza1lnemhOOXROQnVwUUtJVjhFSUNBdXYzUzhwSUoycnJjUHBrdForckszV0krSzYzcm9hVmNuS2VNaURnRWtJNUUrM0NDeVp1NFE9PTo6x07FLNxnJ1vWgOYPhBohig--&t=206f6a7ada917912e9389da75d80be3b&op=MTUwNTE=',
	'https://jkanime.net/jkplayer/um?e=RUttUDk5MjZLWDVGNmFHZGt4dU9NOENOdEFPc2t4SEZEQnVjeDU3VkRTWmxheWlqWC9lalBISnFYbWdLREd1d2VsN0I4VlZEdzZvLzBzU09kMFU2alE9PTo6O0gcuC3pY6TU1l3AwT0CMw--&t=45d0bb417c9fab94dae50e5974f30ec7&op=MTUxMTQ=',
	'https://jkanime.net/jkplayer/um?e=cDQ2Vnoxak82THJGVG9JdFNkTTNEQnV0U3czaFUwLzFVZGJrSE9oZzRmUWpxQVZrYThIT21BYjVaNytlTE11UC9wd25wSGxiRVcvenVFR01xV1Fqd2c9PTo65jNQFMJeJaUo34ulWli1gA--&t=5070c864690416ae860eede18e5c7e4f&op=MTUxODA=',
	'https://jkanime.net/jkplayer/um?e=YlRTQkVnbDZaUnFKQU1jNVpHeXlBZzZUcG9kM3JCRTlYL21TNFViL3BXWlAvY3RiekgvSnkrdWJrL3BnOW90VmhCTkVOY3VKNWd6TG1GSURNS21PYnc9PTo6X3Rwrj.D4mi2HgNj.mnoEA--&t=57b33ae6c0bf00c454900bea31d88893&op=MTUyMjE=',
	'https://jkanime.net/jkplayer/um?e=b1FrWFpkR1hNZlNtbVFTeHRPd2IrU2JiZjNqVzQ2UWpqRFVzVkMwUm43K0NsdzNGRjB6NWNzcFdIdUtiRFBtR2x1QWc3eUZFS01RQk55L01acGNHK0E9PTo6jRWywW2GAwCRxi1RKlj_gA--&t=4c1062cc42d7e3c64306cbee964db44f&op=MTUyNDQ=',
	'https://jkanime.net/jkplayer/um?e=VzFqRlJSSUZXLzFvK21lZEhIcndoWWRDSS9DNlpaUCtjR29wSHJxZFkvMmxIVllHdmVGVHdEalNOWEc0b3hKdDEvMWwvdFJhY044V0R6d0RHbjV4eEE9PTo6BwIAecXz4iB6LM3JfM.uDA--&t=43303a6b28a9ac364c40baec04aa5559&op=MTUzMTM=',
	'https://jkanime.net/jkplayer/um?e=bEdzMVVWY2k0TWFkV0hKYjBwcnpMU3Rzak0yblFPTVdiTmZxLzd3S0txQ2FGRiticWtJNE9KeW92SnNhU0gwdUd0V0hZUUVBbFFoQmo1SC84dWxGb0E9PTo6BGusU27RFR.gp2QzVVZxEg--&t=9a7e4d07ef8a46f82d97b848585ac16f&op=MTU0NTk=',
	'https://jkanime.net/jkplayer/um?e=UmZFVkJOdEYxYkltM0VwNjc3YUFPR3ZDWHBKUndaNlZGSzMvMWpnYVpVMlFwSHhCSkVKdFhFWWgzNEszT21VZGxJenQ3VXYycTNsajB1emwyMm1haEE9PTo6_YoSPHxxvzR1ZCQIMmE4Pg--&t=7a4d21f40402d068ec5369232b395901&op=MTU0ODY=',
	'https://jkanime.net/jkplayer/um?e=dk1tNUYvTGN1ZGk3VEw5bDZ4c2NqM3VoN082dVQvTDRPWmlNcGNPcWhua1hQSWRGdlkrN3dxYVJ0S0lWVm9TRFozQmszeElOSlhQYlNwV1M1OThLSmc9PTo6uEuAG0leWKSt5XZX9nebxg--&t=271df68653f0b3c70d446bdcbc6a2715&op=MTU1MTg=',
	'https://jkanime.net/jkplayer/um?e=UDdOdDhvOXRBMUg5YjNOOVhEWExTSmRhaXY1Z1FDcUdzTVhWM1lteE1PUG5qVnRiZnFHME02RUxLMFI4eDZFT0YyOG52bnQ1YmNzcms0amg3K21nZ0E9PTo6dFb8it.07r2WMu4Qad72EA--&t=a1255c9dbdcd635143d172dee1b8c0fe&op=MTU1NDQ=',
	'https://jkanime.net/jkplayer/um?e=UVVkTXlLWVUvb2FiM3VGYU9oOHZBNlFZTDVZc3NWclkrOS8rMHoxVVZPSitsRlpLUEtISDFUdTB5aHRVSzBEajE4ZXRaSUV3bEgwQzhMQ0ZkamlsUlE9PTo6EPU8UlM5Ga8Lr9jK.VdSIw--&t=530ebdeb0491c0459e00298fcdb3a2bd&op=MTU1Nzc=',
	'https://jkanime.net/jkplayer/um?e=VWRnbVZwdm1wK2pQWjNpdFBGR2tJOE9NNmd5TXpWaWJrVVAvellvM2xFa1hmTmJKWVJWcGJNZkl0MUxyQW8yM1RraUdnanNZSVdSWFZqNDF6MUJ2WXc9PTo6tEu_iTU_FTdyGwmA7R9iAg--&t=8c76acf2b5b98f72bec5c3e3b258f122&op=MTU1OTY=',
	'https://jkanime.net/jkplayer/um?e=THVPU3BhNmdnRmpVUFRFK2x0ZjZ4QUQ5OTRneThGdWtMZDE4bW9ncE1MTU5QbWJXd3dVLzNGeVVrL1N6LzNoSE9ZdXEyVHQ1NW02UTlVQnp6V3VkS2c9PTo6UOndq0X8pwham2lmu0wZxQ--&t=8f57f8197501fe0c3d8913e717632812&op=MTU2MTQ=',
	'https://jkanime.net/jkplayer/um?e=aUlLc2NWRUdkdmFGVUV2QktFdDdnNm1rS1NZSkxrQUtKQnVKSFpQZ2J3Q09JIU1zQ1c1bmR1NWt2L1dYR1doMWtKK2FXT3NGdjFMdHl3eU1pREhsNWc9PTo6T6g9sZOt8TRdl0DhHvG7gA--&t=a41a6a3856ee3c8c2816d4828b64f560&op=MTU2NDg=',
	'https://jkanime.net/jkplayer/um?e=WE4rOXFUdDlFRU1VNGtqdmIzL1I5TWpmMkRSMGlwNEhBK3lNSkpyRGlzSmxJL3lqYTl6M2RXNkFTZVJhN3BCN3RDMmpnMUVMRTFYVm8zcDNjcE5pMHc9PTo6tMPQzAZPPaUXj5DaYSDjbg--&t=80677a46c7411d17a8a88878c0e5db33&op=MTU2ODU=',
	'https://jkanime.net/jkplayer/um?e=Qm9YOERpZU1odE9rdnZvMFRuL2J3bm9wMnpuaDgva1hQVzNaZy9LQk9lRnUvM3VEclQzODhTbVZCYmhqSHhJSUJoamVyUVRmVHFJU2N2YzlHUlZBeFE9PTo6vHIWOuIGdh4vI2pIeXOnzg--&t=f9915a71fed113978ef38aca492f4753&op=MTU4ODE=',
	'https://jkanime.net/jkplayer/um?e=Y1BTdkVSMGF6TlNhdmlTQ0Q4UTB5REZLQkZCdzVpUS9lYit2NDdOY0RqYWhQRHY4TENVVEovWFl6V3dyOVB0ekpDendxeTFTRjFoekxMUFZuc3RrN0E9PTo6tQ_H1CIn0ug2iHJhU_KQvA--&t=064ba0b2df0a041eb25bbc91e699926e&op=MTU5OTk=',
	'https://jkanime.net/jkplayer/um?e=VkZ0ckNSOTBaN21PeGJZa3ZZc2c4WjYwaXd6dDZyMVQyNlpXRDFYbGJSZk1SZTB2cHZTSzA4WDFWNFZHR1Rrek1GZWsweFVzUlZTYitMVkZFWWt0RVE9PTo6GaQpVRRRvRGzFAGv6VMkXQ--&t=17804c17dcc0e6cf7deeffcc6a8c2c48&op=MTYxMzc=',
	'https://jkanime.net/jkplayer/um?e=MVJ1a2FpUmV1ZVlrMzg3WVlpV2M3Mlk3TkZabXhtY29PYno5d1AxY3NQeW5ZeGVsQXNuQVVadGNFcjMzNDR5ZzJkTzZlVHpGTkllVG9LZEQrSGNVbFE9PTo6zEjW7DU_qCzFsoyMCMTjCg--&t=314ae9d82ce2688ee2a7e911e1760c4b&op=MTYyNjA=',
	'https://jkanime.net/jkplayer/um?e=Q0kvUWFMbUQvVGp2Q05QV3d3cHRUU2VNUElEVVlxWTM3dzZreHFUTGZycndpSkhjSCtyVmhXVDdJZG5OcVJXWWo0UnIwa2UxbEdBVFNsejBaMzNSM1E9PTo68e6LnTmkZEhP0tAS8OseMQ--&t=a99868f5bfb00a881295083099e55a2d&op=MTY0MTM=',
	'https://jkanime.net/jkplayer/um?e=MTI5ZW5ieENqOUtkZE9MK1RJeG9HNHRNdktjdkpNd1JISUQzemZOQUU3Y0JVZnB1V2ZWbmxHU1dveFlablEzd3hhdTl3SGxvRkpkL1ZzUnZ3bU5iaEE9PTo6vS32b7HngwFJ6lp6yhzVUw--&t=420488825d86613b1c9aa97adc24301b&op=MTY0MTM=',
	'https://jkanime.net/jkplayer/um?e=UHpXaVREdHM4emhWWTRIcFNTVE83bWFkVVBzVHJTRU4yZUlBQTZvMTJnQnp4cVpvaUpmbEtzdm8wd2U1b3FLYUZZaWd0YnY5NWNEOXlEbDZyU0RrU0E9PTo6uS7AVX0mHj78KGFKJ3XMmA--&t=470340e5b081f2e3653ec93a36ba5784&op=MTY1MjM=',
	'https://jkanime.net/jkplayer/um?e=UkExU1BLcUNDTW8wUEdibEt0ZGhtaXRvdzNEbVdaSjh6ZS9qbXBCKyt4MFJyNHVIbDhzc1ZBUGxwcm9GV1RoOERmYjhIa0MvbG15S2xSZXR1TG9KNlE9PTo6h.9viYtQOtxaSP_KHUe7pQ--&t=374b03a72295954c3fe1eccb91214071&op=MTY1NDg=',
	'https://jkanime.net/jkplayer/um?e=aTBZQ0llRTNHVzlvK1dPS2FMaHI5aVlqZ2ZUVm44NkJHZEFrdEo3dmZxak5SdGJObXg1emdiNFNNMXh5MWxNeWF5eE5nUHdZYUpYdkVZcnRlZTIzNUE9PTo6VUlWJ2YdOb6QmAzSqKo0fQ--&t=825a241b47ed8e9e7a24b4c84f99fdd2&op=MTY1Nzc=',
	'https://jkanime.net/jkplayer/um?e=bWQvVjhGZEZhb3YxRG9Yei9Ma1c3ZGsybHhKZmFRMUlLLzltSWpQZGo2aG9MaTEvOXRnTTYvQUxDYVpvcEhJTFRnRjcxMkxHNFFPZ2dKRlRDbnFxR2c9PTo6.znKel20Zmf.ziHJR0desw--&t=4270dbf131a6b90e675b8861dd699ab5&op=MTY5NDc=',
	'https://jkanime.net/jkplayer/um?e=YWVQSDlMV3V4YjVLOGVpWk5WaTUrcWl0QTJQSVVKZUVsRlB5SGdRZDZwMmV5WW02Vy94bmFlTnprQlNjSkpteTA4Ykwrd0RKVTRoRlNLTmRzNElkSWc9PTo6NfYpPZ.HHZSk2YsPLdE1KA--&t=73d9af291fe22cb9f226bbd9a6df781b&op=MTcwODI=',
	'https://jkanime.net/jkplayer/um?e=Vjh1Y2RTWGtUNkZHSXR1ZVlEWGVGYmtFMGdMWTNIblBFM3ZuV01sOU00Qk5HT0VpWG5Lc0lEL0hzNC9icVkzU091ZFhkcWo2UmhpY0dzWFg0OW9xekE9PTo68K4_hdXnriEBtSbP3k2ERw--&t=e6baae661f54db3aa1d9f76b2c893882&op=MTcyMzA=',
	'https://jkanime.net/jkplayer/um?e=dDZTaWd4WlNORTBsZWwzK285djlIbkpWV0NWQi9YQWNNNjJUZGd3cXU2VlBuTXB5UllPWXBxUHFuMkdqUUlvdmo2Z2ZIeitUVmVhNWhKem42QnY5eXc9PTo6XbkXcgbePVbjEs99_gLaAQ--&t=1c95ee9c76a4fb9258cb07573752bef7&op=MTcyNzA=',
	'https://jkanime.net/jkplayer/um?e=WjBHeWs3Zk0vYmcyMENhQzBQakRWMnNlblE4UkJJNGpiVTFuZm9PSlRUSTZxRjRvN2p3UXV1SGJWK3JEMmNTTzRNakhkWGdLa1JQNnFaYVNXZ1ZBRlE9PTo65keuShH29HIQHy211B5YrA--&t=371c48cea8e29e733dde6f48e63559cc&op=MTc2MDM=',
	'https://jkanime.net/jkplayer/um?e=blpYeXJQbTFZUGNiN1RRT0VIdmhVUGplbkF0NkpXdGpGTFlKUjA3ellwakVkajRCY20vcGhwekk4THRXY0dNN1dWYkZaanlzamdKR2V6ai9PQ1cwZWc9PTo6uImGjl2qjjpVaUiilOjaGw--&t=66b8d6392a59b5ce703c28340d8b3565&op=MTc2NDQ=',
	'https://jkanime.net/jkplayer/um?e=eXU1KzVjemtNKzR0ZThBV0E3c08wd0lhMDJtc0xhemlIcDAzUmVFUHR0QmhkZmUreGdzRGNvSnM0YjdGa0dZczBGUm93WFRyQmFrS3RXQlBZVC9Ed0E9PTo6MkUHewxJxto3wZyh997Wtg--&t=dca7591c1e1d560ebf2d0e994c8a3392&op=MTc4MDk=',
	'https://jkanime.net/jkplayer/um?e=WVR0RkE4cGw2Y0tqZzVhUnVFQ2Q5VkpDR01jaWQ1ZUJyQUwwbC9zQ1V2ZkVCQW00NXFwLzArT2UrY2RQcU1pdE4yTVdGb1NaM1dJcE9tQmlrcDlOZlE9PTo64HJbYOARTov0z81ubs2ueA--&t=2389ceb16e2cc3941618a5f9055840d0&op=MTc5OTI=',
	'https://jkanime.net/jkplayer/um?e=b3ZWUk5BdnZUMnpEWDRJVjVFamhnUmoxNW80aklsUExPcnR4RWNLbDdEaDErbEdraExkaThHcmJCcU1HRnBWOVgxbFlPTXNVVDBSbWNGcEMwVHpDeUE9PTo6q9H1Lh6WxtG684rpROgriw--&t=6110f81cb5fe9566dec78d1dbf08a8dc&op=MTgxMjI=',
	'https://jkanime.net/jkplayer/um?e=bVFLMGtrVXdpNGFKSDFZQmNRMGM0MU1tMEYxb3lvQklqMkdxWUhFVSttam5zMWNoSzlLVjE5MGNDbVQyK25PTTdyMEpUdkhwY2EvblpUSnYxaDM5Wmc9PTo6_FVrI0j3TRuEWyj5tEqFtA--&t=70e5f57f75c29b0811aa98799bb0a61f&op=MTgyNTY=',
	'https://jkanime.net/jkplayer/um?e=QVZveGpSTEplV0Y5eFAzRmh2T09ZNXFNSXZOSFpQL3FEc2NDYnBQd05XTGQrTUhuRkZyaGdFZDJnWHdnN0dBTmU5dXdZN29iZFhhaEgzZlFDMFhCa1E9PTo68fKVzhhOqhUPe1QA21jtIQ--&t=6f14ca8be6ec0fa38b261c92c3bd61a9&op=MTg0MTU=',
	'https://jkanime.net/jkplayer/um?e=WUpnUlNGTXNGbmFQK2RyaHRjKzVtdC9rRC9ackRpRWlyWFhOa0wyb2dlakh6eWpzek14YnUzcWJzWVg2Z3U2N3BFSmtOU3VQNDFoYy9wZkdKVGUzVmc9PTo6y9PUU1AVCoM_MHJNyn5kng--&t=8697e431350a17f3a1ce4ffaae7e3c16&op=MTg0NTU=',
	'https://jkanime.net/jkplayer/um?e=ZTZZdmM4T2FGbHdkcDIzaUwyQS9pS0kvOGhMZDZiZWxYcjN4S3V5KzQ4aXNIdW1lZEdUSWZ3N2Z0elNRRVJDRXRmcmdIdjJOWk1CaCthNXhkMzZ4b3c9PTo6h03w2tD.0GLZyePwoE.e0A--&t=530ac99d68d3b582bb8e2b99519c73be&op=MTg1NTg=',
	'https://jkanime.net/jkplayer/um?e=Y2ZtSmVxcSszZDR1alVydkk1YUg3V1BrOFNpbjdNbGtqblZ6eENENkkyMmg1ZUpFZ1ozb1lUaisySnRsOG50eVN2Y3ZjMGtMandoQW02RjdGNTJXQlE9PTo6wDgFNs9uRdH7UF3Ilx8sdQ--&t=4049f890b5f59ee17a2554a1e271cc46&op=MTg1OTI=',
	'https://jkanime.net/jkplayer/um?e=YUx4QmJheEc3Zk9EVTJKbFhrYVd0Wmd5eTVJTkw5dDlCZ1VodFc2VmdobkkvMUROYWREaUFvdktVejdGSnZPMUJ0YTEzQU5KK1lEYS9BSE4vTmhzaEE9PTo69lRC90kNF.N733V422kFLw--&t=f8f6b523ba28dcc12b82576b0d694d18&op=MTg3Mzc=',
	'https://jkanime.net/jkplayer/um?e=bFJQYWN2TDE5YlZQUE5RUUFwdWxBRzdzS2s3aElTTTFVeXB3dk5iQUx0VWVzYzNpcE41ZUZrN3J4V2kzS2YwYmQ4dHFrbFVDMWp3OGlNbFdjNHc9PTo6CSa80RI.yvGRTCIQiDRdzw--&t=6f0cdeedf664c24860cba8842e94b300&op=MTg3NzY=',
	'https://jkanime.net/jkplayer/um?e=cGYvbGs4eUFFZHk5QzNjckR2aHd2SGFKOUhuNVNkNnpyVzhpTmRzNmRvd1RHUGQ0NXdMcGZiY1A0aW1ja0lwRi9rNEw0MDB0ZWY2anBRTkNaaVB3MVE9PTo6tfZBEfD1cuRaH0lXzUMOBw--&t=83081f67725f97341e971f6d155803a9&op=MTg5NDg=',
	'https://jkanime.net/jkplayer/um?e=YnBmVTB4RkMzeTVkYXVaejNRMVhOOWp2RHF4d0lSZzRPYXFmNWJ1UkFUb0FGUXZPNXZpQk42NWMrZnorMnBlSFpOVCtKc1NRMHZ0VTdBcnRsbi9FV3c9PTo64SPqFY8fqSfcNACcbFLp9A--&t=16d459c4b261f3015061a7cc7362851c&op=MTkwMTk=',
	'https://jkanime.net/jkplayer/um?e=SVVmWUthbHluemt6c3I3b2k1NnpyODVQdmlndXpZazdtaVF6cUZLYUVxc0RTYXVOai8yT1JIZFJPMDBINVlWSEh5YlpITEk3QXRDd3lHc3VvdUFLL0E9PTo6GeIvnX69S1kZHgqiURwKbg--&t=dd2bdf6cb881176bc2c0c568e1a180fa&op=MTkxMTY=',
	'https://jkanime.net/jkplayer/um?e=QjBtMGpLczc1U1gzUmQ5cnAvaGNGWXluaTRac1BaY3RSU3dUcWdGb2R2ZjExQkhXSm8xVStrbElQZkdTMXRGUERzN1BCd0E1aE52Q1kwQ1lTMXkxamc9PTo6cLGEz.1uzm_DEtxfpJQx.g--&t=c273a867d4f81ad1055432bd598e114e&op=MTkxNzE=',
	'https://jkanime.net/jkplayer/um?e=ZmIrVkdOTTVzR3FUWVBjOU9Iak9zdm53MXZ1N2tEb0VmRnhrZWQzZGZJV3ZSUjkvbi9ia2lHU0Jnc2MzSVU5ZCtNSUtiL0s3VFF6bFd0UHo5ZW5vM1E9PTo6uF51xIR8C99kWDmD44PXTA--&t=62206c3269b796a451de0576902000f9&op=MTkyNDE=',
	'https://jkanime.net/jkplayer/um?e=ZU9QMG83VFoxSktOaVgvTUhvV0xYR1pLZDkyeGkvdEJVV1hXNzhRa0J3RGNjNWd3dkxYK1FITllrYzUrQnNXQXhQNTJQaFlpUmhjSDlSZE1wVWV5TkE9PTo6sMu4XD0JUMj3R9TVps2b8Q--&t=6a4445336e29a1682933b9a7a3aa06a8&op=MTkyODk=',
	'https://jkanime.net/jkplayer/um?e=UktFeFZVZFJTL0ttRmpvb2tZcWJZV3FaTmtrU1B4cnJPVFR5TlhVaTNuVXJzRkpOemZEODUvT2VNM3k0L1Q0a29jY1pWNjJoVVZOSm1SeVJFa0ZFY2c9PTo6u41KxXIGhZ0BAEtnw0K7dA--&t=e168a388110e81537d5be2a524f9b79a&op=MTkzNDI=',
	'https://jkanime.net/jkplayer/um?e=a1Z6bTIyZ1JWbHB0bWZMRXZUSXZ6L0pOOE1ZS1RWdDV4QmMzak5paTFPSmdtZzIrcXJUbjlrRjJCSkxNQzZrWmtUSkdpb2RpRWZwMzhIR1lQK2krR3c9PTo6zVRZGpD3lwoj9MAl6v1Rbw--&t=cad2c5c65a36278c86e012e4df8beaa0&op=MTk0MTQ=',
	'https://jkanime.net/jkplayer/um?e=cloySFFxRUgremFzZ01tZCtvTkI0bGFUemNHZTVFdWVqQTA4SFpjd1A3NUVvMG9lN3NOTCs0aHl3bEs2SjhLemtUYUtWYjFWL1FFMlBsSUxONkVVUEE9PTo63iqlDKCdLMAK96z5sZEH.Q--&t=a57e40ec230ff3f9c17fadf6ae6b6577&op=MTk0NjI=',
	'https://jkanime.net/jkplayer/um?e=N1hBZVVwMllnaWQ2K3hNeGRZSXQ3ZHY3dzhqR2QzYnJDMGltdzFzUGtkT3cveDZTTkswNTRLbFFlQVpFcGFDUWJKbkNiaHV4OWY4K1pDV2t0YTFRaFE9PTo6OHzWUJuOilHvAi4r6bChtA--&t=04c0e78a0e5ff3259fd1fc0239065a3a&op=MTk1NjI=',
	'https://jkanime.net/jkplayer/um?e=VDU5TFh2R2RNT0REVmVyOHpQVFdHdG9jRjJLT3ljU2pjWGduR2tzUmFwSnFadFE5TnZzOGZDVG90QnRMZWphMGZMQlhsRGFiR3A1TEY4S3lwRDJKQXc9PTo6THQ4SCCGWfevZw6zMfbH4g--&t=cbd765d222226f30835a00e331feb2de&op=MTk2NTI=',
	'https://jkanime.net/jkplayer/um?e=Wm0xTW9zUVJ2SmZEY2tDd2xxWUxMcmtrZXVqQTBGZnFhU0tRZzcxV25zaEYwN1ZFYW13a1ZmZWdOVUVPd0hsWFcxcVYwZ0txeUhMWWs1amtSYStnSUE9PTo6K4QtixQIugSgeeCFcxbADQ--&t=610f2db734ee5a5fdaa55e579e33c351&op=MTk5NTA=',
], 'Tmp1');

const hunterTowerEpisodes = hunterEpisodeSet('La Torre del Cielo / Coliseo del Cielo', [
	'Llegada x a x la Arena', 'Nen x y x Nen', 'Despertar x y x Lucha', 'Acierto x y x Furia', 'Destino x Y x Tenacidad', 'Una x Sorprendente x Victoria', 'Una x Vacía x Amenaza', 'Poder x Para x Vengar', 'Aprobado x Y x Fracaso', 'Gran x Y x Deuda', 'Ging x Y x Gon', 'Respuesta x De x Papá'
], undefined, 'Tmp2');

const hunterYorknewEpisodes = hunterEpisodeSet('Ciudad Yorknew / Phantom Troupe', [
	'Deseo x Y x Promesa', '¿Usuarios x De Nen x Unidos?', 'Reunión x De x Héroes', 'Defender x Y x Atacar', 'Una x Chocante x Tragedia', 'Comienzo x De Una x Feroz Batalla', 'Restricción x Y x Voto', 'Persiguiendo x Y x Esperando', 'Condición x Y x Condición', 'Un Ojo x Muy x Agudo', 'Persecución x Y x Análisis', 'Aliado x Y x Espada', 'Un x Monstruo x Brutal', 'Asalto x E x Impacto', 'Ilusión x Y x', '¿Las fortunas x No son x Ciertas?', 'Aliados x Y x Mentiras', 'Amados x Y x Asediados', 'Iniciativa x Y x Codicia', 'Señal x De x Retirada'
], undefined, 'Tmp3');

const hunterGreedIslandEpisodes = hunterEpisodeSet('Greed Island', [
	'Comienzo x Y x Cautivo', 'Final x Y x Comienzo', 'Invitación x Y x Amigo', '¿Realidad x Y x Sueño?', '¿Un x Maestro x Duro?', 'Fortalecer x Y x Amenaza', 'Puño malvado x Y x Piedra, papel o tijeras', 'Estrategia x Y x Esquema', '15 x 15', 'Piratas x Y x Conjeturas', 'Un x Enfrentamiento x Caliente', 'Agallas x Y x Coraje', 'Negocio x Y x Trato', 'Persecución x Y x Oportunidad', 'Locura x Y x Cordura', 'Ganador x Y x Perdedor', 'Amigos de Ging x Y x Verdaderos amigos'
], undefined, 'Tmp4');

const hunterContinuationEpisodeSet = (startNumber, titles, urls, thumbnailPrefix) => titles.map((title, index) => [
	urls[index] || '',
	`Episodio ${startNumber + index}`,
	title,
	`img/HxH/Portada-${thumbnailPrefix}-Cap${index + 1}-HxH.jpg`,
	'iframe'
]);

const hunterChimeraAntsEpisodes = hunterContinuationEpisodeSet(76, [
	'Reunión x Y x Entendimiento', 'Preocupación x Y x Avistamiento', 'Reproducción x Muy x Rápida', 'NGL x No Es x Bueno', 'Malvado x Y x Terrible', 'La x Pelea x Comienza', 'Kaito x Y x Ruleta', 'Inspiración x Para x Evolucionar', 'Un x Despertar x Fatal', 'Luz x Y x Oscuridad', 'Promesa x Y x Reunión', 'Duelo x Y x Lucha', 'Grito x Y x Rayo', 'Compasión x Y x Fuerza', 'Interés x Y x Maldición', 'Los x Incondicionales', 'One x Y x Two', 'Palisman x Y x Reunión', 'Amigos x Y x Confianza', 'Condición x Y x Condiciones', 'Un x Detección x Mutua', '¡Ataque! x Y x Impacto', 'Infiltración x Y x Invasión', 'Falsedad x Y x Cautiverio', 'Seguimiento x Y x Seguidores', 'Ikalgo x Y x Playera', 'Knob x Y x Shoot', 'Check x Y x Señal', 'Duende x Y x Comandante', 'Decisión x Y x Despertar', 'Novicia x Y x ¡A luchar!', 'Retirada x Y x Ataque', 'Goutou x Y x Goutou', 'Correcto x Y x Nuevo', 'Confusión x Y x Espera', 'Entrar x Y x Invadir', 'Monstruo x Y x Monstruo', 'Furia x Y x Rabia', 'División x Y x Conquista', 'Deber x Y x Pregunta', 'Venganza x Y x Recuperación', 'Insulto x Y x Sentimiento', 'Una x Pequeña x Chispa', 'Komugi x Y x Takadon', 'Gafas x Y x Valor', 'Derrota x Y x Vergüenza', 'Namine x Y x Lamento', 'Cien x Y x Cien', 'Romper x Y x Romperse', 'La fuerza de un guerrero x Y x El extremo de un guerrero', 'Cero x Y x Rosa', 'Hostilidad x Y x Determinación', 'Dicha incomparable x Y x Amor incondicional', 'Nombre x Y x Interrogatorio', 'Pesar x Y x ¡Avanzar!', 'Monstruo x Y x Monstruo', 'Reunión x Y x Gon', 'Peto x Y x Luz', 'La palabra x es x suya', 'En este día x Y x En este momento', 'Bienvenida x De x Vuelta'
], [
	'https://jkanime.net/jkplayer/um?e=Y3lEK2JQMU9lNkdsamVyZTBUT0krbFNuck5DRXlabXY1ZnlIWHRyM3paenl1MXhtQmVrMlpQK1F2Q2ZoV3QyMVZGZTdzNHVXN2pScWJVdXB5RjF5cUE9PTo6fwbdw2Hcj5frSjHWyC_00w--&t=15709800bdacf685676ca21dad559a45&op=MjAzNDc=',
	'https://jkanime.net/jkplayer/um?e=S0NhVFJnM1FkQ2NPeTVFQkNYWExscXBDdUIvNGdRbmtNaWVzdDFBc0gyMG43QTBoNEQwVlR2RThlVk9IT09MOG53OE4rcEZ2NDRENXpzd1VHWkt2VVE9PTo6q_IpV3Wkwvg8LPE8FIkWHA--&t=94a5313663ab243911f0da89ed1096db&op=MjAzOTE=',
	'https://jkanime.net/jkplayer/um?e=NmFLT1JIYUg0bGpVcnZCR1VIYU9nTDdXb2kyVE04bjladXVPcGNlc2RjZ1NqTE5hUGxtYnZYNnhNTlg1Wm01cUlRdkcvQzZpUFRTK0ZHbEQvbHVMYUE9PTo6kkB95A1UaCaEYkJKcjVdHg--&t=3ac02e47bc452869429c3c39989a073b&op=MjA0Mjg=',
	'https://jkanime.net/jkplayer/um?e=NUhZUU9Hd3ZNRlVvbncrbE1OSFVXc0VPT1hndU0zZDF2K2dKeGR4Y3ZiMWt1VFNNL3lyN3NKZVk1VHNKVmU3QXU4S1Bib3RRQ2JmQ051SWZNNnh2ekE9PTo6gOW5UN2LkhBx9lsloVHyMA--&t=64f0e997f15b98842d2a1ef7b741c562&op=MjA0NjY=',
	'https://jkanime.net/jkplayer/um?e=RGhOWHVNZWpQaG5iRXNCUGpSNkhWb2h5NndlREtqMWFDcUZPTlcwUnpRYmxwS3o0UnpUTzhxQm9PVnF3WFlPVTRYT2QvVldPUWRRRkhxMkpSV2p5YWc9PTo6d4gqj.R41kpb8hl05NwTSw--&t=96da2b03702bc83befbc41bb870e81ca&op=MjA1MDg=',
	'https://jkanime.net/jkplayer/um?e=L29vaHhDWmpBNlBWUzhFZlREa3JmK3JibFRPcnYzTk45WFZvNjdXVUdkeE5mUm9MOVdpSkx2OHFXaStTMnpQWmN3bkZsSFZ0K3JYYk10Y2EzUTk3RWc9PTo6oN94bS1H8fz5WpeFK8AWyQ--&t=16e8bca67b4df1dc99055f27569eb72b&op=MjA1Mzc=',
	'https://jkanime.net/jkplayer/um?e=cDZCcEI0SUgyRWx1ZTlQN0pyZTMwVGd6MDJEeWpBNktwNHJnQ0djT0ZZL0tGY3BBdGZXNVprcC9aRjhxeGZHRTUvTWJiMTJRWVRuaUtrcjF4cTRLSUE9PTo64sGgr0YFpOM19mQUv6Etjg--&t=480ef4ce7904fa0eac8eb77266ae3efd&op=MjA1Nzc=',
	'https://jkanime.net/jkplayer/um?e=MVNYT1hiWHRnZFl5LzZmaTR5eXhybWZUbHJJZnlzSmVFSFNPSU9GRTc0SHYzb09kZDFHU2hBYjVXNUdWbzJ4eWJFOVFycmkrWTdOZUJhL0hwcmFibnc9PTo6iHeo.W3PIn7R7mlnoqm.qA--&t=b16238d06c7888ecb3c3d24d368b1ab8&op=MjA2MTQ=',
	'https://jkanime.net/jkplayer/um?e=SC9wb2VDZHZETEtSYmJyRzVMVzBkMjE4NjBINUZFanFxNHh1Z1JXS2p4aTBpQ3IrWGhnSENGbUVZL2tHaHI3cWR1R09rVmJ1RjdPaGJzU1h3N2tqNXc9PTo6Tm_MwnecT1sX0FH3Mpc34g--&t=12eeb1fadde6b062c33ac4282fdaef75&op=MjA2NTU=',
	'https://jkanime.net/jkplayer/um?e=akVHckhSaXhxWmFWc3ZyWUpmajd3cllBMVdnRkRZOEZ6QWRyd1lFLzkzOVZoS2FNS3M1ampEdkFCaVpNNjRPU3VZOVo5aHdrTVBpK2lCZEJUTnVLVVE9PTo6WuNWlqV.X0_c3uuOnpJOTw--&t=89dddcba3bee579371daaadab524fc84&op=MjA2OTg=',
	'https://jkanime.net/jkplayer/um?e=VEpNWGRDT2dYanZXY0htcWkwSjB3dXZSS2xCcUV6bUh3aTJYNytwcjUrM3plamZEMmFnSTkyM1NNTjZkc2UrTEJCQmVMa0xqTDhMMXB5Zys5Sm1hOVE9PTo6SFAOfeFlEHgealb13E_KhQ--&t=fff079091fab64095f9cad3298f1057a&op=MjA5NDA=',
	'https://jkanime.net/jkplayer/um?e=aVpFRFJGdHJkOGNBVVUrTDlmQlpZVm1DV1hNRytrdzVRdEpZdml0ZDFBV2VTZmIxdTJOQ3RCVThpZ3p2ZSs5M2gxOFNqTVlqSjlUS1IxTVFVcGhZdEE9PTo6ylJLMsI1LFYqdjZdsqaHzw--&t=8569aad08bd79e68d8a5d2b2ee505408&op=MjEwMjE=',
	'https://jkanime.net/jkplayer/um?e=MW5DOS91UlFKejhKdFhWQ1F4RkZaOEVubGpBSnYwRkM4ZnZ4SUd3SEpiUzQ2TUJ2ck9uWExNUjZ5b0ZDQ1lCRFE2RTNXUzJSMnIreUs5dVlFblptcHc9PTo6md4fwmS1AatUbX.XMovaRA--&t=b5e2cbde919747030eea9e4fcf8f36b8&op=MjEwNzI=',
	'https://jkanime.net/jkplayer/um?e=T0dkTWhyL3VDU0FyYVlPcXhwR3hPcnJ1Z2QwLzg3akp3THh4OXRvYVFKRk9nSkt6elVhRk1nYndLc3YxZHF6TjRqN2g5Y3BWVnF5bXhYTnM5RkJCUFE9PTo6ay3J5U9hfcz9TReOKchFNg--&t=9d15081dc54bcd9dc23a74f99646b2a6&op=MjExMjA=',
	'https://jkanime.net/jkplayer/um?e=cEtkRk50Ykh6QjZWaXUySEQyNDFZMmVGTVZnM0N5SzNsSHM3ZisrbkZ6VllFQnZMd1JHQVVmT3Fra3NYb2ZJSzdTbTVyMmxwckFXcXQ4SHo4RFAvV2c9PTo6A0.24VXoqn25jPpxf.TH8A--&t=3aa207e43a501b7a8e06242eb1dfc72d&op=MjExNjU=',
	'https://jkanime.net/jkplayer/um?e=Z3FmaFVCZVZZcFdwbnlaVDNrVFVKUXRNMmlKb2ZSeFg1bzNyQ1ZJYXpYY2VSMzRKMWJDUkhQSmd2TVB4MXRwQ0xRYnVjRXA5SlM5d3F3YVhILzF5QUE9PTo6Jaa8EhYGSSc.GS_KTZASLg--&t=a624873c42ee905ecc113ce243187740&op=MjEyMDk=',
	'https://jkanime.net/jkplayer/um?e=cVVzQzZiL294OGNsajFRbE9zLzh1MzA0NTNLVzg5WDZBdXJpNlVPbUhIN3NuejlnT0dUdTRDTnBYQnNFNzlCcUhMWkx5d05JMEl3ZW85SllVNGFpaFE9PTo6Spw1McGz00HvoJiS7zoByA--&t=ed86eaf4f8b892e9f596c77943561db3&op=MjEyNTk=',
	'https://jkanime.net/jkplayer/um?e=d05kdGdYSWY0dzh0RmJYeS83MTlDQ2ZWdHNjcGlIYkVSNWhLWXExOXh1UFhYWWx0Zjd0b2owd3RGb1VDY0p3czFkVmwvREhWVXBzQVNsRVBHaEFsT3c9PTo6CHeDeuJQlTL_RaXNv_29tg--&t=9d76f64df165ca0697703c084b1a9cd8&op=MjEzMDc=',
	'https://jkanime.net/jkplayer/um?e=bSsyaTNnSGdTVkhxSDJXVERNN0dGZklYSjBCS3llb2VyYXJsbzRBZDJUYjZYbTI3Yk50NThEMEFsWTROYWsxRXk1M1VJSE9hRzQ2TnVzNElqcHhETWc9PTo6uCtKOHfwgVC_eFMx1V0pnA--&t=2d31d718f0f891ab8dc5da1013fd2741&op=MjEzOTY=',
	'https://jkanime.net/jkplayer/um?e=Y0Q0cEpaOUZndnhLZ1U1dkZFRDR6LzVGejlmMHRmMFFFYzh4Vmp3NjNuS3dabkFVVDMrNTRNOEdlRkVPcVduK1pZclAreDBrT2xiLzJld2R3VUF6NWc9PTo6iWbJS4DI23FEiVi4GWmAow--&t=c2c1fc225872c8f4b8b18410e10ff072&op=MjE0NTA=',
	'https://jkanime.net/jkplayer/um?e=WGJNa2I5TGFVVk9DaCs0bkpRN0J3c1hIREY5U3RaeGFRZklmS2ZFc1FUUlFEM2tUaC9DaUE1cHRheGh4ckU0Zm96MDVVWTlaMEdDMm9PRTZ6UUozc2c9PTo6rsctRR.B.wqadtSMG.BTUw--&t=55ea27b4b82dd858f2f7d75cb01f221a&op=MjE0OTg=',
	'https://jkanime.net/jkplayer/um?e=T3plVW5oKzB1VUV0S2VLY054VUhQQm9HSVN2NytSL3JWZXRoVFJnSXJUd1djbjdtMXh5eTlYejRiYm5IVkFKSmgwK2M0NzJ6UHNEVlpSQ2ZvWkFkY0E9PTo6QTUveAWjTkdwEazre1S8bQ--&t=25105ee21f67d6b2395ca64e43778f0b&op=MjE1Mzk=',
	'https://jkanime.net/jkplayer/um?e=a1E2djVEc0ViYTNsQW1hTCs0RVQxMWNkTmdJaHpkOTlxQXlrT0pLLzhoYTNTL2VZUkYwZzJLNzBONGEyMEx4TzVDVDBmVHZ3RThXNDdhN2RPN25qMlE9PTo6U_c06tPo94IoUGUVxNcqOw--&t=5fd28676525f025716fa72429d241209&op=MjE2OTI=',
	'https://jkanime.net/jkplayer/um?e=YkMwSkZvZUY4QWNzbitocjZoWkkyYTYrOVpFU0FGZHJQUkwyajc1UFgrbnc0eHAyOXJrdy90WXhTc0tMYlRRYU1qQUZOWXl2dXZLUXdVa3pSSTJ0aEE9PTo6oIw7SobGC0kxUlvHXDVvpw--&t=a45914689d19e8e8f32cf648b70b1152&op=MjE2OTI=',
	'https://jkanime.net/jkplayer/um?e=ZVhHbURwVnJENE15bmdYZUU1cXFxdUlac3BEUmFTbVVyc0paYVMwdFVXeS95c2JOZENRblFSSzYwbm1KQnMzOHJpdWpHZlVncWFvV21LS0FyNHc2ZXc9PTo6KzNDpXIK9Pr4CfOdWxCrJA--&t=3312a1d297ed261ecb3cc34928347c43&op=MjE3NDQ=',
	'https://jkanime.net/jkplayer/um?e=N3l5S1hiS0dTMkhYbDBvYXd4M1haMmliMG5RVDNTOFMxTVFVQ3NuL0ROY25IZkZiWGwydWh1TWtZelRZd1FNaklPSXZ5Q0p4NG9pWURydHF3QU1DK3c9PTo6V2SrKLRxlDE3CgxPRMYxiw--&t=ebfe4a43d46c01d811b34c14a3356904&op=MjE3OTc=',
	'https://jkanime.net/jkplayer/um?e=ZU9oeW5VOGtac25Gc0FlWWhiWDBDMjltdy8zaGtMWFpEVis0YUhEU3l1MGZDRzhvSDVLL1MwbXdYVWw0cmhqalo5VzM2TFduZkVjTmdETjR1ZEhqYWc9PTo6_w8YNd6F.kkBiosK3ydndg--&t=fe39765e51d6dadb4eddba0dfe604086&op=MjE4NTE=',
	'https://jkanime.net/jkplayer/um?e=VndTM0UwR2tNZEMvOXZQVDRENUhJWU5uQTJZc05sMkFnTFJ3VmNSZ3c2N3lJSk9TekUyNEUvOWRFT29rTzd3K21ORUJURzBYZXZxb1UrTVBsWWlJU1E9PTo660W4YHLf6ttwVgCB5NlfRw--&t=406f5b9d1be9d4813acfb525d0b3c172&op=MjE5MDE=',
	'https://jkanime.net/jkplayer/um?e=ZkFsY0tTcytrTU9QdzlEOCs1MWRQbS9HTW1FUEVadnVMNUFOV1g4RGMzaTI5VkVmUmMyWVlscjZtZDJTNHpqNDlwYWJnN3EzMWRHT2NPblpKSis4dUE9PTo68X72ULl7krtVk7gG_ActwQ--&t=66c3339bb081477acf468be9be7e5415&op=MjE5NTM=',
	'https://jkanime.net/jkplayer/um?e=cjVFZUlleFRHb05Jckk0ZFQ5aFYrc3k2cFVuTzYvWjlWdE9PTkd1bEY4L2Y0Q2dSV0g3L3M1RGJKY1RxL0Qvc3d5WW1Mc2hxbjBkUDdTdkJ5alR4dmc9PTo67YsHIklpKtUPBGOKeM3OVQ--&t=0190fadb841d7ed83e29cca2a745bc2f&op=MjIwMDU=',
	'https://jkanime.net/jkplayer/um?e=a3dRUTBkRFJZRjNkL3lTZkptMGkraFdrNGhFeEtocDM4S2JRRFhiMjR0UlVhS2l5Y1lpbVh1Y24vZllVay9zMGxOdmhFUjJxbFRSRzlXM1lNcU5DRXc9PTo6jlt_v2EEa3h9SKZqlJ3cVw--&t=939a391a1ac9a3431f2d78e83bd8b856&op=MjIwNTc=',
	'https://jkanime.net/jkplayer/um?e=NkhGL0tFdDdCRERFajFCaUQwUDhVazNaYkdSS2JsWE1XQW82bVlUZ3RYOHdrdFEzUmpGU3F0R3NhRStvSkNYdyszSXl6eGl4dkIyU1RURTBqNTZNTXc9PTo6AR7jESoV3LCpj64x5rjaRQ--&t=77a83d41494e076f5a707655c3a98ccd&op=MjIxMDg=',
	'https://jkanime.net/jkplayer/um?e=SERTUHZyNWptbUhDb3NlQkNldUdZZ0c2V3A5N0VDdkRBNXdDK1ZQOSt2OXBha3NzdnNybENWYVh0UjFkQ2RlWldwS25FY1AvVTRmYmE0dnF0eFIxV1E9PTo6v50I2LsBfzWL2TVM81ztvg--&t=554b4a990f21efe6f39dfbec92d0f057&op=MjIxNjM=',
	'https://jkanime.net/jkplayer/um?e=WTdBTUovVERlTDZCZ2F4NU5JK2dDejdFYWhrakNwZWpYWE9VMDBoRTJYMFlGcE9mbGNsUGp1eVdHQmcxdGNLUnVGV1lkRTRWT21nZHZPWXVjZHF0MGc9PTo6q.HL2mW_NJ7oaJuvNzHdJw--&t=5a518783270523848f247fb126ac22fa&op=MjIyMjE=',
	'https://jkanime.net/jkplayer/um?e=L003WlY2V28wTWRsUm5tQWdQdWpIMVZoL3VCNkkzT3l1TGMzMlhrQlRQMXF2dkFycjl6b0pWS0dGc3lZQ01QQi93VktoNW01bVYzR0tNYlNqaGpNN3c9PTo6c8t9O0UI8WbrQG5qA7.ozA--&t=891c97c0ef7bb88206fdd3b81b6d990f&op=MjIyNzY=',
	'https://jkanime.net/jkplayer/um?e=VWoyUlVGWUJoeUZEalB5OEt0bzFEQlplMUl3cStGNEpUSHNrc1dpTklPQ3grblh6UmdtN2F2cDBiMmNkeHpxNzVsNmwrcEVVRm5iL1VjTGVULzJZL1E9PTo66ajUWjw7cUkdU6HmQF1HxQ--&t=24402d5ee440a37f41903da55be81848&op=MjIzODA=',
	'https://jkanime.net/jkplayer/um?e=WUlkK2xGTTZ3QzJhb21GazI4ZlMvTUVWam9Eb1g0WTYvYXNZRkNTVUpaUkhTNVVPc0lBbDAwZlYvUmhqQytZem52cEE1V0xTeUxOeXA5Y1F4anJRSEE9PTo6S8RaXY7eUdnCWng8dK1GrQ--&t=87962196b592e3b0833f85b4a5b088f1&op=MjI0Mzg=',
	'https://jkanime.net/jkplayer/um?e=MFl6bWRDZ1lrV2ZrNklOdmFZdHBJMEUvSDdPS0FqWUdqQkJQakllRXZXMDFKVCtlV01COEdxdzhnc3R5N2MzKzQxZmF0aW5kbFErbTg0dXNXeTJvWmc9PTo662n4ZbSprK3jkoe45OF93Q--&t=f23bbde4a364522ebe72204971af9e4d&op=MjI0OTg=',
	'https://jkanime.net/jkplayer/um?e=V09sS1h2YUZDOTBFREF1TC9pY08zKzZqK0FHMGh5SkV4ODFmcW1IekFyc1g5UTBwalRocXU4SEtYZ2xrSkR2WStEeEV6WWViZ3lmY2tGdmEvYVM4WkE9PTo6DKS2j4TlDTivPH1bG22PTA--&t=9f727bc55d5aa9dc9349ea9da97b1ff8&op=MjI1NTU=',
	'https://jkanime.net/jkplayer/um?e=MzZPcUQ0Tkp2M0xIUTNvTlJlSnF3eWRNOHozeTFtWTVxbE9MYjB5dW5jT0JQNWduWTJ2UVYydlFzcHZNZkJkZW83dnZyYnBYN3VJQ0hhVkhCMkY4TEE9PTo6SefVzpxk6Xqo5mjuUaQYXA--&t=38dadc9fae7b5a4415d01986ee4907fe&op=MjI2MTU=',
	'https://jkanime.net/jkplayer/um?e=NUU4cHQ5K09xckN3Z3J6ejVpVEQ2TjlSak1hTXBCbEpiODViYVZsZEVVbXpFYXVtQmZxem5DdUlZNTcwMnNUSDhicEE5ZjNmRkRPYnUxQXRiYnJUZ0E9PTo6jps1oKwtB0AkoKc.mK4a4w--&t=9452394c0da72fc2d48eec65d1366a0e&op=MjI2ODI=',
	'https://jkanime.net/jkplayer/um?e=S1JRVVNzQzlodzhQbmlzMFlUYWIyTEFadG5DRitIQWpVRDZ6aHl1c2xDNXk4elFYZjVxQlJMOFVqU0lzVExaalVlVWQ3c1Z3SU1pNy9lNzloVFBTS3c9PTo6qiz5Bmye1mWUCIb4FLv6og--&t=9938b594f4c50c21ed235b2f92e82177&op=MjI3NDA=',
	'https://jkanime.net/jkplayer/um?e=dUoxMWRaSERFSzE5RlRZY1JBS3BZckV3ZEp3ajM2c09TRXNRNU9oZ2hSS2oyb29jcXJGdWdWOVlzT0IvNUxLeDU1L1Bqd0J1RGxOUlMzd2dHS24yQmc9PTo63bcvpRheUEyfFsMsjMOa2g--&t=45e386443077da53fcfe55cc64300f01&op=MjI4MDU=',
	'https://jkanime.net/jkplayer/um?e=S1lCU0p1NEJVUWZtRFg4bFFpOG1HYkR3OGM5TEI1OEpBOXFPOU1TL3dRY3ZIRmlxTE9RNS9wR3hNWCtQTkZNdU9WZ0VqcFkyZkd0NTZYdnJVQk9FY3c9PTo6eE5JfAj.KuilZFpjrmJDVA--&t=33952922bfba1ea30d03cfe18e5d8862&op=MjI4Njg=',
	'https://jkanime.net/jkplayer/um?e=ZFVsMytFUm80MHBCWDlMQjZTUTRHa1hscVpDNlN4TW81VFpiMWdrQWJOcEk5UVR1MytDcFAyOXVLem1RWGovRzhTZ3prbi8zRmtuWTlRT1lqZFgxNGc9PTo63n7IHcOyau1Qo5Tgm22Lyg--&t=b12b9d3718cc370c8886cff182f0f687&op=MjI5MzM=',
	'https://jkanime.net/jkplayer/um?e=T1Uyc3lYM1dUdzE5ZDlRUXlodE96WFZIUkhkRzJJaWhPdU1SREpEZTFIRmsrVnVJekQ4SWlNeFZ4azdZZlpmaVJSY1llSHZSZHIvWTdJZ2FVVVJxMVE9PTo6Ef1X6RZobHng3D7VAdCDCQ--&t=d0265f30550b715cece0b26fe2210fcc&op=MjI5OTI=',
	'https://jkanime.net/jkplayer/um?e=NjFNdWVVLytHUUlJL3VxM2NYT2FERFF0bE5VQnRqcmxMelFoaEkzUlV6Z21MZjFtSEVyK2NQSTBoTVo4QVE2MlF0aHFyRGIxUzllSXNjTGxDWlV2M0E9PTo62zkFjFBsgQ.fYTs9EI712Q--&t=c6fd6c7e4da27ed17b8f3b14d35aaeb6&op=MjMwNzI=',
	'https://jkanime.net/jkplayer/um?e=LzNXemlabDZKdDNieHJ2dXhxd1FyZkRQM0hPRllndVlNTlhlb242aFF1QmJLTnJJMDM2TkFvTjcxdExkV3BoTm5XanBrMG94K2Nab0wxZFN0Tk4rVHc9PTo66Mp4gcQWBEIR033P5Za3_w--&t=7d7733c8d01b7352aab3990d99d89d8e&op=MjMxMTg=',
	'https://jkanime.net/jkplayer/um?e=NmJOdXlaTlZYYXFPZTZaUnZ2eEhIcjBhaDM0TldPczhKSTdnK0V4bmgzZWFjWFlQaHl1M3FvY0JGaElNNmM3SHQ5OFdOL3hFaCtTd2E1ZnNWYlRhbkE9PTo6pnqmDPSGfrelDbnSsXHHuw--&t=a43fa8be02537dc33e3d1fe5af19150d&op=MjMxNjU=',
	'https://jkanime.net/jkplayer/um?e=bHV4M1VKTWJsYjJhQ3J6QjFSVk4vNU5ick9YelU3T3dHbkxaVFYwSGFsV0RwVzhUS0NrUFg1SW9pNDN4MjloS3dSQ0tlaUVmQjg3QklpN2NoSWRzYlE9PTo6TxzJ__v_6tfJu.Dp83oKug--&t=654425b5a1258aad138981579e10dc3f&op=MjMyMjE=',
	'https://jkanime.net/jkplayer/um?e=UGorWDZSK1lXS1pwdHlibEo3dFNqWUppcUlkdXRseXRWOUpYanpMbmFnaTdMSmVBVExzVElRL0VNWUczc21GRFBMZEt4R2ozSHUyeWg5TmtLMnBqZ3c9PTo6LBrXbzIBE0fbB5UgOToOwQ--&t=0a06a00f444e0d933ece33d2a02e9970&op=MjMyODA=',
	'https://jkanime.net/jkplayer/um?e=ci9LT0dIa2FPM24xZzBrZTBLZlo3cVNYY2FucW4zMEpHZWJLMGtZWDc0d1NCS0dXaStTcGlaSE9pcFBBM0hOKzdxdW45TEFqenJGTHg3VXIwVFpDeEE9PTo6JzhMBvxnWS8Tw8zBzxv7Gw--&t=e50292f6504ef1d578f12d76de3ef250&op=MjMzNTg=',
	'https://jkanime.net/jkplayer/um?e=ZFNkTDNyVE14TWUxMjRUVzlUVkYrZkZxMk0vbWlSRk5mVlp3Z0krY1hzY01taEl3NWlhd1FGbmlZVThYUDY5T2V6OFVlL2lGd1NIQ1F6dXBoUi9wVXc9PTo6kDO3p3jTDMtbHbB0KXUlIQ--&t=fb5b5e2c58d0e0b90301b27bd3068fe5&op=MjM0MTc=',
	'https://jkanime.net/jkplayer/um?e=K1JuNDIxN0NrZVJOWXF1R1ErTURwWjNRUTJJZVdpeTFwVmlBbDlxOUJ2K1JWYnhLNHZtNHhBUHB2NExPY2REamY2L2VFMXB3WEVEUmYwOEhaUFZTclE9PTo60VIiMnJpfOishh0Ju30pSA--&t=3ef413c41b38a5cbc1e5a88d9ce5f3a8&op=MjM0NzU=',
	'https://jkanime.net/jkplayer/um?e=ME1UeDQyMjhRN2htMXQ2bFR1aEdiZ2tWbGljT05FeWNtNlNPUXpWWUhCZEYyYm9aYTNidXpHajllQXZKYUtVUzY1MVEreEIwbWJnMGliTldmMndRc3c9PTo6v1NX58VF_JewdYBUOaDF7w--&t=60267bac6732c7a81ec811cc5c9c0859&op=MjM1MzE=',
	'https://jkanime.net/jkplayer/um?e=dlFwODJoRlp6V21nY2E2OFFpNUxzZ25BZmJwVzdoMTRCSWEvaFUwandFZEZSckVvbTdqbTZueHBDdGMzdG5QOWpJT1MrN00zZmhoV1d2WkdZcTJSc0E9PTo6J9NTTvGrl8txHRCXH04iZg--&t=4368a62c43ef247389e4fbceb672da63&op=MjM1OTM=',
	'https://jkanime.net/jkplayer/um?e=ZmNveUtleGM4L3o2RWxaNjBFczJ5ZUkzdmZ4TmNUb2p4cUdLSHI3RDJkR1NnNjlPTnF3OVpnRy9rSzljNU9lekQrNXE1cEY4b0NjZ0JaK1A2bVlUdWc9PTo6IbeDcFgpMBVT.tBEmNkKHQ--&t=7d13726bb9469494463cbbacda798767&op=MjM2NTI=',
	'https://jkanime.net/jkplayer/um?e=aEZGei94MXQ4am9vV0xjcjRmUW5QbGwwQWRMN0xkU092ZUxRNmlPTG9VK2pKMy9pajMzQ1ZveHIzb1publo1OFFyYWpjbHpEVW1Mak9haEc4L1lSN1E9PTo6ey8z0wCkcFNjUqKtlqeeMQ--&t=02e8ca2ad17d56e17e1fc2edcbee4d40&op=MjM3MTE=',
	'https://jkanime.net/jkplayer/um?e=ZjZFOWt6MEpuUFE5QmJpamlsNEx6MC9yR2RpYjRFSVJrdVNVMGlBOEJQb3paS0ZRK2kyTTRLenI4SWs4MTgyZFE1Y2pTOXppU3NPbGJ3L1FmRWVKUUE9PTo6kKuVBgJBe_KZw_vH9swWRQ--&t=241bf752bca8e0fcd7ed4c68b791c55e&op=MjM3NjQ=',
	'https://jkanime.net/jkplayer/um?e=UmlOc1RRdzhPTksvZWwrd0RoWXYzakViUHU2aWtZSCtVaFBIV3MrWUV3TDRCd1RIcHgzOTF1akJ5MWxRbXd5U2ZjSWlSNjNzQ0txbmpROHBzN3dkV2c9PTo64Q9LclYJnpPj8RiFkef1TA--&t=863f26505ec22ffe51927c6aef85b648&op=MjM4MTk=',
	'https://jkanime.net/jkplayer/um?e=Mk9QaWE1VjNUenNaVzBITmZ4QyttTTljL1dIS2dkT3NjR0ZmQUhmT29OaFBCV092YTJSa2plZHk1RGs4R0pxNlFtdlNVVUJOL1diUHVEc0JvRU81NFE9PTo683hkjz1aiz4EhTQAh5Wr3A--&t=b5a2e53969a276fa6a8b5adf51891c85&op=MjM4NjM='
], 'Tmp5');

const hunterElectionEpisodes = hunterContinuationEpisodeSet(137, [
	'Debate x Entre x los Zodíacos', 'Súplica x Y x Favor', 'Mago x Y x Mayordomo', 'Pecado x Y x Garra', 'Ampliación x Y x Lucha', 'Cuidado x Y x Monstruo', 'Fastidio x Y x Saludo', 'Anuncio x Y x Celebración', 'Derrota x Y x Salida', 'Mera x Y x Letargo', 'Salvación x Y x Futuro', 'Pasado x Y x Futuro'
], [
	'https://jkanime.net/jkplayer/um?e=SUdKQ1ZHbW16d1VNbjZOU2QyS25KOE9waDJnYmRYSm9wd1N4bmVXWmM0Z3lyR2cweFMyTThvVkQvWEZhTmdGWmhtNVNKUDV6L0hRM0Z3UjVmaTJVZXc9PTo6m1ECYBESWIMAfVcTaJ41tg--&t=c707fcaa3ec072bc292233ce2983ddae&op=MjM5Mzk=',
	'https://jkanime.net/jkplayer/um?e=aGFVYTFzQ3BqTnc1bFd5N1JIemNFUk9MNHZNQXVOek93RXFtNWptcElUTWtNbnBLQWFHa1FqL1V1UWYzM3grMWlaUTIzNUQ3ZmZ4U29vMXoyWWZXeGc9PTo6J6D4zrN1K_4G28wJXMyTGg--&t=397c337a4b3bba159bae4f99c9700e48&op=MjQwMDM=',
	'https://jkanime.net/jkplayer/um?e=MVFGWk5YaWswTzFnT24zR2F1NXRsdGhOTnpneGtycFJETVRvUldydGR3N3haRG1GWHpVVlB4V3V3ZFFWY0dvT0NXY0dRVjlKSVd4ZWNhZE52cmtCN1E9PTo6RC9cwYv1K0gUyXU5IC_p7A--&t=e9947b970456f26dd9fe5f427ded41fa&op=MjQwNjc=',
	'https://jkanime.net/jkplayer/um?e=UHFkdmZ0cWVWaWs1dGJyZTVNRlZBVzBwSlEwRUQwdWtFUk5HVWV3ekRrUjVLKzJld1cvNnRrMTJEbVFjOWpLTUdnNnRJczRmWmtqeUVSOC9TcHpTMnc9PTo6aMVBzrEV8ZqGsRn6VsXOzg--&t=33aaa7974a0a973e068c3c035e52d105&op=MjQxMjU=',
	'https://jkanime.net/jkplayer/um?e=OTZkY3YzOXAxOGhteFVVN2NiU1RVajFMVjVseEtCM3ZNMHozdzhzVTluY0VhQlFScjI0bVFYbzhQZXdHLzJ5dGtOcUw0UE90TGhvbHJ5aWZIUTNjRGc9PTo6wFTlAqjpSUJjIYJ832GlcA--&t=e2463e1d67abb1fc3083f53a842cc2d1&op=MjQxOTY=',
	'https://jkanime.net/jkplayer/um?e=YVNnRU42SElvTzN6cTlkSXVnWVo0T1hINmlwbkRCak1kanhrdXc4cGs5MGlnckRrQk8vN3FiYUVqaE5LTi83SVhLRm9MQ0JSTUNFNVozWmdSdTdYNnc9PTo6Tstu68ueMgPZ6wmok2pKKQ--&t=46d09c503b30980ffc325cc243e1c0f5&op=MjQyODM=',
	'https://jkanime.net/jkplayer/um?e=eFlVN1p5MDV2UDBEYVE2MmloNjRUSjRZeDFBOVhqemZKYTFDU1NrYTVuWnNqRyt2NitTZlU4VWd0RG01Rk1sR2h5OVI4bWczSnY3Wk10MmFhYjYxRFE9PTo6o0VkCa2hu8mdvIXGHj9OXA--&t=a66b2ecb853ed5851a778f3e48ad59d5&op=MjQ0ODM=',
	'https://jkanime.net/jkplayer/um?e=OFZHTmE4dGM5RWtIQzl1Z1VDL1JETmNnT0FkNlg3UlpLZ3pUOVNib3lQR0VWd0REWVBwY1k2dkNYUVlxbHpqeFA2aDNhTWUxdENKL2NOcWxJYzlDekE9PTo6dspK9MG.hd17upReRwj2rg--&t=227d786d86f048b5ea917f753fb105f0&op=MjQ1NTM=',
	'https://jkanime.net/jkplayer/um?e=bFZHWlNJVGR3R1NpQ2ZGa1B2ZGM2VTVxb2EveldQSjdISTRhTENXTjRvb0FwcnZCNkVRNC9qbW1lc1VhcnR2dUtITlFpTkxTeVV3WlErUEZxN0hSUkE9PTo6zN4_Kgsl9N7gXsvlMzNOUg--&t=537ca67a1852ec7e93feda1fa86a3a05&op=MjQ2MTk=',
	'https://jkanime.net/jkplayer/um?e=cndMdk15b3BQTzBIT0dvdTV6ajk2UVZBblJWRkdxdVhGM01RdkhwVDhlZHoxSjFzYzA2RmdKZjg3QXhxaHQvT2ZnVVZHY2RGc0RmYzlLeWlHUlRBM1E9PTo6mOn.7e0u_ChvBeDw5gAXfA--&t=e735c2e2f0eda0a7eddc67a21cbebea6&op=MjQ3MTU=',
	'https://jkanime.net/jkplayer/um?e=enRkWnlMZXJ6MjFKZTVqZERtSUJnUHg4QldyTVphb2UzN21oL0lUanRYRzM0Tm5CWWZ0a0pOSkdGY0wzMUNYc0Uzb0Z6MlJOSlRGalZYVk8rZG1lUkE9PTo6YcXEBgLzMHy2zxgZeeJGkw--&t=327d369a1675bdfdfaefd41d501b3fac&op=MjQ3ODY=',
	'https://jkanime.net/jkplayer/um?e=L0FvTUJtb1p1eDlKOVNETDV0RlVBOHV1UVFLakt2b1pLWmZpVG1EM3gySnJSZ090MW9aUzd6TFZ2UjlubHB6elNpWFMvanBZdVRWOGZzYmZuL1U4TGc9PTo653gfJGT9LZQDRS4EWio4yw--&t=0743832ad29f3a3ee0f01243aabbc3b8&op=MjQ4NDc='
], 'Tmp6');

const blueLockSeason1Episodes = [
    ['https://mega.nz/embed/9dVH0BaB#oTJJS2vNpI8SG-vjPlCH75-3YHWkQ0D1JOqJCRxy8Sk', 'Episodio 1', 'Sueño'],
    ['https://mega.nz/embed/JF0QHSjS#XJY-9NCt3akJyT7upruAgHR5i5ejbGOhZjSZxvel-Oc', 'Episodio 2', 'Monstruo'],
    ['https://mega.nz/embed/FZ8RVYJK#okyVnOMexA3BT3s7eoB-RBfV15sMFzw_UsiYy4tp9IY', 'Episodio 3', 'El "Cero" del futbol'],
	['https://mega.nz/embed/gRUnHaTT#TWGHD2OApkP0RdzqjE-GwMgVl1WAfcGavp1xp4Kbspo', 'Episodio 4', 'Premonición e intuición'],
	['https://mega.nz/embed/UQ9HzJyJ#tDimpSi0WHGk9VTzushHgZOWHafh-D3vKUYpMMwhvJ8', 'Episodio 5', 'Para renacer'],
	['https://mega.nz/embed/scE1DJgK#MavqAaa_VsMqspS1PE5worYnZORgYESJrIfR68FtCUI', 'Episodio 6', 'Lo siento'],
	['https://mega.nz/embed/0JFTVLQL#he70emUP4oo7R4zAotfoYWiZkJYGOzpzHEdsGDrUCdE', 'Episodio 7', 'Subidón'],
	['https://mega.nz/embed/xcM32bLa#zxIu07W1A_LVKJs4I9s1VyvfEltdoDGJJwirreQt6yI', 'Episodio 8', 'La fórmula para marcar gol'],
	['https://mega.nz/embed/4ZUAzahA#m1S2kWbSmQMclNDyinuaXxKL-0t-fyu7s659wQMEbFw', 'Episodio 9', 'El despertar'],
	['https://mega.nz/embed/8I0VwRwb#qbR5J3FXt-jS661UbdcHwe6Nna-E0FCfkIJxIycXnN8', 'Episodio 10', 'Que se quede así'],
	['https://mega.nz/embed/NAdAXADC#RxEOZB_1647HNTJzy_RAIhILUsFvfnl04I9v-5Hp85U', 'Episodio 11', 'La última pieza'],
	['https://mega.nz/embed/5YsghQZY#INP-Z4DJiouEYDcqnnqjUj_VvEE_JoMUrwX8zTp9HSg', 'Episodio 12', 'La segunda fase'],
	['https://mega.nz/embed/pUtSxCLR#hBYYxO0Iy6ghYJ-b2-zQ9kpld799nmHOsbfFWY5aE7c', 'Episodio 13', 'Top 3'],
	['https://mega.nz/embed/oV1AAT7L#VSz73WZWlP3nwXQhQHm-Gpts2OQ6VvcW9vr9h2MCpqg', 'Episodio 14', 'Genios y mediocres'],
	['https://mega.nz/embed/xM8gxLRD#ST_fkYqLzGawY9KvsUlKoWgCz0Rdp564uE4n0-ngbyA', 'Episodio 15', 'Asimilación'],
	['https://mega.nz/embed/QBMASZRS#wAvSlQmSltz48-I4A1Ch8F6rp34qxPSZr5YOLIBpUis', 'Episodio 16', 'Fusión triple'],
	['https://mega.nz/embed/MMkVmTZK#jUfbXUbiluvMKXAvwC0xgKR_23vaUjlcqu5lvGhiph8', 'Episodio 17', 'Paquete'],
	['https://mega.nz/embed/9ZkWSIIb#9ruC0BkEKycM9mapLISyYr5Aj1hdNhsW8soycG9gwtg', 'Episodio 18', 'El escenario de la estrella'],
	['https://mega.nz/embed/lQti0AQJ#c_0ufwiYfejoPx-JvF0QfX1AcEMOndEkitfjoqqxLZE', 'Episodio 19', 'Dancing boy'],
	['https://mega.nz/embed/dMkBRCZb#qMqqktAJQ60apgrkQ3TGRLbYnPzj64Z7WV9HI-asqIE', 'Episodio 20', 'Superjuego combinado'],
	['https://mega.nz/embed/cAUTkQoZ#JJ0no7I_aGNAfQ1GLXX7Po68qKlKl6mpXyKX_-w4WSU', 'Episodio 21', 'No estoy ahí'],
	['https://mega.nz/embed/xQVRSLTI#r10JK1h6_CPy8uHboLt_RstvTUNSDB_nFwwBZQnEGsQ', 'Episodio 22', 'La voz'],
	['https://mega.nz/embed/9E1QkIyZ#wwgDUrvFN8AI_DhZOsr0sBWpVy-4MEm7uLLT9SPb4AU', 'Episodio 23', 'Suerte'],
	['https://mega.nz/embed/9Q1FUBTC#ri6_QzbZtMg67S91V7xFOpHa25CZEFsuxmCeHILalUQ', 'Episodio 24', 'Ha llegado la hora']
    
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/BlueLock/Portada-Tmp1-Cap${index + 1}-BlueLock.jpg`,
    'iframe'
]);

const blueLockMovie = [
    ['https://streamtape.com/e/6oAB4ZaovxF92Dz/', 'Película', 'Episodio Nagi']

].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/BlueLock/Portada-Movie-Cap${index + 1}.webp`,
    'iframe'
]);

const blueLockSeason2Episodes = [
    ['https://mega.nz/embed/sddkgbiZ#3rjCVPuOUKDMwfQ1xPYZn1Z4tBubm_WeWxaXTw8LrIE', 'Episodio 1', 'Pruebas'],
    ['https://mega.nz/embed/pEcQWLDQ#HBOhSR16kOqNaR13JquiW7gPsBX12qrWpOPbgHfh8Nk', 'Episodio 2', 'El asesino y el ninja'],
    ['https://mega.nz/embed/VZMFULja#Ot9kzGQMk0ORjjPnjmtOATZdKemfQwN5VWGjxed8CHE', 'Episodio 3', 'Un mundo de sensaciones'],
	['https://mega.nz/embed/kcsUzaoQ#3I7gpaF9pwYjHMZeYBzyYCxZlF7Ah-QfOQnMgRIBGSc', 'Episodio 4', 'Camaleón'],
	['https://mega.nz/embed/tMUmFYqQ#I_sj8WajCQXaH5ADqtkLxC_qawmUFwPx9mQIBwx8lM8', 'Episodio 5', 'Flujo'],
	['https://mega.nz/embed/pZ8EHZTB#XJfEdr4P248g6z4jUlM3kvoyiCo2o1PBwq2F2n7mLgc', 'Episodio 6', 'El gran escenario'],
	['https://mega.nz/embed/YRFzmCbB#eoE7H2UvzPUWd6pOhj2fRK1WDGVavK2ARojKeJf2pWE', 'Episodio 7', 'Sae Itoshi'],
	['https://mega.nz/embed/gNFURQTK#FkVgmHz7CMkfc0cUcSN_r_0USm0hzLMLez_JuxSvFpQ', 'Episodio 8', 'Genes azules'],
	['https://mega.nz/embed/ZcVhHDIb#ci6KxVIm2C1L53B-zWlyA4hfNKCXdJqKpr1FCzuNBMQ', 'Episodio 9', 'Nieve nocturna'],
	['https://mega.nz/embed/QBtilYYb#kIYIVNjv5Cm0P3NVpdW0TkrjRlMzKFM00qg9VSl41qs', 'Episodio 10', 'Cambios'],
	['https://mega.nz/embed/JQlUXA7L#rBzLExVHjUVAifhIRv9bb51_IjNLDagXRGdA1-D9c1k', 'Episodio 11', 'Lo que nos enseñaste'],
	['https://mega.nz/embed/8U8EhAQR#ySW4Ur1FJrxsZW7q9B8qoiAM951oKydepi6N91QbBkI', 'Episodio 12', 'Flor'],
	['https://mega.nz/embed/FEVz3abD#pig6kP-_x0itZYsZhTVYqStDb7impxdqMNCbQhMehUY', 'Episodio 13', 'No estoy solo'],
	['https://mega.nz/embed/RRsDyAiC#ttzrmKyf-0GvytPL0wfHgxGryXqZnhlxt-EL1Mw6rKM', 'Episodio 14', 'Golpe de gracia']

].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/BlueLock/Portada-Tmp2-Cap${index + 1}-BlueLock.jpg`,
    'iframe'
]);

const aoashiSeason1Episodes = [
    ['https://mega.nz/embed/FZNSyaiC#E024JKMkaXtepQUzeTfMtbTAe4anYL2PYEYB8sPMe5s', 'Episodio 1', 'Primer toque'],
    ['https://mega.nz/embed/UdFFDKKR#sxAuQ6Yp72bujuxGnlMvWyLq2LVmWcP1xrZPcR2wK1Q', 'Episodio 2', 'Tokyo City esperion'],
    ['https://mega.nz/embed/hdUGBYCY#0Fe8D_SjlwQSFYOe-b0KTJNiqHOA0plOwEPxa1eidJg', 'Episodio 3', 'Comienza la fase final'],
	['https://mega.nz/embed/tY1hFLgB#8PNEHDg55_ki8mzXyshdMJYpCpnBLMYqHQ9kCRZDSKE', 'Episodio 4', 'CROW'],
	['https://mega.nz/embed/kRkkGCSJ#hVVG8mF6hupkfmZHmc3CuWRHzmxIEVBpqOjv-Xh1GN8', 'Episodio 5', 'Un paisaje naranja'],
	['https://mega.nz/embed/IMcw2bjB#kesjnQGSIRBGPoFyI7ZxP2JX767InE-nB2brOQAVbeM', 'Episodio 6', 'Primera fan'],
	['https://mega.nz/embed/wRM2GYLA#jOECjEICpcMbOTvwitse-wpQKqhlyI-jtUpulemCd_M', 'Episodio 7', 'El primer partido de los juveniles'],
	['https://mega.nz/embed/JBkFXQYK#MSvXz_qsmckJzciklnhaObB9aGBNtFVM--s4KQ_y6mM', 'Episodio 8', 'Entrenamiento nocturno'],
	['https://mega.nz/embed/hRVCyD6T#PYURkMNwQuy3ErWt94N3Umsu6cEhJ_EwL-99z0KEosM', 'Episodio 9', 'Un fútobl más amplio'],
	['https://mega.nz/embed/1EtkHY6D#PJs_bqLavVAXVZFoQU8Qjq38ablsot0jlxUStwetoX8', 'Episodio 10', 'Sin ceder'],
	['https://mega.nz/embed/4Jl2EZJA#8R7Uc2dqExA2C1C6JOukhs3LGAsu_lM1gYHnmsYiYS8', 'Episodio 11', 'Primer partido de la Liga Metropolitana de Tokio - Instituto Seikyo'],
	['https://mega.nz/embed/5BVSAC4b#NbL1TyjTafk2vBZ66X0yxWY756ioOTOaAK4fX7sPm-Y', 'Episodio 12', 'Eagle Eye'],
	['https://mega.nz/embed/IUNSiDBB#Hecr0_u-ok3e8q25dmvYiAXHpRGqagO5Uir-U8ugyZk', 'Episodio 13', 'Cambio'],
	['https://mega.nz/embed/kdFkwYaJ#dnxaxTLJ1oRsjpARQkW6g8aMtn4fuahpYIG1SekWLYw', 'Episodio 14', 'Solo es fútbol'],
	['https://mega.nz/embed/QUNHkAja#1zH2UBIDMXF1sg2DeyKfsgfb_rnXGEUmfVq62Mws-cE', 'Episodio 15', 'Donde debería estar'],
	['https://mega.nz/embed/8NEljagQ#0v1nCfNgX0DsBd0wvcQlIRooXL8K6hJ9kNaANx2uHec', 'Episodio 16', 'Como tú'],
	['https://mega.nz/embed/EQlngJZI#PMzhx3LTB1NCfrkzN1M5HTDlXo1zTaSKuIKz3lwCsBo', 'Episodio 17', 'Séptima jornada - Instituto de Ciencia Deportiva de la Universidad de Tama'],
	['https://mega.nz/embed/AAMF0bLJ#fneYGrJ1x04DKhGTI5AZ5MxmPZFHSaKwpdnH81ShVqQ', 'Episodio 18', 'Vientos de cambio'],
	['https://mega.nz/embed/xZdHHDbC#6Nfv5JugV9ZPpbO0Gc7I3YufqrQGqmtcu7KsfOcfY5M', 'Episodio 19', 'Lo que nos falta'],
	['https://mega.nz/embed/tVcGjRha#K0uYABXoU9TamnRdjVZHRl1cKh4LJVmt3eqcvJ-2mlQ', 'Episodio 20', 'El que es malo de verdad'],
	['https://mega.nz/embed/8I801KQI#cLCiGZTwGsUrZzPdAS_wcsHtZam5NiypZbIRMy6eMMY', 'Episodio 21', 'Octava jornada de liga - Tokyo Musashino FC Juvenil'],
	['https://mega.nz/embed/1ZMUQBqa#tOp5jpSXSoP_gptDLsYmhXmpYkXMKxFdyoi1soW7dfc', 'Episodio 22', 'Como un demonio'],
	['https://mega.nz/embed/ERtS3YTZ#FW3DDNHEJyxJ_851SD-v5j2PdJUQoEDGKCPFJ_CHRAo', 'Episodio 23', 'Esfuérzate, no pierdas, afronta tus límites'],
	['https://mega.nz/embed/9Bk2QIYD#wQ_vuKNyt-P8WRDDf_VwxAIuEQn3yZlNj74lbhHuAsY', 'Episodio 24', 'Desde ahora']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aoashi/Portada-Tmp1-Cap${index + 1}-Aoashi.jpg`,
    'iframe'
]);

const aoashiSeason2Episodes = [
	['https://mega.nz/embed/JFFywBSJ#NkkCh473m9T-qfKGJBlhvARdkyg0rdX7kh6OlTwJJlA', 'Episodio 1', 'Línea de salida', 'https://m.media-amazon.com/images/M/MV5BNDc5M2Q5ZGUtMzFkNC00MmRjLWI4NzUtNmFiMGU2NjMxMWZhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/JUtkhYhC#QadwcqUwiRPKIK-7OrSF_PvnHqmSf78LW5uDHrdQXX0', 'Episodio 2', 'La caña pensante', 'https://m.media-amazon.com/images/M/MV5BNDc3ZGIxYmEtOTU2NS00ZTdiLWFkMzctZmQ0ZjcwYjcxMWQ3XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/sYtngDDJ#EYMXOpZL-UXG9-ilZCKjMtLU6dO5Oy2EECnhIMUJiPw', 'Episodio 3', 'Jornada 7, partido contra el IFP Kashiwa', 'https://m.media-amazon.com/images/M/MV5BZWI0MTQzN2UtNDE0ZC00OTllLThlNTItYjljN2Y4YjEwYzc2XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/JUVzSI7a#9YaMRzI6Nh0J0jxZj4rcKFYeKYDawVv9bzMoDoVPVL8', 'Episodio 4', 'Piedra angular', 'https://m.media-amazon.com/images/M/MV5BMmYyN2FjMzktMjdhYi00YzJjLWI0NzItYzRkNzc1YzVmZmQ2XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/AJEg1ZaR#1iWPV9bbWWKinEK6UpzU_hc61eUVcCdLear-S3DWowY', 'Episodio 5', 'No dejes de pensar', 'https://m.media-amazon.com/images/M/MV5BZjg5NGM5YTUtNmIwYy00ZjcxLTk0MWMtNjJiYWU5YTI1ZTQxXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/QN0DwahT#Sn72EPCMmgq0ENmRMGDGNOhLtMpEH5sRqUdNUacIl6g', 'Episodio 6', 'Enséñame', 'https://m.media-amazon.com/images/M/MV5BZTAwNDJjMGMtZGExNy00ZDZlLTlmYTMtZWNlNDc5MDRlZGVhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const gurrenSeason1Episodes = [
	['https://mega.nz/embed/DOoBwQAa#HQ9wx_ARnTCI1-KJLd4_LqzMBwX6S4BhppArjnUiKMc', 'Episodio 1', '¡¡Perfora los cielos con tu taladro!!'],
	['https://mega.nz/embed/WPRUQYQZ#9CQeOjRU7WyG7rEN4P31OqKofmDXs4HEyA0AjA5HJhM', 'Episodio 2', '¡¡He dicho que yo piloto!!'],
    ['https://jkanime.net/jkplayer/um?e=NGtiVndSVlhSUFdEdGp2WmxZVnVTQ0dUZTlFeGpqdk5qUEN4VjY0THB4a051U1BNOEM5dFN4RTdTT01DeDNpN3EzZ3dJcXRyU2JNU1oxOUpVVkF0RUE9PTo6nTfmj3rCfMElcO7Mfz9SmA--&t=0428be7495f8f382d0943cdd4738ffbb&op=NzA1Mg==', 'Episodio 3', '¡¡Dos caras, no me subestimes!!'],
	['https://jkanime.net/jkplayer/um?e=U1NZQS9iSnA2aEZTVTJadXRxdFlvNXdCQ3Jnb0NTTWRRZGsvRUNob01mUWlPRHBjcGNPaWxDcjJwc0oxd0hIMkNiUEpEREw3TGVVa1dZS2RoQnBHN1E9PTo67d_qxyPhpzBcshKb0q91NQ--&t=dfc69ee4c48a622e2bcda2c3d2a219d0&op=NzA1Mw==', 'Episodio 4', '¿Te crees tan genial con tantas caras?'],
	['https://jkanime.net/jkplayer/um?e=SC9PZDZPcis3d2dpdk5jWHE3YW1mQml2cktOaGJrMnhEa1ZOUjlaM1UxeTBMZk1uZi9xSFhldlNsUDJhSFFJWnFNY3lvSmRSdGttcHBxUUN3bERxMkE9PTo6PSX.fjyQHEB0T4qggnkYug--&t=812469e49663025b39e8d25fdaad81a7&op=NzA1NA==', 'Episodio 5', '¡¡No lo entiendo en absoluto!!'],
	['https://jkanime.net/jkplayer/um?e=SS94T2k4b0FsUkdwY1dBb2EzK05MWlc1TkZaQ1l1T3FWbGk3dEhQdjRqTzhWWjN6MFRPOHFYY1RpYXdUUFBWbzZjbnRDVk8yMWd4bDJjQS92eitneXc9PTo6z.HV5BQKI8Q6jWbd_euhqw--&t=e143c01e314f7b950daca31188cb5d0f&op=NzA1NQ==', 'Episodio 6', '¡¡Ustedes necesitan unos baños termales!!'],
	['https://jkanime.net/jkplayer/um?e=VHluZE5wUkMwMExEWGt3TDZocDNpc1RmTkI3MWo2aHpHcldMUDNWWGR3d0JqS3ZCa2t6c0paSGhRWElJTFJjTHZDZjloMFQ0RUw5V08yWHMxeFhBTHc9PTo6AnhwErTREgRcYC71h4L.6g--&t=ced92d38d8fec10f1da779dfa44f8bbe&op=NzA1Ng==', 'Episodio 7', '¡¡Esto es lo que debes hacer!!'],
	['https://jkanime.net/jkplayer/um?e=SDhkNlM1bnJwWGs1VUUwaDVwSFRFNzdJVndwT1dKaThRcDkwY3dmS0lCWWlhd0pnYVNpSnFjeWV4K2lFdTFIRmYyQ25kVElxVGl0dmpQOG1zZWF4eFE9PTo6Ht0wXyJsddxSJeAb9E0Uow--&t=c4bfbf68f5d8d0f8b9a0752ca08ea01d&op=NzA1Nw==', 'Episodio 8', 'Nos vemos, chicos'],
	['https://jkanime.net/jkplayer/um?e=bFFtWTdmejRUeS91TldpcnhKM3hITDl3Y0ZMYlhBekkxZExQQ1N0clRWT1NYWmlOVVhrU2RzSEJwNlE1RHhTbDhORk1ZYUhOQVdHeld4Z3JLNVd4OGc9PTo6eWXnFfjb01e7dvT6hWqCBw--&t=696186d1596721cb6e79013d4655c5d9&op=NzA1OA==', 'Episodio 9', '¿Qué es una «persona»?'],
	['https://jkanime.net/jkplayer/um?e=amRlSGN3RHU2TnBWRHkwSEpTS3plMTRybmRBcnJHODQ0TzZOQVQwdFlEc2kraGx5bzl3ZUpCNFdxQmpqa29OTVNjMUZjdU9COTdyaGNXN2RIamw1R3c9PTo6t6in5EQB72MoIagJwE1UiA--&t=84cdde86a4560c17d00c9c437fc2f0da&op=NzA1OQ==', 'Episodio 10', '¿Quién es tu «hermano»?'],
	['https://jkanime.net/jkplayer/um?e=cHBVM2k4ck9lZllSTkFMdkp3djlqbkY1QUZER1dRampiNmdLZmRrNEtCekJDQlpjZEYwYlpPUC9IcjZpd0QxN3pqd0tYV1lXcFp3ODl0cUJUcnZ3NUE9PTo6VAIKvWDWqVSFgarXy1VDFA--&t=ab4c389364232588a6680ad92ec170c7&op=NzA2MA==', 'Episodio 11', 'Simon, vámonos'],
	['https://jkanime.net/jkplayer/um?e=MFRkR3drMnFMVW1iQ05ZYVZDQlVzQzBKY09EU0NncWNqZ0RxRW8rZ2pNSE5lVTZTK0E1UzRhN3ZKaXNZelpOVlRzcGczck4vdzhoazlWalVWcjJGTWc9PTo6hYY_ILCywuCoVVxGhw4r1w--&t=6495cf7ca745a9443508b86951b8e33a&op=NzA2MQ==', 'Episodio 12', 'Señorita Yoko, tengo que pedirle un favor'],
	['https://jkanime.net/jkplayer/um?e=cW9MVzVOcDA5a29FNXo2eWU1djNYSkp1M1g4NTlJMkVwcEpIaG85Wm1yWWMrRzBicHAxcE5xdTNRbUlMdjJUTDlmK1ZlcmFYVGVJSDNBTVNCcWdpM3c9PTo6y6F3DGP_kyQPi1nCD5EI4w--&t=6cf75a28ed72a43ef7ca1b66ff345859&op=NzA2Mg==', 'Episodio 13', 'Todos, termínense tooodo el plato por favor'],
	['https://jkanime.net/jkplayer/um?e=SnNZQThlZW9acnk4dUl2SVBiQXJ4Sk1XdVh5NmFsaTh1dVdTNEsyM044eCtMV05UMFFNYmJDdGFybHlMeTBvdGRsSWNZN3JrbnRCZy8yVG1lMCtHVVE9PTo6nhiqQ8P..IlqQzFRz2bs9Q--&t=68a15b5278e4f7c4c056df9d5f1d3b1f&op=NzA2Mw==', 'Episodio 14', 'Saludos cordiales a todo'],
	['https://jkanime.net/jkplayer/um?e=d2JOTW9uRWtjOTcwbnNiV2d2bFVEL2FpSHEwOXovWEdVbElHcktueVJEdkJ6RHZBdEZYQXFmN1kwTkIxT2VqOXVTQWhPSUd2Y05NeFd0aXZ1SnVjaFE9PTo6PALYdLP1qiiBohY1SOmr.A--&t=76d7c0780ceb8fbf964c102ebc16d75f&op=NzA2NA==', 'Episodio 15', 'Yo tomaré el mañana'],
	['https://jkanime.net/jkplayer/um?e=NlgzZXNQQXoxTnJva0p6MHlaR1F6MGVIYU4zVWxYeVpDSjVuQXhVT1M1bzNnTUJtbVQ5VS9GWjg0RVJVZGgwK3ZveGJpMXdjK3RBdGJCa3RwdU9NYWc9PTo6gVxcoFZR_tG9k2BTaFvBOA--&t=88340338e0a0cdc54350c05cf056dca8&op=NzA2NQ==', 'Episodio 16', 'Episodio resumen'],
	['https://jkanime.net/jkplayer/um?e=YWxZOGdrZlQ1a2lqM0U5TTdhaEJMMkZyeXpuS09ndWF6N1JaenBLZWQ5RmNZZEx2V2dIcDJpMW83eEFFMUEvd05STVkrVlJuN2VnbmdiMHc0VUVESEE9PTo6.s7oQvojT6djkWn4I.Tqow--&t=57e5cb96e22546001f1d6520ff11d9ba&op=NzA2Ng==', 'Episodio 17', 'Tú no entiendes nada'],
	['https://jkanime.net/jkplayer/um?e=bHhDcldKM2tyZ0dpSys5ZXJTZTZjYXV3NS9ndW8yd3YzN0RCVEZaMTZJcWRwbEJHSjBaL2VYQW9oSWI1SisyRGRoNy85ZitHL2VwajBLK0pjbkRyT3c9PTo6NX4AsfXyfAId0msbZ2FBBA--&t=1109f8734e117143a570a8bf9f8c47b2&op=NzA2Nw==', 'Episodio 18', 'Cuéntame los misterios de este mundo'],
	['https://jkanime.net/jkplayer/um?e=ZS9zelMxVkpNaUs0QldYVTZCTmlEUGhBMWpZaGJxZHRRTGRjdnZuNzJYZmxKbVNZeHJUYm5vSmg5cU9tVE1ZM0VMbE51TFhjTWt0Y2NqUFRWY0xpZ0E9PTo6dMhoehSLRSm90p80UXcvew--&t=abc99d6b9938aa86d1f30f8ee0fd169f&op=NzA2OA==', 'Episodio 19', 'Vamos a sobrevivir cueste lo que cueste'],
	['https://jkanime.net/jkplayer/um?e=ZFU4bFZMMmhTVjd3eTlWUVRUYTdPM3F0T0dlQmdlOSsyRkd6QVZPNGJBdE0ya1huVDkyRzhzY1NSUEtJRW0yd3QyTndTZ2pyMk9lc2FTWjg5aFM1TWc9PTo633FR.HV98MP7K67Xt7Vdiw--&t=83187550749e6b8024a097630f9d4722&op=NzA2OQ==', 'Episodio 20', 'Dios nos pondrá a prueba hasta el final'],
	['https://jkanime.net/jkplayer/um?e=dFA3eVgyTlZtYkZ2aWRnZ3NKQmdIWEdDZXRFZFhkNksxQXdnT2xoN3VXb2V6ejFYQWUxejhBZlIxVmZtZWdwbVp5VHFIK0g5TEpuZmdRSStOdzBDY2c9PTo6cGozl6EiOq5ZQK1aEygMOA--&t=08f0efebb1c51aada9430a089a2050cc&op=NzA3MA==', 'Episodio 21', 'Tú eres alguien que debe vivir'],
	['https://jkanime.net/jkplayer/um?e=bVpKSGVzUXRYWkxOak90NGRubkZDVmtaMVVrQkQzaXkwb3Vnd0ZxRkU3QnpqMWVYU1NtMjZpZGxMSE5DbXBzbXJaempKaHJQdmhsck13QkVOdkxBYXc9PTo6Ebq0Lpse5phGqaxNQ0knGA--&t=059d9e01176ab2f0892fe2215835bf19&op=NzA3MQ==', 'Episodio 22', 'Ese es mi último deber'],
	['https://jkanime.net/jkplayer/um?e=QWdCdWJQVmhDcTdHVndoQXhNbGhRN1FIZ0NOdXVtOUd3QmsyT0tSUE1rSTE4YWJQUUU3ZndpZ1A1VVFLQ1R4VVZtOTdNZDI3Mll2VnFTUkNwTUlsSmc9PTo63nRwf.mWCmxwhUeQX7A5Fw--&t=29e11ea8ec6c7804a7f939e8e78e9c18&op=NzA3Mg==', 'Episodio 23', '¡Adelante! ¡Es la batalla final!'],
	['https://jkanime.net/jkplayer/um?e=Ny9kLzBVQmp3WjJIeEhXQ05zYW9UUWR1eEFRN2plYjdGZFU0VDI4WFpHL3luYnFzV1Z3SGl5VCtSMnVkWlEwTkVBUDloZEl4ZjBac3I2NG9yaFc2VXc9PTo6T.PMFrcuJb9dXN1UQjWsbA--&t=c7217b04fe11f374f9a6737901025606&op=NzA3Mw==', 'Episodio 24', 'Cómo podría olvidar este minuto, este segundo.'],
	['https://jkanime.net/jkplayer/um?e=bjVOK1g2ZU8rajRZWXFCak1oUG1BaWVJc3JKNHNNOWduVlRaRjAvcGcxc0RDMzJoQUNmSi91aFdYSzM3Yk84NWlOTFVHY3VJS0ZWeHB6SC9RUVRqM1E9PTo68o3Zy3.opbi23H5rM.NwLA--&t=4f2b590864ff38e818c75312f81b1cbf&op=NzA3NA==', 'Episodio 25', '¡Acepto tu última voluntad!'],
	['https://jkanime.net/jkplayer/um?e=U0xvRVdmUXdDcUIrYkdzUDBMajlCSzN6S29DRkRIaHJDN1Nqb3k0MG9iVktiTU5PTmpZOHJwWTZ2ZStCc09rOTVLSm04U29RSzRtaWFiUUhxVGVpcGc9PTo6iRMltRVHCwa.beu1ddRFJw--&t=bdad073d2c77b0525e32a0e9784089ea&op=NzA3NQ==', 'Episodio 26', 'Adelante, chicos'],
	['https://jkanime.net/jkplayer/um?e=VlpJdGFVRVFrQ0ZJNW5BRXJ3cTV6WDFmZjU1bDlqSHZ5SytEMVN6bWc2bkJIV2hYblBjMVpVcy9JdHFrT043MnFsUUgvZ201TTNjVGhmNk51dVNLSHc9PTo6sJRMxkY9.Bob3s1BRXk.XQ--&t=f02a8fde79ddf5b978cd9ae9d408b7c1&op=NzA3Ng==', 'Episodio 27', 'Todas las luces del cielo son estrellas']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Gurren/Portada-Tmp1-Cap${index + 1}-Gurren.jpg`,
    'iframe'
]);

const jujutsuSeason1Episodes = [
    ['https://mega.nz/embed/umAGSTqD#VgztgPiUJ2N1NdnmUtuuXYQmO0HyiZyhvltix2l1EZ4', 'Episodio 1', 'Ryomen Sukuna'],
    ['https://mega.nz/embed/P7gDiKDR#jKW3OESbs6CUfxHepJ5cvHWWvBgsNXJGe8p2DcWysaY', 'Episodio 2', 'Por mí'],
    ['https://mega.nz/embed/XjZi0ZpL#OKkOtGIJT6hrrQ0r977E-29IDyuBeCRDv19iurOvovA', 'Episodio 3', 'Chica de acero'],
	['https://mega.nz/embed/6rIwTTAD#UhsG3p505Gce4tk5Ep9Pvye7BY-j_Oln3rrw3lvaGRQ', 'Episodio 4', 'La existencia terrenal del vientre maldito'],
	['https://mega.nz/embed/28ZhSIQS#1onucq5Ok2o47TB8ZRTbPUiP9cdAV6q3UneUWsf_PAc', 'Episodio 5', 'La existencia terrenal del vientre maldito II'],
	['https://mega.nz/embed/TnhQHbha#HmgLwvT4-4UXI65ht_HMa209htMAWK5D7xBckN80fHY', 'Episodio 6', 'Tras la lluvia'],
	['https://mega.nz/embed/bjpE0SqZ#tRoB-C-JHoPHz_v81w1_jbS4s39c_WUkemresHjH4J4', 'Episodio 7', 'Asalto'],
	['https://mega.nz/embed/enojmKKC#YJ4Lv2_ClKrowuEDer3TjbjLA7GVatL8dliAtoPfwX4', 'Episodio 8', 'Aburrimiento'],
	['https://mega.nz/embed/Xi4E3S6I#GCM1KYRFc4iTMmykofLHDqJ7XoWsFhq9mc10GQfsj0Y', 'Episodio 9', 'Donnadies y castigo'],
	['https://mega.nz/embed/b6wWFS4L#O-wc8rclYR0QKSoU-OJtbU4_zih_fgql8x3k4nSsLcg', 'Episodio 10', 'Mutación Pasiva'],
	['https://mega.nz/embed/umA0HC4R#zduP1VyJVwUu659gJZT_UWgOOGJZ5wIiD5bE0PLZftw', 'Episodio 11', 'De mente cerrada'],
	['https://mega.nz/embed/n2okiQjB#JqltKlmjV20kkdZ7OWJErrfWtrup2ULln3kHa5dyHQI', 'Episodio 12', 'Para ti, algún día'],
	['https://mega.nz/embed/LuICnIaJ#ilQftnXEsKUPhy0YysepOQ-eJcb_CnggOc1rBNeZCrY', 'Episodio 13', 'Hasta mañana'],
	['https://mega.nz/embed/L7AThZaD#RH_NIPlfDR9sh6DaWpn_W3Hz7t1lJZBrOFV9zoWfAdU', 'Episodio 14', 'El evento de intercambio con la escuela de Kioto-Combate grupal 0-'],
	['https://mega.nz/embed/i2ZkkRwa#8gSYt39dfo_k_kXSjaGNtf2r4tstfVw6WpKOaHoKsjI', 'Episodio 15', 'El evento de intercambio con la escuela de Kioto-Combate grupal 1-'],
	['https://mega.nz/embed/LrZwEBxZ#95hsOpI4IsqmblKG8S94aWNK4Nv9SMwVWMsb-dPrDw4', 'Episodio 16', 'El evento de intercambio con la escuela de Kioto-Combate grupal 2-'],
	['https://mega.nz/embed/Tj5ViQYb#m_A-V7x8icTTPVKWawf3jE0oJZ0kdtRJtfQ0y5JjLXY', 'Episodio 17', 'El evento de intercambio con la escuela de Kioto-Combate grupal 3-'],
	['https://mega.nz/embed/XhRhEBoL#sfIbD3nlAwP7NPyDdtILmE51OviqZJfbkV5xcS8mueQ', 'Episodio 18', 'Sabios'],
	['https://mega.nz/embed/frRkHABB#qmIHh6QDIGZjr4raUfCZ5jSCNqGMFfqUAf90pnkEyEM', 'Episodio 19', 'Destello negro'],
	['https://mega.nz/embed/erYSxKjL#FU7kuTgw7bM1b6ktEQEVLbp7cWK_18J_BTcTf_VbjDk', 'Episodio 20', 'Fuera de lo común'],
	['https://mega.nz/embed/WtpwwYzK#aPoO8cFiVsVsQvPPbtbBp2zeUQFc3ZYlW7dNL4D4Bhg', 'Episodio 21', 'Jujutsu Koshien'],
	['https://mega.nz/embed/6w5HWJCL#Yr4Es4DOm-GbfgzsMqX-3zPIDN8h_8q0OVHmMDuo4PM', 'Episodio 22', 'El origen de la fe ciega'],
	['https://mega.nz/embed/3goBFCiL#1BWJ-n3w0za3pBMlC7JOkqfUBOPdbfsb3dojocJ3rd8', 'Episodio 23', 'El origen de la fe ciega II'],
	['https://mega.nz/embed/rkBRVLTB#TEdbN75pRuqR0TymVEkb53eKQYpW80nGk0gfNZM_GK8', 'Episodio 24', 'Complicidad']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Jujutsu/Portada-Tmp1-Cap${index + 1}-Jujutsu.jpg`,
    'iframe'
]);

const jujutsuMovie1Episodes = [
    ['https://mega.nz/embed/yihhgCSY#4O-HfHaOB8qPQWS-Mea0rrtCEKFNmsesozkZbW7pfb8', 'Episodio 1', 'Jujutsu Kaisen 0'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Jujutsu/Portada-Movie1-Cap${index + 1}-Jujutsu.jpg`,
    'iframe'
]);

const jujutsuSeason2Episodes = [
    ['https://mega.nz/embed/K0xU0Bza#LbNhy2sDPLiNkPkhdC9DskI7H1iDDKl-joZVYP3x7Ws', 'Episodio 1', 'El tesoro escondido'],
    ['https://mega.nz/embed/aoIzwKSC#tvCMgD5IBIo559BC7MFZepMpOhAo11DqhrGo5kG37fQ', 'Episodio 2', 'El tesoro escondido - Parte 2'],
    ['https://mega.nz/embed/78JgCTxR#mfAgS1oZ36nyfQSy-CedCMrWSiMGM0BzxMmOsyOaASo', 'Episodio 3', 'El tesoro escondido - Parte 3'],
	['https://mega.nz/embed/m04lwLSJ#i_jtRkDEwEYh1w1at5oYs-rlaWaGXaGTqjlPfG4Ye6A', 'Episodio 4', 'El tesoro escondido - Parte 4'],
	['https://mega.nz/embed/StIWxTZb#8zXl0QsABqJVkw31rIs4fG-yvhKALA6swPwE_BP3_LM', 'Episodio 5', 'El tesoro perdido'],
	['https://mega.nz/embed/b4pRVZyB#730i7FdmOpS-Y3YX6X-0DjoOiOJKdV3AorTh-kwxwO8', 'Episodio 6', 'Sí, es eso'],
	['https://mega.nz/embed/DkJwzAYZ#9O05BzvjcVcM2NMOmQ_uDBq6kP7un_yjiWdeRzxz9G4', 'Episodio 7', 'La víspera del festival'],
	['https://mega.nz/embed/bhIQiCoD#dFQtg1onLiOP7Ksp173mhVLyZJSEmgUIWeJADjSMhL8', 'Episodio 8', 'El incidente de Shibuya'],
	['https://mega.nz/embed/D5ZU2Jib#kRk3OunQ4mJsvNK8SO5z0DkB2Eb9Zj7DPzcjqs5K9nQ', 'Episodio 9', 'El incidente de Shibuya - Apertura del portal'],
	['https://mega.nz/embed/31x3mA6Q#2qRJWYbEbfV1SeL0lvF9jv1bmG3HgsfN0vBP1zB99l8', 'Episodio 10', 'Confusión'],
	['https://mega.nz/embed/grEUBKIQ#vH76a5LbvalkqvSpuTFqtkG8ZDseUYgI7Q6xZCd34HE', 'Episodio 11', 'Espiritismo'],
	['https://mega.nz/embed/ezhVUYrJ#-qjsZ6WvQLq_AOaENcQF4Gbac8XZzRJX_hckBFp4WKs', 'Episodio 12', 'Cuchillo desafilado'],
	['https://mega.nz/embed/fjw3DCob#Iy33bMWGEBAyF9eh32vOEl7uNdJUICtcFNIqSqnHoA4', 'Episodio 13', 'Escamas carmesíes'],
	['https://mega.nz/embed/v4xA1LTT#EJDhwK-epA1bP8O_E4JfIzxbQBYm9L9Y7l4C8TwsLtI', 'Episodio 14', 'Temblores'],
	['https://mega.nz/embed/nyRFBBSb#OOCgSHRm32kHx1Cck1TbNwIArWKJRIl6SAldj6kxrhE', 'Episodio 15', 'Temblores, parte dos'],
	['https://mega.nz/embed/L2ABxRoA#tcmws62lWDEEZetWTq-P6tv34mV0g7s717Ff3IWAAHg', 'Episodio 16', 'Trueno'],
	['https://mega.nz/embed/muZE2R7L#67nD1m82zhBar2VEuVbVlEMB89SD7erGX4Og8cCfd74', 'Episodio 17', 'Trueno, parte 2'],
	['https://mega.nz/embed/KmYwTbZI#xWKb28eagnQe5yIUpiQeFgcnimJzEJ5TlibMTxOHA_I', 'Episodio 18', 'El bien y el mal'],
	['https://mega.nz/embed/SuoClRyC#_5-6mcpAbT2v6WmJe5FVmMkcGAh3ENFIxNxcB9T_nug', 'Episodio 19', 'El bien y el mal, parte dos'],
	['https://mega.nz/embed/XuwHCaaT#Zj2kCquk5eb-sqw_GmNbc0rZ9Mw_9UgCahL5GztO1Qs', 'Episodio 20', 'El bien y el mal, parte tres'],
	['https://mega.nz/embed/P7QXzSTD#DGRJSPOSxLMs6NTwmusEvBnzGp3o8faxFa1S--yzfuw', 'Episodio 21', 'Metamorfosis'],
	['https://mega.nz/embed/X2AAXTZI#5J7Uegmi-W3Z9lnm8zs1ArrLONW4WHp1IHuxO3tT3dc', 'Episodio 22', 'Metamorfosis, parte dos'],
	['https://mega.nz/embed/juZRAbga#2aonejPw1iLJcngyfN5FluFUT3x27jC4Dw0VXOn7B-Y', 'Episodio 23', 'El incidente de Shibuya, cierre del portal']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Jujutsu/Portada-Tmp2-Cap${index + 1}-Jujutsu.jpg`,
    'iframe'
]);

const jujutsuMovie2Episodes = [
    ['', 'Episodio 1', 'El tesoro escondido / El tesoro perdido'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Jujutsu/Portada-Movie2-Cap${index + 1}-Jujutsu.jpg`,
    'iframe'
]);

const jujutsuSeason3Episodes = [
    ['https://mega.nz/embed/YYlzzLLQ#7IXWkx_-cpuaUn-TMlklPlXb4N0sZzqp5bRr_tVrlBc', 'Episodio 1', 'Ejecución'],
    ['https://mega.nz/embed/lNVUQaBT#7dVpHoJAQdJyDYd0GDSeYGYDIJvIptdSdvf1YVTgk_I', 'Episodio 2', 'Otra vez'],
    ['https://mega.nz/embed/VVMj1QJT#P38TW7_Mm1OHT5ejk9Jjk_5oafyVt6V3Q-CJHyVSAdY', 'Episodio 3', 'Sobre el Viaje de Aniquilación'],
	['https://mega.nz/embed/RQVQVSjQ#t05scZmS7m-c8EZ1Yn3SHK2mCvv9jJ8rGOju86b62yk', 'Episodio 4', 'Resistiendo en silencio'],
	['https://mega.nz/embed/sUN2xCBD#HEr6RpWXRo9zaA9vheY13RsRkj9TE9gYUbNiHJiWKRo', 'Episodio 5', 'Pasión'],
	['https://mega.nz/embed/cIETCKhZ#-4stjo7cJN-hTgn8m1hbkmyYBfL91ICbb0Dt1W05OP0', 'Episodio 6', 'Pieza'],
	['https://mega.nz/embed/NclG3CKA#Xu41z2nnBCU-nFPYBdIwD7pbNp59qhOoZL0BWqIPlxU', 'Episodio 7', 'Colonia n.1 de Tokio, parte 1'],
	['https://mega.nz/embed/1IFGiIzK#_fokPIIaXNrZXo08vNldT5IUHaBXGMZfLrUaLzv5Rf4', 'Episodio 8', 'Colonia n.1 de Tokio, parte 2'],
	['https://mega.nz/embed/BJd2FRwI#ssFuDE5wZm43BRgt5stylQONWfWsifKBNSWkOncPFqE', 'Episodio 9', 'Colonia n.1 de Tokio, parte 3'],
	['https://mega.nz/embed/0dECyISL#mYzsVrnAMOMbm8eejPjTfCqSqcn62W0UWMdgh9gi6sI', 'Episodio 10', 'Colonia n.1 de Tokio, parte 4'],
	['https://mega.nz/embed/EIN21aIb#_-9j9OtF4EN27ahyhxGmVAHS6Fd-jtZy8vk_RWxP1DY', 'Episodio 11', 'Colonia n.1 de Tokio, parte 5'],
	['https://mega.nz/embed/BQcSwYqb#uv_xDnXlfs3EhDxW0teF-H8qgwTe_DyDuyjjTzCsk0k', 'Episodio 12', 'Colonia de Sendai']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Jujutsu/Portada-Tmp3-Cap${index + 1}-Jujutsu.jpg`,
    'iframe'
]);

const noblezaSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=UCtTMWZpcTY1VnovUnh5enJhYUlHYVRmVmcweGlrQldWY0hTeHZJSXBoaVk0Ync3OVYvTVpyOEdSaEVna05TanEyZE1MTDZNWHc4TitLc0NEWHNGS3VLQmlmWHprM2RQM1ozTjVYS0lWdTg9OjrvctOVEQIYQw.fBAYAGkpC&t=fe6569e0fa5b8fe840d6fc276ce08755&op=NjQyODA=', 'Episodio 1', 'Rintaro y Kaoruko'],
    ['https://jkanime.net/jkplayer/um?e=amZYV1cvWmtzalliRnhhZHZteG1uT3RsRGJqREhzbHRvUndBdlFjK0w0djBNRllBTHVJN2I4L0Z4ZnBXQkd0S3hiVjVPUjdlWEcxRDJDa2l0Yk9KZGpyWnEvQVpqeG5JZU9PWm4xNmFIak09OjpCoPzs1IhAZ6qU8YtPjd3H&t=10d9fd22d5518d32a6d30207bbc3b2ab&op=NjQ0NTk=', 'Episodio 2', 'Chidori y Kikyo'],
    ['https://jkanime.net/jkplayer/um?e=c0VxbzB0Qm0xb2R3K3dyUENwV0Z1OXM0QUtvU1NlOHZxRVJ0L1Z3MDFYRkROcmFXRkwzNTM0UngyQ056WnRuNFV2WmxNSnhxYm1LY3ZESWVLMU1VSFpkTDhwZnNzamlMRzZJVFZDNVZjTWM9Ojpso7H6d3n.Uhyi2OxnUKl1&t=099206317539aeba176f5f0f8cabc713&op=NjQ1Njk=', 'Episodio 3', 'Una buena persona'],
	['https://jkanime.net/jkplayer/um?e=NEJrS1VVdHhiaGF4ZEhvdDhyaWE5WDZGQUZHMXZjN3AvM2pZNENoMFh2MEVLUElVMjhWZndvam8vNkh6UlFsUFZZREprOHVTY3duU1FGeXY3UzgyRFE9PTo6pyRAqgln_gCSPCYy2FyX_g--&t=a6d37cc5a51c706b777302573f90e78a&op=NjUzOTA=', 'Episodio 4', 'Afecto sincero'],
	['https://jkanime.net/jkplayer/um?e=UmFzQWdocXI0bWZsQ0wxWE80bnhCWTlJN0k4YWtXbEVGTUVEV2pTV1JPWE56ZjFsUmFGWGpyNW1ETmcvTE9vSVZrcDkvallranRHalY0MEJrNDVpdkgvTXhSeDFjM2ZZR0svWUVnM001ZDQ9OjoE2Bct9p3LMnyie342cFfJ&t=63bc59e050fdb27a0892fd9da6adebbf&op=NjU2MTk=', 'Episodio 5', 'Presagio de un nuevo comienzo'],
	['https://jkanime.net/jkplayer/um?e=SUlvbFBWbWM5Tzk0ZHhiUTdaRTg1SWV3MU0vYXpQa1F0TlgvbWhkZVB6RTFNekN2MkEvQVVpa20rSjF0TWxFTFpFODcydUtwbEZnRk1nN1p5REZhUDFEcDlCOVl1UmZDS0ZHLzBtZm1rY2c9Ojp9SS4krsU5uBewwZsaLwLP&t=c1cba695929f7c9d7c595345f96d9e8c&op=NjYxMTU=', 'Episodio 6', 'Me odio / ¡Te quiero!'],
	['https://jkanime.net/jkplayer/um?e=Q0NpbG91UlExalI2VEtLV1lUQW9oMzVCKysyYjhEUStrUlFCKzh1bW5WOFZSQkN0YXVWMHIvVDNESTZsQTkvaGM4ZTlnV1BCR1V5eEs0QWFUQTgrMVFkZ3pVNzNKMUdob1d4K3JLbnNsQTg9Ojq4qNA76bYD14jlHM_MatVu&t=4098646be3cc2ec5884ddd8a060bd4e5&op=NjY4MzY=', 'Episodio 7', 'El mejor chico del mundo'],
	['https://jkanime.net/jkplayer/um?e=NlMxQU14ak9HeTdnZmlkR0NHd1VMSXFXOHVnbEdEQWY2SllMWHpyWTdDeUxMNHhpOGlMNWJTQ3hpNXR0M3RqczNYL1lKYURRYWRHZU9oQmhXTFBjN1E9PTo6kKZeki1lSZYo.b3EeKe2MQ--&t=ca412e44bb9a199aa66eb1b971652df5&op=NjcwMzU=', 'Episodio 8', 'La verdad de lo que siento'],
	['https://jkanime.net/jkplayer/um?e=WkhqOGwya3cxVmNvdmM0VkZYeXFjNEhtZXdseVFBb1BpdE0reDBJcTBNTmRwSXlCMXlQK1hHWGgrWk5hMWdpWlM4NCtHLzF4SXVsSE9vWlFFTmM1eW1WZ0lHdmhIWWh6bGM0U0pKbU1mUTA9OjrM_D5I6gnafAfHIzUjny6R&t=143ea86fcbc92b62aa284e6d74927a8b&op=NjcyNzc=', 'Episodio 9', 'Pelo rubio y pendientes'],
	['https://jkanime.net/jkplayer/um?e=bG8rd29kQUU2WnBGU1QzSWJDRmlsWFJ3dkNQMGw0OWN3cWJwSGRHWkN0SWZhbzNPSlZFUUUzeGZKSEl6UWZWWUs4MTV1OVNLZ3lFSWxDTVQzZ1U5QUE9PTo683hC.Lc5LwMcq_mTHPFqSg--&t=2783914090f3b00aea6f405dc66daea6&op=Njc0MDE=', 'Episodio 10', 'Tormenta de verano'],
	['https://jkanime.net/jkplayer/um?e=SXVsVVpkRE00UnVjQVNGNWl3NlNFYlpRNlVyNHVMNWlIUUhIN1VWeVp2bG5iRXYyYW9xWUs3SUlVMkMzNzA1QlE5d2FiTmN5bnBBR2ZtQVYvVnk5M1FYMW9aQlFWb2xBeTkyRmVXdTNqK1E9OjqcWcqsPyamOgCj2bl5dRDq&t=bc8b713d9d1cc0b974ade5de73929193&op=Njc1MTU=', 'Episodio 11', 'Un bocado de ternura'],
	['https://jkanime.net/jkplayer/um?e=K2pMb25aTDlPd2N1TGFzVFgrSUczQWJIYkR2T1Z2SjhLWDMzcFpIU2xRWGU4VlNlWXJ4MHdoNmwwUHlBZEJ0VG56eFRxQ3BWdHg4R1A0bmt6eHljQi83ZVpwVXg3OGpxamJ2VmwxeTZJc0k9OjoJ6NjwkERT1aVG_CLj1Oo1&t=924e3d18456d14af181296787cd874d8&op=Njc2Mjk=', 'Episodio 12', 'Desconcierto en la playa'],
	['https://jkanime.net/jkplayer/um?e=bHNhTExQZTUxRUQ1ZVFDa2NPR2FEMWhvRVZwS1ptMGgvZ3Z0QVZqWjJ2MTg5ZWFhRWtNL0x3cjlvb3FRSEpHQVJ3MjVMaFl1ZUlzR3hTbHljdDJQZWc9PTo6mt_rQGNs_8QZ6I.tEFumog--&t=34d530db39916f25cb710626d56c2d29&op=Njc3MTI=', 'Episodio 13', 'Kaoruko y Rintaro']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Nobleza/Portada-Tmp1-Cap${index + 1}-Nobleza.jpg`,
    'iframe'
]);

const ylaSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=ejdlQnlNZ0JLNDdBNnJhT2xKRVR6Y1c1MlhLSHU1OFYzTGI2ZjNXd0hiWWFBeVFIUEVsZXhBazV6VVZIb2RjdDFlM0ZjUkw1QjhubWZzYm5JMEYzZmc9PTo671MpRIPDH_BK66nwMexl8Q--&t=496de0c88f240bfb9193f37b29db8add&op=NzU3OTk=', 'Episodio 1', 'Monótono'],
    ['https://jkanime.net/jkplayer/um?e=MW96TCt0am1ZNE41MjlzbDMvaklqNVl0U3ZXNlExZ2ZlR1c3NEVqWTZqaHVmRmZIK1J0aW42T3lhL1lXOWg1R255eHM1d2JWakp4KzJBQVNnTDJvNWc9PTo6weKNOTiHzTahX_tkXBmzwA--&t=afd0cf3f127c15df54897eefd82c4c7c&op=NzU4MDA=', 'Episodio 2', 'Amigo A'],
    ['https://jkanime.net/jkplayer/um?e=WFczVDdiaXUvc01Eb1hjdDRUOXVCVjBWN2ZqUElMZFRPZllXQjdVclA5c3ZIQ2hvVzRYOGZsSGhsenc0YUNLdS92cElkTGJ2TXd5QTk2V29YOW9aVnc9PTo6nTTYG0WVjGfKWEXykk9cCg--&t=a6d735d5f39b392e7a48c8eed45a975f&op=NzU4MDE=', 'Episodio 3', 'Dentro de la primavera'],
	['https://jkanime.net/jkplayer/um?e=RnZScGltMng3Zm5lT0ZpQklNdng0b2o4R2JrekVCbGc3VVJSaXBINkorenc4OUx3MFhrWnFQM09DUzJqb0x4TFkzR0cyT1VjQStoL1pnS1JHMzlVSGc9PTo6U2Gko2pvXUFipMHrqpHVCg--&t=f03d7a0deb28174607ffbe35a5feedc2&op=NzU4MDI=', 'Episodio 4', 'El viaje'],
	['https://jkanime.net/jkplayer/um?e=Z0IyZTI4RXE1SXpzTlBPRDRQZXhRRk1YSHVHZkhjVWhoSW9ORk0weW1GWlc4U2t5Q3Jqd2REdUZNcnp1cVEva1dPL1QyU1FMVHVPOGhBMVRuUWE1cmc9PTo6xpKjLwh_BkgXWEz493IRHA--&t=6a5188eb9695d725301434cddd8a0dc9&op=NzU4MDM=', 'Episodio 5', 'Cielos nublados'],
	['https://jkanime.net/jkplayer/um?e=b2hCeUlOL1k3cmlaVUVYS09sLzdKNWc5KzF4Z1U3eWgxaTczM0szSW93ZXVnLzR0MFJjNnNEajRWR200WUk2bk1YK1gwQnFZUVlRL05UOWpkY3hLOWc9PTo6i.HVhEa99oXCesMuJ5c65A--&t=9f9841df8030e471dda2c3d913f8365c&op=NzU4MDQ=', 'Episodio 6', 'De camino a casa'],
	['https://jkanime.net/jkplayer/um?e=d2Zkbm0zT2FqZGtUSHcrVEpURzZVTnF5MTVlRVFjZ2x2RFhhT1JlU09iOVBjbXZiS1NCRzVkb2dBdzBadlEweEtWMDZRZGF6cjB6Z01IK2dvYjZvV0E9PTo61o8gikAjrsptyY8OxRITIw--&t=b08ba5546f0ba267117924c47fbc0fbc&op=NzU4MDU=', 'Episodio 7', 'El susurro del mar'],
	['https://jkanime.net/jkplayer/um?e=OEhwYTZSRmZ1QmwvenN0U0RZcEJsWmIwamo3ZWhPeDRNWjlQd0pvY2hjaXZrWVFaQjlRRGZoQnMzQ1FrUDVvZUxTTEZrVUlKWmlKaTRDd3JHYXE5NFE9PTo6NGR42mq_EjT7.VyiLU3ZsQ--&t=bcd9cf783e03370d5b2eb0cd58f0149e&op=NzU4MDY=', 'Episodio 8', 'Que suene'],
	['https://jkanime.net/jkplayer/um?e=aGFBaDU5cTl2S1U0bVlvMEdCZ0o5akduMTBYMi9YWEJJL3JTcTlvREVPTWlFUlJSSGJIS1ZJNDZpZDRpaGQzaG41QjlBZGJKUFhPcExVUWlKMDRLTWc9PTo6UNqJ4yn9S5b6TUCtV2KDkA--&t=ba963a2d7b9c29c886b84763bdf426fd&op=NzU4MDc=', 'Episodio 9', 'Resonancia'],
	['https://jkanime.net/jkplayer/um?e=anlIcXVkOGdtZ2ZUaHg2eWY1UlN0MnMwRzBSVmp1VENPTWZURHU3ZDU4ei92Y212a0RIdmloYjNpellHeFJRaFJXU2lTNVdUU2ZMSVhpenVsMmgwVmc9PTo615b_qJnI10UVgapToGV6Ng--&t=2c6aa0a30002532cd38fd98a6705d949&op=NzU4MDg=', 'Episodio 10', 'El paisaje que comartí contigo'],
	['https://jkanime.net/jkplayer/um?e=MmVsWHBqZXFnSXQ0ZG1icjhuMFVmT2IySDN5eU9Wa0NsNGFjRC9kbERvQ3lMWEtnYjZUNHgycGFub1lVY3lhaHVrT3lnQVc2TnVVYW5aUWhOU3VENkE9PTo6Fk34z7KBMXXlUWtglyK43g--&t=25b59d1f01395d9e5e0769c4ae283117&op=NzU4MDk=', 'Episodio 11', 'La luz de la vida'],
	['https://jkanime.net/jkplayer/um?e=V0hnM3c0Z2ZCc3VzdFM3bjJiZ1duNlVsSzQyK0VZMzN1RHE0U0hocHBLdDlrMmIxZTJwajRtUUpKS1dlYTVWbkEvLzVxSWhnd0VScEEvT1JidGp5WlE9PTo6hDtK5QLjvnIoKDAVT7ZhBQ--&t=3840f652cfde27c93f306cdace5a494e&op=NzU4MTA=', 'Episodio 12', 'Brilla, pequeña estrella'],
	['https://jkanime.net/jkplayer/um?e=Tk8rMkFQZ3d6MWYyQ2xMUTNWbFFDM2RIOGttMHFJdnlzYW5UZERkTDBKcERFMHNpVmFJWjUwU3NVMXZkVmREUko0T3g3TURlQXN3Q1JXdFVLNkw5ZEE9PTo65yfBgBRenuIbNKw3wKVvQw--&t=79cf47dd4f5056ea81943df74fdc6806&op=NzU4MTE=', 'Episodio 13', 'La tristeza del amor'],
	['https://jkanime.net/jkplayer/um?e=S0RReGsvcldBWExRZ3IyNlJlZDRKc3JiZnJtZkFKYzE0QWt4dVdhM0NQL3NJVVRCSkVUdm9pSEJIOUhJQ3NqQzlDczFIRUMwV215Z1FOS1VGZkUxM0E9PTo64FrNu_ygLeebUYKCr.Nbgw--&t=13e4597a43e353770b7f184aae84deed&op=NzU4MTI=', 'Episodio 14', 'Huellas'],
	['https://jkanime.net/jkplayer/um?e=NjhwUWpzUk1wL1NjWFdsd0l5dFY4ako1cW9RK0hmbWVzUXNNZTVEOWVOZk5GUlFTbUJJR21JbDBkSzA5Q2xNZ292RXp0L3IyQlBhV29DbFN1OGxSZWc9PTo6quytC0D_0VujMXVwUSVqFw--&t=87a5da8c396d4aeff10db206018db25f&op=NzU4MTM=', 'Episodio 15', 'Mentiroso'],
	['https://jkanime.net/jkplayer/um?e=Z3RGTlR3eUFRaVMvc3V6Ti9PMzlSdmJwWDUrS0JDbUI5YVNKaEdBR2lXWTZkYmk5TEdXT3dyWm5PSThCK25GcTBrT1JQYVZDZ3ZVcVBydHFyeDFYaEE9PTo69jd31nFWQdDt5YkCdPtzWA--&t=8afcc44bd2ae9ac536ef45b4b0fb0dfb&op=NzU4MTQ=', 'Episodio 16', 'Dos de un tipo'],
	['https://jkanime.net/jkplayer/um?e=clJuazBkWjdyYldiN0N6Z0xMdEh3UmhIRm5kYVVCUktQZzBsbW16cWt4R09VUDBPSGYvbmI1cDRPS0RFME42anJoZzBKZmpKbUppUU55SHlrdVJjVFE9PTo6wC5u7xi2ZDDcs2QKptyRAQ--&t=d6792a0172ae731fdd22c5414e8d963d&op=NzU4MTU=', 'Episodio 17', 'El crepúsculo'],
	['https://jkanime.net/jkplayer/um?e=WUZ0MGxCRGlkbWNRMk5aZkFoK2JIbS9PNHBWbFl4bFRENFJaVUo4N3ZteHZUSlcxTGo3NFFKcitkMXZUNytlNVk5cDZPcmNjUGxSZTRPVGhHUHc2N0E9PTo6SY5DQnWYdy.OZpVIchUHGA--&t=70105a07fb565f113a304c5d7d76ccad&op=NzU4MTY=', 'Episodio 18', 'Corazones unidos'],
	['https://jkanime.net/jkplayer/um?e=V0lKS0d3clJMYlZYV0UwUFF0ZFhlVER2bGgrbGtXUWFNV0VzMmxtellaTDZ2Nk1tMGVjY1IrS1ExOXpPbFlzQklibnRBaHcyMnNSTGk2ZXVhdHMrL0E9PTo6yrsOD94iygJ74VKjgkIgtw--&t=5568ad247520bfcde2089fd3de84ab91&op=NzU4MTc=', 'Episodio 19', 'Adiós, heroe'],
	['https://jkanime.net/jkplayer/um?e=YWE4bkprdjZRK3RVTjZUSUQrY0pGRmh1QUF3U1hqTHB5V25adEFLelBLdDRPekV0Wjhsd2U2MngwbSs4eE55U0ZXMnIvM1d2dWw5emJRM1hqN1BCcmc9PTo67AZhNe8FOiBPXu.M_bzpPg--&t=2b9d4763ab62b3b77242b6768bb9036e&op=NzU4MTg=', 'Episodio 20', 'Mano a mano'],
	['https://jkanime.net/jkplayer/um?e=NkxxTUdwSlNuUUNheHBULytWYXJNSVlua3RlclU4eUZKVWRzaE1IazY1V3hJMmJqa1UyZjBQckRZVG16V0ZKQ29rVGNqVWZzNXFSbjZDTHNJaGVQNnc9PTo6sVGqEKGB_OofFyX7a8jMJw--&t=bba936e5fa8fb9fc26abc374e8da2f2c&op=NzU4MTk=', 'Episodio 21', 'Nieve'],
	['https://jkanime.net/jkplayer/um?e=TjZxV0JlbHpLNVZXR2xVT0Q1RFFUNHgxY3JYb0FyWE1zb081Z3RaODU5R1VGL2tQczZCQ1VXUDA4NGdxRytBODRyVDk3VklybWNWSXQzM295T0lJdnc9PTo6r7ggD6t6Fycu7hD1nwS22w--&t=7c8fc90a4b50a42635e7afab69caaa93&op=NzU4MjA=', 'Episodio 22', 'Viento de primavera']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/YLA/Portada-Tmp1-Cap${index + 1}-YLA.jpg`,
    'iframe'
]);

const cloverSeason1Episodes = [
    ['https://jkanime.bz/jkplayer/um?e=UnM0ZDNQeThTN3hkNmVaenNKMnhraFMyV2RpSVErY2hVb0Z6V2R3dlN3NURnUWpvS2I1ZFhTQ3ZMcjIvT0pVbEk0RXhRZTV3dlVPOHc5NUNKWi8vU2c9PTo6O79MOosZ2hjugZ4u59KT1w--&t=6d59dac9480611cf3e9e9b0d64ec2cff&op=MzU3NDI=', 'Episodio 1', 'Asta y Yuno'],
    ['https://jkanime.bz/jkplayer/um?e=OXg1RFJEZlhwL1NmZ3c2MXJuWDVueUpvNkl4bGFHY2s4eXVtVnpGUjdQOFAzMEltS0tTVmRLY012YkRYMVY5ZEV6TW5sNTJnMXRnRFZvdm5FVkRyUkE9PTo6wnsA0cSFKPDDs7wN.aca2A--&t=551091255fc98ddc0cbabb2111e68486&op=MzU3OTk=', 'Episodio 2', 'El juramento del muchacho'],
    ['https://jkanime.bz/jkplayer/um?e=QUMzdVNrMzhxQmVsc1ladWl5UGJBcTRRSmQ2ZEU4Y0Z5T0RySk0yMDZET1RsbFhyd3pzZ2trc3pOZXVaRmJCNlhpdEJvOTM5eW1vVGUrSEdEU2dRa1E9PTo6MYViG4uyNDocRhVFLtAAug--&t=b972b2f5cd0822d92737a3e0f9b99dc6&op=MzU4NTA=', 'Episodio 3', '¡Hacia la capital del Reino del Trébol!'],
	['https://jkanime.bz/jkplayer/um?e=TkdtQWtKZmZDWUNWM3g5VUpJWUNoT1dlL01mYmQ1eG9vUmppZVpEdUFxa0kvQU1NR1oydlZ4TVhMQTQwQkhhaHIvL0pqNXFVazMzc0pGNWZ3QWxwMlE9PTo6H0adQoeTbtYEVj3TX1tWIg--&t=297599ea587669a83f7d30846c397b72&op=MzU5MDI=', 'Episodio 4', 'El examen de caballería'],
	['https://jkanime.bz/jkplayer/um?e=QzdIYWtLcUcvZmJmOUNQcjdTMThDU0RMcnl0dVE0MGtDUWJZTnFhSWgwVDFmdlZaVU1qSTd3c1lvV21DYTNDM2dMdVFlcmJWbGtHeXBtL2lFa2czZVE9PTo6ZiaKg6_rkB3ZbbJ7yseG0g--&t=6dbee3616b27bb4ef64da2ecdabd07f0&op=MzU5NTI=', 'Episodio 5', 'El camino hasta ser Rey Mago'],
	['https://jkanime.bz/jkplayer/um?e=MXhoaVRnL0JkVVFuMDAxK1RXQ3pyYlJEelp5Z3k5REZydjc5QWVsMFJGS2dpZ0I4a0FuSlBlOGluNkZZWU1ZVjYwdFNhNHBUcUVNMmdyU1p6ZllXY0E9PTo6k.mA4nLurmzrXV_0I40VFQ--&t=01c50ab3e21b90c6f5fa34d1a5709eda&op=MzYwMDQ=', 'Episodio 6', 'Los toros negros'],
	['https://jkanime.bz/jkplayer/um?e=SGt0Y3VjbHpLWnFFOFcxNzBVZ0lXOENFYWtrbWNoMzMzWExQVmdpSEI1VHZmb0poQy9oa2cxUWdxc2c1TW1XUVBTaFFaR1BwdDRsamQ0UWdVbW01VlE9PTo6gMoMNKhmlSqnCXlo5rM7GQ--&t=3e0d8c62831be543274f481342713d08&op=MzYwNTU=', 'Episodio 7', 'La otra novata'],
	['https://jkanime.bz/jkplayer/um?e=ZjBrZFdkenNXS0Z5OHUyY2tLK2pjUjhoL2JPVVJ3aFl2MjM0ZnV6VWxhcTR1TGJ0eGhpSWdhUGkxT3RzdGdNM1RUMENGeG5kVVRVdlJtYlZVbnF0V1E9PTo6nA2jSG_q3qARYe.vxpNVeg--&t=09b15aeee2bc9c47f03de9e6180d28a5&op=MzYxMDA=', 'Episodio 8', 'La primera misión'],
	['https://jkanime.bz/jkplayer/um?e=RmdDa0t2UDhucmtUYnJJQjA5SStKSEVaZDI2VGMvRm9yc0lidEFXMnBFc0tKVUdHSzR6SVIxU0J0U1BpRWhNM3d4MkdrNW51RlcySzdjZ2J3ZTIzSWc9PTo63vNlmfbhMR03.bmetgenrw--&t=52bd90a3be645143af3c4ad082803269&op=MzYxNTU=', 'Episodio 9', 'Bestia'],
	['https://jkanime.bz/jkplayer/um?e=UHRkTGZ2b0JUWnBmMzhIQXRHb2wwdUNyTTNDZjVpTndpZWdaVU9veUgvR2drVXg0dVRhT0JreDhrcU1jMnlYdmN4dHZwOGExUFY2LzcvTUtFVnN0d1E9PTo6Dw7pcs6r9eEuD.2RI.798Q--&t=928aba88f19ec12d7ef6b85c7082e7d1&op=MzYxOTY=', 'Episodio 10', 'Lo que proteger'],
	['https://jkanime.bz/jkplayer/um?e=WWROc09uVVlNSTRuVlF4UGtsWUd6T08yVGFta1RUc1MrejlPOXM1Rndha29ld0w5dzVmQzI2cUVGbU5HYzE4VWFSOWpSelpIREN6REp1V2ZVQTVOakE9PTo61OEmvFN58Y_x7d3m6ucCyQ--&t=5f953b494e527aa72df79e3b7016be68&op=MzYyMzI=', 'Episodio 11', 'Lo sucedido en la ciudad del castillo'],
	['https://jkanime.bz/jkplayer/um?e=eURZM25BclR6Yi9MV2h6N1dxbjVuT1Q5ZE9mTnpjYzJpUEJKbHBHYVNIU3VNWEdROWJ3UjlvWnI3QzNLZEpLTGo5NUxqK29WZ21RblFVeU5GM1VtL1E9PTo6ouz_OAHNptun1HaW6SXPVQ--&t=5678529e43a5a6c284845228a97db3f5&op=MzYyNzk=', 'Episodio 12', 'Lo que ve el Rey Mago'],
	['https://jkanime.bz/jkplayer/um?e=ZWJsb1ZieFczRzFoSVliSjJVNEM1VUlpV21UT1hLTDR2d2ZMdjhxZkhmWXZodC9YdzFobnAyWTk1cDhQUFN0TmFacGNCWFdpdEFOblNWLzBzNnZDREE9PTo6LKWa2Rm67U1QVPm3xcbJog--&t=b2b956df266aa7b5e4f9f0aa4f27afa4&op=MzYzMTU=', 'Episodio 13', 'Lo que ve el Rey Mago, continuación'],
	['https://jkanime.bz/jkplayer/um?e=WTNIMnNJamR3anRuQXQ4Zjh1TXZENFBqRElYb1hYNmpyYkY1RUxxZDBOL0tyZzNSUmorT2grTXFSeGRyV2ZrY2xZNmM1Sjgxbm9SNktwTDgxTmVEbWc9PTo6Hp8trjTV_HgbFlzud26z6A--&t=c17c18ea8abd4f72527c2499ba452cf4&op=MzYzNzY=', 'Episodio 14', 'Mazmorra'],
	['https://jkanime.bz/jkplayer/um?e=K0RBT29CVGQrS0E1WkdmRGxCeWZaL05HTm5rLzU2b00rVS9GTWRRRW5RcGppNnhVNGxQRlg3K3NvcEQxMWtmbmJEMlp4UmFXb0NpV0JtemRQMWl3WVE9PTo6BeaI6H7n6Jlhc.zB8iQKBg--&t=3d1c8c0a9b95a18b60e7cbdbeea7741f&op=MzY0MjM=', 'Episodio 15', 'El guerrero mágico del Diamante'],
	['https://jkanime.bz/jkplayer/um?e=U3N6enFRWDBKUlI5TXJCaDBCOVUzT2h1YjJqU1BYWkZCU2RoQ0FvbFVZcDg1eW9BNklTRk5MNzI3b3N3bXhZTmhzb3FLcjZxMXZXck1hc0dnRGp1SUE9PTo6TIP7Ocx9BmdUEEOWN9Soag--&t=c17a9b84c3c3ade4cdce7373958ccb9c&op=MzY0Njk=', 'Episodio 16', 'Compañeros'],
	['https://jkanime.bz/jkplayer/um?e=dmFGdjdCNEppRVJVeHV2TUFURlpHUEJEbmZ3UXpPYU9Kc3hMc3JUNWJPQUtaV2dCNWF3RURRU1cxSGEvYXJvRXdsT2QzS29RODFCS3N5aWo3UFNUOEE9PTo62A1UYJByCV93AVnR8vTrLg--&t=0900b2e546cb5e01119939dfde9f2025&op=MzY1MTc=', 'Episodio 17', 'Destructor'],
	['https://jkanime.bz/jkplayer/um?e=UHFnOEpaelRrSzNsVy9USE02bGptYW55S3B3MFNVMjdrQzl5am9LbHR2RVVGQXJ5UlFUVUZXbmEvOC9JN0VRamZlcDlaZDdCMDExZmVpY1ZnZGhqSEE9PTo6RwcMsFUHD4WFubjjg4oAyA--&t=e6960d515e7c5786a80635830bb5d0e1&op=MzY1NzM=', 'Episodio 18', 'Recuerdos del pasado'],
	['https://jkanime.bz/jkplayer/um?e=aERhSnY1VTZzcWNwNUpzbFFrTFpoOGluYTVzRFkwUmE5Ym5IeCtsQStmYU55bUZReXR4OUFFbTdKTG5tOCs4WTJMN3VrTk82djJxdUdhMUJMcEswbFE9PTo6SiGY3_9xvAfHenlwSRpVlw--&t=acd5b6d5d51950ae88fae89262a97aa0&op=MzY2MjE=', 'Episodio 19', 'Destrucción y salvación'],
	['https://jkanime.bz/jkplayer/um?e=ZEQ5a1JqUngxT01DUm42bWVXRE51cUtrOUFjYTlPMzJUczZ6OHYydkl4QkFTd1cxdDZ2dGt4N3JqSDNqaHdzcTZaSFN1WEp3VUpLS0JTWFNwRkVvL3c9PTo6opsKCGAh_j3tHpjIDbJx8Q--&t=0fd0233ea8f93dc84bef4f6b1d4799f3&op=MzY2NzA=', 'Episodio 20', 'Reunión en la capital'],
	['https://jkanime.bz/jkplayer/um?e=VHlHRW9tbkhqa2V2cXhnVHpkWXlmNHo4eWR5TW1ydjNXL3ZKMGZ0eUgrZzFiYzlTOXZrOHMvcXNYSFNtQUdqVEJ6T1dQSVNnc21nQnB5RTloZ0lnQmc9PTo6Df_bZmlqzXAPtUkkZXtSdA--&t=6f7a92aa67a1f52d4f16a9884623e206&op=MzY3Mzk=', 'Episodio 21', 'Disturbios en la capital'],
	['https://jkanime.bz/jkplayer/um?e=UlMzeDFlSlFJUW1SMkFid3NKQ2s1YkVBazZjNzRxMk5OcEdoSU1WZURKVjNlNkMyd1pxVzdlR2c2WGJyRHFGeWloVHY5QmJyZmQyL2NKU0I2OWFwK1E9PTo6Sn1WAzP_5k.AjDTVbrKrRw--&t=1e60e9a0cdf68820824a93bb3c055ec7&op=MzY3ODc=', 'Episodio 22', 'Danza bulliciosa de magia'],
	['https://jkanime.bz/jkplayer/um?e=dVh2d09LQmczaC84a0tnaDRvbTVxb0FZdHhVV1BjT09RRUM2NWpYZEtZSFhLdkptM0ZWQ0IyMllKVTBReEFhNnlWZllIK0ZrbUl5VkcrZHRxTzJTNGc9PTo6.WDstjvFV7zhsZYPh9lm5w--&t=81474f79718fc0fa25ba9433b0838612&op=MzY4MzA=', 'Episodio 23', 'El rey león carmesí'],
	['https://jkanime.bz/jkplayer/um?e=Zzg4K2RDcCt5NVVSQ2lUS1ZNMWdDMUJlMkp4TGw0L1BMZDdzZnN5b1k0aFk1bmIxdkw4YW4ycEZES3k3eFhhYkRCd3ZhWkVJczVtRGpJeklVZW9JRnc9PTo6ezI0CMmmM.IRaEzybFyyeg--&t=27ddb8d522a2dc74e89687bd357db5a0&op=MzY4NzQ=', 'Episodio 24', 'Blackout'],
	['https://jkanime.bz/jkplayer/um?e=MjZBWmlucm1MTnllVU4weDZKSjBabDdscVVrTHFocWdPY0Rna0RXUmJ3TG5zTGRMaTIrVXFURFpjd2tpd2JFdGtNanp0MVhLZkxPMExwT3dhQWJpYmc9PTo6AgW9OVyTWMCBr2_oUdpVxA--&t=1a68f4f8f9bba5102b63861793900b47&op=MzY5Mjg=', 'Episodio 25', 'Adversidad'],
	['https://jkanime.bz/jkplayer/um?e=U3lLOG05QWROcTlDaE9WbnY4UWllb3Fld1FTaVVYOWhtRGtabGs4dWpMRkV3NUxnSEJPSTU4SWNob1pSSGdVanRXOTJKejk5N2hueDJBbHh0M2FobUE9PTo6wFvOHLtulXHAkKUBs0Qk1A--&t=a0a6d7cc839b1db0f0d06c7e0c74594f&op=MzY5NjE=', 'Episodio 26', 'Bestia herida'],
	['https://jkanime.bz/jkplayer/um?e=K3R3Y1VQZUlUOHo5TnRPZG1DaDAveFBFeW45dVhkdUpwNExOWmQrMmV0SmFoS09ZREg1K0JaVTZGUzk0enFKb01vWjFVL3hWa0lpVDB5aThhTFNNZUE9PTo6.VdeEoubbOPpjeov._QUBQ--&t=a4de67584a6420f7c296da3dee64f99b&op=MzcwMTQ=', 'Episodio 27', 'Luz'],
	['https://jkanime.bz/jkplayer/um?e=Y0QxdFZIaGRDOGgwRnJDbU9WNWp3WXg4eE90VXVZMW9VNHFYL2p3bUZpQjhCMEFWWC9iL3UxZjRRZXJrek1PaUx5dkcrUEppZHd2RjBvWG1xVFVoNFE9PTo6_PLhmV_UCUZs8jAWqMpZGw--&t=9a9fdbd56eb7c442646ab01c6bb3a70f&op=MzcwNTc=', 'Episodio 28', 'La persona en mi corazón'],
	['https://jkanime.bz/jkplayer/um?e=U3laZGcrNGRkMExvdDhTYUc2ZkxyWHpKVFMveEdLMDVFMS81Nk1RSGNxVHRJL3krZ1dacVpoS0c0a3RkOXBFd0JRTXlQVkVOclJwYkdBdFlacXVCd2c9PTo6tKxeGj994sRYnmKL4s2F2w--&t=c01f14d4df01c170df326c51bec1480e&op=MzcxMDM=', 'Episodio 29', 'Camino'],
	['https://jkanime.bz/jkplayer/um?e=bm1LVERFNEV2eEtHT2w2WWN4cXZVUlloMTZseTVXRUhMQWhNbmlKRFprSkZ1a3Vna3o3TDFmWEd3L3ZRdWY0cGNFemo3ZjZRcS9pWnF2OFRiU3Q1UUE9PTo6IShJHoIMt6nZc4vGPgYT_w--&t=58d858ea57b83aa5edf16c4c2d67e5dd&op=MzcxNDA=', 'Episodio 30', 'El mago del espejo'],
	['https://jkanime.bz/jkplayer/um?e=STFBZ2p2Q1hmUGJDNFhDT2F2THRWanI2UkRvWWZrRUJWM2RmYlNoYk1PeGRiandKOUFyVzVtWnREdHkxTUUzSTdmQjVDZ2F2d1l6NGxSdnF4UDFSd3c9PTo6lmDpTuVH8u2BL8yMp1ghBQ--&t=de4ae1f4f810873e3b18b2f942b45795&op=MzcxODg=', 'Episodio 31', 'Persecución en la nieve'],
	['https://jkanime.bz/jkplayer/um?e=MUdjRTVFb0ttT01UaTR4MkRKMkhFVlhiK1VjRk9lbmRDYm5YclRFaGRzNkhTNGxQdnZkZEZ6V2pDQTBNSTk5amtrOHo1UUJBZDB3T29HRE5vNGhHWUE9PTo60FWh_jXVfgN3V3gzfKNmqA--&t=3dbf996cda195acfa83b7f12ca698ae0&op=MzcyMjk=', 'Episodio 32', 'Brotes de tres hojas'],
	['https://jkanime.bz/jkplayer/um?e=aWtmZnhQM29pTjNidWQrYnZrNUJxSWRhVnY1ekRJU2FFQWRwMFpUL20rOHFPREdiL0xRK2I0TWhSMXJia0Rad2tlUSs2SmNPRjcyVGVEdkczMFYyNEE9PTo6fD4GGHC04oBPIYFnGzI3bw--&t=4595ea045073614962feb062e2396b9f&op=MzcyNjc=', 'Episodio 33', 'En el futuro ayudará a alguien'],
	['https://jkanime.bz/jkplayer/um?e=RzhSb3BtU2dGSW1USWY1dDRJc0xWL2R6L09OUWV1SHRORURNalhRa3FsR0FvbW5wOWVWVWVxM2J2Q2M5T1V2SVlPSVZxY3lGeW4ybllYanJhRnlXa3c9PTo6yuF3DzRe6jpcX2ZmIAz5tg--&t=b2c74b6da800cc1e5843266f1e2ed397&op=MzczMDA=', 'Episodio 34', 'Magia de Luz contra Magia de Oscuridad'],
	['https://jkanime.bz/jkplayer/um?e=NGRLV21oOVl5azRpNmpORitNUmxCODE4Qmd1NitkVGxoYndHM3RLWWZuZFIzaHhPTkt0U1lwWHgyLzUyejFUNUR5ZHJhSHBXWXlVMUJCRzMwR0VETXc9PTo6A6.uWlDzoBewybpjN4ULUQ--&t=b711bf77521e9a477d55ec3561bf6a16&op=MzczMzg=', 'Episodio 35', 'Luz del juicio'],
	['https://jkanime.bz/jkplayer/um?e=RFlDSGF0a1hRc0RiemI5Tm5IbTRPWll4Njc5MDF5UzdVbVByOVJqMGZTdGlLUWNoZ3ROLzlHMExKdlRsYzBWVDUyQTVKSnR1RVhJcUZKNEpEVjJWQUE9PTo6GeRypSvVlTgS454ip.EjIw--&t=0709bb1921d3282981819a81eb3f4e61&op=MzczNzE=', 'Episodio 36', 'Los tres ojos'],
	['https://jkanime.bz/jkplayer/um?e=cUI0K1JtQ2psYytPOWZYcW41dmRFZUluZUE1SytNUW8rQVYwTmRFM3B0V1lYbnZWakNYNjJIZ1R5UDdpQTNEWndlTFF6Q2JuSktkY1B1aUQzZGpZVEE9PTo6G97qe06ISKjiB7jz_HHYVQ--&t=4cc79b05efacf681d3c957b92ec08ac2&op=Mzc0MTA=', 'Episodio 37', 'Aquel sin magia'],
	['https://jkanime.bz/jkplayer/um?e=Q1F3NDU2eXhONUxYSjNKL2N1MlowbG1jTkZBY1dwUWZpVGNGbmM1bndONUZSeHo5bUFZaHZCaTVuTDB2V3I4SzFqNktNc05aQUhKM1hsb2xqeUp4S2c9PTo6UbafTHtIJ294IBgmcJxing--&t=ac9dba01b6a0c511d48cec6deb90b488&op=Mzc0NDM=', 'Episodio 38', 'Reunión de capitanes'],
	['https://jkanime.bz/jkplayer/um?e=ZzUrL0VIZDZpUG10ZlBza2RiYjJnREhLdGNSN3FYbGFLaFV2bHFXM3V0dlowK215Z1lXMmQ1Ym1zY2hUSzQwT28yUmF6VnNaM2tKSGJuL2dtR3FwTXc9PTo6k9b.ZUhwoJr7zx5QuqdQCg--&t=9cb01a4156d12513f4d2036d2ebfa6ef&op=Mzc1MDI=', 'Episodio 39', 'Saludo de tres hojas'],
	['https://jkanime.bz/jkplayer/um?e=cHRvRktpV3AyVDcrdmkxQy95NHJpZUdWdGhvTENYNkRBSGZ4c2VtMkZ2NDMwK3VROGV6NkY3dkNuOGtJeEtzV3RLTWtQaUxlaTNTVUJsZUJQZ0Y1K3c9PTo6t5Y4fKqp35bSGAyvGyi_9w--&t=01478c73428e40a234730b5096efce0d&op=Mzc1MDM=', 'Episodio 40', 'Los toros Negros en la playa'],
	['https://jkanime.bz/jkplayer/um?e=WExmdmVaaC9Bd2FSTVVsd1pXQU1hdnJWdHhxVkVYbVBKRDZtU2Z2U0pLTlQvQU5XUHorYUg3b25wL0FvR0UySmlsWEs3Y2pFWFErTGNuUmVYMk5jUFE9PTo6F5v0dR69Jo4NYGOH1wmlDQ--&t=d037731d1da83efffdb92ce25f124a8c&op=Mzc1MDQ=', 'Episodio 41', 'El crecimeinto de la chica del agua'],
	['https://jkanime.bz/jkplayer/um?e=NSttUVlWQzhUMVJMeFRBcG85U2hTZmRpYTFKVm1ZOHZHUC9MY29DbFl1U2JybDVzbEpHVXZOdXhkdGZqbDB1My9TVzJ1bWxtdDhOY1lMcTh1ZFpScXc9PTo6GhTIxCb4skbbErEhDbQRVA--&t=a003d3c58568435ab3c440f97f1e953e&op=Mzc1NDE=', 'Episodio 42', 'Templo Submarino'],
	['https://jkanime.bz/jkplayer/um?e=MzhZK1BUNWxMNHhiZS9xeTY1REh6N0tTSkFHY1lOejNlUXhSQ3VCa0kxS1kxRDFrN3cyYXFJbUdudkZJb2V0YUpaQzAzV2hwM2NWMFR4TTA3SmFuSHc9PTo6GG2yCy8OqpSLshf_PLNkyA--&t=b1152424d9fb3019d63552c1156b04be&op=Mzc1Njg=', 'Episodio 43', 'Batalla real en el templo'],
	['https://jkanime.bz/jkplayer/um?e=OHhERGw1Y3VUMkhWcVA1R21HL0lyc1BNbGZZNGREU0hKbmgxVW5UUG8xWmZ1TGh6bVdKSHlCdEc1TUgzR1FPQUFOOTlzQkh6WGNMN0p4S1ZPS3FNTGc9PTo6biXZhGJQflHa6aVTUVVESA--&t=1ec514b83b01ddf05e92f096fdf966a9&op=Mzc1OTg=', 'Episodio 44', 'Fuego honesto y rayos salvajes'],
	['https://jkanime.bz/jkplayer/um?e=dHpxdWdTZEthS3UrTlp2RnQ5RHRhb2xhWE4vU0RXd0ZtQ0UxWTJWazAzSVVDanM2aVVENW5NMkcrcmJWd3RjWlppMC8remlXZlU1TEFQVi8xQzJQRWc9PTo6UGE.gULLYAq_M8RGfJVE.Q--&t=89b85f944790639e8d6d5096b1909082&op=Mzc2MjY=', 'Episodio 45', 'El hombre que nunca se rinde'],
	['https://jkanime.bz/jkplayer/um?e=bDcxQmFWSEtnK2k5eTVLSkp2QmYxc0NaRTFpOUFxdHlTeHU0TVk1eWQyWXpnNkw5eWozVk81QWZVM1JldHVEeHFyUmpzbEFYNTRSTjhqczRVR2ROU1E9PTo6OX6BL7oF.8TElSxZ5JtZhw--&t=1c4ec9002d8f6c1ddae5c151e48cf718&op=Mzc2NzM=', 'Episodio 46', 'Despertar'],
	['https://jkanime.bz/jkplayer/um?e=aXRPOGxESkZGT21SalJzc1czUVNsZzlLSGFUS202NDh4V1dTRlVmK2w3SlEvS3FqNkFoQWR6VGVUV3hpbEU0eUtUZVB0MmltL0hRN3NDQ1NSTXVYY2c9PTo6V_47Tw9aEeA2DnfFGBosMQ--&t=5a628fa66251ccace84659b5a1128f97&op=Mzc3MDA=', 'Episodio 47', 'Arma única'],
	['https://jkanime.bz/jkplayer/um?e=RDFETUpPMG5hdG1oRmFhUUltT0Q5N202azdCaks1K013U3BwVjlnOHdnN0ppZGg5SVJhVlFkckRUMERCMy9sQ1g5SDNqRXlvb2U4clF4eE1ZbVE2T2c9PTo6NSI65qXcUj3E88JDdILEvw--&t=47c163fdd17555a113d90be51ba939cc&op=Mzc3NDk=', 'Episodio 48', 'Desepración contra esperanza'],
	['https://jkanime.bz/jkplayer/um?e=SnN4djM0S09hNXNkZGRtdjE3QnEzUHhpcFRKZVMwT2hvVjUzRDRrOWM0Q2ZpK2c5VVJvMjJ6dDU5Ly8rWkI2cE1QR3lLUTdnMC93YUhqZm1PT2F0YkE9PTo6_4b8KGsZA_Wf1tgKAIzL2w--&t=14895e9c83053104a635a8be68fd0b8c&op=Mzc4MjA=', 'Episodio 49', 'Más allá del límite'],
	['https://jkanime.bz/jkplayer/um?e=anA2OG0zU2p1K3Z5ZUcyb0VKUG9zWFAwRXdnMzJ5emxHbE9VVGhYeEk2OVVTcTM0V3d4aFlwVENLb1FJL2RzOHQyWVVTZkNhWldiZUdILzNpYUhxb0E9PTo6zQDoQTsYdvyHEXCEb5ElFw--&t=e73f706c780fe6b7b5e0334d4a2a1834&op=Mzc4Nzc=', 'Episodio 50', 'Fin de la batalla, fin de la desesperación'],
	['https://jkanime.bz/jkplayer/um?e=UEVZNFlXd1RVQVgraEN5RTdjUm40ckkrTmRsbFlCMEpaZ0c1UzRVMDdzT2FwK0NQU2FGOXRGK1BYVWhOOHZ0Y0I0N3JHYXQ4VnptbldBdklISzdvV2c9PTo6zahRMHE9LUDAtdmHDwR5Xg--&t=5d9c5ea2d5950e8ea2d01cdc092ffe29&op=Mzc5MDc=', 'Episodio 51', 'Señales de justicia']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Clover/Portada-Tmp1-Cap${index + 1}-Clover.jpg`,
    'iframe'
]);

const cloverSeason2Episodes = [
    ['https://jkanime.bz/jkplayer/um?e=eGY2dDZWSHg1Y1FKR0JHWXd5WWJZRkZwLzdCWEJMRTVWZUd2Z3pQS09wTkY1cXFMa1I0OVQyVUVXU0RUUWQ2UU41ZDdTOS9RazVKSGRHaTdpWXQvaVE9PTo6O7T41iEj0vayHVXPq9kLYA--&t=d16dcfcb8006fc84bd0ab2ea79b70863&op=MzgwMTg=', 'Episodio 52', 'Gana el más fuerte'],
    ['https://jkanime.bz/jkplayer/um?e=TzR2WXdycmhFNkx4bE5vekhrY0d3ZUE2Wjl6aGEzLytZVTFrT3J2NEdLZWVXYjRLajhKd2plV1l6UzhIM0k3eUg4bE9KeUpFQ1ZVODEvTXQ3Y25PS3c9PTo6qJ6glVjCzzzovsdtsmduvA--&t=014e4cc0f935b06c12c94cbaeabbaae0&op=MzgxOTQ=', 'Episodio 53', 'Bajo la máscara'],
    ['https://jkanime.bz/jkplayer/um?e=TVJGZGRibWI3a1N5T1pCT2FyMTM4MC9GeCtUN2EvUFFuRm5odm5HR3VvL2xVeStTdHZhTld0WkdTd291NWptcHhWcUN2MmlKMm02SGxxbUlPOGM5WkE9PTo6BF63s1COoK7fM_toqMmJYg--&t=bd5da0d67df335a373b1f9c5c276f414&op=MzgxOTU=', 'Episodio 54', 'Nunca más'],
	['https://jkanime.bz/jkplayer/um?e=MEtjWVg2ZjU0Ymx2MzZKN3JLQzNvT0FaOUhtUjZaQjlJL3N5T1NKbVMwTlZiU0M3MTU1ZlNxY3dLdXhtV1NjZkZ6ckI1S0RBNStWNzBBbml4RkZVQXc9PTo66MeUdekefZxOkaIxK.LyUA--&t=9245f105da8f2b529fb24b9570a29ee3&op=MzgxOTY=', 'Episodio 55', 'El hombre llamado Fanzell'],
	['https://jkanime.bz/jkplayer/um?e=QWxOd0l4Y3NENDZVcEpmay9SZGZQWUhjZlQyS1I4YlVwT3pZeFpIaUlFcW9kcENqY2VDR0Q0YnR6dVhKZTBFdFlSTnVOb3drSklIN3JrVUFkMHpNcEE9PTo6qSTu4A2635SgWI1gdARrsA--&t=865acded4e27f00abd837340e16074aa&op=MzgxOTc=', 'Episodio 56', 'El hombre llamado Fanzell, continuación'],
	['https://jkanime.bz/jkplayer/um?e=REdWQmNVOG1Pd2M3QXlQVk9VTXk1elViTFgyejR4d0x6NkNxemszZTIzdWJHQzc0QXh0UWVxbmJ4Z1RYaVpNZDFpSTJHYm03cWEvRmk0cHR4ZHBZdlE9PTo6Tltl8edPCqz1IfOBjeRGiA--&t=221c2c491bbe1c88e6cabfa419c04efd&op=MzgyMzU=', 'Episodio 57', 'Infiltración'],
	['https://jkanime.bz/jkplayer/um?e=YU5kY3VZMUh2Z1Ereis3N1k3cCtpalEwaktGNVNFN0pVd0V2TTYvdERTNnhheCs5ZE1zc3dsWVR1VnhsdEZaOXBBYTFsaG5wTDBxUXk4NjlXd0Z4K3c9PTo6h40QLNxoSUkzEPpSQsutgA--&t=9582df893886899a3c8bcd9e9f4215d3&op=MzgzMDQ=', 'Episodio 58', 'Decisiones en el campo de batalla'],
	['https://jkanime.bz/jkplayer/um?e=NFJ1cWdhMWU1RXY4akhWVEFJN2tZaHVBVUlodGgvazhJV2ttOTdLOFhVbUpLR0hsVTErWWRpQ2tMY3R2emV4cGxjYi9LTXhkR1lSZy9vYlR1WEZOTHc9PTo6w1BPjImgoSgnYO_8ip2DsQ--&t=bab0f742373b1c7c3c62aeda2e7dd8bf&op=MzgzMzc=', 'Episodio 59', 'Llamas de odio'],
	['https://jkanime.bz/jkplayer/um?e=YUMvWGRyR0s3Z1YwNWU1ODBrcnNMdmFoWjlIeTZVYW9rUnQxQloxcmtVUkVOL2VoY05wU1NIQ3pZNGx0NXQvRXllTmVjdi9YNjhIc1dzQ3d0ZjdEUmc9PTo6GZINYZ3k7rxcSc7.PGyxIw--&t=fa59dcd8a934426f4894d1f6d87e698d&op=MzgzNDg=', 'Episodio 60', 'La expiación del desertor'],
	['https://jkanime.bz/jkplayer/um?e=b2hoczF2V1ZwaEl3V1F1TXhXd0hiRHBWZE42OW1FN0cxeFdJaGlkcGkyazJWVVpMckU4cmNrL0pUZTNYaS80TjcvK3dtdXlCblJBTjQxZlRJZHorTUE9PTo6xEddx6RbbhDXlB4V5f3gog--&t=e657722b5cb4436e98eeaf60b4e6267a&op=Mzg0MjY=', 'Episodio 61', 'El mundo prometido'],
	['https://jkanime.bz/jkplayer/um?e=Z0dUWm1pRnRxbDZTYzVUcXhrVW11TnV6R2YwSXJ5cGt0WTdKR1M0bWlWTzNUTzhNUW5JYWYrcW9sOW03TE5RYVVhaW1vdFRwQVQ5RnVJbUdBYUpJV3c9PTo64DOJPBxFUxG6DmdrLyywHw--&t=c1351b04bf9a2230a72c31cb0d21f0ce&op=Mzg0Nzg=', 'Episodio 62', 'La persona que te hace mejorar'],
	['https://jkanime.bz/jkplayer/um?e=V251a29Gd0hvNlhoaEE4VStKTCtLd1NQWVpOS2gxZXhON1JNdThuTVVzTW9ndGdqeW1EY215cGZTcU5Zemd5cld5T09PN0FWNHA1aU8xeFVNVlBWWWc9PTo6yIWdXj8sWOuQohNhW.SSWw--&t=5b4ba6e852444462a8e1223fc42e1af8&op=Mzg1MzM=', 'Episodio 63', 'Desesperación contra esperanza'],
	['https://jkanime.bz/jkplayer/um?e=WjFrT0MwUExJOHUwbWhWUkFGVHg4MWYzSThGcXlWeWVqNDh3Sks1YnJLdyt2aDQ1M09xWTAydXF6SFc4aG1FN09JNEV6d3FBRkxLZzRZa1RsdS9qV2c9PTo6jPZPqRm7PQ5dwie5Ka0W1g--&t=5779285408aab2cf0ae3355162da7cf6&op=Mzg1NzM=', 'Episodio 64', 'El hilo rojo del destino'],
	['https://jkanime.bz/jkplayer/um?e=VE5zdittUjBlVEJIS0lab2lnZlVsaHdvMFpIemVLVm9YUjlZWFAyUzlycXBtWkdFZmxITDZTdko1dVk1S0ZiWCt6dWVIMVlVNnN0ZFN1dDgrODllTVE9PTo6a0FZL1j4oAOa6sAyDL6pqQ--&t=3fa14c8a59cc0c01c983bb7cbdce16d5&op=Mzg2MzU=', 'Episodio 65', 'regresamos'],
	['https://jkanime.bz/jkplayer/um?e=a0hxSjliM3lmU3Jya2lvRlBGdEFVKzl6aWVsK0o3YXFCNnBZMG5CTXBRMllEODl0V3N3ditBRHRyWTBpcFYyMFY3TzFIZFZlWFFHVXd2YXM1aTBCSkE9PTo6wpjBqjyPDrX5dss.dgcBsA--&t=20913c01b73eb72bf3bbd8b570e4dfa4&op=Mzg2NzM=', 'Episodio 66', 'El secreto de Ojo de la Noche Blanca'],
	['https://jkanime.bz/jkplayer/um?e=TG1IV1ZsUUZrZzNmOCtHY0hVQk5qWXBzdDlxL09Db3ZRb0hLM3lXc0VhYlFSYnlzTTFQamRvcjl3TzFFQ2tONjAvZUJ0VkwxNngwdEN4S0pST3h1Umc9PTo6_neHLVqJqyRCRiFDZpN9eA--&t=3567cb56b21b2002242dd83189c69b58&op=Mzg3NDM=', 'Episodio 67', 'Cita doble en el festival'],
	['https://jkanime.bz/jkplayer/um?e=L1FVY3VzREsvM2M1RmU5Sll3YUZFci8vWUxBWnFMdFRJaGp0T2ZzbG1XZ2xFRUNVVjdhaVJUK3hQeWtIc1Q1c0NKS1NDdWN5cy9DM0tJbEZzQVlneFE9PTo6vadrsIq3g8rW0p775vvGDg--&t=7517f46fe65934f36c1fc4d3157b8703&op=Mzg3NDQ=', 'Episodio 68', '¿Duelo a muerte? Yami contra Jack'],
	['https://jkanime.bz/jkplayer/um?e=RWdWVENNdG93QjlMK0ZSeGxRT1pkT0plbVQvWm9mTHJ6QW5MMDdnYWEwdlYyaUsydEJSNGdPQmZTUGJXem5NYlBGM3IvUk01MnhnQWo5NERjV3pDM1E9PTo6IrEmVaxwJIyc1aqBHGG7Xw--&t=4c1f6b5920b02796374f6dc3483c6fbd&op=Mzg3OTk=', 'Episodio 69', 'La melancolía de la rosa salvaje'],
	['https://jkanime.bz/jkplayer/um?e=QXZXNE50cjFXNjFQWDNBYVkwTCt0NUR5TWxYZndiZE9ORzU1L3BQZ2JUQUUxYUpCREJ1OWZUUUhNRkJjYS9kUXlTaHpNZjRNMHJVNHpUUTIxSXNWS3c9PTo6DQnVPojtKDlSfM6rW.hpBA--&t=3d86b21e15c3a29f4d87e511fbb95178&op=Mzg4NjI=', 'Episodio 70', 'Dos caras nuevas'],
	['https://jkanime.bz/jkplayer/um?e=eWJRcUR1ejhxVjl2RDVkNUZkQXRZVGZhRFhnRDlEdXQ2UHIzNllCR3RJSTIyd3c0NytHNkpZSzk0SmxhY01MenFadHNKTTFOdWFhdEtkZHlQcFNrL2c9PTo6RTWt.JhRFfMrAF.q4BbkUw--&t=33ed2237833506aed218d3f212e050e6&op=Mzg5Mjc=', 'Episodio 71', 'La leona imbatida sin corona'],
	['https://jkanime.bz/jkplayer/um?e=Y2s0OVFleXFGRU1GMkZBOFVSWllHN0hPbmZwemJKbjh1ZlB3UFowS2xqYlBzNEFxTHNVRFM5Mnl2aThoWE1JVEdvUnQwZVdnMXdnaDJpWmlXalR3NEE9PTo644qlXvutmkWuFXY.OgArIQ--&t=9d8f603b6ac6aeab2c10c00d15979c89&op=MzkwMjY=', 'Episodio 72', 'El fuego de Santelmo'],
	['https://jkanime.bz/jkplayer/um?e=bUJ6c1NVTmxMRjNLUk9mR2tsVUVzSnpBOHVxTDhjQ3didm9FWW5CRmRnTFBYRzR4NDg5bVozb3NIUjNxeFJ4YlQwdFlxRVpHQStCQXlCVEtVaTMySnc9PTo64K_dK.ZEGv3EE97IrcFH7g--&t=a39720e043f27ef3b0b9256b63f9de98&op=MzkwOTU=', 'Episodio 73', 'Examen de selección de los Caballeros Reales'],
	['https://jkanime.bz/jkplayer/um?e=aTZlbWo2U0hLUEx6bnF3eitsNXYwbndYWXpiSGhEQ2YyM1MrcGE2Q1VvYmNldi9xaEg1MEFSTTVqemJuS0hYMFRtcGVIUjBoaGFWYVczWFFCSzN3UlE9PTo6MTZHDhCX.bELXNg8N9LM9A--&t=8bdb666d756911879b3f77e93d945da3&op=MzkyOTY=', 'Episodio 74', 'Flor de determinación'],
	['https://jkanime.bz/jkplayer/um?e=Q0RnalRYamlsSXdac2twZllaZUNUOGtDZTFCN1dmSFpnVlJ2blo5RVFyZ1lHNzN2UjAxMys0Mkk0Ni8zbGVxSFBGa2hPK0xBbldSdnFPRGdIM1E4Z3c9PTo6ca1hmgWFYW_Y_DZ1P3rIUA--&t=2dcb2f57c2952c286a435c7efa0864ba&op=MzkzNTM=', 'Episodio 75', 'Batalla feroz'],
	['https://jkanime.bz/jkplayer/um?e=ZnlMUVkxQThEODI2NVh4b1ZEb2V2ck5oTlIrVXI0VDV6VlpkUklpOURaL1RGUGthRjY5RkMxYm1YTCsyR3o1Y1RmTFFDODZGVENZTi9MQVFGUGdJUUE9PTo6W_EvW.0s2kFuZ1_S9jZ8Pg--&t=6ce9251b4d3766af79fcf03389b2a6a3&op=MzkzOTc=', 'Episodio 76', 'El mago X'],
	['https://jkanime.bz/jkplayer/um?e=Q1lIKzlOY2o4L2MzaXNMWUZUczhxRURPMjVKSkNYdUVkSGhHRVlRUklYUlNLdTJNUXNZWHhnRmhSN1VGeVJ5cmxHTkNuV2dDQXBJb2Rod3ZyUTMzOHc9PTo6YTZY5lYt6ku.bAbHjZL8PQ--&t=062a3684981cc59892b104aec71cde3d&op=Mzk1MTY=', 'Episodio 77', 'El destino'],
	['https://jkanime.bz/jkplayer/um?e=OWx6RFQvdlJhbDNwUFhuc2JORWVhV1lHWTVNT00xWHNhUUIyWjMyY0p0dEU1R1IzWkFCS2dyL1d1aFZ3T0h3S3BOQXliR2hLUEM2cWlXVXhldjZKVUE9PTo6dD5WkWD0vcogTdMhHNd.oA--&t=04664cdba0fe8f389665e7d94cd40a49&op=Mzk1NzY=', 'Episodio 78', 'La trampa del plebeyo'],
	['https://jkanime.bz/jkplayer/um?e=QS80K3dLeDR4UUFZS2F6Wi9wcUwzUVpubEJnTEI4UXJRMFFaekIvQWFWNlRHRWt6Sk0yVzlsemp1VU0xc04vRmh2RmhHa0R4b04vYUZjREl3OGJaQnc9PTo63TrfneZ8pJQz2nig9_HlUA--&t=d8344660cc658e7eca1453254c1e0297&op=Mzk2MjI=', 'Episodio 79', 'El delincuente contra el musculitos'],
	['https://jkanime.bz/jkplayer/um?e=RWpnK1EzMDZZMUhpelBsRGtWYmM3T2Ewd09uYlhWcGx2Z1RNME12MlI0OGtlaEtOTllJTHlUYmxBN0hZanpoREVidG1ibzMxSXF4Ti85SzZzQlRHYVE9PTo6MMwrOYcYs9ucWOl0LFBpew--&t=974aa39be46f0ba832c70a2bcf9b816c&op=Mzk2OTM=', 'Episodio 80', 'El hermano modelo contra el hermano mediocre'],
	['https://jkanime.bz/jkplayer/um?e=ZElJdWdtejRwUDlpTlZKb0JqUW93TVM0VVlSWXlkWE04TjNvdE0xSkZUWUVaVFp1Q2FjUHJSMU9ERXIzZFFQMXgzaVBDYVJsWFJhRmxHMmVkaFloT0E9PTo6VPsi_QqyqZpxD7vZuSE46w--&t=86800fe41915de0ec2b86fe688662acd&op=Mzk3NDQ=', 'Episodio 81', 'La forma de vida de cierto hombre'],
	['https://jkanime.bz/jkplayer/um?e=TEozMjNOYi8zczd4SHQxK0drRUNrQ3U2ZTNQeGorTDB1VStzdkZYcTl0YW1KTFFNOUwvb1JPUVc0WHlidTA2WjZPUFlyaHlxRTFOYmp0a0hCcWtad1E9PTo63yfDhuGBI2Vj7nhWeNklxg--&t=8f24f9bb371471be344cdb6fbcd99688&op=Mzk3OTU=', 'Episodio 82', '¡Especial Petit Clover!¡Charmy la demonio!'],
	['https://jkanime.bz/jkplayer/um?e=ZjdPenJZT0lhWmlKMTAzajNSRG11YlUvVjhiYi9YU3FzYWlWUmFPVFc1RGwyT0FLMlZudVhRdm5MY1pKUlY5ekpzUWY3TnNDS25DNzFWRjJYMFkybVE9PTo6cunQbIrxMnPH9mlNFhYDnQ--&t=e6acc054b69725e69cf494b3c8a94250&op=Mzk4NzE=', 'Episodio 83', 'Lo grabaré en su memoria'],
	['https://jkanime.bz/jkplayer/um?e=Y2hKSzFKdjdOTmdmUjRCazg3Ty92QUdoaHprNzdRY3FnQzV1aGRTZ3hVaVJYUmtNT2NMSGJML1JmZW5QZnN5S1Nod3FNYmxjUGRIME1IVkNVRWFFTEE9PTo6CppZlgXHZcGXlXgT9y3iGg--&t=edac623c2ba3e8d8c388378f8645aafe&op=Mzk5NDc=', 'Episodio 84', 'Vencedores'],
	['https://jkanime.bz/jkplayer/um?e=REdxcFJCSEZLTk9JN1ZqY3RVbTc0bUI2MG82clphd3Q4c1VLeExQL2hlTWMrbjAzQ1FxN25VSVhPbVRHSncyYkZnNzU5RUQyazlRU0xWNERKaXNCY1E9PTo6Ghh0j.ldJMMFKEFKtjBSIw--&t=39f4eef0175c754bb90417358b0133c3&op=NDAwMTQ=', 'Episodio 85', 'Fraternizar al desnudo'],
	['https://jkanime.bz/jkplayer/um?e=eWR5TEhwZmJmK21UUDVaY25BQi8vaEpNM2E0cHZuekZYSW5IVXp5WU4ranZENDhNMzErSlJBaG82cGlmb2pqM3oxT3Z1T3pEUThCT2F2M1JEUnBHelE9PTo6gW0DFjkl2iQdlU3v1Jalgw--&t=d5e542d0cb4e169047663d1992d70b9d&op=NDAxNjQ=', 'Episodio 86', 'Yami y Vangeance'],
	['https://jkanime.bz/jkplayer/um?e=VHZybUs3VmdMTXU4Ly83d1JqN3F0VkxZbisrQUN2ZzJlWklhWVJ0QWg5NEU3ZFJyTEswNUF0c2dyY2FoWDNON3pmUllnbHN2YWRuVHI5YUZLNkpxMVE9PTo6uqke4xkQRVTIJi00P.SUyA--&t=2e428b7bc6471fe638cb2aee110b8032&op=NDAyMzc=', 'Episodio 87', 'Se forman los Caballeros Reales'],
	['https://jkanime.bz/jkplayer/um?e=dDlENGpaMXdVLzJrQjBtZDZxd011QnhoK042cDgxODRXOWZNSUhtaGJlUi9PTE1yd3RLQzEwd3M0QzFqV2h5RjUrWUtsdUtncFM2RXJDNERidDVIVVE9PTo6_ejlBfodENE6gua3tR4QrA--&t=810cd6adda70722fd9d2c292867b86d7&op=NDAyODE=', 'Episodio 88', '¡Entrada a la guarida de Ojo de la Noche Blanca!'],
	['https://jkanime.bz/jkplayer/um?e=NCs4RFp3VTBrVnp4QlFMd29mZW1jVVNsMVhpWTdrNmw4SzN2SU9MV0dhMi9BbVpDbkZMczFzSXZ6TThqY1lGRXQwS1RjeW1jMTYvWTBlNmEzcXRxWVE9PTo6CGyaf_o6pwb0Bvz85Vgn.w--&t=9878253904482726e741460a99adba86&op=NDAzNDQ=', 'Episodio 89', 'La base de los Toros Negros'],
	['https://jkanime.bz/jkplayer/um?e=dTU3dHpXSkwxSkROdG11bVU2U2R6V0tsRlhhWVYycUhvZSt2bVlIZEUyazBEeVN5aWpFRWxjRDdlRStDQk1tNDZra0tFWVpDZVBrWktLdGtpM3RuOGc9PTo6l3HyEFyLFCRdII4uf9HGhQ--&t=eedec8cb8159470f2c25a22d1a9fef7c&op=NDAzODY=', 'Episodio 90', 'Una batalla mágica demente'],
	['https://jkanime.bz/jkplayer/um?e=T3FiUW1PNVQvUUZyejVJTm1XTk5uZmxSb20xaFlYOG5Tc2tKSFhkM09jZE9MQzZka3p1U0xBV0NmcnZXY2F1MVVDMTlrZDZWOUxsL1JJQXFKbzBqWWc9PTo6MvC9w49XjeVgdPgGWSpZcg--&t=105aac7339ea6074ed9d912c0d10d67e&op=NDA0NTc=', 'Episodio 91', 'Mereoleona contra Rhya la Perfidia'],
	['https://jkanime.bz/jkplayer/um?e=djFHNHdEcUk4NE84dERqUlZrc0owWjVzYUw4aVg3SjcwWEYxR2VicjBlN2trZ0Z6bzNwd0IxZGlaVngvemdobytrRExiNVg1enFFS1Fta05SSGREK2c9PTo6YkMunG7SCqZwEqGkfWiTSw--&t=4e27092512bfc9518f20ce5a0caea66a&op=NDA1MDU=', 'Episodio 92', 'El Rey Mago contra el líder de Ojo de la Noche Blanca'],
	['https://jkanime.bz/jkplayer/um?e=TGVVODNXV2U4UmJWYlNEbWNaVnJYbzgvWmVlRlpSUm9mR0gzMXV0VkpWK0hkeWlSaVVvcWwwRitXeXovaUdGMEZOWXJtQjRDcHI3MWVHaytFVnh3OEE9PTo6uIBeaB6b1rtSnDfOfcazJg--&t=5985e72b3752e4749926885db1b45be4&op=NDA1NDg=', 'Episodio 93', 'Julius Novachrono'],
	['https://jkanime.bz/jkplayer/um?e=WTl6NDlJUzNyd2Jvcml3SURIMWNpeWVpSkhPT3RoM3NGVzRpZ3RoNDhCa3hJWVJXdVoyQVVBRE1RVmpCa2V3bDZqcFRqRGVvQlNmZG1nWGtNTENLMXc9PTo6zCwxrVjAR3e7YhSOc9TpjQ--&t=fd577536e9ceee3d9c2b3b2e6d2e2a88&op=NDA2MDI=', 'Episodio 94', 'Un nuevo futuro'],
	['https://jkanime.bz/jkplayer/um?e=U25xeVFQQ04xcGsycFhyVXRpa1NxTkFvZHF1dWhpSmw1aVlvbFk2dUtKb0UwdVlOdDgyZ2pzUE9zVStJNUNmcXBKeFlBR2tsNldqRHRlbVBLOHU5NlE9PTo6pmipRTdnf6L8rjIONYI7Sg--&t=e79877ffd47fdef9d994832b365071c1&op=NDA2NTA=', 'Episodio 95', 'Reencarnación'],
	['https://jkanime.bz/jkplayer/um?e=UWhJeVpzRk50Skt4SHZ0cXVrT0I3alJvaG9mc3B3QWl4ZXYxQzFNTitmT21vNW1MRDQzeXU5bGtvbVVJVGtBY0R6TXBXSDF2cExmQnpRTXplRWdCYnc9PTo6SdICs3dpiquBk.ol5.p05Q--&t=e363d655ac00b1517a688689f4295eaf&op=NDA2OTc=', 'Episodio 96', 'El capitán de los Toros Negros contra la Rosa Carmesí'],
	['https://jkanime.bz/jkplayer/um?e=ZjZ0Zm9MRXlQdzE4cW16ajAxN25rYjhheEZiU1V2MXIxN20ybWptT0hYbDVzODcydklwYm96MjJQekhXTmhPM0tCcGR0V3J4TDU1OXJiTnlLcHdPNmc9PTo63KB0NUo7HZK2eXi5U29ykw--&t=2d2de08a7939c8cc89358d52b13f9df3&op=NDA3Njk=', 'Episodio 97', 'En completa desventaja'],
	['https://jkanime.bz/jkplayer/um?e=Zm9vR1lYWFcvUmR5aVlLM1UwQUh6c0pGTEFzUHd6QmFHdHJ2SVlYa3h6bndwMmswb3FJTjlhV0VWRGs3S1RCU2Y1TC9JRVRTajRMYmJIVGtWaVo1OGc9PTo6xHGUr2ymKLJ4p7fzFvl1Eg--&t=dd23490768a67ebc2fc92804d875f292&op=NDA4MjQ=', 'Episodio 98', 'El león durmiente'],
	['https://jkanime.bz/jkplayer/um?e=dVRST3pZQURmWE5UK0pYVkt6NU04NkZBTTV5VzF6ZFhRKzlxSlNiTkd6d1NSTjNtT1VGSk5UUVVTMVBkM3g2TTVhM2Z6S05UMi90UzBWamdpcldDZ2c9PTo62IyVfLhUxHZzC7vi4Pllsg--&t=6b394f2d345abec3b967a186932462db&op=NDA4NzU=', 'Episodio 99', 'Jugarse la vida para vivir'],
	['https://jkanime.bz/jkplayer/um?e=Q2dZRVNNSjQ2N1JPM0NwQVF5cmM4bHQyZkM2SWVLNzFSYjdHaEdQZ0NQU1FJTGJCVWxLc1hiZmV1WFZXU21FeHhUZWg3Q0VzZWxsK3FLelR3aHdyUXc9PTo6nc_GNpjVz2uFlAX9AcMp7g--&t=e83429b6e76722413088d7648a24f790&op=NDA5MjA=', 'Episodio 100', 'No perderé contra ti'],
	['https://jkanime.bz/jkplayer/um?e=YlVlMEYvMHhTbEdoQUJzcWI4Zmg1eCtyL1c0Wk5UNVlnQWsyci9MbGNJQTd4YnVyVGhzVENJdnJHc3VCZ0pIZG84UGVaR3BGdVFIUlZqM0s2MnF4WGc9PTo6MR.NYZA0MNoZi3GMu7cznw--&t=80b2d122409d77cd4b49220501b34ce6&op=NDEwNjI=', 'Episodio 101', 'Las vidas de la aldea remota'],
	['https://jkanime.bz/jkplayer/um?e=cS9DTGozbGxFN3NlWjViK3kwVDZVUFlESUIzRGlycWdOdkduUUxLaHBEVnlTRVhwRjNKeDQxQjY0ZzZCZUZBOEkrZG96b3FzZ2hWaHNISzVsc0VwRGc9PTo6_.JCm7YqDKMHxr.bdua1WA--&t=193864498a92b6aede7589f5d4826e12&op=NDExMTg=', 'Episodio 102', 'Dos milagros']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Clover/Portada-Tmp2-Cap${index + 1}-Clover.jpg`,
    'iframe'
]);

const cloverSeason3Episodes = [
    ['https://jkanime.bz/jkplayer/um?e=SFRzKzdPa1RlZ1VsZ0NSQmhPdzgvdXE5MjI4MFpnVVc4RUw1UmZyMzZXdnNCS0RmbHJoVVQvcXgrRjh4WUZpY1RHZlBCbjNtVXJqUWMyckhxd0wrcEE9PTo6PvKn_P6aZzSHFebU3ygRLw--&t=b94542e1434723ab81c1fe5ba5ff78e1&op=NDExNDM=', 'Episodio 103', 'Libre del destino'],
    ['https://jkanime.bz/jkplayer/um?e=dEEvRUtydGdiTEV6TUR5cWxNNTRCdTF1TzdlYWZrejVSNGZ5QmVDUVd0dnRGd095RE8xNjJXdEdFL1JYTjd2cWNxODhJODdYUHFKYllWMUViSnZ2Qnc9PTo6tmriY1nGuz1whZN8.H7N6Q--&t=6d78dcbeb39103c047f486abd2519ee4&op=NDEyMDQ=', 'Episodio 104', 'El rayo iracundo contra sus compañeros'],
    ['https://jkanime.bz/jkplayer/um?e=dS9FMFBsNVlXeTR1bm9QcjZyL0pPZnJwRmlIWHhpYXBuOXdkdTE2S0svMFpMMnlUNkxkeDNMaGg5Y1RUeTlKQ3RNV1p0dmY1aW5pakkxaWxLZWdGYWc9PTo624eu9D.RVKByK6vWsjRJmQ--&t=b55d7ce2adb9449fc4dae6115cbbe30f&op=NDEyNTg=', 'Episodio 105', 'Sonrisas y lágrimas'],
	['https://jkanime.bz/jkplayer/um?e=SjNLeTAvMzNITnVreWk1K1B4ZEhOZlRicFBDMkFlQm5rV1BNL1UzS1Q1RS9xdThjZ0pYbE80Y29GS1VKTkMzbzR2SitZT0hTc0ZUTVRXc25ETTBzUUE9PTo6KMs_Qme.RINSIaEoOzj3RQ--&t=251081321995fc4185d55a5d3e788e39&op=NDEzMDU=', 'Episodio 106', 'El camino de la venganza y el de la expiación'],
	['https://jkanime.bz/jkplayer/um?e=UDJhNElJd2xDR3RvWXhVRFk2WlJKamhQZjBmRXV2aFFoUmlQWEhTWkhONDcxUHpDVEVxUlNESjlzYkVtZGY5cENxWVBJK1BoRjR5Z0k4dGd0c2loVHc9PTo6JwCF0bc.DGQ4w3URI89GQw--&t=ed37d732c48f5a4376c7cd585d82ab8f&op=NDEzNzc=', 'Episodio 107', 'Batalla final en el Castillo Trébol'],
	['https://jkanime.bz/jkplayer/um?e=bW5YanR2SDJ3SjZoWE9BVFhJNnF5cm8xT2wra2M3QXFmNWdTMDlCV0tGM2wwWm1YWlVRTjErakZhbjRRQ2EvU2x0TEk0RSs4Mkx3azRBRDRrcHNlR3c9PTo6sNvaYafAlJT7XXmpJKNzeg--&t=9a3e3ea965a7474da1cfe0dce858c8df&op=NDE0MzE=', 'Episodio 108', 'La bailarina del campo de batalla'],
	['https://jkanime.bz/jkplayer/um?e=WVEwOGd5NS9lSHAxc3hyUEd5ZjRQQ3FzNndzeS9jL1lRcUdvYXVWaStUSDhsMUhCWlM5V2o0M0JxcExwaW93VGZTSTZHSHJmWlRNa3p4Yk8xYXlvZnc9PTo6TRq1wCIpI81v7Z6Z9wowEQ--&t=01a28000ad28de1acf07bb4d830a5ae5&op=NDE0ODg=', 'Episodio 109', 'Los hermanos de Magia Espacial'],
	['https://jkanime.bz/jkplayer/um?e=NENUa2MraVhxeWl4WUdBWGJFcGRwNlcxQzZ1RE1OaTVRaTZOK0NmQXcydHJmeHYzUURNck11alJ6ZGxnV2N2U1BjOW9wbHZnWWlkZTRoWFNpdG1NNnc9PTo6i3E0Qigjk5DUxiK7K1sRDw--&t=afd74c13e62a269471bca76837fc25d5&op=NDE1Mzk=', 'Episodio 110', '¡El Toro Negro Embravecido se une a la batalla!'],
	['https://jkanime.bz/jkplayer/um?e=cDJtbXVtU3poOU0wZXBMK2VIU1ZnRVRtRjBlRjc2S0ZVVGpQV1AyU2NkOWZoaWRSY1RCdk8wQzhNamhLSVNsRGZCUlArS3lFaENsTnNWZEhuTm5aV3c9PTo6oGk9vIr1Eo5za3hRK4h.Iw--&t=11bd1fa9edc725f8d2a295da79eeb9fb&op=NDE1OTY=', 'Episodio 111', 'Los ojos del espejo'],
	['https://jkanime.bz/jkplayer/um?e=Zm4vLzErRmJkZDlmNWFMYmJiS1FBUHdQYVhDOUkzQ2N4Q21Zamdadkd2UFpNTW80T3VxcVJGZ0hzRFBrVnlqTnMrelVlalJmV1JNaEFmbWQwd0JUMlE9PTo6SRul9mbpiRWHYAb.COqMjg--&t=7231f24211cd7792fe7b39da2a2819fc&op=NDE2NDU=', 'Episodio 112', 'Humanos en quienes confiar'],
	['https://jkanime.bz/jkplayer/um?e=SzUzVmkxQmtCOCtnaXJSSlRMTmdzS1RpMDcrRkRQTFBiVjlqU1JXYTJtdlUvcGFvVVhvUko2SjZNZVNUbk5MZnA4YVNqbVZGVFJUbExNM0J6aEwwRWc9PTo6_3kKXahSvIWbyISN_0411g--&t=f7e38046dc880ae3144b422c84cb83e5&op=NDE2OTk=', 'Episodio 113', 'Entrando al Palacio de las Sombras'],
	['https://jkanime.bz/jkplayer/um?e=VkJJKyt4ejd4YmhtbUtUNU1JeUN6cUhDc1FNMzM2cDRpaGNoVzFFZGtlRTliVnEwaGwwNHVINnE4KzNncEhEUFJhZDVGSUhJWHlHc0x0UUsrUGpmRkE9PTo6eRLFKlk6HJCXbEgcp0.RtA--&t=6185e56c2cc78ba47a751d63d62b7488&op=NDE3NTQ=', 'Episodio 114', 'Los últimos en entrar al castillo'],
	['https://jkanime.bz/jkplayer/um?e=UXhYaXZ5YTJOOEs0VXVFdWZTVGM5SVF1TzRiMU5vdkVBU2RCKzJEdDl5UTNlWmZ4MXo0NkdFeWd6VWhFZFJzc3pxN3RtYkxiYk1mbjRlNHpkR0VNQ2c9PTo6VSsoVcmlNbDHEete1_g1wA--&t=8870f76779e7c585e74cdb4f300921f1&op=NDE4MDc=', 'Episodio 115', 'El cerebro'],
	['https://jkanime.bz/jkplayer/um?e=Yi9kT0Uwam00cUxLdGdVZHg3emlURVhZL1R1N202SlJYbExGUG1GR2RibGpNRkgwTEhqY2YvN044NEtNYWJmNkdVNEcwdkRaakVLaDFtb3RsTXZQK1E9PTo6FU.a3jXwzkGOg5cNDlnTOg--&t=e6401fdedbe7b5eb6113a585d1502e73&op=NDE4Njc=', 'Episodio 116', 'El peor enemigo natural'],
	['https://jkanime.bz/jkplayer/um?e=Sm9VdzZZV3RKNUVVT080dTdKa3BLSUlnUFI0d1h4K2RURE52NjQzT01DUWpOL1lESzJ5NGVob1FscGphRmxzSWZIY0J3cmFvSlF6MnpUWEQ4Z0FiNkE9PTo6_1qrpV6Y_BieJSX8TJkNTQ--&t=4361f62b56abc75847db39802a8989bd&op=NDE5Mjg=', 'Episodio 117', 'Es la hora de romper el sello'],
	['https://jkanime.bz/jkplayer/um?e=SHpEQXp2MDZpMmRzOHVqYjdlVVhZU2Q3L09XcTZ4TkR2cHNwS0ViSDk3NURWRmRsYkRRS2FDUzluSHBIZnN0UUxpakNqZHBrMjNzcmM0ZHdkaHdkOWc9PTo67ymENb1y_BG4MfnfpfgXMA--&t=eb2c115996de9709efa58507c07b40ab&op=NDE5ODU=', 'Episodio 118', 'Reencuentro a través del tiempo'],
	['https://jkanime.bz/jkplayer/um?e=OHNRZm8yRU5LejhwdVNIWGVYcWJUTUZNMm1mSFZva2JxZU5uNEE5aFBiQ0pkYUF1OXV5djF1WURnVTZMU1kyUWhaSGVlQ1VtZlNDcGdkS0lOcGJGOUE9PTo6Nb2gH9M7EYoeN5yJHU3Ydw--&t=aaac90871c235a0b01df2814e68213f0&op=NDIwNDA=', 'Episodio 119', 'El golpe final'],
	['https://jkanime.bz/jkplayer/um?e=cS9PdFBtV1dzSlgrZW44RWY3WGJzMWFCcHNITEpyMktrdkxTL3VpZC9ESllpZHBkOFpFdVpLUTBWRjhsK2xuQ1FZa3ZCelFMcU1zb2hRUEEvU3JxN1E9PTo66Hsa9yL01cAa8DpArBQ2mA--&t=86cbb7dba804b6c34f1f251e4869b479&op=NDIxMDE=', 'Episodio 120', 'Amanecer'],
	['https://jkanime.bz/jkplayer/um?e=TkRST1FmNjVOMGdXbTlsbGZrei9Fa1hHQ2VOeko4NHlkaG1meE5SUTgzNGh4Q01zWE5PQXhmamY1WHF6eEkrcHg4dWUweExCMysxQVoxUnIvQnQrdHc9PTo6o.08InW9LrpMKpBqrqBe7g--&t=afe1500653ec682b3ce7e0b9f39bed89&op=NDIxNTc=', 'Episodio 121', 'Tres problemas'],
	['https://jkanime.bz/jkplayer/um?e=NXJZZjFBT3I3QlZsZ3FZYUhtZmR6SXlYVGtvL292cU9WaG1VYStXOEtZbXM2N21hc2JjSWxteDd2ekhuMUd1R2FmQ3pXdXNqdmd1d0tJcitVekR5UkE9PTo6Ojme7s4wfvkoAUfmyGITqw--&t=696dcbb1a2f8fec659fe38cfc0316c66&op=NDIyMDU=', 'Episodio 122', 'Negro absoluto'],
	['https://jkanime.bz/jkplayer/um?e=TUx5K2tOV1Z6TTdzbUVxVDBoT29JZmJpcml1ZVowN3JqVnRWSHJCbXpVaXYvb2k2RVVMeUpUZkhwWERKeUNDUnpWMnJoZlZ6UkRZazMwalEvcmQ0WFE9PTo6P0F52R8eW.Tk5GLoIcaK_A--&t=037adb4f3aa1d0bad47958c8bc165985&op=NDIyNTc=', 'Episodio 123', 'Los recuerdos de Nero y...(Primera parte)'],
	['https://jkanime.bz/jkplayer/um?e=SUFTQ0VCMnh1TThBNHY0T1lUa0ZQUTBTWjRYeitKZUl1YjcvWkpxaWFKRHZ0QWJ0VnBpTTN5R0pZQ2NFRnFXdG1wczlNLzkrTHIvSzA5N0dZY3BoaUE9PTo6AFnOKCeWCHrTnKBJZNVMOw--&t=5d23750fc8ccf6284ca2ef9063c7b395&op=NDIzMDY=', 'Episodio 124', 'Los recuerdos de Nero y...(Segunda parre)'],
	['https://jkanime.bz/jkplayer/um?e=Q0ptNWdDT1RWOGhkaGtqR1hPNEZCVlExbit5STRmK3ZsQ0FXclY5cWlZZWVOTU9kY1N4dTRDUDlyU0N6WHc5dEV3eDg3ZC9LRGFRclY3K2k3eC8wMFE9PTo6hi6clzM7YCjCJWeKJaidlQ--&t=4d7061dcae91d9c79ad39c8289bb4e3d&op=NDIzNTk=', 'Episodio 125', 'Regreso a casa'],
	['https://jkanime.bz/jkplayer/um?e=RW5UVFNpOUpPb3hRZEZLNHJUZEM2VFplWGU4QVIzMllEOWtyd0tIbS9xTUFFNy9TdlhlSkdZVVJsK0hMZmR4UVdnaVF3ei95b092bEF2cXdNKzFrOGc9PTo6mSTEvN6yu94hiBKU3BTYFA--&t=b62db8fadd1b177cc5ed1d239d6e2f1e&op=NDI0MTQ=', 'Episodio 126', 'La confesión de la Rosaa Azul'],
	['https://jkanime.bz/jkplayer/um?e=bndVa2lXWlc4OGJyNEtzMWNYYXArL2gwZFVWVWhlWnlpT2plVm5XRVN5dTBtRHB0d0RzYTVvSGw4Z1cyL01mYnFGWW5udzFBbkNIQTBIZXdKWXBYeUE9PTo6URl.LJdOqT5A.jNh0PWHfg--&t=e3fd458d02cc75934dd2c30f896ff698&op=NDI1Mzc=', 'Episodio 127', 'Pistas'],
	['https://jkanime.bz/jkplayer/um?e=ckY0TWFpL0p6cTRpUTFYU2ZDSGhmdFZuL0VZVk9hRTVaUjA1WjJDRTNzQVBuM0Z1YW4rVkpFQ2NJZW1JeFBwMy9FeTBGREJIMTRkRlVxVXNsWHpiR0E9PTo6NVMYCU_2Y.0ta.OfByDaHQ--&t=32075cd98185a51c9d1b2733971a1713&op=NDI1ODk=', 'Episodio 128', '¡Hacia el Reino del Corazón!'],
	['https://jkanime.bz/jkplayer/um?e=bmw5L0NtNFdkenhFSDVWZEx6VktGMHFtOWdLbzZuSGUvMHBFTjgxUmtyZW1MdnNBdFI1TnBINDZXaGdhb00rVVRxZlNKa1BRYkNkMURJT1BCaFRxUVE9PTo6vkr558mZmZcMRy3.VnWekQ--&t=5c6ccef01fc04bcec1297ec5a752c9ad&op=NDI2MzM=', 'Episodio 129', 'El diablo Megicula'],
	['https://jkanime.bz/jkplayer/um?e=dXFJbDZsbDI3dHJJbzE4MU0zRExHdisvRUhrUktINnN5UFJ4TWFLZzhheDRINERzUVVNblpOYkQ3cVFOZTh4UWxaem5na2hYNEVEWlMvbkR2WDEvNWc9PTo6N03vsVwIbCmIhxtyB79oag--&t=aa3033f10280fc120dbec5f3877dbcfa&op=NDI2ODk=', 'Episodio 130', 'Nueva reunión de capitanes de orden'],
	['https://jkanime.bz/jkplayer/um?e=aDd4UWMyZlI3b3VkWDRtTFAxSXExVTd0VTcveVJzM0phd0w3QmduTzQ1UENFcDc3aDMrSkdzYXR5VURQWHdJZ3Q4OTU2aUhiY0RSZDJPMGZ0VEJNVkE9PTo6qpxjpEAZ7w29SrhM2Liruw--&t=26529ea27107055c4b6e276b56797020&op=NDI3MzU=', 'Episodio 131', 'Una nueva determinación'],
	['https://jkanime.bz/jkplayer/um?e=a096b1dqVXJ4RlVPL1Zvay9DYUNTU2owYXJYY2FvWGlGNyt1UGpvdkhjM0VNOHVXTzlyeWIwQ05aVFZ6cW96N0pHa2dYd3pDd2p5VEYzT3FWS0p4Tmc9PTo62Ol23rfZ1v7EH4CwwddLlw--&t=860e39bc33e7c4ca4c26ec67979cc290&op=NDI3NzY=', 'Episodio 132', 'El despertar del león'],
	['https://jkanime.bz/jkplayer/um?e=NDdFKzRuQzEwWDA2ZHBQMGhtUHFvWWtpUktGYmVZYTBWR1p6MnBIc3JBZWdoTjFDN3FkdEhXdE1QMUxOR2FZWjo6d1VNpXH2oVBkTaERknXnjQ--&t=2b4d68431dea58f73a2b3bc95636522c&op=NDMxMTc=', 'Episodio 133', 'El despertar del león (Continuación)'],
	['https://jkanime.bz/jkplayer/um?e=WktKZDlBRnVOMkVvNmJlTTNJN3MxcVRiVEwybzZQdUVDWHhrMytoaVh5S3Q5WXV1bEJUSmZveHR6Vlp5azBTYTo6OqVoh96IM1Uy.nr0WTlWEw--&t=19e733acd3ee9f9362a484e5915c132b&op=NDMxNTA=', 'Episodio 134', 'Los convocados'],
	['https://jkanime.bz/jkplayer/um?e=aHVPZXFoNzFleFQvTVNtMkgzQTIwN2M5ZGJpbm1USFpjblc4TW85ejlRWCtkMk0zRFc0M3pLR05WRnNPTVU5ejo6ShNRE6VuBnmGc3IZNAjt2g--&t=e1eb0dc64e61920907c053f5c6e0e7ed&op=NDMxODM=', 'Episodio 135', 'La persona en mi corazón, mi corazón, mi corazón'],
	['https://jkanime.bz/jkplayer/um?e=LzI4bUE1SmlTS1BTMFZwdGFnNDh2UzExcm0rMmNYMWtreXArTVFoUGFsVVJpSVI0cnVWTEZXRHFtSGZmRG5YVjo6PtZs3q4YlpFztjcP.u1Meg--&t=03cf01ab1a9e0f461e4af33fce8d71f6&op=NDMyMTg=', 'Episodio 136', 'Historia submarina oscura'],
	['https://jkanime.bz/jkplayer/um?e=TEFyUWl5emtvR3JlWFBzM2JoYjdBZEFRNDVvUjMrRHR2ZWNXcFBSRDhsR3NDYW5WcEFJenU2MGI3TTh5dDNqYTo6LHVLmRE3vvDI.r8UNa3qEQ--&t=039877e2030dcb53763e516363a3da6d&op=NDMyNjA=', 'Episodio 137', 'El hombre centenaria de Charmy y la soledad milenaria de Gordon'],
	['https://jkanime.bz/jkplayer/um?e=UDN3SityMEprYlY0NWVQZVFmUVBkamxaQUFibm53Uk1KR3Y2bFpTSTk4SDVzNEpjcFFabVNjZjVqVFFIR2g2UDo6XSc3tJcoP.O.BL3fEluv9A--&t=d6aa10b891aaa3200288eec87f4570f6&op=NDMyOTc=', 'Episodio 138', 'El socesor de Zara'],
	['https://jkanime.bz/jkplayer/um?e=YnVQRUFUbVZUdXZPejJ5SmZQeDhqQlhDOWlVU2k3SG1jK0w5U0c4N2o3THR6L3pCaVgyc1hvN0s0SmtHcEtWTjo6KIaIwhZfmiIRrOWSB9aRIg--&t=69acd488f0b7effcaf18a4ce85defc85&op=NDMzMzY=', 'Episodio 139', 'La bruja vuleve a casa'],
	['https://jkanime.bz/jkplayer/um?e=RXFJdmViRlBDTERrVVRra3pHcXh6N29zUTUxeUxrdU5ERkZEOXhVRFZXU3hYQVl0RTU0dEswWXk1dzVhVnNzZDo6csWS0rA4gwglQS3uYhEANQ--&t=2f4ce765370963b46cc97175da3eae88&op=NDMzNzY=', 'Episodio 140', 'La petición de Julius'],
	['https://jkanime.bz/jkplayer/um?e=cHJPWDdXQ2VGU0R6Mm5MbnRpQUhtNUxIVnFnYmp2K2hISDAwajR1NE5DNVdjb1piYTFGVXo0YlF0YmJ3R1N3UTo6qIse4xwp3ZV0JH_Neadwyg--&t=20c1fd3638caa5d1dce50b6c0b7fc409&op=NDM0Mjc=', 'Episodio 141', 'La familia dorada'],
	['https://jkanime.bz/jkplayer/um?e=V01TcjgvTUVrb0ZIbmN1UTRFSVF2aEVEMU1XYk9tSlVPaEtqSGM2aU5GbktQTzJSWXFicS9oUDRPQllpOWY4djo68ItfNvxkaxupq_3kvjEsAA--&t=7570a1928de2b6137980bde646329ba6&op=NDM0ODY=', 'Episodio 142', 'Los que se quedaron atrás'],
	['https://jkanime.bz/jkplayer/um?e=T3NlaExwY2U5SGlVbHFaMDNuZ3k2N3JxTnU5cUlmQ0hJdHhISkhjQmNZMFRVQ0N6UFliZDVUNjhWWmxvUWtsMTo6bVacHniqK05rO7uULKN3Vw--&t=e5771214664db8f497f005808cb5869b&op=NDM1MjE=', 'Episodio 143', 'La balanza decantada'],
	['https://jkanime.bz/jkplayer/um?e=RzQyTkExSTh2c3hPajF3OFFiTitrK29SbFpqUUMyVHEwNFdrckZ2YVRQQmZFYlN5YWozTjZYZkNUdlBSSUNtZzo6z16FS5ajyVxCzx2ttlCNxw--&t=d8ee5549d305c9d259dbbf870d5bc712&op=NDM1ODY=', 'Episodio 144', 'Por la extinción de los diablos'],
	['https://jkanime.bz/jkplayer/um?e=WXVBNk1ycVpzWkZpL3ViUXlIT0p6NzBlRXhJL01iMjNLZjB5QXZhMStkYmZLQXJ4cU9aQ0o4R0hzOGNFNmwrQzo6o0jPkEMVYdCxFHhUBDvjIg--&t=530cd267315741da2f57ea61dd741d51&op=NDM2Mjk=', 'Episodio 145', 'Rescate'],
	['https://jkanime.bz/jkplayer/um?e=UVpTa0Y1d0JJRk4vQ3R0d1JLQWxiQUNKMkN3VXJYV3pmbHpkYzUxU0NJU1RtbVRqaFc0V3hSeUhLdS9iVW9mWTo6c8RGb8gm3iL0I77RgmK0.w--&t=0b97e22ca7c95fdf86d97f10abd7a6c3&op=NDM2NzA=', 'Episodio 146', 'Los que veneran a los diablos'],
	['https://jkanime.bz/jkplayer/um?e=ZXZ0ZWNKcTIyVkwxbWI5cCttSG43akQwOGtqUlIwTURxbldCKzd0QmJZWjhOZnZHNEgyaEpXVDFKTkFSRVpyMTo6h9UNNPIaCH4YdBqebIy8ow--&t=f835b8aee9c81ffe5be5ec96139a0567&op=NDM3MTg=', 'Episodio 147', 'De vida o muerte'],
	['https://jkanime.bz/jkplayer/um?e=TENDdHNkSGFqbGZPdWs4d2p3Wlhxb29JclJseXVDYWtRd3ZYRHVSZTJBOGVmckJnb1pud3pNZTFyN1R4clpyNjo6G9Ghi0k8._aR6mwPHCdSbQ--&t=3e9702e1570af46ccd4551b7f4909f6f&op=NDM3NzE=', 'Episodio 148', 'la luz que ilumina la oscuridad'],
	['https://jkanime.bz/jkplayer/um?e=ZlJnNXl0eHRrc1lpNWorRE1VZHRIQVgwTjU1eFZFb3NaUjhXM0NhRWNvRnJvc2lHdlMvTlZpQmduMHVnbWZQVjo604YlK44TC3WWsntKaXg55Q--&t=2020a33f4469185b8b09745d478954cd&op=NDM4MzU=', 'Episodio 149', 'Dos búsquedas'],
	['https://jkanime.bz/jkplayer/um?e=cW56MTJIU2VlR0ZmempDQVVvbVovQzNkeDZMR0pEcjFrZkJ4OWxkTGxFR0puVGRIblpaRG9uaksyV3BxaVRHZjo6a.zjAZCYnqB4GaDb9F3l6A--&t=559fdd4cb3c9fdc4a3fdb0940fe3bb64&op=NDM4OTE=', 'Episodio 150', 'El reto de las damas'],
	['https://jkanime.bz/jkplayer/um?e=MTRXeFVFZFEzekNBaDU3YmtMWVIzWXVDcE5USlp5a2l1SEtkNWZGOEVSSCtXQy9kMmU5TGFzOHd5bFFRSEJpRDo6bzuZZTj70EQCmhHSr1pZ2w--&t=5b7fc89c42ee0f99a9db33e8baed5c52&op=NDM5NDM=', 'Episodio 151', '¡Choque!¡Batalla entre capitanes!'],
	['https://jkanime.bz/jkplayer/um?e=Qzd5RjBqR3podHM4VDdSVjFpOW9keDREZURsMFFOVVViYnVwa0VUUVBUMnY3bVVCbHlhUHhkc2tGRHpkdkNUNTo6GsnFfXjwrFNyrjddswjr.g--&t=b20ec3227487235bbe4117ced1337719&op=NDM5OTQ=', 'Episodio 152', '¡Hacia el mañana!'],
	['https://jkanime.bz/jkplayer/um?e=bnUzanlKSXBCYWNPOENQVlZ5bHY4VkJDb2drT3N3VHVYMkl5Y0JreTY3UWJ0RHhOajIyQ0JOZ1lieHo2Ykx0TTo6Ua2R9te89UfgZaML4s6WjQ--&t=f9639421ad8666783822bcb2e5b8eb8b&op=NDQwNDA=', 'Episodio 153', 'Los elegidos'],
	['https://jkanime.bz/jkplayer/um?e=VHNiQUFiaDN0MmlnNUh5U2JLcERjckxsZXRyUWVTcDR3bHNacnE5YWdiZVZTT1ZzTE1zb2FRQnBONWduaWpTdTo6YeMhVhWjtgVRxAGPbdGqhw--&t=2ba87eec587d84115ba12e26d79ecc3e&op=NDQwOTQ=', 'Episodio 154', 'El vicecapitán Langris Vaude'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Clover/Portada-Tmp3-Cap${index + 1}-Clover.jpg`,
    'iframe'
]);

const cloverMovie1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=MnlvTmlQWFdZM1BxR1EvWDNQUXRFOFpEOU1KR1dUY2tDbUw3dUd0Q0RyeFgvSFhwY1lycGlWaWhNUXNvU1kxNXdQMkpPN2JpRnpJdDgvcjhxR0gxZ2c9PTo6wik6UhtOCBLPH0.D4Qh7xQ--&t=2592a79ad07dd0ae4f969f0b4098ef91&op=NTMxNDc=', 'Episodio 1', 'La espada del rey mago'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Clover/Portada-Movie1-Cap${index + 1}-Clover.jpg`,
    'iframe'
]);

const cloverSeason4Episodes = [
    ['https://jkanime.bz/jkplayer/um?e=bnFwNXNqQXMreVFLYTJobWhhRXIvLzVuTEs1QjliMHJJTUN6UjBsb3hlRmNPMjhad29ycW50RFk4dVdJdFZZcjo6XMw8c9xnXKQRJVokFyzrHw--&t=d0e90680d661da7f891673e2caea4d98&op=NDQxNTY=', 'Episodio 155', 'Los cinco Espíritus Guardianes'],
    ['https://jkanime.bz/jkplayer/um?e=a0tFSXQzWDVMa1hPSHZQNFdGVmFBN0E1QlBBc2c2TnJraDl3L2p5S1kvQ1Ezd2NjS2EvaXNaK1ZuQkJpWEdPUTo6dn6hOwzoLQpDKGwe_QbSew--&t=4ff82c0b528f93716115986da0412623&op=NDQyMTQ=', 'Episodio 156', 'El poder despierta'],
    ['https://jkanime.bz/jkplayer/um?e=Z2xSNUdwS1FDRlZtWXFZUUY1YTlZV0lORm0zSmtFM3VSN2UvaDhPQTdTcTdEMWFNOWE2ZVBFOXJZbCtDdDIxZjo6u8AocxD6sXxxNnN9qHTQLg--&t=aa0afa9ee550c27cbb81cd1fab4af6e1&op=NDQyNjk=', 'Episodio 157', 'Trébol de cinco hojas'],
	['https://jkanime.bz/jkplayer/um?e=a2puREhGYjljaVl3NXF1QTBlQkhGa3paV0lIcHFyWUx4bE5NaUE2SjlhY3RuZUw5T2hkTjgrSG9rdERsWUxFcDo6E5nMeYUAHE1u61yoNVLEMw--&t=3bbd8afd89f7b6895b3d201b67f6ff12&op=NDQzMjM=', 'Episodio 158', 'Se abre el telón de esperanza y desesperación'],
	['https://jkanime.bz/jkplayer/um?e=MjhsbWNxbEo2SVJVVlNlandYYzRxZGhCa0FtaGhEeXFoLzdmSnp1enhpUHNpY21iNWZKN2ZiRTYvS1dvaVNoRjo6tXDWtX5egIVtyvaP4ua96A--&t=45a44284115503af7ecdc4e477ef271a&op=NDQzNzY=', 'Episodio 159', 'Un lago tranquilo y la sombra del bosque'],
	['https://jkanime.bz/jkplayer/um?e=cXkydk5BQVRZN09LWVZQRXg0aitZNmpZTlZjeExTaWRxUkNvNEdlNHgzcVp2Rnd0UHpxOVhNancwc01IeXB2TTo6i5aD3HEuqVm30dckFCh1.g--&t=2ef8781369f660c4e873bdf5fbf863d4&op=NDQ0Mzg=', 'Episodio 160', 'El mensajero del Reino de la Pica'],
	['https://jkanime.bz/jkplayer/um?e=NmhPY2JzdlVzZCtnZlN5VGhWU3QyRDJZQjdhRnA5NTZLQlh4Y0dFTENNQ29hUDlqa2V0aVFsenpHUVdwVjY2VDo6gi6Ygt0fFYvpumdIleE1kQ--&t=3e517f740a205531302fa9a026864bfa&op=NDQ1MDc=', 'Episodio 161', 'El poder de Zenon'],
	['https://jkanime.bz/jkplayer/um?e=MDZnQzRscGlsa3Y4cGhDalcveDByeS9xZGZ2NThNY0dPUlJMenRJbEhNQ295Z0dPcnF0SmtMdlVmQUN4VjliVDo639_N56lyKKno9R.Q3y3XOg--&t=1cc27fcb2c4f78845486607056ac1e05&op=NDQ1NzM=', 'Episodio 162', 'Estalla una gran batalla'],
	['https://jkanime.bz/jkplayer/um?e=NDJLZEQ0eEJsemxzVGVxbnJ1OW5NQldRYW5hNTd5SlU5dTJ2WUxWWFBydHpXMm50WEw1M3FsemNEYTgzS0NsMzo6B5e7T5TT32Qwbj3uMXtXKA--&t=42999a62bd597f7f6fdc85c73e0daaf0&op=NDQ2NDA=', 'Episodio 163', 'Dante contra el capitán de los Toros Negros'],
	['https://jkanime.bz/jkplayer/um?e=bXhDZEE1SmlIMHlWd1pQTVdMbmNlUXZrc0oxMjZlaW5xdThodnlDL3lPRkVTSVJCUVlQR3NJZkJWaXBDY2ErZjo6nBvDtUyD5ZyK5ipg2N7jKg--&t=dbc97b125b9f02dee3823b2ca58a0f2d&op=NDQ3MTA=', 'Episodio 164', 'Batalla en el Reino del Corazón'],
	['https://jkanime.bz/jkplayer/um?e=c2VhWXpCRDRXQXU1RWd0K0RIVUoyZUtyNjdrdDZTVVVIaWdjaHV6aitIcERNZEJWaDZqa0RHZ09ZY2Z1dXhKUDo6iMBYe82IxgITkfPmNQDZug--&t=ba288e94194f1abd5c2cb5f9313905a5&op=NDQ3ODM=', 'Episodio 165', 'Cruzada de agua'],
	['https://jkanime.bz/jkplayer/um?e=MWhkQ3REbjFHNjFpdThvZHplOVd2QkFJb0tCeEN0MWxCZVJVNndRb1h4K2lrVnN6SmtiYytiTG1sMVdwNkN6Ujo6MsCV4e6TxuRQDlJ.CoUvdQ--&t=df97b6dc27449b13dd32c11daa478177&op=NDQ4NTA=', 'Episodio 166', 'El capitán Yami Sukehiro'],
	['https://jkanime.bz/jkplayer/um?e=VGlOU28rRTZNUkpKck5aRUY1NHZ2aE8xZldHbVlSVWNnWG1wUkw4ekl6UE92dDVMS0xFT0duVmFMZXVQQmJFQjo6bwqzQWQnC_tM4kg5Qy0O8Q--&t=9a4f82e5701102ac04970b46f099044f&op=NDQ5MTY=', 'Episodio 167', 'La promesa negra'],
	['https://jkanime.bz/jkplayer/um?e=NTdHQVYzSXlTUGpTUjVSVkJENHNNcUNGN2Q2YkVtMDVrSHVZazRtdGZSbStyaG9INDVnRER2dGhqUER1aHVMRTo6_mMPmznzAY.3yDJBXL1iUg--&t=70699f79c6aeddeb2d322d7074c2f366&op=NDQ5ODc=', 'Episodio 168', 'Movimientos superiores'],
	['https://jkanime.bz/jkplayer/um?e=Nkk0ZXp1N0pJRGZ2c2NHRXk2cjFzU0ZGc1RKbkpBRENCU1h1UEE4Q3E0dS9BZTMraXJMM2hmNDVVTVlxZWt0UDo6oZV14uN51zXwdN3zoCRWIA--&t=3bab61d4e908e8a49692fe017c65ec9b&op=NDUwNTM=', 'Episodio 169', 'Ritual de obediencia'],
	['https://jkanime.bz/jkplayer/um?e=RXV1azhUVGFzbkdBcGw1R1BLZ0U2aDJQaU9ibUtzcjVSZTJMYWlxdnpELzI3M0RENDBkOTdmU2JjS1hJOFRybjo6g8qwYFIZrzeR9y_60AZTsQ--&t=8633ed0606d56f587bc45831882dd583&op=NDUxMTc=', 'Episodio 170', 'El futuro distante']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Clover/Portada-Tmp4-Cap${index + 1}-Clover.jpg`,
    'iframe'
]);

const cloverSeason5Episodes = [
    ['https://mega.nz/embed/dBNghSbZ#wQxUlshkoSbUDQNYS506Uf-c_2wb_xXEWtFQqVdXqQQ', 'Episodio 171', 'Comienza la guerra', 'https://m.media-amazon.com/images/M/MV5BMTM5ZjI1MTctMmM5Ni00Mjg5LTk4YzUtZDQ2MjAzYzg4YmE5XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/1UlRCayB#VpXA-JFbgyjBbd8Mtk_T7z3SZKwove80R2GwvivG1vI', 'Episodio 172', 'La puerta al infierno', 'https://m.media-amazon.com/images/M/MV5BNWQ0YWJmNDMtYzVkZi00MzViLTkxMDYtN2Q5ZWJiYjk2MTA5XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/AY9hiCrZ#hLekjdCShsNXkv0bL51sYw4BA75AR637yhdR57km9KQ', 'Episodio 173', 'El defensor cubierto de negro', 'https://m.media-amazon.com/images/M/MV5BODYyMTQ4MTUtZDgxOS00ZGJiLWI3MGYtZjQzYTcyNmU1M2U0XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/IM1HQbiQ#p5IyAiuPLaNHy9Q_jVO7ja0Z4ZI0lfTfoPJfKGgX0lo', 'Episodio 174', 'El día de la expiación', 'https://m.media-amazon.com/images/M/MV5BN2FlMGE4OGUtYjI1OC00NzMzLWE4MmQtMDEwMGIxZjA4YzlmXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/hN1mlLiD#ohVZA4qx-MUaUrN1YSGZ4zxI-L6JUstCvy8fh_jnZt8', 'Episodio 175', 'El mejor contra el peor', 'https://m.media-amazon.com/images/M/MV5BZjk4MTkwYWMtNjZhMy00YWQ0LTk3NzAtYzA5NDQ2NDUzY2ZiXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/FIkCkSAS#FYoKo1zXsT7_OVvOLKk0yqer72TmKapWSZ-6t3MyhTU', 'Episodio 176', 'La valquiria sagrada', 'https://m.media-amazon.com/images/M/MV5BZmRjM2ZkY2EtYWQ2MC00Nzg5LTlmNDktZTQ4NTZhNTlkNWE5XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const ragnarokSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=ZlVXbktvRk9nTEFhZnhDTHFxLzFSN011L0xEdGh6RDF2TVdkYjlQWGJ4Z3Awc3N1cHJ1QmRScTNhU25nbnQ2ZWZCaUU3SnNzVWRMK3huSUJlTlY4SHc9PTo6zUYh20JDKcoZMxdRLkboeg--&t=dba5599394ea5d4dce084407e2e6274d&op=NDU4NTM=', 'Episodio 1', 'El Ragnarok'],
    ['https://jkanime.net/jkplayer/um?e=dzE0cG5OOGF1VlZBTHdLODZsbEpQZFZKOWNGaWN1MVg2T0UxMVZ0d0lsNEl1WGtrQ09ubldPUzlvaENYU0RRWWlCZWw5c2puKzR2cVAwUU5HdlNhSXc9PTo65sfFHQLHJaSw2HYbqPMW8Q--&t=3e4a0c9abc957e634d773110fedafb26&op=NDU4NTQ=', 'Episodio 2', 'Un adversario a la altura'],
    ['https://jkanime.net/jkplayer/um?e=V0x4RE1SZldtMytaSDQ1NXdsRVEwb2QvVDU5eC9PT3lEamdPV1RsZW9OWTk4cjNnbkQrbzY5V2E1RWtoTzFna1lrcEtRWFZVWEw4RTRvOElxRFBBVGc9PTo6Z7wU.D7JdY0ul0xiqoeusg--&t=3bfc8356903f8b39ec744b6a0154bcba&op=NDU4NTU=', 'Episodio 3', 'El golpe maestro'],
	['https://jkanime.net/jkplayer/um?e=ZDJrVjVYMkdJSXk0TU5CTFlUaGVQcVc4TzNMZlgxMDloemU4cFFSclJiRTBha0R1QzBZU3crQ213NVhHSlg2Q0NyajA1eHYyQ0o4REtScE1Hanl2ZUE9PTo6t8emCAqfjQGZifT5Xa_xRg--&t=5490e7d6b0202e0f649d6fba5bf770ec&op=NDU4NTY=', 'Episodio 4', 'Alegría'],
	['https://jkanime.net/jkplayer/um?e=WkdQTGxMblV6VDVETGZ0SVEwcngxZDFRVkVJYzl0cjVUVVlGTndHL0pZOXMxdkx1czlGa0ZPTWV4L1pPTXN2MWt5cnJPOWFjY2FoVklNVmRRT0k5Tmc9PTo689Rz2lj0YAnXJAYtctUMVA--&t=6726f851d9de8f7d76c143b1e025a9b6&op=NDU4NTc=', 'Episodio 5', 'Archivo n.00000000001'],
	['https://jkanime.net/jkplayer/um?e=YWVxV2NLZktPQ0dNb2U1N2cyQy92K3R4aWhXaDVKeU5meTRubUlyUHBJWWIvWU1pdW83enBKVjVKTDVYT3dtc2IvcHVFK0YxdlpObFlRSEZTMGVXa3c9PTo6z7e6AqJ_iw3WuIEv4lrg1Q--&t=ce10b99820f24fb3dc769a4f9fb67672&op=NDU4NTg=', 'Episodio 6', 'Una gran imitación'],
	['https://jkanime.net/jkplayer/um?e=NklXdHg1QWh1amlXbThFOU8vRENFVytZd2VOZ3RYWmRVYThaeThSTXc2YnpVeFpnbGpobHE5RjA3VXRZSkg2blc1RENSdGo1VDR4WkVuVmdndmZCaHc9PTo68bdG2bhD6DEr_X93iZgq0g--&t=52e6502148c9d92d3e8c078c8983f1c1&op=NDU4NTk=', 'Episodio 7', 'Expulsados del paraiso'],
	['https://jkanime.net/jkplayer/um?e=M1BteEZHaTZ5V3MvaXNVQXJmU3BCRFl4RkVWOEszSUxmbHRtZUxqb2V3dkFFRk9FckhQanE3blM4b0NIK3pMNkNiZWJubzU1c3pabjJ1dHJjcmdXUWc9PTo6IXEc0WKlavffh0lFbwmYBg--&t=8d5679179e529f9ed2dfd332a526f51f&op=NDU4NjA=', 'Episodio 8', 'Lleno de gracia'],
	['https://jkanime.net/jkplayer/um?e=Zi9seFZLeVNCOER0WFVxRVhtMmplc2cxbjRQWFpUS1JSTHJ6UFY3emc5QnYwejJ5YWVuMnBhMm9vWFROcmJUcE1jL0ovWCsxRjZPcHVTTlFiaVVDRmc9PTo66oBv6mRcSlkC1qLTg7RREQ--&t=e575af3f6d64da1287b8b6552b65a1df&op=NDU4NjE=', 'Episodio 9', 'El tirano del oceano'],
	['https://jkanime.net/jkplayer/um?e=Nk1wSjYwQUpPc2RnSXVYeDBuSlNrcGs3cldWbVlxejdhekdUeHphYlVZbzBMVWpxRU9TUHBxZVNkT3BwSHV5Z3FpUVk3MnVBd0NvcE1HeDE1SU1NN0E9PTo6FdDxN1y502rt7TXbxCBdPg--&t=419c2a2a2f4ef10201e0bd13e579ca21&op=NDU4NjI=', 'Episodio 10', 'El gran perdedor'],
	['https://jkanime.net/jkplayer/um?e=SFZkNDQzODF0b0NiSDJjYW92MWV0RzBna01hbkl1ZlFPeFNsNFNCS0tPai90RGlCUzJtRGNCc2xmTlJiSm9FSTVra0tUejNEenpQZlVlc1ZFc1F6NkE9PTo6mSgeYz_lZ2cHgIll9w_KnQ--&t=9b5d7c532f524acbb13114a74e3ff9f4&op=NDU4NjM=', 'Episodio 11', 'La golondrina se asoma al abismo'],
	['https://jkanime.net/jkplayer/um?e=TTJiQ3p6a1JVYnk2UzJCMDNjNUpPQnZjcWhsdUN3OUgwTjh0eEhGWi9tQnZkMHJ0MG82Y2k0SmhxUWhPdjF0eHdkY0ZwNkMrRTladGh3eXZaajhzNXc9PTo6ZcLfvVp6apFzk6L36KwljA--&t=fcac261edd107969dab8b6254f7716df&op=NDU4NjQ=', 'Episodio 12', 'Y el Ragnarok continúa']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ragnarok/Portada-Tmp1-Cap${index + 1}-Ragnarok.jpg`,
    'iframe'
]);

const ragnarokSeason2Episodes = [
    ['https://jkanime.net/jkplayer/um?e=TStxYWwzeC9ERGF5eGNLOWhTSUp4cHg0R1FUL1dTcFlZOEFTN21yeER1RmNLN2dLM3dFYjV4ZytxYSszbWpObHMvVTlHYlYyYnU4VEk5WDNVek1qNXc9PTo6Xfso10KLK8.N6mtWSqw1hA--&t=494c1e8d99ec2b04889e42806f77f482&op=NTE2OTQ=', 'Episodio 1', 'El bien contra el mal'],
    ['https://jkanime.net/jkplayer/um?e=MGsrUmF0VlpkSHVKcnZwMlF2cW9SQWpmSFdremVSZC9jOHM0d0dwNm1JZ25JejZhTjREbGMwdFlkR2NTbDdpRXB3VnJPQzZSMUU4aENRclNnZEpPRnc9PTo6EUNTkp1orcYDC3fGKBL4DA--&t=4d1bd6b7b71837fc45f9a0fd4221e1c0&op=NTE2OTU=', 'Episodio 2', 'El indomable dios de la guerra'],
    ['https://jkanime.net/jkplayer/um?e=SCtqV0s3cXZEMjk1WkhRZ0ZRQS9zTlFOVUk0bkIycER4bWtxbXFWSk9xNDRqSitMUFNVQlMweGFvdThPNklUN1h2YzNCTnlJbkRvaGhSQUVXY2JYWkE9PTo6afGVkr28hs_D9g7oUtbyeQ--&t=69cedb86ab0a122715d16e198312d75c&op=NTE2OTY=', 'Episodio 3', 'El nacimiento de un monstruo'],
	['https://jkanime.net/jkplayer/um?e=YXlCRFM0ekJwK0pnWGhSZHFtUnJPQTA5cGc5TFprbXE1UmNYUzN3NGFFcjJtalVONXNOUGg4SEpBL0RhSE80THk5ZmpvZkl2MmZWdEhyaFE3UlQvVHc9PTo660qgwhoDhytdJxQl753Q9Q--&t=35cf9e0f3791e65c1ea77e19943ee6b9&op=NTE2OTc=', 'Episodio 4', 'El último trabajo'],
	['https://jkanime.net/jkplayer/um?e=SUFVTTlWRGl0aGh2ZllCRTJFVU5NVEpXUVd3L0YzbWNrODJvT3d1QjlmMGRYNjFHOUM3K0JBakQ1MVI4b0FZdHhZSTY3Um5RNFgxWUNzeWFXYSt5d1E9PTo6WpaDRDCz1Z8sV.eAJsX6Iw--&t=76b8c91e717458b41eee39767f188c4b&op=NTE2OTg=', 'Episodio 5', 'Réquiem'],
	['https://jkanime.net/jkplayer/um?e=S1A0cHVJWEhrRE9NNDlzUzh6bTViWnJ6azJLNkNMU1o4ZnI4d0V2SXhwWHFkQUd4Ty9VNkVxT1BmTmxuaHRKcFRZSU9sbjJ5TTA2ekRyQTlKNDBUSHc9PTo65wbiLGB9YU.4ZgWvn4vsJg--&t=9830d910f3fa1bb1974d26a393fc7f19&op=NTE2OTk=', 'Episodio 6', 'Motivos de conflicto'],
	['https://jkanime.net/jkplayer/um?e=N1czUnN0RmhpcVNYcVJubHgzdHFYczE4ZGRwWGF5ZjFmOU1vMXZlQ0VGSlhSWWdFUmpmQ0JBTXJYYm8wL0JKQUwyMm4yVmVZSUZXaXBCaERUK3lqVFE9PTo6fol_LOKxbavO_nXp_h9fQA--&t=112e748d5f9aa9b6dafa4317ef5edc41&op=NTE3MDA=', 'Episodio 7', 'Cien sellos'],
	['https://jkanime.net/jkplayer/um?e=RlZodmNCT2dYY2E1NXNTYXRTM29mTXlJQUxnUnNDVGJTaVViSUszV3VVMXNBM1c4S0Q5K25sM1U1L0JUcEJLOEpHVkg2TG5kb2FPNE1DMFlCakFxanc9PTo6Lsg5yQuwSU6ed640rQiAFA--&t=7f346a3b6379358b5fb0bf5d252e0d32&op=NTE3MDE=', 'Episodio 8', 'El pináculo de los 1116'],
	['https://jkanime.net/jkplayer/um?e=ZC9tY1ljZC91UjQyRUlSUDQ1UDBtOEZ5UEJZbWRNY2lCTDZuanp5WnE1QlQyM0ZWYVlxSTBDbDlZT2NWU3laOHBCZCtBZ2FJb1RzcFlwUUltaERZeHc9PTo6T42kpkme2h1dB9FkUCtuWw--&t=0abb97d0accc424f1c257c60f9e37b8d&op=NTE3MDI=', 'Episodio 9', 'Resonancia'],
	['https://jkanime.net/jkplayer/um?e=SjNSeEZiU09ocVg5MkJhd2lsMndvMW9JTG1NTmd3Ui9FL05kQ3F3V3d3N3lSTm9oS0ZaSG04UTJqVTRORjhMVTdtYmRweFlpY2NMRjBmaFh4eHlmaUE9PTo6gzfd38oiMKah8c4tRZiGYA--&t=a1ff45c29c89790fa9555de3c781f6a9&op=NTE3MDM=', 'Episodio 10', 'El umbral'],
	['https://jkanime.net/jkplayer/um?e=amU3Z3BSVkd0VFN0bkZzb0M4dXo1NFdUaUVmTHQ0MisrcFZtTVhjT1I2RXJZVW9mUXBLQXpEQy9HTGJDSVlSNjlySTRIWC9nS3QyOFhiNitwS3JtU04wVFVoeFdjdmFGa1VOWlI5bWNKMmc9OjpTlgf_QNt.Y34ysQSCSjSE&t=f2a4ddfca3d5e8c2fb6cfceed80c9a21&op=NTMzODg=', 'Episodio 11', 'Sexta ronda'],
	['https://jkanime.net/jkplayer/um?e=S09jTlJKWHAvZUZpaGQyVWhiS3dLZlY4Y3JIbXprYk5OY0ZtQWZ6MzdSZVdaek9Ic2RkRmFtZ2NQVHNDeGU4ekZmaythMkpiT29vWTdoeHVBdmo4dStkY21jTnEyTy90blh0b1pvR0Jmd0U9OjpQaVVoWidZ2E7DusQMyNSI&t=dbd72b65e196f7114227c936090034a6&op=NTMzODk=', 'Episodio 12', 'Zero'],
	['https://jkanime.net/jkplayer/um?e=UUgyblVOTHVONlFDeks5bkpKSFlMc05lcmo2c2hUYkcva29OcmNmT2pkYThDMHU5Nk82d0NBWEhxZCs4Nk9aSXhucUlSeFViY1RQdlJBQ3d6c1RhTXZkS0VyQVkrSTdFbjVsZXorWXJZNzA9OjpmvRWpVKkmwJmYOl1jS71l&t=ab5327746e1a6b54bc56bb1e9616b059&op=NTMzOTA=', 'Episodio 13', 'La pubertad más fuerte de la historia'],
	['https://jkanime.net/jkplayer/um?e=TnRLM3ZJTmplVXkvN1JYTy8yNjB6UEJKMUt3ZTFSTVZHMjg0cVovN3BBSzVXbDRvNm83WXMvdWVqVUJ6VjlNRTZ4SkRZVmJiMWdzQjY2T05ZenZUNGM2eDkxL0IreGN6NGVFNE0wOGtJTVU9Ojp.yxELtP3OkBDxxgssUt_p&t=99900edeac56a01f08d5bbf62b476851&op=NTMzOTE=', 'Episodio 14', 'La leyenda del averno'],
	['https://jkanime.net/jkplayer/um?e=RkphZ1lxMjBYKzFwNlN5R1o5MTJ3VVRlTUl5bERPS1EzMUtjVmprRkttTTdOSEpVWE5JTHR1MDNwTnV2akJ3Yk54eTBDNHc2eWFBRDNMTU9mY2NtaVpMaE1zNjY4NmZMeHo3cnQyNnZtUGc9OjqUvGy1EK8poHIZm47iaWJK&t=9e828a8cf66b7bf2f1563360b39085f3&op=NTMzOTI=', 'Episodio 15', 'El camino de la luz']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ragnarok/Portada-Tmp2-Cap${index + 1}-Ragnarok.jpg`,
    'iframe'
]);

const ragnarokSeason3Episodes = [
    ['https://jkanime.net/jkplayer/um?e=bm1JYTEvSExYWm5NR2Zza0RWRXBlTEpnZDN0VUJlZVpWNzFVUjNqU0JlanV4MjN5aDFEUTV4Ui9jVGZFVkppdk0yRHhKbTMrYWFzV2NJenJsQkc2U0E9PTo6AgvKNhkYej4qafF.JrVKAg--&t=0f0c86ac9a332852f30cdadae54332e2&op=Njk4NDA=', 'Episodio 1', 'Prólogo:Recuerdos'],
    ['https://jkanime.net/jkplayer/um?e=bTQzLzlwWW9xZ2lVbDRwMkZLRFZ1Y05QNVJpNFVIbWJGM2hkaGtzOExCSENOMk14WWxRdEVGeDczeGc3bDg4Q05OVnpjb2xMcGV4a3RrdERpWTB6TWc9PTo6ON1TsVAemqMIbmUG4sdFLw--&t=8b70634cbddc47a305231b6f41276fc0&op=Njk4NDE=', 'Episodio 2', 'Lucha de monarcas'],
    ['https://jkanime.net/jkplayer/um?e=Wit6dEhZWlNLUElWbHR5RkZHM0xyMmJ0b1Jla1FVQWtWdU44UVIrYkovODJzUmh2UGpidXNobEk0enRkVDhDdzNJQTNDN0g4VEJVRjNQWmdRTHBkMFE9PTo6y_9VGJ8R6qgc4E9391QwXQ--&t=794e6ffa814930235ff72759bc1635da&op=Njk4NDI=', 'Episodio 3', 'Chi You'],
	['https://jkanime.net/jkplayer/um?e=dUQ3U2ZXV21sejg3Q09SWjZUazI1NUpFV1hsWlI0VEplc3pZNGhiQjN4eTZHMlVwM0l6aFNSVVhsTUR2YVN1NTBCVGtKUVhIVDhEbjNDODV4TzQ4YXc9PTo6cCXm70XKNN2IukQDTufzfg--&t=64cb4409e8d0699a75ba3cea1ca239bf&op=Njk4NDM=', 'Episodio 4', 'Una promesa y un juramento'],
	['https://jkanime.net/jkplayer/um?e=NExwOEdJRjcwWWFOZkErZ0tPZmxHT2RRZnBlMldYMFNmY0VZYisxMS92WDBiczViUFdZam9VMUU5R004MkRnSXVYb25FajA2Y3gxV2xXc21wS09KK2c9PTo6IgWA9GLYx3ShaEdKifPdmg--&t=8f11b21dd5855e3be499347bfcadee7a&op=Njk4NDQ=', 'Episodio 5', 'El orgullo del rey de Helheim'],
	['https://jkanime.net/jkplayer/um?e=WDJ3RDlLQ0R6aEtpOGFWak04M3JycU9qd3FoL1BsM2Z2YzZTNXB1TllRSDBoNEpNNkJkNlNNN1B5QWg3RWR6ckZralFwdjAyTUJKQUlmYWpPRFl3dUE9PTo6UbmhVSSW7OoJw1tCfqPMxA--&t=80d89a3427b47b118cc2eda6220f67d4&op=Njk4NDU=', 'Episodio 6', 'El regreso del rey'],
	['https://jkanime.net/jkplayer/um?e=SHpmby9xYTduVkJTSmQ3WmpIaGNFVkFNcFZ2Z3pRN3UyckZnTUlUWlBSRy9rcGU1TlBkWU03VlhjSW5UVFN0cHkwMzlENFpWdUwrTHd2R2NqNUthSHc9PTo60XMqqp2LGWC2PEU_GaOpoQ--&t=d10142c16d3ff705ea2b14354505d227&op=Njk4NDY=', 'Episodio 7', 'Satán'],
	['https://jkanime.net/jkplayer/um?e=M1lDSFFBZnBLTkNoNjdzRGttUkhGTVJlaVFZalMrMGpYVW8zN0hsYnMrMFZnQkNDSWs1LzI1MWtHZkZyc2NocGhiRVJsVVRKQ2F2S1A4SWtBaWJmMnc9PTo6FtJao4jBaPTpr6EKLCA92A--&t=87f03533f5a85ad6abeb2db551c6d6c8&op=Njk4NDc=', 'Episodio 8', 'La luz contra la oscuridad'],
	['https://jkanime.net/jkplayer/um?e=Vy91OFVHSXJoT0NBV1FQZkVwemdHdytyT3BUdExzL2NpMEhlZ05lWjUwUFlFcHZiYnRpR2t6ZE5uQTRYM2JyUGYxOUN0QUVkUXdJMkc4VkJ5Y1NvcUE9PTo6grjZWD4kitoBUwAVKfLOug--&t=a02d4cf2bddc426560747b18aa09f15a&op=Njk4NDg=', 'Episodio 9', 'Una maldición y una oración'],
	['https://jkanime.net/jkplayer/um?e=RVFSSzQySVVpNlJIVTFjdTFPeGpnQ3dMVmMybUhZMTUrUDk1K0NBUEpySTZub0RRa21icy9ONXdWM29yeUJwNGpWTDdPVEhDYjJRRVRCdnZHN3VRQVE9PTo6iWLCiQ_FczEyJSwkpfGQ8Q--&t=9d78470c9e7b93f76671da55bd4940df&op=Njk4NDk=', 'Episodio 10', 'El traspaso del testigo'],
	['https://jkanime.net/jkplayer/um?e=YnNnalozREJjRlNwRHpvZkVZWGVQa2x1TnlIRXI4Y0VuQ2JEM1BQc2xVSFpPMDVqOFFLeUVSV0pkRGtJSCthZGNyWm1GRWpHZE1tN3g5d0RDMGl4UkE9PTo6IXRuo4LMLfaZ4TbJ8wq.zA--&t=87d75af6a46af4534843b367f291157d&op=Njk4NTA=', 'Episodio 11', 'Evolución'],
	['https://jkanime.net/jkplayer/um?e=M1Ewa2wxMy9MZHhOTVJyOERab1dMZ2JIdEo3ajNWMENrcGdpZ3dwY2dFU3BHdXEwRXNpVVNsZUErTjZZbURmSnE2MTZiWElMZWc1b2ZoSDRYWStqbEE9PTo68B5JHlB2mrAsSo5nvkmReQ--&t=c1e7067b4f37a18e42b497a6e98f9d6a&op=Njk4NTE=', 'Episodio 12', 'El dios del sol y el héroe rebelde'],
	['https://jkanime.net/jkplayer/um?e=L2hyNmZ0NkJrRXN0LzhjV041ZmJWSVE5RitzZ0t2ajZKUWErQzFuc1QrRW9IQldvYVJFK3NoOHBEejRaNUY0ejBsN3M5Ym8rV04yVFBKald5MCs3S2c9PTo6y_37UyE87wEZGtx_Evbgdw--&t=56d14886f8f3c9caf9c3dfe1ccf7978b&op=Njk4NTI=', 'Episodio 13', 'Batalla de egos'],
	['https://jkanime.net/jkplayer/um?e=ekZkWm5JQW9YNWw0WFIwVXN1NUF4RlpsdzlWYlJXRitoeEtKNGIyY2RUWndYVUErcStkU2U3VVQ5SjU2VHBnNllOdFZReEE4anAveEE5UWNoOEVPY0E9PTo6l7A3Tu1ZgfvJ96kSRzi3Ow--&t=ac26715d459890a73909b7267d03ba1d&op=Njk4NTM=', 'Episodio 14', 'Conócete a ti mismo'],
	['https://jkanime.net/jkplayer/um?e=V2FlMktvc2ZuR2VVUHVKYXhkaXZ4TlNMVE5rb0RSb004NkZERTZneGV0cWo5M2JnRGM0V3dsaGdpT01hVUswMTFnYUREVU81aXI4Z3VyelhuRHlScVE9PTo6Lx4IEYx.xb5zsKeRlYRiNQ--&t=bc5a6278ed53123f56fc32160bf77305&op=Njk4NTQ=', 'Episodio 15', 'Combate entre almas']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ragnarok/Portada-Tmp3-Cap${index + 1}-Ragnarok.jpg`,
    'iframe'
]);

const aotSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=WFlqZGMzQ3pKOGFBU2U1amZhN0NaMUg5TGlVY3hZRDVCREpWWmxCZ002NkhpdzBNY0E0ZytTU1BUZFJSVjZxTTdyREg0dkJwdWZkTnY0aENIUXJ0OWc9PTo6FM7_w5PVLll6KI5eQVE38g--&t=cb8dc18a7c165f79235e0c9552c6708b&op=NzM0Nzg=', 'Episodio 1', 'A ti, dentro de 2000 años - La caida de Shiganshina, parte 1'],
    ['https://jkanime.net/jkplayer/um?e=a2hDSEY1SStWN2FCV3hTa3RjeHdmZXFLSmVtT1RnUk52WVliWXBaYXZFVGorQlJNVnNlb0VKeGJhZEpPWndmYnBYdUNQR1B3MTU1WUNCclk1VlVON1E9PTo63HecYfTYmQNYGJnyZNwSUw--&t=875fcc895a20b0e194c6810f2c345384&op=NzM0Nzk=', 'Episodio 2', 'Aquel día - La caida de Shiganshina, parte 2'],
    ['https://jkanime.net/jkplayer/um?e=aElUY3hWTFRPU2hUQ242a2lDMWVFcVBIaS82aVRIUk9BSnZIbU44aTJPRFVaOFcrMDFQSmhBSk9JQVRyMkhHeGxYWXJkNmtTbFhPd2pocExZbUQ2YVE9PTo6QQ5f8.8m2cb7hti2NGJaMg--&t=ad947592c6679c36064235c4af457155&op=NzM0ODA=', 'Episodio 3', 'Una tenue luz en la desesperación n- La restauración de la humanidad, parte 1'],
	['https://jkanime.net/jkplayer/um?e=TTFTSzFFRXBHTXRSdlFjNHB2dGZSSkFXcE0wWmljZStIUjczaHIrNzlmQU85REVLMzZEY2lzRm15aWpXK2V4Z092eWlZVzFzVlJHVW1uN0cxRG05dVE9PTo6t.U3UBTNcNYZIUw6pPXQAA--&t=97d86aa2cc45ad453bb7eb1f4a3cf1c4&op=NzM0ODE=', 'Episodio 4', 'La noche de la desbandada - La restauración de la humanidad, parte 2'],
	['https://jkanime.net/jkplayer/um?e=bnloenI0Z0dmT0xPb295QjVGU0FxeE9iUXhSeCt0dzl2VkFBM0pjaG5KRTZ6bmZzOXByVzFmT3UvMTZCWXRidktqYThYQmdqc3ZTOTFHQTNPOTduU2c9PTo6U921Y66abnzVwEhprflALQ--&t=1b0ad208956c25a8b65b2b16b2796d14&op=NzM0ODI=', 'Episodio 5', 'La primera batalla - La defensa de Trost, parte 1'],
	['https://jkanime.net/jkplayer/um?e=QXNGVjd1ZDMrakdqTkw0S2l2b1NWVlhBNTZNS1pNZEs5aGNJZUF5c1ZDOHdGVno3OEhhZTRxVnphbVlXZHhPL1dVWDl1UkNwNUlXNnVaS0toN01wdWc9PTo6HjHA5C7iMvwWKi3PNOt9gg--&t=1c6c24378c21352e0628cc5a798b00be&op=NzM0ODM=', 'Episodio 6', 'El mundo que ella vio - La defensa de Trost, parte 2'],
	['https://jkanime.net/jkplayer/um?e=Qm93U0dhTGRUL3FPVTdwZGRwUmxJdURMelowN2hkWkNFcnJBUEFPU0pMc2dXTDNuNFBzdGdNT1diOVJ5ektvbTFsblBhbDM2MHlDeTRPZG5xM1NLS2c9PTo6_qgjrMI5F3XJO2J643DCjQ--&t=fd13812c2552100ec2ec236c2a932217&op=NzM0ODQ=', 'Episodio 7', 'Una espada diminuta - La defensa de Trost, parte 3'],
	['https://jkanime.net/jkplayer/um?e=MUpqdHZxZHRPdGVZbGYxM3lMS2hndmc5dHA5TCtJVEdqaVpEQXhCWFZucUl5aTZBKzBvdDlXN0Q3ZlRkU2loMzNZVGhGRDZVYkx3OUtrUjdlNGdONXc9PTo6XIs3U033Y2vAYt3H2lGueg--&t=8b1ffd06f258459c75d12c8a18f17dd5&op=NzM0ODU=', 'Episodio 8', 'Se escucha un latido - La defensa de Trost, parte 4'],
    ['https://jkanime.net/jkplayer/um?e=NzB5d0JBV05odEVkTlllMkU5RFFsSGczVVN3VXhrc0hjQUpvVUZ1MFQvTi9LdEdrQVBpQXhTZXpDWE9vYzVZRkJUR3ZaTEZhbExQVENWWm82TUxYalE9PTo6GilK_5PzXPWB2G91XmPjUA--&t=077592ee4c8ee70676382521f840f156&op=NzM0ODY=', 'Episodio 9', 'El paradero del brazo izquierdo - La defensa de Trost, parte 5'],
    ['https://jkanime.net/jkplayer/um?e=VDIzVkVCMUwvZ043YnY4b0dvUWd0OE9HUFZJUHo0S2w2SGRpeEdERmkvcHFXM1N2TEI1TnBKOUZSNFNRTWJJdUYwMVV5dHcweTR6cWk3NkdaSE9YdXc9PTo6nDh4cBCxNegNU7xKOrclTg--&t=5a3b708a5b9ce75d0722f30810da1956&op=NzM0ODc=', 'Episodio 10', 'Respuesta - La defensa de Trost, parte 6'],
    ['https://jkanime.net/jkplayer/um?e=UkRNQXZMN2ZlTFI4cGs4NEFpcnd3akwwNDFSalY3WWRieTkvQUVVSlA3NnpoR1BySmpSejBiSDNmUDlLaWJnMy9tWGdvZ3RJdEJZWkQvVEJDTlRZSEE9PTo6r9SvG5vdPOx76_QOfEAp7Q--&t=978e883abb1b0fe4ac963b9de370b4d2&op=NzM0ODg=', 'Episodio 11', 'Ídolo - La defensa de Trost, parte 7'],
	['https://jkanime.net/jkplayer/um?e=MHQ0QzdEdHZ2aFVaSGszZlNsaGVzUGFqdC83cEpPR3FnQlhIbVpGeTRNb1ZIc0VLYjFBNjRuQUhDTnY4Wm1OeURFTjdYenBJbnVVQmdCeHg3akNDRVE9PTo6l3TL1WlhDpDnS1x4sXdFVA--&t=af10f04fe3f3aa25369189dbe21a78c3&op=NzM0ODk=', 'Episodio 12', 'Herida - La defensa de Trost, parte 8'],
	['https://jkanime.net/jkplayer/um?e=cDdhRFpnNWZYUndaQ2FXaXhJZjFHd3hyWXN1RHlOK0FSNTFya3JDTEVBSDlweENhVEFtZ1QzUHJ6NllpenRCZlhLUUw5Y3JqQUJsMGd0TGd3UnY0Q2c9PTo6oaf5tOfDTfdy207M1SHm3A--&t=3020656528b7f48c4c550b30f4fc5a04&op=NzM0OTA=', 'Episodio 13', 'Herida - La defensa de Trost, parte 9'],
	['https://jkanime.net/jkplayer/um?e=WTRNMUtwek01LzIwMmZVTy9tR2FBeEpKRGNiSUxsUCtDQ2hJTWViNkZJbHlUcUpnb045b1BwMEpYQUo5N1RvbU5ZUkNoWmhBOG12cHdUUVhTTU5lOHc9PTo6Pv1JBAimfLaFHLoU3I0dGw--&t=5233e3851e24f33224871fc44492259e&op=NzM0OTE=', 'Episodio 14', 'No puedo mirarle a los ojos - Preludio al coontrataque, parte 1'],
	['https://jkanime.net/jkplayer/um?e=ZFc0aEtBbUppYzNtTG1lN3dXMnh5MGJvMXZ5Z0hMNHZZc1lYM2NCa01lYW96cmZJSUtUaXFkdlFkb2p4czdFaVdSakFXcGp5SGRKbVBlOUNKdDBKV2c9PTo6UFoZVGlTCG_WaBOT16GSFQ--&t=bd438cd1cd84add2dc5b685ecfa939ae&op=NzM0OTI=', 'Episodio 15', 'Escuadrón de operaciones especiales - Preludio al coontrataque, parte 2'],
	['https://jkanime.net/jkplayer/um?e=aUx4dFJYQ2NCNml3TDFBd2tlOWg3dkNKQlFhaEVNaldpd2JWNFpYNS82K3N3ckNDN3BVNC9PMmR1RHI4T0tmTWVlNzFmeTJocFlWUjlUaGljVWVjdFE9PTo6EEg6nBwDEirQnrDA.LpqyQ--&t=78d2a79b18a2d70160f4710ab4a35c52&op=NzM0OTM=', 'Episodio 16', 'Lo que debería hacerse - Preludio al coontrataque, parte 3'],
    ['https://jkanime.net/jkplayer/um?e=S1pxS0oyRklLRFhsUHRuVnVnL1JWc1hQRWUzL0tFNjluZDljd2RjRWFFUjZkbnlHR0R4dzY0MGptU2lScTFDODFrbjlMam9tcFRNSjRYZjZnMVdqaWc9PTo6btZzYizsJ9cD_G4cvnQYAg--&t=c08c75c97ff0ba13165614facd258a10&op=NzM0OTQ=', 'Episodio 17', 'Titán hembra - 57a Expedición más alla de los muros, parte 1'],
    ['https://jkanime.net/jkplayer/um?e=ekY5MEo0NEMrb1Z4S3BYQ2s1V1VpalVqcXErSmk3NXZIYlZPdTBOaStTSVhSZ2NjekVlakxmVWdDeUxHS0toYjJjWnVvNXI3Ymp2TTZETlVVemxMeEE9PTo6QBGWW6M4NsCoEvrdzzGPqg--&t=4b3ce1941e0a4692ec88e856d1162e40&op=NzM0OTU=', 'Episodio 18', 'El bosque de los árboles gigantes - 57a Expedición más alla de los muros, parte 2'],
    ['https://jkanime.net/jkplayer/um?e=eFFCaFZ1VlppSnZ4Y3ZMdFRXaGhmL0dVWEYxNXpmWjhnblc2Ni9aQllGTjlUZUQrWGJsOVVGSndnTW82YzNnbnFLOThUUXRyY0ZrY2FLUGJoc3NKaGc9PTo6O4Ln9xQdmaHYlYUF1WEjfw--&t=9cfb162f739818c85c471f1b1ad12fbe&op=NzM0OTY=', 'Episodio 19', 'Mordisco - 57a Expedición más alla de los muros, parte 3'],
	['https://jkanime.net/jkplayer/um?e=RC9PNVIyR3huSzViMjdxVjlEZGVtVmVsaXk4WG5MMU1SMGI2OFYzM2NST1JleitrNENjVTgxaDdjOGUyTVIzR0JLVlhDNEVTS2Qza3ZhN3htRkRnbGc9PTo6HJuJmFVPdt7QFRSurIHyHg--&t=dfc445d66711c67d7e0dd5835fe2ed62&op=NzM0OTc=', 'Episodio 20', 'Erwin Smith - 57a Expedición más alla de los muros, parte 4'],
	['https://jkanime.net/jkplayer/um?e=UGc2dFNSZEhlSVpkQWZqb0U3L0djcHhHaC9GbzhONlZ1dVNoZ2xmZnFIaHJLaXV5cVFnNmtjdXBodE5naXpqRjVxU1ZZTlNucGIxazVONjVTSGY5K1E9PTo68kdn3m.WlmE1kCYBSvVpzA--&t=10c9f9421c2a2892be5e2409a51a1514&op=NzM0OTg=', 'Episodio 21', '57a Expedición más alla de los muros, parte 5'],
	['https://jkanime.net/jkplayer/um?e=N2xvaFpiTG56VGt3M0t2MllTSW1XMkxlT09admJ5bHpXQ3gxSEFyaGt0UjBXb3AzUS9hS25VZHg4SzNabmtrTU5hVnJIUzlCOUdzUjJCWGVLT3pMWlE9PTo66CwA5PbLQ6tiq5BTQ9y8YQ--&t=c052eee76897254c39a93576bf22346c&op=NzM0OTk=', 'Episodio 22', '57a Expedición más alla de los muros, parte 6'],
	['https://jkanime.net/jkplayer/um?e=VzVMd09DczRCS05SbFFqdE1hdXN3a3FPdXhPbWJRMDQvTkVFNG8zTUJwS2ZjSS9RR1hpaXRSR1JoVXNKc3R0bHo3aDlQa0hyTXo1Z0tJWFpZcU5qVEE9PTo60gEX0LXGeFkqbdrREQAwLw--&t=3512622821ae443dbefc390bed8d11e4&op=NzM1MDA=', 'Episodio 23', 'Asalto al distrito de Stohess, parte 1'],
	['https://jkanime.net/jkplayer/um?e=WkR0MWY1VHZxOXlDOEpLWmRQS2U2MHpRMVdHeUlONThocUU5dW81NlBqRUdEdzNxT29UUDJkR0F0c2UvRWo4K0hXdEVKZnh0cGhHQXBPVEV3L1J1OFE9PTo6jtDRbVGBjEmPvoHQAm.DkQ--&t=92793b679fcbdb98e329e631d624c7a2&op=NzM1MDE=', 'Episodio 24', 'Asalto al distrito de Stohess, parte 2'],
	['https://jkanime.net/jkplayer/um?e=U3NHSU9xdnhZekQ5NGg3MVhFbHRDSUdvN25sZmNQUmpsTHNMM2JvencwZTdqQUkwY004WEZyUU4vSXlPa0FDZlNmMWVka0tRL0lCdnNXSjFtbS80T1E9PTo6OlLgbWljPX..H1cVwttzGg--&t=075145193b03dee949128f71fe64d06c&op=NzM1MDI=', 'Episodio 25', 'Asalto al distrito de Stohess, parte 3']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aot/Portada-Tmp1-Cap${index + 1}-Aot.jpg`,
    'iframe'
]);

const aotSeason2Episodes = [
    ['https://jkanime.net/jkplayer/um?e=NzVJSkRvOXBaQWNZRnl2N05ENzBoLzZlWlR0cXl2TGIyU0dhVUgzZHIwZ3NIQXVXUmh0QnBoTWVGb05HS0xpNDBOak1zbUVvTXpaYjVqMUJNcmtyVGc9PTo6t_Ean12F18H1.jA7GnPJjw--&t=adca3fbbc686891075a97939f99eacfb&op=MzQ0NTg=', 'Episodio 1', 'El titán bestia'],
    ['https://jkanime.net/jkplayer/um?e=Z3RGSkxUWFRFQWMrU2VMN2paRktYNi9QSUZadmpuVWo5R0pOcEZZdTk5bENRTVd1amE4SGhqV1ZMSi81dXpzMXVQUCtXaU9DMDdkSEpZTXVRNEFMSmc9PTo6CbPjRRHsfexW4JCeAlX5zg--&t=060ddfc14bd2e3937814c157fdb33bc4&op=MzQ1MDE=', 'Episodio 2', 'Regreso a casa'],
    ['https://jkanime.net/jkplayer/um?e=K1dKV0hDVm9heWxnOXhzYnNlRzFxREZyd0RwSWVYUitRQWU5VG1oWHA4NWJ4NGV0WEI2NmUxN3l3L3Fsdkk1d2RFRWh6WkZsRTduMVc3UzFiK2tIR3c9PTo6zcY3QFw9xjfAMLnMiUvweg--&t=a64419ad5643858004cdd6867f12acfb&op=MzQ1NTQ=', 'Episodio 3', 'Hacia el suroeste'],
	['https://jkanime.net/jkplayer/um?e=ck80UWFDbm05T05UaXpla0x1dGExQ1RaakZsemNKbVNidHNVZ29KMS9Bb05YRWJqcDB3aGZXYTNVVXhwMUkreDRrcDB4eHlWbVVpL2VkTitWaFR3YVE9PTo6uUZ_a9i5.CfGdpDsQh9XgA--&t=5df4348e28f893850ceeaa7d67ac8513&op=MzQ2MTI=', 'Episodio 4', 'Soldado'],
	['https://jkanime.net/jkplayer/um?e=RzRLNWNWWC9JUHBvK2FRWnprUWNhTkUyNnFDeUF1L3pVQk9veDRmc1haYld3R05uZ0g5M3QvSW53M3d1NWhjS21nMTZhR0NMWXQ1Vlp0QlI2bzc0S0E9PTo6DZbd0i3Jy7JjG50PGLlZHg--&t=8a45da3f21ea12d7948abeaf346c5bd1&op=MzQ2NjY=', 'Episodio 5', 'Historia'],
	['https://jkanime.net/jkplayer/um?e=Q3Y3NEI3WGg0YjdZOUZ1YTZkY2JJemFTdUZqaU9KclIwaGZZYVBWQWhjUVNKekVhd01sZXVwV2JQbTc0bWQyUTk3a2NVOC9JNStYbXY5VlBYdzNYQnc9PTo6ogn0r9h0B8_rev8spOIe1g--&t=1148786f081772ed0fbfedee09d8d771&op=MzQ3MTU=', 'Episodio 6', 'Guerrero'],
	['https://jkanime.net/jkplayer/um?e=S1NnL2pVdjIwZis5LzhTS2QwVWVCRHZpOVlFNkZ4Zy82eWJ2T1BGbG40ZHhSWXB2aVVNUXk1TVJLYnFKNFdvNXE0L00vcWhRMXhGbnUrbi9ONEpLMXc9PTo6RnsjzCXS4XTesVkHyvBf8g--&t=88561cd999906a644093dd56a0a0c821&op=MzQ3Njc=', 'Episodio 7', 'Golpea, arroja, somete'],
	['https://jkanime.net/jkplayer/um?e=L3poTU9udXpBVVpIVW5YKzRwSUdDaFEydnM4SVF0K05uTHBoWFI3dmEyKzVpVEdjb1BPQi9Jd0lTaU9HZTliMGNBZk85YUtlR1kvUm9HcUVSTmZMSmc9PTo65bbfi93ov9R1R4OG1Ph4kA--&t=c6aae98722a05d2a1a2370faef8b1b66&op=MzQ4MTc=', 'Episodio 8', 'Perseguidores'],
    ['https://jkanime.net/jkplayer/um?e=RFVWVUdsYjYraUdaOWgvMno0aHpsek5MYTFUNFNOTHRCNm5OSTlsTE42aXk3M1AzdmFJQktpb1c5dExXMWVldjRJeVYzc1pXY0lUU0ErS2tDaDZHelE9PTo6qGFbBGhMKAqRruQ25SYzFA--&t=d2a9c67619d9d37284ab7322ea242ee9&op=MzQ4NzA=', 'Episodio 9', 'Apertura'],
    ['https://jkanime.net/jkplayer/um?e=UStDQzdIclZXUHRHVkczN2tyU3VWd1k5alptVG9ZRktCR1kzWUZmR2JoZDY4YmdqQ2FKalllS0JmajhTQXRYSndBWXFUTTJaTitIUFBiOERvTml6WGc9PTo6BT0vBW03sIXkSOPe7yqRlw--&t=cdeb4894869cbdaf5b55ed25012c0c10&op=MzQ5MjA=', 'Episodio 10', 'Niños'],
    ['https://jkanime.net/jkplayer/um?e=SWIwNzcrU2dNUFozSnNsVnYrTXdaQTE4d2h5Z0xsS2FwRkFRd1lqL1hFVjdPSGtaUStrWm9veDgyU0xERTFaVVBxV2xvZnNESUFFMjZDczVWanJET3c9PTo6JdWCp8KX7KO9M1IhprstNQ--&t=eb2dfc3e9ab84de7c901b64f7c4a409a&op=MzQ5NzI=', 'Episodio 11', 'Asalto'],
	['https://jkanime.net/jkplayer/um?e=MGZSdEF2WGlQdm5PK0RzdzJ6N25Tb2cwY0RZTFRTckIyT2M2bzlLTFh2bHFDcnoxaVAzNDB2L3pOUTNOTEcrcE9WbGVQMU1nd0pQdVY0V2lFaUR1UXc9PTo6bgI79STpLsMJ0RjpBxn5QA--&t=16757f4d90fa4e95156541c44c6c6ec9&op=MzUwMjM=', 'Episodio 12', 'Grito']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aot/Portada-Tmp2-Cap${index + 1}-Aot.jpg`,
    'iframe'
]);

const aotOVA1Episodes = [
    ['https://mega.nz/embed/FjFTGAYb#XQpOXH1BxiEaE88taI17D7U2Qnx-DLqDiEjoBzZ9dy0', 'Parte 1', 'OVA Attack on Titan: No Regrets, parte 1'],
    ['https://mega.nz/embed/4ilFSKzB#9BkPZuPoA3xPqDAwHJHib27eehqlPYKYld5IjCiHmbQ', 'Parte 2', 'OVA Attack on Titan: No Regrets, parte 2']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aot/Portada-Tmp1-Cap${index + 1}-Aot.jpg`,
    'iframe'
]);

const aotOVA2Episodes = [
    ['https://mega.nz/embed/ouUhFSCI#lb43pThY-6zYfl4r0yBfptFYRpDL33AOi6EacLDKPv4', 'Episodio 1', 'Attack on Titan OAD, parte 1'],
    ['https://mega.nz/embed/ov1S0JiI#lvDa_VZia8Whz_uMUKR8Y1sFDhhFcwECmtDZx-SsJDY', 'Episodio 2', 'Attack on Titan OAD, parte 2'],
    ['https://mega.nz/embed/1i1AhK7B#ZstcIglQSNny2UeSI8SruSRVTUqI-vHbREjC0cKQBBw', 'Episodio 3', 'Attack on Titan OAD, parte 3']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aot/Portada-Tmp1-Cap${index + 1}-Aot.jpg`,
    'iframe'
]);

const aotSeason3Episodes = [
    ['https://jkanime.net/jkplayer/um?e=U3E2alhoU3QxRkhSNE9YZDFIUUZGdlhZbzJZNVhKVk93b0NnL051L09zSGg5R2Y4eXh4MitwRjRBMWFGcU5GTEtZRGdzSDBVQ1pyb1FvSzh1WHFYS3c9PTo6SERA5DbxeEmyGifrtG3uoQ--&t=b20ec67004afcac446e4ee3294b9695c&op=Mzc1MDc=', 'Episodio 1', 'Señales de humo'],
    ['https://jkanime.net/jkplayer/um?e=K0Z2ODF3d0FJd25ORUZFV2ROZDlFUW4zamd3ZnRCK1JYNkJrZk5VNFd1c1RHWFZ4bHFVTkJ1eU01MmVCK2twYTQ2NVNxZGwxWjNRUXRPVW1KMWIxTFE9PTo6Hbxz1u4HhDhPR_rTwb9gOg--&t=80da892b04cb3efb10f72a466ffa9c12&op=Mzc1NjM=', 'Episodio 2', 'Dolor'],
    ['https://jkanime.net/jkplayer/um?e=TDZiYlg5U0w3UXNOR3NLWVF3Z0VFb3FqaGxNUU5PUWZJanpEcGR3M05reW41S21hNlNlRk9Ec2JXQUVDbGo4RlovN0dHL0lOQUlJa2k2OE5GdmVFb3c9PTo6o0GEAJ.Y2pmxCI7kjcCiXw--&t=07da625d725f8d78daf4576f397c6e82&op=Mzc1OTM=', 'Episodio 3', 'Relatos del pasado'],
	['https://jkanime.net/jkplayer/um?e=d0F6WTh6b3dxd1FBMzJrRWV4aEl1TXpQTDZITy91eWdROXprVHc1ODdOMDN5RTlWUmdEc3lmZ0Yxb0ZSeS9EQWJZUGs5Vy96UmpDUTlMVmtYTzk4S2c9PTo6bqo.hsTJA7DpdVfeGvvcNA--&t=3fd38ec44ae1cc1f492f1c80ef9e0d1b&op=Mzc2MTc=', 'Episodio 4', 'Confianza'],
	['https://jkanime.net/jkplayer/um?e=QmdvVTFxY1BhMW54bmtlNFJMUHc1Y05rZW92QmNpZUR0b2RPVWlKU1ZCTFZNVHhHVnUwZFV4RzQ0K0piSnNuaFFHeFdzRmpGbjUxSzRudzcxbUJKcWc9PTo6L1lDdrx.SpGRMWtFL1uMCw--&t=96dae50e60828c9bcccb990df4f52135&op=Mzc2NjU=', 'Episodio 5', 'Juicio'],
	['https://jkanime.net/jkplayer/um?e=bWhraEM2SkxwNDkzTUxuakt5QndTWnBmeGNCZHpjQ2lXWTdjalVTNm5LdFoyZSt4UWV5L1BOU3U4WXlQY3gzWmNtaThDajJKbnp2U08rQWVnQzdudFE9PTo6pgM9tV2c5ivkD7o8DDjquQ--&t=1abc4fdd9a4618af701a709a0cf042fa&op=Mzc2OTM=', 'Episodio 6', 'El crimen'],
	['https://jkanime.net/jkplayer/um?e=b1kvNzNscHoxK2NaWnk2dUxub09BOTdDdFcyaGFUa1VObkd0TS9XcUFDWGlZUVlOZ0Zibm12c1N4a2dIYTJ4ZmxyVitQaEU0NmhoMW1idUt3QUpRc1E9PTo6B62BEP6yhjskkNas2HPs_g--&t=1abcd28456bfceea24ad41e53a3f9a4a&op=Mzc3NDM=', 'Episodio 7', 'Deseos'],
	['https://jkanime.net/jkplayer/um?e=VFVaMS9teEl6OVJOUGhaZEFIM2RoN1BrYVNaWGZ5VzUwcUJRL0NtN0V1S2cwNmtzTCt3VVNlRXdFbWJPMUIxV25ldWgvZ21UMXVpSndZb3RjR0l3Umc9PTo6YIv9epksRl9w_mqSZFsEPg--&t=70eb973ccf6d4d3c2b0e2a0cda52dbd3&op=Mzc4MTQ=', 'Episodio 8', 'El muro exterior del distrito de Orvud'],
    ['https://jkanime.net/jkplayer/um?e=UkVSdHhHWEhSbVQ1QzAxVWlVbS9Jemg3dThGWE9DckcwU21pWjQydHViOGU2dVhJdDZ1RDVDR3Fzdjh1RlVEWmRGQXYrUUpwcEdqM3VwM2dYK3JlUFE9PTo6nGInp7dlvA1datlM2E3uVw--&t=9255e8df7dc6a615445f42c0fd94587a&op=Mzc4NzI=', 'Episodio 9', 'La reina del muro'],
    ['https://jkanime.net/jkplayer/um?e=MVBUbDN2dnhjVzJJL2pCTCtaaEZnVnpacnFzRUkxZjhRellENlZiMXRTMkdCdFNjQjBJOXVVaXN4S1NZMmJCVWd5aERkK3dRNUt6SzhkWWIyeWtYdWc9PTo63ZCjDC7wy.9vd.JjEkx5kQ--&t=2c67bd5efc291f9ee3200673addcb2fd&op=Mzc4ODU=', 'Episodio 10', 'Amigos'],
    ['https://jkanime.net/jkplayer/um?e=cTYxWXEvd2hSaEQwQzVEM0Jobk54SU5zR05DSllZV1dyS2FCRERTbGZMSmgwdUJmWEFzeGF4UzBobkc5dmlJaGkwSGlDTU9jWEwwRmdmaUcvSERXRlE9PTo6l.ZjohJBbjh1ZWkI4OzdVQ--&t=f33c692cfb7545f0588d168e6837e8b5&op=MzgwNTE=', 'Episodio 11', 'Un mero espectador'],
	['https://jkanime.net/jkplayer/um?e=b2FEQXR1RkFnUkdlZXRGS0l6T2FBcFp4YVY4SzZ2eXEzVDl6b09VV2RpaEJFSDM0YnB0ekN0V05Gb1ZodDN2OHhIalUybUFHdFlkN0VlaWF4QUpZZ2c9PTo6QvBihkbiYcNzX9yaDiZ71Q--&t=43533afcfd8cdc5990d3bec6bcffccc1&op=MzgwODY=', 'Episodio 12', 'La víspera de la recuperación del muro'],
	['https://jkanime.net/jkplayer/um?e=c3RxL08wNnJFaTJIOFFnVDJWbC9xZlU2ZUF6aS84aG5QUU9aR1VBLzV1QlgveCtwRm1GR1ZwN09hV3NleTg4NDo6zzTDx2KsbtsLesDQUyvUwg--&t=016b388b5ee40f99cc161d3aeb35b545&op=Mzk3Mjk=', 'Episodio 13', 'La ciudad del principio'],
	['https://jkanime.net/jkplayer/um?e=NzNuVnNRZ204d1RyRyt1Z2RsdE1oSHdoVnZtb1ZtZ2U3Q2g2NGFzL3FYeitOb0xTZjZkazJKSmNzajJSVmtTOTo6Ybf9YUBuISeP77tuoB_C2g--&t=ab712090eb9a27881b63080c859147de&op=Mzk3ODE=', 'Episodio 14', 'Lanzas trueno'],
	['https://jkanime.net/jkplayer/um?e=V0ZIZTNGTkdCMThKNVZlNGtidFVESUhqRk1GSFVldGF0Nnl3SXF0bldwcXFnd3NXY0lhNlYyL0dJR1NqSWtyeklZcWNPM0FwZHN3MjRudU14ZFJWV2c9PTo6pP5F4S53cY8hhMFUNZvQCw--&t=d372d4ba86f4a5e6d13b05144b47506e&op=Mzk4NTg=', 'Episodio 15', 'La llegada'],
	['https://jkanime.net/jkplayer/um?e=YXdqY1BVWnUrYXBldjBraVRRaGVFc2JXZHFIaFFDVXRoWHdtUndHN3RCQ21kRGRRTmtmVWJ6SFNnTzZhM3NiMjo6uys3z8EWld_Lp26Z0n.5IA--&t=afb7f6f9b716939fedbce5b91d21c905&op=Mzk5MzM=', 'Episodio 16', 'La partida perfecta'],
    ['https://jkanime.net/jkplayer/um?e=Nnp1akdmTVhuTlE3dGxQVUhDSW1PWVBHUXpKSGFqMzN1OWwyeU1sV2RSaFE0QWpXVlljYWlVZGZ6T1VqRUt3azo6.t9w3nUu86L3kcaUg3lN1g--&t=09a66d2b77b4ea8c659311f7ea5add01&op=NDAwMDU=', 'Episodio 17', 'Valiente'],
    ['https://jkanime.net/jkplayer/um?e=UW8vamthTi9pV090Q1E3QWZHK3d5ZFFXM2VoRUs5R1k0dEE4blBSOWR4VHRIT3FSWDBJZkJYVTVJYWQrZ29yTjo6KvxYa8QENNFseJkg84ondA--&t=17a65bb1dc56c1235d7ee8029c94408b&op=NDAxNTc=', 'Episodio 18', 'Sol de medianoche'],
    ['https://jkanime.net/jkplayer/um?e=cjJvSVYyRnRuMW5ZcjQ3ZmNDS3cwYjc3Nk5RSUowMWRGSnN6bUhGdURlOGFDVGxTc1l4M2NvNEJ0eENodkE5QTo6PPfkmbIX8Fid2TSpd8fLiA--&t=636fa06b74cdd6a17452e1e1ece7e7d7&op=NDAyMjg=', 'Episodio 19', 'El sótano'],
	['https://jkanime.net/jkplayer/um?e=VmtxYWFXRHZJNGN5WGxna1BEQkxYTVpXUmJHcXREdDMzbFhGQXAzMk9MdnQ0aVlMdmhOOVBkSkN0WDVRU05aQjo6_9HudshhBNpVxUUEeHLbeA--&t=7451a2adba8556c1dd74192afb81fb07&op=NDAyNzM=', 'Episodio 20', 'Aquel día'],
	['https://jkanime.net/jkplayer/um?e=UGRrTWlGY3A3R296azJuMlN3Zk1raHcyeHNHUWhocmtwMjdkanFmbjJ1ZmpPL3hoK1l1cGVlcFY5alY3djR3bDo6uKlhobaE7jWqIh4nMpKyyQ--&t=b328487b2b7959c38fd3c33a17bb6a00&op=NDAzMzU=', 'Episodio 21', 'El Titán de Ataque'],
	['https://jkanime.net/jkplayer/um?e=dTVCRjBXSUN4ZkF6WXhSdEJCUUpQcy9GaXpyYlVFRnk2RExGOVpiZ3preE5vZ2x3aWZMV0ErN3RMRCtRNU85NTo6taexLtxboBGeyPal4SYABw--&t=95b4738e0867cc64385b42e3cb13d3b6&op=NDAzNzE=', 'Episodio 22', 'Más allá de los muros'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aot/Portada-Tmp3-Cap${index + 1}-Aot.jpg`,
    'iframe'
]);

const aotSeason4Episodes = [
    ['https://jkanime.net/jkplayer/um?e=V3ViOWRzUW5kYTdjSS9iK2NKN0QzUndyWTA3eWI4eG9tY08rd0R5dWk5RDUyQ1VvU29jalh0UWhtaGdQdUlweDo6LhfjkZ1btvi7rvd8AfjQFQ--&t=022d682784c20ccc9176ceff49b82c0b&op=NDQxNDc=', 'Episodio 1', 'Al otro lado del mar'],
    ['https://jkanime.net/jkplayer/um?e=ZnM0YWhlRDRqc2dWa1p2ZW9MOHFwL0ZkemVLczJraGVDdnlGaTM5eUltdWlDbVAvR1NrOGxlM25UbGo4RjBjMzo6EJ40CYrDnd.sCyOfW5N9CA--&t=d6fb4d9874457402ccd9d7b4d8bea9ed&op=NDQyMDQ=', 'Episodio 2', 'El tren en la noche oscura'],
    ['https://jkanime.net/jkplayer/um?e=Z3dxVXJlTnBDUzBlVDRTT3duaTBjSTFTa3k1T2VIWU9QSU9TclNIQWNMNFpEcUNUaUZlUXgxZjZWV0hSSjFpVTo6wJwzc7e3tgEQsdFJNon.CA--&t=97f1f1a1757711c30e2c40e41b9f262d&op=NDQyNTc=', 'Episodio 3', 'La puerta de la esperanza'],
	['https://jkanime.net/jkplayer/um?e=Nm9JbGpydXFMMHVpODF0UnVabk42cjRCMWcxbkJyaHRGWU5FNUdTZG5LVDJWRkJ4Q3h1TlIrazVNR0sweFVCWjo6q7yzy5fLGToDaYulAEfr0Q--&t=35fd51d1e96fbe2f28760472a381534a&op=NDQyOTg=', 'Episodio 4', 'De una mano a otra'],
	['https://jkanime.net/jkplayer/um?e=YnVsUTlFbzIwNUxya3V2NVdzMnp1UVhXZzIvVXNKaS9TdVNKWUVZQklsbnVKMmF6Y29UNVlVVUpsbXBxMzExazo65WFgz1kqPqKkVata_5OTMA--&t=e2909d1b3e9fd103f2e1b26562a7f707&op=NDQzNjM=', 'Episodio 5', 'Declaración de guerra'],
	['https://jkanime.net/jkplayer/um?e=emoyVUpHQ282Y3BOU3Q5clFwMWw4aktob1JyVHNBNEpaL0JWNjl2NmlCeFIyVmFxVEgxbk9qUWFCWHVhMmtKWDo67_nasyAg.aXKwtvxEC4lqA--&t=daad2c59031ec67bcf6d5520e5da7af3&op=NDQ0MjY=', 'Episodio 6', 'El Titán Martillo de Guerra'],
	['https://jkanime.net/jkplayer/um?e=UEJOSFNaeWRiUTJXUUNwMHN1QzFFbVJscHJIb1hWMjhOWURDaklQU1hXWXoreExFSHBxa01URUNxQU0yU2l6Kzo6dUpR4UlfvahhGRBdlveXdQ--&t=29d693a681fe3c0b8fa0a0d44435f9c2&op=NDQ0OTE=', 'Episodio 7', 'El asalto'],
	['https://jkanime.net/jkplayer/um?e=L2x0bHNqdXkwVVkveE9Xc3I1MVpVSGlGY3BlUlk2cDdZN3NSN3hlWUJSekhWcmFIYzNUcXE1c0tlNzV1aHFQKzo6kkElpiq7RlP6g.5ZnxjNAA--&t=335656f07e73e44e19221e6649796c54&op=NDQ1NTc=', 'Episodio 8', 'Bala asesina'],
    ['https://jkanime.net/jkplayer/um?e=ZzByVGhJMUpaa2lBaGpnNnpOYmVxdHdydU9ZVU5BbUFnbWRzVXRpTVVaTmtYZE5CMTlJSlA1WmVTanFZTDlBMjo6Sgtq1FbiElGhRjewbZ2SHw--&t=dd14d0cf33a086b45ecbc374f16f589c&op=NDQ2Mjk=', 'Episodio 9', 'Los voluntarios'],
    ['https://jkanime.net/jkplayer/um?e=NENZNHlnUjVQUGFIZkxiSys1bWVkRzVIYy8vc0dNQnZncjhvcG9FS2dyQlhOakZtbVdLOUFRNEZnYjBlUjBsajo69GZll1Dn9FesrL23ZTRxlg--&t=5f1a8a8fddbc8a5ff4bf0f111dc69ff4&op=NDQ2OTU=', 'Episodio 10', 'Un argumento de peso'],
    ['https://jkanime.net/jkplayer/um?e=a3hISWtHUWNkNGp5d0NyU3ZsVTlhc0tyZzNNUkdwQWt0T25ad0JRWGdXN0lGNmtNZzVEbVU5MGliZ0R5ZVN6ZDo6JiXvldZNMnJ4mhZgMWRswg--&t=0b60ce230e3a446d1cd7b818f84e3ca5&op=NDQ3NjQ=', 'Episodio 11', 'Impostores'],
	['https://jkanime.net/jkplayer/um?e=dlRLTzlHZE1ZVU1XMEFFZlMzRzQyMXB0cUR0RUxxS04wblFiZUJOdFE1bm9TMytYZzY0TWY1UzY1dGxxb0lVLzo6idDHWSHDc3WW5sdcR2RvDA--&t=d10cf009b0a4345e83bb81dceabfc23f&op=NDQ4MzU=', 'Episodio 12', 'Los guías'],
	['https://jkanime.net/jkplayer/um?e=MXpqdU1kY1ZKdWZPNGtwR3E0WE1aemcvY0ZsRGt0UjdMakk3MGF3RmRvK0VLczRvL1lhNmVGbUlWcEtoVVpEVzo6rRhiN3bF.J.ipVIPmuVl6Q--&t=29eafc27fdf31dfc7feae0d495fb8ead&op=NDQ5MDQ=', 'Episodio 13', 'Los hijos del bosque'],
	['https://jkanime.net/jkplayer/um?e=ZFZrSkhjL1VWamF4bXBGQnlwTmszaGhKcU9mYXdzeGtLaEQra0R6MnQ2WklnaUJQY1h0WWRpZFRaOVNWVjV6QitnRHY2T3c0aG9hc1hUQk5VMEFLTmc9PTo628gvFisJdagh7d6kBKjoBw--&t=7c0cb6a5fbc472a08d3def1842ea6ac3&op=NDQ5Njk=', 'Episodio 14', 'Violencia'],
	['https://jkanime.net/jkplayer/um?e=VHg3ZE5uSkJaNnpuZi9MOHdwRHhrTmYwNGZBNTVmRm1JQU4yNW1wem9jMFBDQnpZM1hta3gwQU1tWVVtUGxEeTo6KBVEzou3W_nw18g_6mEHZg--&t=4113e430544c25cc1af8e2317f4b7875&op=NDUwNDA=', 'Episodio 15', 'La única salvación'],
	['https://jkanime.net/jkplayer/um?e=Rmlqb0J3TDQ5amsvY3dxTVdjV3ZZSE9COTFnbU5iYnBoMGZlUU9tVmh1SnBmMVB3aGR4SVA0ZWJmNVg3WkdVNTo66KcslcW5VbWTSx9zkUcUkA--&t=450b97a48568c3118ff397f73abe4e4a&op=NDUxMDM=', 'Episodio 16', 'Cielo y tierra'],
    ['https://jkanime.net/jkplayer/um?e=R0FsQ0VjeGxVa0VDMkVMcDFYV3R6MHpmeVYwQWpiR1NlVEo2c1o5cExQdG1FT211YnlDUFcvM1p0U0tDRWJTZHF0eFR0MGhSeldVV29zS202UzQ0ekE9PTo6E1lpNAKl91V9__HNISP84g--&t=0db2e6f97f1d5c564366bea52764d5c6&op=NDc5NDE=', 'Episodio 17', 'El juicio'],
    ['https://jkanime.net/jkplayer/um?e=cU5BVFc3c2ErOUQzMGVZb1FDSmNxaGllbmc0UW03VC9ZeXc1OUsvd0pnVVg4Ulh6U2xGVkUxcDJDL0ppVjdPMVVtVUd6T1c5dUZwMy8zd3FGSHlJSnc9PTo6Oyhm1aTyqCZuDPxgCN3crg--&t=19cfec4e0d8b27a83c4f50ff8305455c&op=NDc5ODk=', 'Episodio 18', 'Ataque sorpresa'],
    ['https://jkanime.net/jkplayer/um?e=bldiTzRaRnczOFVGcGNNR3IySnBISkJmUnF3QkhhOXovSlZUUmZsbm9ISTVROXoyU1ljeFNWMWlIZlhrSVFPSVNlQms2SWl0SVp5UGlpZlFOS1h3VEE9PTo6I5sDBtPKHTS4EjJwDywGcw--&t=9f3a66823a9c66e1283f0505d6509768&op=NDgwNzI=', 'Episodio 19', 'Hermanos'],
	['https://jkanime.net/jkplayer/um?e=cGEyQyszSTM3U2pCOEVjWWR0L1JxY2FOQlIwRFg3RXFzbnp6NkxLMG1IQSt6aHhLUVRENXFqZXpJejJlU1ZNajVBQ1I2K0U0S1Ruak1qdjRkVTdtVHc9PTo6VDpRnrv7P296kHcpv1o9Fg--&t=96e9f517d4be3ec69d10cbd6c5707e30&op=NDgxMzA=', 'Episodio 20', 'Recuerdos del futuro'],
	['https://jkanime.net/jkplayer/um?e=M0VvRFEwTTlNTTJCU0ttenVVVXp2L3FCVkYrck9ld0lTUHRpRjdoQTAxaVFGZ08rZlh0OVdNYkxUdktsNDMzQmpXNzVzQ2Zha2pBTy9ZQUxRZ29pRFE9PTo6lCyNJYloMFSwuU.oOyZkQw--&t=2cb57605050b628f019002a2e8485f99&op=NDgyMDQ=', 'Episodio 21', 'De ti, hace dos mil años'],
	['https://jkanime.net/jkplayer/um?e=QnRGV2prNnNrRlRjd2FRWVhWREhLUkU0K1ExdmV2Z1ZndTZ2azZJK3lEYmVFWndlQ0ROTXBqMlhHZFpyRk5pVy90SERTUlhMTUc0VExRb3EvUjg3MEE9PTo6f9dQ0MjV1Z_RBJQjxtCehQ--&t=bc05280b649b56ed783744d4bfe1e384&op=NDgyNjE=', 'Episodio 22', 'Romper el hielo'],
	['https://jkanime.net/jkplayer/um?e=T3pTNVNxeEhEMEdjdGgxSml5N1pCaHRKWWYyekxFOGNrRG9JVFMrdnF1V3l3SWMvd1lXMzdhSGtBZzAzRlJnRjIwZEowUDd2NTlEL2JyWE1hWHNjL3c9PTo6uEl9mHHZn3rbN0j9vGiVDA--&t=240a1ab5beb30441e354ce8f5820daa1&op=NDgzMTQ=', 'Episodio 23', 'Crepúsculo'],
	['https://jkanime.net/jkplayer/um?e=M1E5OFAyaHFTRkdFUUtXZ0xTTllqL1BQcEcyam9UbXlWeVlMM0x1aUVTdnl1TFp6REVzTUttai94cDJNa2pWWVpTOGhVcTlFYVN1V0k4RC9lZjNrd2c9PTo6_m88wCO8Dkrm_nXJ6dtsuA--&t=58350ebc61b97bd7c28aeaca836c9c26&op=NDg0MDk=', 'Episodio 24', 'Dignidad'],
	['https://jkanime.net/jkplayer/um?e=SWU2YjVUU29Mc29Cdlg4UmNZd3hXVHM4aDUyMjFZYmpTT3hqRE9Hb1c2QWxQMzR1eWUzS1JYcEc5RWh5c0szRmVlUkd0QVA3Rkd4N3NSNUwrOWtZelE9PTo68Lw8RjcVpPiGBPgfLd0cig--&t=5c75765a72526e13a1a511b39cc7691c&op=NDg1MDQ=', 'Episodio 25', 'La noche del fin'],
	['https://jkanime.net/jkplayer/um?e=WnBvR2paZ0k1K205VWxmMjd4ZWpaR3Bzek83bTg0S3hJSUZURzBOeE54bDNKTDVmRFo3dHBKOW91b1ZmeWp2bXBCdHorSlNxc3ZZU3VmRUdFVHJoUVE9PTo6t012y9cED89TJ.M0GGNfSw--&t=d6aebf3c270e28da6467427979d7d35f&op=NDg1NTY=', 'Episodio 26', 'Traidores'],
	['https://jkanime.net/jkplayer/um?e=ZVFkWWV4Z1Zid3Z0azY1ZjNlZStuU0dYbkNzN1VqdDJaV1ByWGgrTGtaSjZPQzdwM3JJSUtncUl3ejk2R0FXckRpNjRTZVpwZFpKeURSaWtjTkFlSkE9PTo65MlZx5ijvOZHoWXUxi5YMQ--&t=204dbb40a6272d96566a58b0b2387bc5&op=NDg2MDM=', 'Episodio 27', 'Retrospectiva'],
	['https://jkanime.net/jkplayer/um?e=eWlCVkxwRFBhUjZsaW01SkFkcjAvMkRzNkM0Y1ZQM3paYUhUOUhaZlA0VmoyTyt4VnFNNGhSci9QdndCam8zMk52VzhuNzc2bS9lc1NSUlZmb2UwYnc9PTo6xapunB7Y3JqyeW3yWA.7Tg--&t=9722c0e8faf86184d1021802ac2e5f79&op=NDg4Mjk=', 'Episodio 28', 'El amanecer de la humanidad'],
	['https://streamtape.com/e/0rlw14KkybHbl8d/', 'Episodio 29', 'El retumbar - Los capitulos finales parte 1'],
	['https://streamwish.to/e/1awrhczhxdxl', 'Episodio 30', 'La batalla del cielo y la tierra - Los capitulos finales parte 2']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aot/Portada-Tmp4-Cap${index + 1}-Aot.jpg`,
    'iframe'
]);

const levelingSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=b3k4cktkc04yd0RnbHRMT2llMVlvUFh0cC8zOW5ZNld1dzBTeHVNOFErRFVIU2VhZ1liM3EzUFZ6UWNUaHpKRlRtNVR3c2gyeDlYZnNJclB2aHlYZGFMWVAwMXVvVWUzTGk0UU5SR2ZRT0U9OjqGk.gBDHhI.ThitybtxK9H&t=efbea8158d4428d99127f75505745401&op=NTU1MTE=', 'Episodio 1', 'Ya estoy acostumbrado', 'https://m.media-amazon.com/images/M/MV5BODBlZmIzZmEtYWQzZC00MDA1LTg0NDUtMzA3YzcwNDI2MTM3XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=c3YxZEhxM1NzT2lESTFKZzhtNkdwY2ppV2dxS1ZhWE9PcVBTdk9TYjVJRkZKTUVmb25jL2ZVSVZlY092VlA3S2ZwSjE0TWt0RUs1VERQZ2hzVmV2UUdNdzU3SWwzV1BZSEtJdzFOL1EzbkE9Ojpd0_jPCSEHzQN5c6iVcthZ&t=f7f92c701c9a7f1859765015dcdbc475&op=NTU1ODY=', 'Episodio 2', 'Si tuviera otra oportunidad', 'https://m.media-amazon.com/images/M/MV5BNzg0ZDIyZWUtNmNhNy00ZWVlLWE2MzgtNjc4YWY1ZmIzNjliXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=M0VsU1c5cGlNbllHSSs4SzlmSEw4elg5RlNwVVlLSnBOYXU1SXRsR1hDUUR5Y0FXNW95UGtBdDVhMzhmWHc1ZXRibjd3S1FVVDFqZnBNVWI2Ynl6R1E9PTo6JSBznvsLfQ9Cm2l5DWdZRg--&t=f08a5b2560a120a963927c20dcc6e87d&op=NTU2NzQ=', 'Episodio 3', 'Es como un videojuego', 'https://m.media-amazon.com/images/M/MV5BNTYwZWZmOTktYzFhNy00ZGEzLWIwMDctYmJjOGYxODIyMTQxXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=T1Rib1VYUU5HekcrSGJoRVh1U3Q2R0ZzdGdpNGxaNjNvRFgvZ1NCc1RCVXFEL3lYcjlGa251MDBIb0hidFBaNHVSSklkU3J3ckFpSDRkSHBBVEd4RVpDNFNkL2hJSE1GTFdINGhQaWNXNlU9Ojr_G4LUxVTEKfskXZNf9VTo&t=872a0592f5d9338d0ef888235dd28edc&op=NTU3NjI=', 'Episodio 4', 'Tengo que hacerme más fuerte', 'https://m.media-amazon.com/images/M/MV5BMjI3YjRmMjgtMWVlYi00ZmY5LTk1ZmUtN2M5MjcxNzE1NTBlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=VzlWR3hTWnBYYnh1N0FsMm82SUgxcVg0WFRoMStka0lJSFJFdDA4NVF5bDAyUDBxMFhhK1ZqMHFOb3gwL2FoaUtjL094YzM1SFg2UHA5cUVCdkI4REE9PTo6YhdpOwN6lioHoV7Yp4lfIA--&t=0579002b06940e7bc99a948ae175e63a&op=NTU4NDY=', 'Episodio 5', 'Un muy buen rato', 'https://m.media-amazon.com/images/M/MV5BZTM4NzJjZDQtMmMzYS00NjMwLThlZTYtYjJjMGE0NzkyODUyXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=bHhVSHo5MVBHT2RNOXBVdlBmL2V1Q1J2bUVSZ2VnNEZUNFI3cndlMkh6blhHd2RlMVRGd2x1OUJnV3ZEYVAwY0NKWEUzK3J4bDlhUkVyZUh1TTNPZHU3dUVLdi9YVEdRb09XRWRKbFdpczA9OjrkZrEVUuBHEK7UHoLRdkIZ&t=defd8e64408b2ac0f49b05ec6de495ff&op=NTU5MzM=', 'Episodio 6', 'Comienza la verdadera caza', 'https://m.media-amazon.com/images/M/MV5BYzUzNzI3MjYtZTI4My00Yzc3LThlN2MtNmY0Y2ExZTJiZGIzXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=VjFHUngyVFI0T2o0U3VrMnB1M2sveWQ4ZzJIdnRKczF3NzdzVmhPakhnR3FnaHRCaHBESVFHM1p3Y1kzeFR0NmpIcXVYWjBYWUtqemErWHRuOGxxU3c9PTo6.I4XhGBFRG25X29SrWkLQg--&t=6c7efb248a144ee687b38da8279bbb77&op=NTYwMjA=', 'Episodio 7', 'Veamos hasta dónde puedo llegar', 'https://m.media-amazon.com/images/M/MV5BYzIyYTVhYjYtOGY4Mi00NTlkLWFlNDEtMTY2Yzc2NTFlYWM0XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=SDJhYjg3RnVvOVBRaElxN2FsdFRFanFDY3dLZ1BZMzA5RE1SUGtOckdqSXQ2TDI0cUVkZkFiUzNpbStlMS9nQkUyYmJDRlo4WjhjOXE3MFZSaExjcWVacUd2YkhrQTU5b1UrWEU3SitLeEU9OjowAot9nr2Rjvx6H_fbwiwd&t=7c5bcc76cf27d386c50c347cfd7781c4&op=NTYyMDE=', 'Episodio 8', 'Esto es frustrante', 'https://m.media-amazon.com/images/M/MV5BMDc1MjI3ZmItNjM3Mi00NjA2LWJkOTAtNWY1N2FhZWE0NGJhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=QzlYQlpuK1RIaHV0RTVlTjc1U1dzT2EyVjk1WGtaQWhNdTAzMFNCL0dnV0tHcHpEZldXNkpQY1VTdGI3U3ZtZVFYTTZZdFVVSkRJMlc1SWo5a3JZZ2c9PTo68Ve3hTuUZTPq52e8n1Rlgw--&t=2659022bd4d22fcc48ca1b6dea4c9174&op=NTYyODc=', 'Episodio 9', 'Has estado ocultando tus habilidades', 'https://m.media-amazon.com/images/M/MV5BNDZmZWNlZTMtOWQ0OC00OTAzLTg5MjItMDc2ZWY5OGI2YWQzXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=Z3ZRczlIaEFOeDl0RDhCeFV6TU1pS2hWYnU4Ly81bHpEVjdEN0lJZVVZSG9ucmZOckZDcWNXYnVTVVFNVEQ0L3dnNGMvSnUrS2hVcnJzQkcvbFZPNFZyOFNPVXZramNkNkh5ekl5VFpkNUk9OjqlgGd0Uqmz7rJ.ArU8JvrB&t=df46ad930ff4e3a081c34b7ea95d2ab4&op=NTY0MTg=', 'Episodio 10', '¿Qué es esto, un picnic?', 'https://m.media-amazon.com/images/M/MV5BZDg5ZGE2ZTctOWE5Yi00NjQ5LThmYjUtMDNmMzYxNzIzNzBlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=eXp0bWxhNkNvaHhBYUJTaVdzdGRtWmE5ejRKM2ZRcjFEM1haQ2xEQjgyaHVUbUlKaGVHL0pkQ0hFZ1NXMWxadEpVYXpWaTQ0cElVQ1VnTHkxZ3ppZUdqMlJIVVZvR1hGMFVwMllHVnJXMmM9Ojrh8QFIXqmS5w.jogvqJULv&t=70f289e27975b798b9a0a209316e832e&op=NTY1MTM=', 'Episodio 11', 'Un caballero defendiendo un trono vacío', 'https://m.media-amazon.com/images/M/MV5BODk0MjRhOTctMGIwNi00NDk1LWExMTItYzhmOTFkOTUyYWNmXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=cjVvbldDTzU3aGFRejIvaWZVd1Nwd3h1WUQwRjJ6dTJxVDJySFM2cnNpdjJpMjMwMmVUUlZqT3pBZlYvRDFwVVJPZXVUay9KT3BRR1pIMG1UY09zSk1HeEZRczcxMWxNUHFpNGVEWkZnaGc9OjruEeCkblbNAwBHg2pILOPY&t=766601e53b32cade6eb39b84ce4947ab&op=NTY2NzA=', 'Episodio 12', 'Álzate', 'https://m.media-amazon.com/images/M/MV5BM2YyMjIzNWYtZjJkMi00MGU3LWJlYmEtYmI0MGQ4NmFjZGZkXkEyXkFqcGc@._V1_QL75_UX800_.jpg']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const levelingSeason2Episodes = [
	['https://mega.nz/embed/HFdi2LiT#WkjkJnDKAqXx7BB14ugfwtqyyoatlys8VUVIuiQ8Md8', 'Episodio 1', 'No eres de rango E, ¿verdad?', 'https://m.media-amazon.com/images/M/MV5BOWU1NjA3ZDgtZDg5ZC00MDIzLWE2NTAtODQyOGIzOGI5NjBlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ejBGZHhiUy9rVTg0NjdBSUVXUVV3Mjh6dkZidDdxRGVnRFA0UmxvVE9nMmxHTVZ5aG8zWk5zZlFvWnRmUnZjNk1KYjg0QWdmblNaMW90TTFmZlJ2NlZGbGMzM0dyR3cra1RNejNYSkxsRVE9OjouTDLQIRShkXbVrgmEkF.I&t=80525e4b2b01c40bbfd426549dc230cf&op=NjEzNTI=', 'Episodio 2', 'Parece que tú mismo no lo sabes', 'https://m.media-amazon.com/images/M/MV5BNzQ2ZWI4NjAtZTIzYS00YTUyLWI0OTAtOTgzNjgzN2I3NGE4XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/y2JHkZIL#kackqxBzTfMbqkgptwm9smyCoQLrAdKjK8kWxcSJilk', 'Episodio 3', 'Aún queda mucho camino', 'https://m.media-amazon.com/images/M/MV5BYWFjMWEzY2MtNGM4MS00M2Q0LWJjNTctZWRkODE0YmE3ODBlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=YmNjM1hMNXIvZjFwK291aDY3VnBmaDVPY3g3SG80d0d4ZjNSb0Y5NU9CRlI3bGJmMkFQYTNPNkxuTUJGZHJoeTl6ZWJzSlZ4UHJnWWFSYmVEWnhJUTZyYTFXNmxJcnU2aGV1QmY3Y21nbWM9OjoHxyr7Q0.nt.CPhi.6yWBr&t=0d6bd33ab42493582d2f904935e8c98f&op=NjE1OTY=', 'Episodio 4', 'Tengo que dejar de fingir', 'https://m.media-amazon.com/images/M/MV5BZjkxZjhmMzktYWZlOS00Y2M2LWJmMDQtZjc1MDg0OGQ4ZjhiXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=cVhOdkc0OWJPK252T1BaQ1JEUTIwczhGMXBReGNtWWwvb3gvQVpMcEpxOGJ5U2hvU25zak1nQ3pWczZFTmp4YWhuYzhJRzVHcTgzenZwaVdabHpKZGlwbWYzOVhTVlltanpxNmxXbnRXYzQ9Ojo2e8yo.ku34Oox74SzJN3K&t=619bb1d83a2d850d61dca80ce62b87f8', 'Episodio 5', 'Estamos entrenados para  esto', 'https://m.media-amazon.com/images/M/MV5BMTE0NzEwNTAtZWE5OC00ZDNiLWI4YTktODA2MjAyZWQ1NjJhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://mega.nz/embed/dEYxmQzL#g1WG9IKfyacEh5Wj90LWlzOBf5yc61tEr1xnJtIgq8E', 'Episodio 6', 'No menosprecies a los míos', 'https://m.media-amazon.com/images/M/MV5BMDFjOTJhNTEtNjk0ZS00NDg2LTkwNzctMGRiNmUyZTMyODdkXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=ZkUvN0dNbGtmVnE1akRDakorcmxFUmhXclJLRnRLWlhma25uZURFYXpWcnQ3VVNWRVRjekNXYTZxeWJvZ2Zvb09GYzFlT1hDdzU4UHVrc2doUnpWSXpDbEhySXpFUXYvRmY3VmpSNWpaWUE9OjpQBosh_Zs1KC5_apNuEiLc&t=7f012d8776a55b1f6ec1cffcaf7302c7&op=NjE5Mzg=', 'Episodio 7', 'El décimo Cazador de rango S', 'https://m.media-amazon.com/images/M/MV5BNzk1MTNiNWUtOTMxYi00NGUxLWJlNGMtZWFjZGEyMjk2M2U0XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=Y3c4eDdDMUN0bm5WeVcxMTdtQWdlSDJ0QVJJN1ZteEM0TVd4KzZtZGR3NUpRUWJRZkNmR2pOdktnQ0VxZ0lxYUJvcjh1bXJwbjRIZ0ozTkhaM0p4dDBhZFlJaVdmT29qNFdvaVhtTW5EZVU9Ojpcj1a2i9QituyEXy4agMYR&t=e3bba492b291e670dd0b0465dadff3b8&op=NjIwMjY=', 'Episodio 8', 'Mirar hacia arriba me estaba cansando', 'https://m.media-amazon.com/images/M/MV5BOTFhZmMxYjUtNjI5My00Y2QzLWJkODMtODQ2ZTQ0NWVjNGMzXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=NkZaSWlZSjVneHNLWWJJMDBkd0w2eGZzWFYyaUxMZkg1M2Z1M2cxUms0ZExqeXovZ0J2UmgwQjRWVGdYcUhwd2I4U3hQdUdRSmpML2Nsam1icGxHNmxUWXVQL3U5WGl4TTI3d0plZmhTQjA9OjpSdFv1S5TU1bPy9uct1PTK&t=d0d514f204719958d006b9e264be7cc3&op=NjIxMjM=', 'Episodio 9', 'Valió la pena', 'https://m.media-amazon.com/images/M/MV5BNmQwMmZkMTUtZTk2ZC00ZWQ1LTgyZTMtOWYxMzEyOWYzOGY5XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=Y1dxaGo0YTlUSTJ5bWRWaGsweEFHU3ZwQThBSytEYThHTHRkMU9rdmo3bXVHSDF1UW8wUTAwbEhHamJkaGdkc3ZaT1pWMklyQjZiWEZ2RzNwZmg5VXhBcG0wejd5WWQrMkV6SDh0ZGphZjA9OjqnxSOVhAvSGgKG4Rjv21_3&t=397fedb64966a7a644c1374ae95aecea', 'Episodio 10', 'Necesitamos un héroe', 'https://m.media-amazon.com/images/M/MV5BYjIxODU1NzctYmU0Zi00NDJiLWEyZWYtNWE2MGQ2NWZkNDE4XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/IOdDQCKb#-zJWvt_fGnBFeExEy66VGJ1Vzcn_1K3-UVN2KHnl1AM', 'Episodio 11', 'Se va a poner aún más intenso', 'https://m.media-amazon.com/images/M/MV5BM2RhNWJmZGQtNTgzMi00NjNlLWJlYmItOTUzZmNiYjMzNmNhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=YW1ZcWZ1bVZYa2ZpWmRiWTVMcEhCSHVKampla0lwcVN4bXpNRDlSKzlLcDl3QVRHRU4xZGRSYnBNT0w4YnorbTREelJwdnI4RTJYTTZIQ1dPMzNuYkpWT0E0YVlTWjg1bUFjdmF5dFFSeFE9OjrOEHVPTvuVyfEQirgxv9xS&t=1cf9a090a34f57d4606f733102284f0c&op=NjI0MTM=', 'Episodio 12', '¿Eres el rey de los humanos?', 'https://m.media-amazon.com/images/M/MV5BNDdmNWJjMDktNTBiNi00YzJlLWI5MWEtMmFhNWI4NDM3YjU4XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
	['https://jkanime.net/jkplayer/um?e=TFdQamNwdmY0dFU2RG0yUG1TbWk2cTJ2eWF4SldDT3dHV3J1L2FNODBWazBreG9KYSsxMXY4clJGSlRibWNnajliRkJLMmloRXVTZFpPY1pyQ2VXcjJ1SDRRN0JYRGl3akEwOHZrM25UM009Ojr_Inbld1AlLBLDzARyhm28&t=bc2f4235c7d6a01f005310905f727eff&op=NjI0OTk=', 'Episodio 13', 'A por el siguiente objetivo', 'https://m.media-amazon.com/images/M/MV5BOGVmYTNjNDUtMmRhMy00NzNmLTk3YWUtMDA3MGY5YzAwNjc0XkEyXkFqcGc@._V1_QL75_UX800_.jpg']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const opmSeason1Episodes = [
	['https://mega.nz/embed/s5UHjKzC#GIZnyvJDpc6VZhO4Q04ipHtHPS_8TOd8sCUk4ubS3d4', 'Episodio 1', 'El hombre más fuerte'],
    ['https://mega.nz/embed/s0FjFKhB#sdZ263UW2cobXTS-azRcNL7gHX3NgRjzUArYRAnQGMA', 'Episodio 2', 'El cíborg solitario'],
    ['https://mega.nz/embed/Z4FzlIgb#_y-s6vTAg9JKCWirOwc3plYfbNjum8ryasHiDl5PPPc', 'Episodio 3', 'El científico obsesivo'],
	['https://mega.nz/embed/wkFXgCrA#iWwiBlG_zJTHYxhCC91Z62fEmU6RvsFmC5DWyPWy2hw', 'Episodio 4', 'El ninja moderno'],
	['https://mega.nz/embed/80FXUALa#AgIwEJh0sby4GNOapMDElMSPToorPcyjWe3l06sZ3Ow', 'Episodio 5', 'El maestro supremo'],
	['https://mega.nz/embed/R8FD3IgT#bO9U7u-h_flakrV35fy6iCuDiac_pkEL38p5xO9XkUU', 'Episodio 6', 'La ciudad aterradora'],
	['https://mega.nz/embed/phETFK5I#ygQuapx6xMhZY2gprN62OTfiAp5A9_DWwvHh9Sp-Y74', 'Episodio 7', 'El discípulo supremo'],
	['https://mega.nz/embed/1lEnGajJ#Dut74R84DYGvv4wC1PdKnuioccXaq6WIBBgi97CZu4M', 'Episodio 8', 'El rey del mar profundo'],
    ['https://mega.nz/embed/glUjAQDR#i5tMFJol-hF-rjZgue7IlvlZLeTKW4GRJ5cv6KgLO-M', 'Episodio 9', 'Justicia inquebrantable'],
    ['https://mega.nz/embed/t8EXBADb#7SMDQahtbHYAHa2TN0k3QbjuV9ZsGWTPd1iFTRDBIm8', 'Episodio 10', 'Peligro sin precedentes'],
    ['https://mega.nz/embed/AhURFKKZ#LSvVo0SWVP3tl92vZT1QCM-bU3WOqWyydldNj1Z-x1o', 'Episodio 11', 'El conquistador del universo'],
    ['https://mega.nz/embed/RtNxEIBC#f7KPFyhjVqZPH6IbBbNil7r_1ZI3gyZbgZd74AtHe9Q', 'Episodio 12', 'El heroe más fuerte']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/OPM/Portada-Tmp1-Cap${index + 1}-OPM.jpg`,
    'iframe'
]);

const opmSeason2Episodes = [
	['https://mega.nz/embed/jvQUzCgL#JCUeW-7cvq6XucVUbWD2adv1Z2c4pcLoOb8WAS-8lSY', 'Episodio 1', 'El regreso del héroe'],
    ['https://mega.nz/embed/S7Z2iISa#gmmCfdyLmA6rQy8xh7w6zwSJgTI8dksiZKO4phUTI1Y', 'Episodio 2', 'El kaijin humano'],
    ['https://mega.nz/embed/LiAgma6A#gVTXswhJMglO4kLjANlsq1p_Vo6GzOtAj5K-_kz_-NE', 'Episodio 3', 'Comienza la cacería'],
	['https://mega.nz/embed/yjA2iIhC#DYgRrco4IaCcRC6jA9OObThecmv_o9gkZuxAVkKXBUU', 'Episodio 4', 'Bate Metálico'],
	['https://mega.nz/embed/auQGxARI#ohtOy17sw_j_LLBhtcYRBJb80ast5RtkFxMW4hjjqiw', 'Episodio 5', 'El torneo de artes marciales'],
	['https://mega.nz/embed/O3BiEKhb#tlBeFsthkeYOLSbQXwNK9yd1Ke0VTduwRe-1YGXVGck', 'Episodio 6', 'El levantamiento de los kaijin'],
	['https://mega.nz/embed/urQigKrR#Vg5Z0KHbqBHbKfA9SS5_Vf-4Zje8hj2vMM2ZVTXdRgE', 'Episodio 7', 'Los héroes clase S'],
	['https://mega.nz/embed/e2Q21CiK#Ec8XAVymTlsTJ-b-vfX-onDmPh0KqDWoj6LrW4vp8rQ', 'Episodio 8', 'La resistencia del más fuerte'],
    ['https://mega.nz/embed/vqYS0AyY#mKdWJyacW_JUZDhe6YwqTMnP0u6mdQX5sgT5zMRqyVU', 'Episodio 9', 'Los problemas del más fuerte'],
    ['https://mega.nz/embed/e7YkgSRb#2KBu9VzhXXfYtKTgML9aNCfCV-XTxUyIZ4eJUvZ2jhg', 'Episodio 10', 'Justicia bajo ataque'],
    ['https://mega.nz/embed/KuZyGYRK#X8sBW_YsS3mtHvzT7HblTMDMSYt3DUYCqKEhW-QfIq8', 'Episodio 11', 'El orgullo de cada uno'],
    ['https://mega.nz/embed/6vQ2kQ7b#C1_2MUtNcYm9IrayG9fjsB7Y5orboVMLgmZoal1_hpQ', 'Episodio 12', 'Responsabilizarse por un discípulo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/OPM/Portada-Tmp2-Cap${index + 1}-OPM.jpg`,
    'iframe'
]);

const opmSeason3Episodes = [
	['https://mega.nz/embed/NRcXQLKI#gdCtc6jiNUTbxq_Yw55EasyXryfN5UkzZFRxAHnwTlA', 'Episodio 1', 'Reunión estratégica'],
    ['https://mega.nz/embed/IAN2WSCD#rENp5Qv4pAPYnJUoKudDWIqKwoB4XMq8V4Jjoh3oL8M', 'Episodio 2', 'Las condiciones de los monstruos'],
    ['https://mega.nz/embed/yBlSSTKY#mS6rQrQUful_d9NfOGEISmTIAi9jL79jvW_MK8rugIg', 'Episodio 3', 'El límite de un ser vivo'],
	['https://mega.nz/embed/4Z91QQhY#i97yQzmQq8_b4tyxb4BNH8i_eLGF2XJGeAmKJKBGDrk', 'Episodio 4', 'La señal del contraataque'],
	['https://mega.nz/embed/XBMXwLqZ#vkSm0HE8965vxE2e2JMCiaIVfNrCCyaqQyZT-IuQG8s', 'Episodio 5', 'El rey de los monstruos'],
	['https://mega.nz/embed/MItFxTIQ#LnYUZ_mDmy-BQWnnatd-GeT2Jmb9T9IQZXVJYRxitaQ', 'Episodio 6', 'Superhéroes misceláneos'],
	['https://mega.nz/embed/EiZ2jZBZ#CJREgnecYr27KyCTNTIZ-1oF1NZ1dF8AWrgC0BcpDlk', 'Episodio 7', 'Contraataque'],
	['https://mega.nz/embed/GF1F2Yba#3oJWbjYw_lEQSTLrFdDgJQyWOXynzTw2pwUsc4a7rMQ', 'Episodio 8', 'Pergamino ninja'],
    ['https://mega.nz/embed/j8YHhCSD#1fvoL0haP-3itXDEVyxsBEp2iQNRa7L6nBMtydIy318', 'Episodio 9', 'La valentía de un niño'],
    ['https://mega.nz/embed/GdVX1Txa#pdpgBGIgfjCMNlYLFPAE1hj7X-jmqYN-P2IOeOcTe7U', 'Episodio 10', 'Una inmortal pelea pantanosa'],
    ['https://mega.nz/embed/nQVjQYSQ#V2N8Sb-r_RhYC5AwiVRADo7ZxBhXtgVT3is13u3k9B0', 'Episodio 11', 'Líderes Dragón'],
    ['https://mega.nz/embed/nh5j2bAS#SmCSqQO3k3tJ5OJaQ5Bt-opI_EwlmVCVzXKsecD39lg', 'Episodio 12', 'El ser vivo definitivo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/OPM/Portada-Tmp3-Cap${index + 1}-OPM.jpg`,
    'iframe'
]);

const dragonBallArcEpisodeSet = (entries, firstEpisode, thumbnail) => entries.map(([url, title], index) => [
	url,
	`Episodio ${firstEpisode + index}`,
	title,
	thumbnail,
	'iframe'
]);

const dragonBallPilafEpisodes = dragonBallArcEpisodeSet([
	['https://mega.nz/embed/D7ZDwCTJ#6jFWAaE_Bg9bliG6V6cD3Sc5qaq-tX1omI6oST6MQIM', 'Bulma y Son Goku'],
	['https://mega.nz/embed/r7QlVYiT#pVC80QWhMM7F7xfUWXnvUsyc1yiPMHS6iBaXpDHmSK0', '¡Aahhh! Las bolas no están'],
	['https://mega.nz/embed/ziIVGKKS#i9gVgu9PQdH7t4UDAHlpP_yxT2LRXRZg_2paATSWkio', 'La nube Kinton del duende Tortuga'],
	['https://mega.nz/embed/j2IlFaqB#-gmYGCj54jHtcZAXc0Y0X9GfxZjIwa0idwp_kOnAziA', 'El demonio secuestrador Woolong'],
	['https://mega.nz/embed/fuQD0S6Z#SuafAgFUGVcSkJ8XQC4gEsWcPNHMC9t074Yi2gB3UxI', 'Yamcha, el poderoso y cruel bandido del desierto'],
	['https://mega.nz/embed/YO0SlZYb#WBepuzTpR_CEU8mOiusS8hP3oKmi9Qo92eM4LMccOl8', 'Visitantes a medianoche'],
	['https://mega.nz/embed/6jBmFYBR#GSEyo4AnI0EDceu2hxX-2tnxAb91CmTYFrK8FeL4kZU', 'Gyumaoh del monte Frypan'],
	['https://mega.nz/embed/GyIDCQaY#HPlKhWmRLkD5TZOOulfhfyBpwVKyNIwCNNuU46chcfE', 'El Kamehameha del duende Tortuga'],
	['https://mega.nz/embed/n6AlDaba#Klq6PlL-6QXro-YzbE69ZEFnINGeWT3-4_Lt1M9fGEs', 'El talento especial del Jefe Conejo'],
	['https://mega.nz/embed/quQUjaAL#uDtL9AUMgN6Eojrtw_2Q29C31YxZVFazcpYnpq2zQCU', 'Han robado las bolas de dragón'],
	['https://mega.nz/embed/izA0SaYD#_xQXNtAq-BlNZ14o4EK2pDKLEvPmMBCWIHUBFVkBTS0', 'Finalmente aparece el dragón'],
	['https://mega.nz/embed/znJQkYbR#9BkiQgy4_QBfJlW9GnmL4InSwXhFcrKAqfAcODcB19Y', 'El deseo a Shenron'],
	['https://mega.nz/embed/vjYSSA7T#2yhond6npLT34KcLCQnTsZw8GxLO6NvcyLy-NuSsX9U', 'La gran transformación de Goku']
], 1, 'img/Temp1-DragonBall.jpeg');

const dragonBallWorldTournamentEpisodes = dragonBallArcEpisodeSet([
	['https://mega.nz/embed/DuQiSSiQ#G9CC2TxYEX2jX0Ov4Y3m5WLJFY4InHi3NFA3SuXM25g', '¿El rival de Goku? ¡Aquí está!'],
	['https://mega.nz/embed/CjAAiC4a#phVj0nkZFV2JGMoTT_EY2iOJ7I1gxnWy8FZ1jpAlydw', 'Lunch, una chica peculiar'],
	['https://mega.nz/embed/qiQwmaCB#jNBFRE0EWFdlp2awgoHgydOLN41taqFFhL-hZOcXW5w', 'Lección 1: La búsqueda de la piedra'],
	['https://mega.nz/embed/SrBk1S6L#tK3ix7NFKOc96dPWfwtrchmDt3n9E5TZjMXEL0pF0TQ', '¡Arriesgando la vida! El reparto de leche'],
	['https://mega.nz/embed/PvIEDAQb#6IIMwci0GgRkl2salu6fv6ljyrYS9pVgNSz8wBF_AUk', 'Duro entrenamiento al estilo del duende Tortuga'],
	['https://mega.nz/embed/66AwhYyR#oFuBOR6mY8wzLLZh2-56i8BdGjbWorXzeddZes8_GR0', '¡Comienza el gran torneo de artes marciales!'],
	['https://mega.nz/embed/izQmWYwK#PQ4mYCDK45m3m9jALEXqllp6NKfVPYuZw7AWpgN7mMY', '¿Podrá? El poder del entrenamiento'],
	['https://mega.nz/embed/arJ2GILB#53mrJa1QWVRp-tXgv9oIcWDUzaHbLvpA32zXxSx-peo', '¡Cuidado! Krilin'],
	['https://mega.nz/embed/P2QACajI#1UiU4pIeDlewzIavpzQkXDBpC9jrBGb_lGSBaKRG_iQ', 'Yamcha contra Jackie Chun'],
	['https://mega.nz/embed/C2ZgDSyC#SJNBeD4OckB1T5vCeOfs7GFGpYWGRNz9NjfSI2ghZf0', '¡Aparece! Giran, el formidable enemigo'],
	['https://mega.nz/embed/qvYUHABI#Suof5Vmu-P9xTDZBs46a010Lx9Plhticp0Jg6Wu13dk', 'La gran lucha ofensiva y defensiva desesperada de Krilin'],
	['https://mega.nz/embed/22RWjaJA#jZL4-vCoepYLmybYe8b3ZhA5iXCAk0TH48JJckzex7w', '¡Levántate, Goku! El temible Tenkū Pekeji Ken'],
	['https://mega.nz/embed/b3BAXaqQ#pb2IYq3FtgL-uu4qCe3Kh7o7esmOunHAsYKIVkpGrEc', '¡Es la final! Kamehameha'],
	['https://mega.nz/embed/WqYQBYJT#5-_U8G3Hl68D1pDF1X87YFlLG9MkSEBFTqlYYBHZAfU', 'Goku: grandísimo peligro'],
	['https://mega.nz/embed/O2BA2K5Z#Sj1f0Um3cVeQl7a0fbbmFNKYV_1kPx8nmRb3sK8qZrs', '¡Choque! Poder contra poder.']
], 14, 'img/Temp2-DragonBall.webp');

const dragonBallContinuationEntries = [
	['https://mega.nz/embed/2zIkyIIT#X-2J0dYDkrFPUNUNRk3jdZfCZOqZyJyT-2hc0rx_HVg', 'Reemprender el camino'],
	['https://mega.nz/embed/avRkiCxJ#ToLo0ILUt74DIwumE1r8963uY_ZpVlpa5YhKTgKCD0M', 'La bola de cuatro estrellas'],
	['https://mega.nz/embed/LzJCnALS#DZgzeveDWrwhqQ_fmzuHazpjYD81sGjF2OhF5LvVJYY', '¡Viva el novio!'],
	['https://mega.nz/embed/znYSiKZL#oWMFohOTsenROn0Qz8YYinn6FKE7hgB-EURXxOmEzsU', 'Veinte mil leguas bajo tierra'],
	['https://mega.nz/embed/oS8QVT7L#ka1MekGnV09694Uv7dZCgzMM7KIcs4DJQLcCoHGq05Y', 'La leyenda del Dragón'],
	['https://mega.nz/embed/eiQDBSCQ#omtGxQ1LaEvBvIE4yK7o2FtMQ2RjkQEaXR9SOHho8FE', 'La fracaso del Coronel Silver'],
	['https://mega.nz/embed/vr5wmQhJ#SQtWjewnWA__xhJ57a1m5sFPFlZynAOr3uaVK1Lev4k', 'El coronel White'],
	['https://mega.nz/embed/WqRR1aAa#UYTCLQXjcsXPqsp5GSQpPEtuGUAGcnp2BG7TkJiDC5Y', 'La Torre de Acero'],
	['https://mega.nz/embed/7nAxjSjZ#w9cTLPD3JjcHnRzdVTwD-119Lb9I0EkpHPzJBhGndW0', 'Ninja Murasaki entra en acción'],
	['https://mega.nz/embed/77J1SaCa#2ZjleAIhZ3URLtsp8_XULCo3T_LPQZ-AdL5L5Ug9c14', 'Cinco Murasakis contra Goku'],
	['https://mega.nz/embed/C6ZXlITb#BHHIbLz_eTG4X6Qs4ipXE-dKm10oWX56rA7C6jTdBhA', 'Súper 8, el robot de gran corazón'],
	['https://mega.nz/embed/SzAVSATQ#RFIlKudGyf3AHI0qq9cpaGbvJbQJNAGcEQO8HpTeiNY', 'Buyon, el monstruo invencible'],
	['https://mega.nz/embed/8C9jSDzY#hmduOhhIdYXlG7IQEUu4p6N9w0JyPSMUNCjJXO4csq0', 'Arale sube en la nube'],
	['https://mega.nz/embed/Tr5gBC5A#PRH_WyMjfunTkpTJBMb4zrBq11OhNwnsA-FrXnbuCF4', 'La trampa de la Patrulla Roja'],
	['https://mega.nz/embed/23AnSIjA#I0tBGhuqnniniy5ecWtgUF2KsKH3dzKYOFUlUmnwxfo', 'La casa del General White'],
	['https://mega.nz/embed/jmhSFAZY#rx56Wr1stydV3EECw_aVBpmxpnwHAPW2_93x13gvawI', '¡Cuidado con el ninja!'],
	['https://mega.nz/embed/7ngwzIoJ#aRS6zvPcSqKbd8907eSnTpY7mHnUgKPDpmgeWjgrkT4', 'El terrible combate de Goku'],
	['https://mega.nz/embed/e34AAaKJ#fDMPUSDjvduaH6O9CyFa2UpH5lcoWEZ2dd46EqTTl8s', 'La torre del Músculo'],
	['https://mega.nz/embed/qzhCEAiJ#tGXUYMWiUzsxQSitThnB0r8pyJVIGjGu1PqxdU6iWhs', 'El último piso'],
	['https://mega.nz/embed/765yEQhD#UB4W_y9bQXSfXdLvSJAMCXCNp8RXJVBgKv7CKxkVvtg', 'El misterioso hombre de la máscara'],
	['https://mega.nz/embed/P3pGyaDI#3HAXQBqTJElPytanwvXaBQ3eW6x1uAIxVVesE-2q_14', 'La gran batalla de Goku'],
	['https://mega.nz/embed/frxC1SoC#MF2w6fOIEH9KeztFFudAtSKLC0BqLIrGA2j9I-cIiIw', 'El secreto del General Blue'],
	['https://mega.nz/embed/33xgmCAQ#K9nE0_1KWgHjvZ8mE9NN5_bsZBY6bNFbnbogx7x2zw4', 'El ataque de la Patrulla Roja'],
	['https://mega.nz/embed/Gj4QBa7D#dsrdCTp_YGVroJVmCFnuySy-dbevIHA1OoTgc68jZF0', 'La cueva pirata'],
	['https://mega.nz/embed/m74yAYSI#W2xWsJSIzxaj6ZAq79vtcZIAyMDTTxiTyhjmxAGoRZ4', 'El tesoro submarino'],
	['https://mega.nz/embed/uz5GCQhQ#b30FgW4SAyRjvf4amJ3Yqm07P1A1onYBK3IRHcDTeFU', 'El escondite de la Patrulla Roja'],
	['https://mega.nz/embed/imxkTArB#Xg0TfWjNLfc8n2fy_MGkOm_n7kEtrNhwqMxb-hT1ftI', 'El camino hacia la aldea'],
	['https://mega.nz/embed/ivxUQIqL#btohg36axLFy58sqJ5b5IC-bwISUa5YKIa7AeBAvErc', 'La aldea de los Juguetes'],
	['https://mega.nz/embed/vnoAGQAQ#Rnz5BimNI8AWZjgzQKrY4eldL9dwa7EBowE9d_ddoRs', 'De nuevo en Camino'],
	['https://mega.nz/embed/qvhAmSpQ#mjgxieMaVkltCfrlvJzlcl8e52zaDCvHQRE6n4cwIrI', 'La Bola de Cuatro Estrellas'],
	['https://mega.nz/embed/Hv40zCCJ#cUXHAEWIIC4vNIYJ5zGaZmb4FVHVOKDxDLpQlA8PbEM', 'Tao Pai Pai entra en acción'],
	['https://mega.nz/embed/G3omwIbD#GHy7-8f6XRzOPA6UAEW1x9clpLiQVb9MnF1xNj2VC4k', 'La Torre Sagrada'],
	['https://mega.nz/embed/u2hSkaDT#gS6RawaDAQnDwBJ0wpNDUrvYxKbWT-4SS0ZUeZsM6C4', 'El Maestro de maestros'],
	['https://mega.nz/embed/76okgSxT#FF0_vTWgA1ZwSEO2INiH3bNNqKP7HKwbXFFvJIsVWKY', 'El Agua Sagrada'],
	['https://mega.nz/embed/iy4QDaDZ#uv0sJwrSB24voSpUnHJbH9Tc2YbONi08ccJpr1uREL4', 'El Regreso de Goku'],
	['https://mega.nz/embed/q6w2QYxD#4LVJf0xXgSTKbfAxrJIJuaDCaU2IQ5d4AL23He9nGHU', 'La Derrota de Tao Pai Pai'],
	['https://mega.nz/embed/v65iCQ6A#R46JAjWAnZOcrncDS2SjAQLoofqUfGnOpL0uYXNv5-M', 'Camino del cuartel general'],
	['https://mega.nz/embed/7zgijC4J#43PThijKPHSeTDkVLLHXh3wfbWLbzCtXA0KZAlnx634', 'El Adversario se quita la máscara'],
	['https://mega.nz/embed/PnxAgKDJ#8X5tvBAHRVxzhatd8bx9t2LmXiHb9jTF7h4wv4RpoqE', 'El último combate'],
	['https://mega.nz/embed/m6wWVARS#0li3RCHznEgYXx2qng2Ji3kAVbUvdohJ1RFgiWvpmQ4', 'La última Esfera del Dragón'],
	['https://mega.nz/embed/vnwWCaCS#H3TGOLUQ1mCjao3jbmAH3tQZS1dLBx7FKXMCn9rdxvM', '¡Qué guapa, es Baba, la adivina!'],
	['https://mega.nz/embed/i650CARL#piy65U7bq98QcfMVwoQsv1kXx-JnkwUfKcnbpwge4B0', '¡Al ataque! Nosotros somos los cinco guerreros'],
	['https://mega.nz/embed/iigAkALR#wdRGqcx5ovB-VjQEfn8qa3T54bkqs-0_jkS84yM4B5U', 'Una gran batalla sangrienta a muerte'],
	['https://mega.nz/embed/z7pG2IbD#W1EvH800_JGLsKhnilykEgJWoeJyrKy7Lk4vex0ktig', '¡Encuentro con Son Goku! El váter del diablo'],
	['https://mega.nz/embed/viwW2KAD#1eA1ZVFZ9OjPxR3cmsSN_FIcohVqU4BzRT2ildE9pVw', 'Rayo Akumighty, ¡¿técnica mortal?!'],
	['https://mega.nz/embed/buxwxCrC#moEwspnt6C_bIj-9Pg45Wlu9wHvzWzAcrhzGWDwW4Pw', 'El misterioso quinto hombre'],
	['https://mega.nz/embed/nzhknK6R#jkMjQz5hBZvoVrUDVDlmuhbIF2rnJo09CBr13CC8yjE', '¡Colisión! Poderoso contrincante'],
	['https://mega.nz/embed/Wy4AxSBb#8UboUEATzNd3-roj5eQJvDFDizmpYIdt0Rd5Bdqtyh8', '¡¿La verdadera identidad del hombre enmascarado?!'],
	['https://mega.nz/embed/zqgUXARR#9Ea8LOpOUXxJdi6ahhOxOWjykgWS6aH_-ae6cz4YYI4', 'Las tácticas de Pilaf'],
	['https://mega.nz/embed/LjxmjYQC#50U8-twKAr8zJo-i8i07-_eGyqP8v-kK1KvtqjGFq3w', 'La vuelta del Dragón Divino'],
	['https://mega.nz/embed/6noiGSTR#zO6dds1GJpveLh7Qk3AWKKPuJWX8C__PFLk2aiCgml0', 'La calabaza mágica'],
	['https://mega.nz/embed/DjxySCTC#RlkMMvrvZVzpxgDAbqHg-92wARTwEmYz1J1iHsB2T08', 'El combate real'],
	['https://mega.nz/embed/u7hG2A4R#e658lqqlAb_1pEcVd5Vl-QkBUGJw4f5x93i5TbFeP7s', 'Goku entre los fantasmas'],
	['https://mega.nz/embed/S3wSHKYY#jIS2w9QS7trtkHZL0ciu80nH6GbbfEumEcR4E1Z_xCc', 'El jabalí volador'],
	['https://mega.nz/embed/f2wE1Q7Y#DQj3cm-nFVqROOrEF70E5PqrqpcXM7BsNWM5ppSsQgs', 'Hacia la isla de las papayas'],
	['https://mega.nz/embed/f3pmxCrZ#m401QE7ODLVx8-bKgGMTE89n5tPmyhzd3dxeBqa7iY8', 'Las vísperas del gran torneo'],
	['https://mega.nz/embed/C3o01SAY#SovknvOwnTosaILcHwGGbqohoRYK3gXpdouDbR_qVhI', 'La primera ronda'],
	['https://mega.nz/embed/6qw2iYgD#uWMGCKGtiTfmM5G1knPHnwrF3d3J0wcKdblaVTVANqw', 'Carrusel de luchadores'],
	['https://mega.nz/embed/zzx2jI4L#KKMtiTYC4PmB-IqsJmvkCmHkJvWSLtvkgtaEXJgFSIc', 'Los ocho finalistas'],
	['https://mega.nz/embed/ripkUKDB#ixnbYqAtxFEa7ujMPfDN3j4VZbhQbj9-jfylObvT_aY', 'Yamcha sufre un traspiés'],
	['https://mega.nz/embed/i2oySYwA#8dxzFv8sN79QMgSnG2W3LuPVylLKVQ2GImP84PJU-kU', 'La luna y el lobo'],
	['https://mega.nz/embed/nq4kDQKI#wyXuo8dFlXvDzgWTyGNwfKoZe0b6-X0Rs2NKwcIhM38', 'El combate de los dos rivales'],
	['https://mega.nz/embed/m6hwiQrT#aIriX3WfXeQW4xbPCXeRxR8-sdteYjiscLiosvBHJec', 'La sorpresa de Goku'],
	['https://mega.nz/embed/2jgQhKyJ#mwsXJPTCTgPZVdNwlSS5p-v32D3ot-z2CB295gau3Gc', 'El enfrentamiento de Krilin'],
	['https://mega.nz/embed/GrhADAqC#kj07vmRkZs1ADmtaaDpL3UxxYSyuGW8PVPcw8hUcb6s', 'Un combate inesperado'],
	['https://mega.nz/embed/e3o2hK4L#jNQvL1QYBCLm-e8_cOthBq1BLc7UbwD1EmwKLrAqHkQ', 'La técnica secreta de Jackie Chun'],
	['https://mega.nz/embed/O7pQCA6b#6QsZr9mhyQ_FgGSksOYGVm8d1YaxWsP-KPH83Jl_vkw', 'Goku contra Krilin'],
	['https://mega.nz/embed/zjhAHAQY#B-c-QLlJG9TcH2jWifjxndHilIwK6zBg4sGmltHy0dA', 'No puede ser, ¡¿Goku?!'],
	['https://mega.nz/embed/1W9XUR4D#v4iEa8XrNQNlaTm3e9bN1kIBJoU3z5Lg7nnTi6JNu1Y', 'Un duelo excepcional'],
	['https://mega.nz/embed/X2gCBIhB#1q5LAGoABOk3jnpRh3F7OgXTHX2KIBdUlOEnbaxHHmI', 'Al borde de la derrota'],
	['https://mega.nz/embed/sekBhbgD#lpYgeiBmDk5rvGEzpFB-T_U45pPL5v1E1RdnALUzRsc', 'Los brazos del diablo'],
	['https://mega.nz/embed/2mgUWIBA#ND7C7ks4f9Xf0RQU3VKeHLJLBJzqmVaX02FQzf8O3mM', 'La fuerza absoluta'],
	['https://mega.nz/embed/e65gFYQY#EKIXh2KX_QXtQUb5tjB2kOF1tvPUEshV1UowotCA-HM', 'La lucha final'],
	['https://mega.nz/embed/6ugwVK4T#0jwpwmfQplNr-F3oJNslOUEmAb2k4jln_DvNBcjISSg', 'El regreso de Piccolo'],
	['https://mega.nz/embed/LqpGnCpT#XhV6bC8Y6O6GFFkkKdbqETkKaj7kFLOX7TcKWHgGtCs', 'Tamborino empieza su trabajo'],
	['https://mega.nz/embed/P2gExYQK#2yYlso3zdziHqZGw23oDGv_2NBQnXpAx8vYqVVvUb5o', 'Un extraño encuentro'],
	['https://mega.nz/embed/Pj50FCCK#49GHNTOUHD6rW7vHWQkgjjzwaJN6br0bdIRdLZ8oscc', 'La derrota de Cymbal'],
	['https://mega.nz/embed/Hm5EGKoT#TNgirsE7ETP6KFgVxwwOMJ5AUeIA1NpynIEriLhsv14', 'Un escondite casi perfecto'],
	['https://mega.nz/embed/n3hETKIT#STQBSfI975wCwNFpTbKQF7CTjhzV0XLqqEa9ce5N2oI', 'A la memoria de Krilín'],
	['https://mega.nz/embed/iz5inCrI#qSbFEnXeOXTRTcL5BQp3wYW_QrcbfPcd7XDXty4WWSg', 'La cólera de Goku'],
	['https://mega.nz/embed/yyogmAwI#9VxuDri5qfhyuLbP8h178ldx3gpPPYBOQp7VILJMDBE', 'La aparición de Piccolo Daimaō'],
	['https://mega.nz/embed/8fdm3bLD#C4YjqU53MfhEvEZ1XJHjlinv1jDSkdd4kdxpRcLiOEw', 'Goku contra Piccolo Daimaō'],
	['https://mega.nz/embed/y6hwXCLD#6x2Yp2iC9pO3GfQn9s0IISU50yk7l0Zuebr6ddpwJA4', 'El último Mafūba del maestro Roshi'],
	['https://mega.nz/embed/uvgClIRa#W2gdI_AwetDYAFev9UE6LneX2UksTbXVblgPE93Uk_0', '¿Podrá Piccolo Daimaō recuperar la juventud?'],
	['https://mega.nz/embed/rvxAWQYC#IdDbz_WbSpiRKbrtR4Q-R3rmKc_Mh4u7aU9fiLjZgSQ', 'Ataque al castillo del rey'],
	['https://mega.nz/embed/z3wUSC7L#EMiheFQngmSdpB5X0EtorNVPaLSR_B5b1OPIPjp9tRc', 'La esperanza de Goku'],
	['https://mega.nz/embed/av5S1aab#sdUZgPMh7WGyPTObZWTZzHlUiGCK8MJ-aHImztuQxd8', 'Vamos por el agua misteriosa de los dioses'],
	['https://mega.nz/embed/r6xSQSpZ#QA9H_HIm0dQ3dSABIyRxnz3EN91UjFs-8lid6B3azog', '¿Está vivo el maestro Roshi?'],
	['https://mega.nz/embed/erpSCKZI#OF5OKUVZA_MeDctRwVFc1Kylleoi1f3Xx05k9Y1oUYc', 'Goku despierta'],
	['https://mega.nz/embed/Lnp23K6Y#ad3kX_y2zfQRjudmW4pxjccra_Xks8gNr1r30Wiv6js', 'La decisión de Ten Shin Han'],
	['https://mega.nz/embed/7yxUGYKA#gpYbj78dLyFQShPn_wE0-JWa5w69UcCO6GF10hEz3kA', 'La legendaria técnica Mafūba'],
	['https://mega.nz/embed/Wm4ygKDD#dok2J8v3V79VvPmLO6VWxtPrVwsRtEMHi7puIQIs3QE', 'La ira de Goku'],
	['https://mega.nz/embed/Py4QxQRK#ygQh2BQqlV7pY046tAkIY39ntggFCSQwLp_Vmv9CIBk', 'Un combate difícil'],
	['https://mega.nz/embed/anoCgaQZ#cDhHiRe9K3eCMrtq9Zey2Uymmpf6nwEplDbeDfk0fkY', 'El final de Piccolo'],
	['https://mega.nz/embed/avh0nILB#luyuzPmfTfWnHEr5VU3n7W3f6NFs1F-8bhK4gJO7hBs', 'En busca del bastón mágico'],
	['https://mega.nz/embed/mmhAGaqI#OudBUOWmcHBL8vgaezwsuySqnKxDEnw8mbWdjjXLFHw', 'Un templo en las nubes'],
	['https://mega.nz/embed/a7wmQKDS#n4ejCobQYlghqV_lv7QWQQPHBsXujBveS9MzIH_QEs0', 'Dios aparece'],
	['https://mega.nz/embed/a2o2AQgA#uehvn0ow0LvznZKP3A88dP6Ot8CGfOhD77hHv0bmZqw', 'Shenron revivido'],
	['https://mega.nz/embed/TyoWyShR#MY6Cht1jxSi4ZiyZKAWiEBt26zSjavpG2PcaPPsFaBI', 'Más rápido que un rayo'],
	['https://mega.nz/embed/aihS1ASR#SZB6tQAGBtMwQTgKnJaSfmoR22YfFhkYljN86zAhi1M', 'Tranquilo como el cielo'],
	['https://mega.nz/embed/62oi2Q7I#fuyHYELGsFdpW75iyIgnVtHajXIMOr_-pdTVgiRRBUU', 'Goku va a la Sala del Tiempo'],
	['https://mega.nz/embed/Ou5QWCqb#J0j3vxzzmZ8S2xN-f24yvbd-kGriUPiWBpukhez_p1A', 'El doble de Goku'],
	['https://mega.nz/embed/LzgCFSKQ#BeQbanjsPAE6bdXQiQeN3T3_n_UvYw', 'Cada uno sigue su camino'],
	['https://mega.nz/embed/62pQWK5C#fGPY-Ask9CVjJ89PCdADniDPSlhvEuN-RFxcj2Z9Y5U', 'Más allá de la lava'],
	['https://mega.nz/embed/D2g0DIZJ#omzvij6SifBNT5WTg7sUT_vvgQfQWHiO2sAHSMeY9v0', 'Cambios'],
	['https://mega.nz/embed/qi4mCCSZ#4iLOGqWOyLNcV1YDD_8k2dWuJijaE-W9_n1ujQU2ge8', 'El peligro de las preliminares'],
	['https://mega.nz/embed/zjpw3Aab#LP3cw5mtafeg6Fgt0Dkontoy-fOXwe-4jtNu75DjjYQ', 'La batalla de los ocho'],
	['https://mega.nz/embed/y2pCWYZY#DsDCecEGCST6aniymSpaTgJUWXe1nnVuyKEbaV296UI', 'Tenshinhan contra Tao Pai Pai'],
	['https://mega.nz/embed/3moWUSaK#9Kz8uzvnNJIZRcRGkXdLcyAgVG_q0lDYKt7Rs1FPNyY', 'La propuesta de Goku'],
	['https://mega.nz/embed/jrpm3SIY#pbfyz-RIaBKHw0tS83VkHIABq85IyQg3QndO3y-IrAg', 'El héroe misterioso'],
	['https://mega.nz/embed/vr50FaZT#hpU4MnMGyB2Ol4IJ1RwbtWozpHkMr-h5_gBrlBu-GY4', 'La revancha'],
	['https://mega.nz/embed/bmhw1YBS#IZOPjlqemp_-Hwbn9cVHnNNY98aTzdTXrbTfD9NHNAQ', 'Goku gana velocidad'],
	['https://mega.nz/embed/Xywi2YZK#dPxnWg147FWYkAkw5cP0_A9EaL90La2VadgQKu-LPDc', 'Los cuatro rostros de Tenshinhan'],
	['https://mega.nz/embed/Xyxm0agI#GuKLx1IRuVg6lybbI7eEJ8WgowQ99nuKZq5gv78IuyA', 'Kami contra Piccolo'],
	['https://mega.nz/embed/LrhiTQaZ#bDdYA-CJhlJcTMvdYs_mJ_B-pEyA9-xxD79bgXGcGBg', 'La batalla por el futuro'],
	['https://mega.nz/embed/f3p0SCKC#wseoedJvSB-Ic-t87asPXCnGShu0EthWg_zdnjRvG8o', 'El Super Kamehameha'],
	['https://mega.nz/embed/mmgSkaLB#cz3Gii_JEhXdt4r9-wi9ytb5IyuVwjGapCAYjHX0Jvg', 'Junior, ¡no más!'],
	['https://mega.nz/embed/6npA3YDR#Wrk1X-DeMmxfpOymZDCanC2U90gCvkEVTJKwZ-VeoXo', 'La trampa de Goku'],
	['https://mega.nz/embed/i6g2DSAI#7HD6mlR-Y_0qRWdjNsmj13dGcOC2UCdL01cppsC8Rr0', 'Una prueba difícil'],
	['https://mega.nz/embed/qnpkCIhR#bFLORLR8G_V_JzmYc9s-2armdDWTdvGARtDziK6KNS0', 'La victoria final'],
	['https://mega.nz/embed/brRnASDB#osMmzVwZQ4gDlwwphnOCHRlKPOw5RhuwOp1g0spTvLI', 'En busca del abanico mágico'],
	['https://mega.nz/embed/eiwkUaxb#-TR7o1TIzy-6OhJy-sbwbLcCRDXRj3LcK7ZKAxR6cLc', 'El comedor de fuego'],
	['https://mega.nz/embed/evwGDIjD#t68QtKwIvCBW0sRgDOzlvItZMfEi7SVkKguUoINvbEM', 'En la montaña de hielo'],
	['https://mega.nz/embed/yvggEACK#zPH9L7GVX9XWx2WxdWFOvsPk1q1B2qb9JvCWvrTiZno', 'La montaña de los cinco elementos'],
	['https://mega.nz/embed/qupUxSrS#JiTayrUrSt4zobaQb7yv_2n6SOE2kmo4qIIg-Y3B-RE', 'El final de la aventura']
];

const dragonBallRedRibbonEpisodes = dragonBallArcEpisodeSet(dragonBallContinuationEntries.slice(0, 50), 29, 'img/Temp3-DragonBall.jpg');
const dragonBall22TournamentEpisodes = dragonBallArcEpisodeSet(dragonBallContinuationEntries.slice(50, 73), 79, 'img/Temp4-DragonBall.jpg');
const dragonBallDemonKingEpisodes = dragonBallArcEpisodeSet(dragonBallContinuationEntries.slice(73, 94), 102, 'img/Temp5-DragonBall.webp');
const dragonBall23TournamentEpisodes = dragonBallArcEpisodeSet(dragonBallContinuationEntries.slice(94, 125), 123, 'img/Temp6-DragonBall.jpg');

const haikyuSeason1Episodes = [
    ['https://mega.nz/embed/Bi9CjCbI#0hNz-wZmV2gKuJW079SOsiwx0urlbNLUdjDk2whvma8', 'Episodio 1', 'El fin y el principio'],
    ['https://mega.nz/embed/li10WajR#RZ8Fuy2RqtZTLcpH_nhA-PLb-Lvh4FB1bWOMAoRJwkE', 'Episodio 2', 'Club de Voleibol de la Preparatoria Karasuno'],
    ['https://mega.nz/embed/UqtAzaqb#mgrLzOGlz_AXmntx4ir9Ddxo7gWqyvGlfO2DC02azPA', 'Episodio 3', 'El mejor aliado'],
	['https://mega.nz/embed/B3cHBIRa#3XNkXuqv33SBT-IRNBucIa06_5Bum8stLwUUYtElpdw', 'Episodio 4', 'La vista desde la cima'],
	['https://mega.nz/embed/QyNz0BKY#pPm308zFmqwMxd0J5Icl0Sa5sliTayZMNaOAB12Tkhw', 'Episodio 5', 'El nerviosismo de un cobarde'],
	['https://mega.nz/embed/BzlF1TJB#w_enZB4eS5-x2ohvWme8MrLDOTYAo8sRPVHU_-1eWDY', 'Episodio 6', 'Un equipo interesante'],
	['https://mega.nz/embed/RqFA3TRK#UHU6vHmnnMfpAO82Wb2Hyza8O8szAOadaleIsFj1kt8', 'Episodio 7', 'Contra el Gran Rey'],
	['https://mega.nz/embed/FrNRiKRK#nbBrdQDHqJJV1G7x1VIKQWMG7ZcRoB3mXEPkgMKJ3N8', 'Episodio 8', 'Aquel a quien llaman estrella'],
    ['https://mega.nz/embed/RvNyhazK#udEb43Y7C_r3qCOB0b8AMrlVauvVmSLgQSetf1uq9-4', 'Episodio 9', 'Un pase para la estrella'],
    ['https://mega.nz/embed/Im0EFSBI#xKK94-SIwW_TCI6f1tL8__BgNKvAnKZZ9aXERXIWCPw', 'Episodio 10', 'Anhelo'],
    ['https://mega.nz/embed/wydFFLyA#huNrm9H1Xf9xLgXIeBuoncAsGxq_-_P15rxzoWEVGbw', 'Episodio 11', 'Decisión'],
	['https://mega.nz/embed/cyNlCIja#5A_8DZ1RrLreBjxyjv8Dau4CrMHJt47txBKOXHlp9Wo', 'Episodio 12', 'La reunión de gatos y cuervos'],
	['https://mega.nz/embed/0iMjmCwT#05K_RVNR6VYViyMy-THwT8ekUIRwp9tvOzDENy1Y-x4', 'Episodio 13', 'Rival'],
	['https://mega.nz/embed/x68gHIwD#pJkYNKE8jU8kDR-GVVYWRn3Mg6RXDlykO7ms4uJZNi0', 'Episodio 14', 'Oponentes formidables'],
	['https://mega.nz/embed/kz9TEYyA#Q9zAll4IPKkVD7yaH7NDf4H1nxdj7d7F-dP1soBH8Uw', 'Episodio 15', 'Renacimiento'],
	['https://mega.nz/embed/Ru1wCZyS#rhvcA6X10nWijtzMrS4aJ3LdHdhX8wj1oWFL4XLdiQA', 'Episodio 16', 'Vencedores y vencidos'],
	['https://mega.nz/embed/drVXHKDa#LgB6SK9fIpaqye9PmgHmzrs8akiNV_pgMCOtNk1Mu0Q', 'Episodio 17', 'El Muro de Acero'],
	['https://mega.nz/embed/Nn1VSQIK#YG_RFQxKTTlzqNLtXFSc-AaD4y4KlF967SVVPNCLreg', 'Episodio 18', 'Cubriendo tu espalda'],
	['https://mega.nz/embed/l7s2TAoZ#dkzsdW98hfBD4SUQgebdmwD5twIH9R_MsZ87CY2vs7I', 'Episodio 19', 'Directores'],
	['https://mega.nz/embed/Br1CAYpb#EPHM-HbzpxsSG2Vw3pm6vpkeOXphAmIBXaY26gSnY7U', 'Episodio 20', 'Toru Oikawa no es un genio'],
	['https://mega.nz/embed/8mFHRDbb#sJbz24WUxQRK7y3pWQrZMN1EPNasb9W2HD56HMPos5I', 'Episodio 21', 'Las verdaderas habilidades del senpai'],
	['https://mega.nz/embed/42NDlQKC#X8leiXPXQQZ1ovfyDs3hJb-HXJk15OJi46QiDSSmHwQ', 'Episodio 22', 'Evolución'],
	['https://mega.nz/embed/4y80SL6K#kt_UvkBitqgoW8jtaaJaqsldJVglXPnPvIBmK0w9lmE', 'Episodio 23', 'El punto debil que cambia la corriente'],
	['https://mega.nz/embed/UmcxXRJJ#x6Xy6CbuVg-4Zd_b7gc7o34B5j1Td-XcYHC2UYV-Gbo', 'Episodio 24', 'Retirando al rey solitario'],
	['https://mega.nz/embed/0yEn3aiD#6URqu2bGaMO6MwB8BL-oJR1hlkBws_SBVZjPyxEXCbU', 'Episodio 25', 'El tercer día']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Haikyu/Portada-Tmp1-Cap${index + 1}-Haikyu.jpg`,
    'iframe'
]);

const haikyuSeason2Episodes = [
    ['https://mega.nz/embed/4zl2mCKY#vsuu2AtD40K4LBdNVCEWuSKPUbRb5x-Ojf1FvzGKGZo', 'Episodio 1', '¡Vamos a Tokio!'],
    ['https://mega.nz/embed/4jMVBLLR#hUPeDlkiGsOyslG9c5HlWlN6rARg49M9l5OgNke4wZ0', 'Episodio 2', 'Luz solar directa'],
    ['https://mega.nz/embed/EuF1xIjT#8Od1HisRJ0ob4Nuaq5ex7fD8BQkwQ6ekCkXgBB-enbU', 'Episodio 3', 'Poblador B'],
	['https://mega.nz/embed/QzEETKQY#6NxNwunRWUPrBRDNRJ_JsV9qc8e9K26Pcixx_1lBi8g', 'Episodio 4', 'Estrella central'],
	['https://mega.nz/embed/4iNyXKDY#pe2NBSnBcHNgG7SUoGexxZAaRlbhR7A3QQb_nq79gc4', 'Episodio 5', 'Codicia'],
	['https://mega.nz/embed/h7lWETxb#JNmuYk5EjSqDdau1woQIDe5kyl8TZfC_IwFiML-80IQ', 'Episodio 6', 'Ritmo'],
	['https://mega.nz/embed/Yj1XmbKB#hsG5PYaPf9UGMQVLg0KZMi82WwZmetX2DS413OXdrJ4', 'Episodio 7', 'Salida de la luna'],
	['https://mega.nz/embed/Ird2Waza#JszLUxis_sQgrskFtjmUmowJm0N3M9xBYSD0GQma5TA', 'Episodio 8', 'Héroe ilusorio'],
    ['https://mega.nz/embed/A3tjGLIR#nPEAZZKky16g-iPF6DQubZvQDbzRgLJ2FKeeRtNojiY', 'Episodio 9', 'Contra el paraguas'],
    ['https://mega.nz/embed/4ylDEaQK#WVkff1gybiuhlnpZH43bMOl61R9JJIZuMXypSAiw1yc', 'Episodio 10', 'Engranaje'],
    ['https://mega.nz/embed/Z2NxALTI#RDeNpzy8hlaCZfFtx6pUcVRL84NfC_vyfmR_BAo-EJc', 'Episodio 11', 'Arriba'],
	['https://mega.nz/embed/M2NiiYYb#NV6w7I2SH-PLflRaTjpItbYvhUo1uUPlPUTNS_OwFiU', 'Episodio 12', '¡Empiezan los partidos!'],
	['https://mega.nz/embed/BjUV1Z5S#ykgZPUa7qI9BpVAHvqoev3MvRDvaAKUpZ_HnIlRSckA', 'Episodio 13', 'Un poder simple y puro'],
	['https://mega.nz/embed/Nv80BD4Y#ZdNqV5RSBEWoUXwct4in1Z6ffZIy_OM5hA1H3qexj58', 'Episodio 14', 'Aún en crecimiento'],
	['https://mega.nz/embed/MzlkEZyR#-6XmCgiK3BWHaiWHYwr_25PS9oMQXpC2HdXYtzcG744', 'Episodio 15', 'Un lugar para jugar'],
	['https://mega.nz/embed/kjkT0LpK#9m2NqorjvmUXcIY2dJBdqggGTnGJupaBXnd7dtkA1f0', 'Episodio 16', 'Rumbo al siguiente'],
	['https://mega.nz/embed/8rl1Qaoa#88VGuBssJD5Co5QqRYXQYXF1XWWPjU93tbjeWvxRIIo', 'Episodio 17', 'La batalla sin fuerza de voluntad'],
	['https://mega.nz/embed/J28g2LhZ#OM5lO4EqRILrt3kISn1aaffgIuU6wS6s3M-kwHLuxcg', 'Episodio 18', 'Los perdedores'],
	['https://mega.nz/embed/lm9FkTCK#O0p2GAfvRtAAYdk5fReC00J1YO6z5paAb0L-g-6C5Aw', 'Episodio 19', 'El Muro de Acero puede reconstruirse una y otra vez'],
	['https://mega.nz/embed/0u8inKxA#_wK8sAVMLu2KzMYrRmBS7kF-p60LMwZE4q60Tj5_b4o', 'Episodio 20', 'Eliminando'],
	['https://mega.nz/embed/kzswDD7Y#1sodAv93JjfSH-q2tMZ1grhqezeq4Rc3tX5c4iSeE98', 'Episodio 21', 'El destructor'],
	['https://mega.nz/embed/tqk3kLyD#WW6JQ5rVtqAkLQA65OCeHghqqqWYRFJ_OKTdZiV8BXs', 'Episodio 22', 'La pelea del antiguo cobarde'],
	['https://mega.nz/embed/B6EngSgY#IiyW0rqjI9iyn3yy8TBr6_vCFfo0uUiCShZO2jxGw-o', 'Episodio 23', 'Equipo'],
	['https://mega.nz/embed/Yr9iFCqa#PWRpiR6J-q67w16Fo8HmGIFShgp1tGfEppZ-XUuHx0g', 'Episodio 24', 'El interruptor del límite absoluto'],
	['https://mega.nz/embed/g7EUAZrB#woQLWzHQx5s5LueyTCAZv4lNp0HnFA_8X00Hy1LDG60', 'Episodio 25', 'Declaración de guerra']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Haikyu/Portada-Tmp2-Cap${index + 1}-Haikyu.jpg`,
    'iframe'
]);

const haikyuSeason3Episodes = [
    ['https://mega.nz/embed/pv1gHBDA#qL5oaM88XuqAVgIl1udL0VkrJMWT02BuLwuEEJja56U', 'Episodio 1', 'Saludos'],
    ['https://mega.nz/embed/MikRXBQS#2Q7vfY1gL5bYJrbDcpEEl12xA7MW50FGyqAFIxGH0XA', 'Episodio 2', 'La amenaza del zurdo'],
    ['https://mega.nz/embed/x2MhRRQY#KqYPWTaTGYqQuWaB8WHlBfDpmpX4AjsySKLpNpvIebw', 'Episodio 3', 'GUESS-MONSTER'],
	['https://mega.nz/embed/Z79xjbqJ#0SxwZZp2KEsqVOstvIx-OICoMci3YrMAggUcrjO5MXk', 'Episodio 4', 'Luz de luna'],
	['https://mega.nz/embed/lzdmWDjT#ncPk7j3kdi6ybsNI6NAnVn583VIrCsUqbZANOeJqw14', 'Episodio 5', 'Individual contra números'],
	['https://mega.nz/embed/F7l1WaRI#BaDCdcczP4LVn4FYfbb1wMPJ5aLgK1bqq0YFxlQqKws', 'Episodio 6', 'La reacción química de los encuentros'],
	['https://mega.nz/embed/Uv1TVCrb#2XHzpNBBt-G2Tc0MhLFDS3_B2vCH7PmiULUYlbHykMs', 'Episodio 7', 'Obsesión'],
	['https://mega.nz/embed/wi9TBSzI#khXPZIDeOrUHh4BhBPzsk98oy-3HZqJl3iY4uALZPRo', 'Episodio 8', 'Un tipo molesto'],
    ['https://mega.nz/embed/YrcwCQhL#A3KTgEdrkZNK48mCybZ9F46IgGaeh8gXQ7bK7CAyYbw', 'Episodio 9', 'Idiotas del voleibol'],
    ['https://mega.nz/embed/1usy2ZBB#8EMTjQSA9TQPG_bTtJIyuKztMLVLAiHm89TwGnQUDpI', 'Episodio 10', 'La batalla de conceptos']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Haikyu/Portada-Tmp3-Cap${index + 1}-Haikyu.jpg`,
    'iframe'
]);

const haikyuSeason4Episodes = [
    ['https://mega.nz/embed/MSch2CzS#9y8RWKo_lb9rSDOeoFiAHQs0acHB1eevcvpM8H9fF2M', 'Episodio 1', 'Presentaciones'],
    ['https://mega.nz/embed/FOUGhSjA#sreWUK2pHZ0vSQIKkQiJ1lk-ap1J7G9M631rABOqjuc', 'Episodio 2', 'Perdido'],
    ['https://mega.nz/embed/x7cRkQrS#ri-x1RutqAYboAphMo0wTQVBOov14KbtZV2-j6Bf-iI', 'Episodio 3', 'Punto de vista'],
	['https://mega.nz/embed/RmkjRKyZ#d9LIkFPCrDphNEvDXHCsnVytwJiiNbnMhqUNY9VD3NE', 'Episodio 4', 'Tranquilo'],
	['https://mega.nz/embed/M6kAiAJI#QNedGw4aNs75OksjOiw3Am-rqrvZ23IR_9ZnJe6ywq8', 'Episodio 5', 'Hambre'],
	['https://mega.nz/embed/N7tUgZga#z0k2xPl26_dlhzUS--npWL0lQplp-pRQqdw8CYCAGPk', 'Episodio 6', 'Mejoras'],
	['https://mega.nz/embed/Bm82WLLC#XPvxWSupmeJH6MG87jipvPue7z5ONdEhCrJ-gM12xT8', 'Episodio 7', 'Haikyuu'],
	['https://mega.nz/embed/pi8l3YgC#nKtIxu5aP-Z9jZoXlS_UlOwzqypfaZiPsqB1Ekc9rmA', 'Episodio 8', 'Retador'],
    ['https://mega.nz/embed/dztBXQSS#9AzCn1A89cV5LSF0ux-PQbkO1fy8A0YiWPrjpzJ4hzw', 'Episodio 9', 'Noche para todos'],
    ['https://mega.nz/embed/Q31DVTJA#Yf0rPBMYkSQQ90ynndlcDZ7cJdMAIb01LxC7No09V3g', 'Episodio 10', 'Frente de batalla'],
    ['https://mega.nz/embed/t2k0HIDQ#vbKF0eBRDtQHDLFEZkfdiDykvPHaSyh1v95xMhl_Fto', 'Episodio 11', 'Una oportunidad de conectar'],
	['https://mega.nz/embed/Uz9EiIiK#8UpK77OWGZMHIHKyXcGtyL59WWdOk4VQ6k_2uzOgts0', 'Episodio 12', 'Vívido'],
	['https://mega.nz/embed/8mcDiCIL#LE6Mwyfir5DUg-ZifIsvMUtpdgvDN13wUW3bTu4Q-eQ', 'Episodio 13', 'El segundo dia'],
	['https://mega.nz/embed/sPVnWCDC#z5QY5lemOBDk9_SH05l1GVVFXJEKackfg82PhFXJKEY', 'Episodio 14', 'Ritmo'],
	['https://mega.nz/embed/wL8zWYCD#hwtbz7tLtqkwTiyrfQXgTgIc5fFNzm5bw1gb618pm0c', 'Episodio 15', 'Encontrar'],
	['https://mega.nz/embed/8bUHWZbL#G-EmoNU4v718-lZxd_0zAn1fRhwYMhlPxjLYl55sxu4', 'Episodio 16', 'Corazón roto'],
	['https://mega.nz/embed/9PUzyJxb#pQ6XGndD-4YamoBH1XMkrAtkYKYY84Zy457toY7UvBo', 'Episodio 17', 'Gatos contra monos'],
	['https://mega.nz/embed/ATlFmDaK#qV7Q89sPOYkbJwd76Saq7ea-_xHAteh6KfXUD7oqX6E', 'Episodio 18', 'Trampa'],
	['https://mega.nz/embed/1Slk0Koa#wHkKD3DySFpLvy0Ro-RfVkzOTOdj1CmrGL3-eqzrLn0', 'Episodio 19', 'El mejor retador'],
	['https://mega.nz/embed/ZXtFhbhQ#1Zl0hWHfD9PSjMSliW8UyDmDHJJP0SCwO2wzLFxMaRk', 'Episodio 20', 'Líder'],
	['https://mega.nz/embed/tWl10KzY#iU6_pBUSR2TDPzpdtwc6ZVVLj5aJO7wCfRfk-JtiFWg', 'Episodio 21', 'Héroe'],
	['https://mega.nz/embed/tSlUAKiA#lHvxcm6wfh27UwhPNynbUydBpVrqcMttPMwuOlEmhQA', 'Episodio 22', 'Clavija'],
	['https://mega.nz/embed/MaEjlYqB#_NQfPwjAbkVxLTo7GHWDvA3gx8pF1IEed8ETX6JUZ8s', 'Episodio 23', 'El nacimiento del rey sosegado'],
	['https://mega.nz/embed/1e9EnCSa#4wi8Q7lV_31XduZZxZnfIfTdRVyjpZUybR2UbPUTQJs', 'Episodio 24', 'El festín de los monstruos'],
	['https://mega.nz/embed/dX1nSZwZ#SlwNtEHFouMCl93JoKoAyJcNYR5hvuAgLEdGj36duYw', 'Episodio 25', 'Tierra prometida']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Haikyu/Portada-Tmp4-Cap${index + 1}-Haikyu.jpg`,
    'iframe'
]);

const yournameSeason1Episodes = [
    ['https://mega.nz/embed/cDlikZ6S#A6UH8j2JkGQkbi4l7wdsfwPdGHX-mDgNM_nkzG7MCMo', 'Película 1', 'Your Name'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/YourName/Portada-Tmp1-Cap${index + 1}-YourName.jpg`,
    'iframe'
]);

const fullmetalSeason1LATEpisodes = [
    ['https://mega.nz/embed/ErcU2A6D#kR_0i2d8US1xSOe5pbgJP3hqrPpxtV34joCBQOphdeU', 'Episodio 1', 'El alquimista de acero'],
    ['https://mega.nz/embed/Y3lRQSgD#v3QZZD0DfjZW_akl3A7WPddc2bjF8XuXU-rvaQ3d3zE', 'Episodio 2', 'El día del inicio'],
    ['https://mega.nz/embed/A2VkHaiI#BhyFNRgs6ohK_SD0a8BJvp7NM5YclNnEY9KuUSEyUtA', 'Episodio 3', 'La ciudad de la herejía'],
	['https://mega.nz/embed/xjkwXTaJ#NDjOF2ut5fU__PVEiei_GVBatrR1zUlCUPk-pjg2fsM', 'Episodio 4', 'La angustia de un alquimista'],
	['https://mega.nz/embed/1vNhkKaQ#Sv03kIvWZr0dYpNB5rSXaBIF0uw601Ag_1CyjHxKVY4', 'Episodio 5', 'Lluvia de tristeza'],
	['https://mega.nz/embed/l6d2mDoZ#uVXWOO9HMNM7crFgnQt2_Z66iphl8sPqCqNImVOR-CI', 'Episodio 6', 'El camino hacia la esperanza'],
	['https://mega.nz/embed/s6UBUBJb#ZqJSmEqdBLv8t31sqpmv3xY9kwgFKuQk2AQsPTUwPh0', 'Episodio 7', 'La verdad oculta'],
	['https://mega.nz/embed/V31hHBTJ#wfKUMbRCgeyodlMtMzzpwu7xz_scaTO1UlCzCmNmDeA', 'Episodio 8', 'Investigando el laboratorio número 5'],
    ['https://mega.nz/embed/tnFWzZCK#0wsCA_szSNyOwfqMmKdMiCmMGjmwVioWK5IxfOFas9Q', 'Episodio 9', 'Sentimientos creados'],
    ['https://mega.nz/embed/06smRDII#CElknICa_QFE2O3Mnbkq7S6qEa0ZqYk5o-MlvtEIcHY', 'Episodio 10', 'Cada destino'],
    ['https://mega.nz/embed/lnsygLia#jr3VzEU_rSEG-MfP7_Ol2r-DMewoXctOLv_K2k97M5k', 'Episodio 11', 'Milagro en Rush Valley'],
	['https://mega.nz/embed/Az93ABDZ#jDO9lQ_ASfISj4rE5R9CmHA8_00T3VrFyhGjYNo2VTA', 'Episodio 12', 'Uno es todo, todo es uno'],
	['https://mega.nz/embed/Juth1A5B#GsgBX8BTmNdovSwk4_L_iH2D8zke3QEWVY4gKt6Z9uY', 'Episodio 13', 'Las bestias de Dublith'],
	['https://mega.nz/embed/M7E03TjL#0Lgcuuteq1PsQDm2WUxb-MuYArv5kmSH-Q-U_X1sYog', 'Episodio 14', 'Aquellos que acechan bajo tierra'],
	['https://mega.nz/embed/kylziQTT#WbPfqzNeysJI_tIWjO7Cx-j04SebksqTTONk4IUg-lg', 'Episodio 15', 'Emisario del este'],
	['https://mega.nz/embed/xyExgbYQ#zuH3T28SsNAo0Q-HH_9qozWUNOGj4_tMiJcpSM6wOzA', 'Episodio 16', 'pasos de un camarada de guerra'],
	['https://mega.nz/embed/IiEF2J5C#A7cGhsex5P6mxxdOtclD1KsLRLV_l0STI3a6eWRhJpM', 'Episodio 17', 'Llamas serenas'],
	['https://mega.nz/embed/9jMwyBaI#mtcCk8ZGYwKcd38b1Sob2s5UkgumwIp2lm57KUsCKhY', 'Episodio 18', 'En la palma de un humano arrogante'],
	['https://mega.nz/embed/Yu8kgaSD#CGhUt10AKJuCT-EPNsKrLxSCM4hExNLW-RKSzOK9NoY', 'Episodio 19', 'La muerte del inmortal'],
	['https://mega.nz/embed/kz8WwRzQ#vfkUEXqSiz8Vs_xVq_8FXa-kxYhcXXLGxdarax5lBeo', 'Episodio 20', 'Padre frente a la tumba'],
	['https://mega.nz/embed/tmMkxAxI#6lxpD6sqUYh1N0QuYby8oxY3oSxBHoVo6vf928B2Xrk', 'Episodio 21', 'El progreso del tonto'],
	['https://mega.nz/embed/lnlAWSoY#4GI_GQe1KfqYLz3NoE-tWWz8cHqYdw12WOFk5t4HvMM', 'Episodio 22', 'Espaldas distantes'],
	['https://mega.nz/embed/Ri0VkJoC#4aFs7aWNRRp229Z_dTz98Yn_QLQqulmCreIWWpWLxx0', 'Episodio 23', 'La chica de la guerra'],
	['https://mega.nz/embed/9vMn3JxL#swCkACPzxoG2WV2dNET5rfMzGU0o4ukDVdjDEYCQU7Y', 'Episodio 24', 'Dentro del estómago'],
	['https://mega.nz/embed/RusjXYDK#aCCc_LMViXRnXa3QkIaK22ffpOEiDqouygbsWwuO7M4', 'Episodio 25', 'La puerta de la oscuridad'],
	['https://mega.nz/embed/pm9WhSLB#zPRWGoXXhWuqBOlOEbE1FhwY9I40I05M5psSB6AbjSU', 'Episodio 26', 'Reunión'],
    ['https://mega.nz/embed/07cRDBbB#GBfbvgfdnO63aFsXUlkZ-Pb6jYbgxEkuAlYI49VADsg', 'Episodio 27', 'Banquete en la grieta'],
    ['https://mega.nz/embed/Q2FCiTyC#FlK_2evh7gXu1YAK_F4hHr8b1xA7uOyqDJqHspGIkyE', 'Episodio 28', 'Padre'],
	['https://mega.nz/embed/EzM1DZrS#G9qB82bFfCO1a21O9TXlZx_HAabS3_t7Sdu1Yl0Sipc', 'Episodio 29', 'La lucha del tonto'],
	['https://mega.nz/embed/xjFQQJLa#oHE6njHj0NyEvLcwpsP6Ds57QwaB-EKumITuiAZXIcw', 'Episodio 30', 'La campaña de aniquilación de Ishbal'],
	['https://mega.nz/embed/g6MAWL4Q#3luop6Z77IHr6Pkjiaj24CdstUmnTu5XgzRz5md-Wh8', 'Episodio 31', 'La promesa hecha por 520 Cenz'],
	['https://mega.nz/embed/9rdHmChZ#5lKLe5nSsudO-SBU7dyCD6yYdgdbxLge4H2YJOQpkq0', 'Episodio 32', 'El hijo del Führer'],
	['https://mega.nz/embed/R3sgQDIA#UntY1M_biVgwNVijO7kLClQlnDdHc-lMXSX6d0Sii5s', 'Episodio 33', 'La muralla del norte de Briggs'],
    ['https://mega.nz/embed/wqkF1ISK#zec9icTigHQxEWqigqnH-Ym7PIUFo5Zcw_iQibM-sG0', 'Episodio 34', 'La reina de hielo'],
    ['https://mega.nz/embed/Ru9hlbxI#izJ-rsTtJSn339qPXlZN2EbxNn-k8OY19ZHJvrvmM-o', 'Episodio 35', 'La forma de este país'],
    ['https://mega.nz/embed/pj13RTbI#xWHJj_l9tlc_ZcPNGWDgp3mFKkQtUJh72g2AtkaT9Xc', 'Episodio 36', 'Retrato de familia'],
	['https://mega.nz/embed/9ydDDS7I#5-jp7XWGDZX4LaADtfK-WLqiwWxorUxe7SRuWknlAQo', 'Episodio 37', 'El homúnculo original'],
	['https://mega.nz/embed/4ndW1TxY#U9hxajdbvwVj7FHWP11Fhv3CesfWAf81SWrobzl_DaI', 'Episodio 38', 'Conflicto en Baschool'],
	['https://mega.nz/embed/Yy8wmKDY#4aIgIGy-d3Ec4N9NALo6qQeSP2o0zPYz6KANwwF28gk', 'Episodio 39', 'Soñar despierto'],
	['https://mega.nz/embed/hr1iUQ7L#0FJ4jh-mSL4UAW2jk8zOKRWFrn5XhkYJsRl4wuh13v0', 'Episodio 40', 'La criatura dentro del frasco'],
	['https://mega.nz/embed/0rsVyJ6J#tL83qILQFMfsGghD_0t2A8VGvJGPZ0tOa4l0k_wn2_c', 'Episodio 41', 'Infierno'],
	['https://mega.nz/embed/p6cm0RRS#xh9cp_xIDrGbDzQgWRtVdIjgkLWXp9VtUJrG_ZhZv0o', 'Episodio 42', 'Señales de un contraataque'],
	['https://mega.nz/embed/Jvt3AaaC#dnXenyIUofUZOi_itp5STWJ1EboOjFLsi6rkkj8GBOA', 'Episodio 43', 'La mordedura de una hormiga'],
	['https://mega.nz/embed/87VFiQYa#zidOIoqVz-pHAd6TbjtVxxKssiPwvmd-EQpMyqh0Hf8', 'Episodio 44', 'Una recuperación completa'],
	['https://mega.nz/embed/N3dzmCID#fl5ZlJBpgL6M2R94duL-Z15c5HUP3jdlmhCClulJ95E', 'Episodio 45', 'El día prometido'],
	['https://mega.nz/embed/sz0HQSbJ#age-WjX-0fVZPx5xNi1LCebhm00zG70q-i2Tl1-szXE', 'Episodio 46', 'La sombra cautelosa'],
	['https://mega.nz/embed/wiUVVTyY#zKuadaEL_7SZ6Iire9abWMUFw04ki4EVKr_XDQIYWgM', 'Episodio 47', 'Mensajero de la oscuridad'],
	['https://mega.nz/embed/An0jmQpI#f2lYXatjV2LzSKAU4W49fc9PN2nK-BctStMJp4WjzzI', 'Episodio 48', 'Un juramento hecho bajo tierra'],
	['https://mega.nz/embed/smkVUA7R#ASgMOBB0o5-Lwtgx7xiZUMHEajY-d-QZvYJiCFiE6E8', 'Episodio 49', 'El amor de un padre y un hijo'],
	['https://mega.nz/embed/0y9yVbzZ#jWSrOUtZAH-o6gQGgjFSmnNtm-otWT3gr2ijH5jgTWI', 'Episodio 50', 'Agitación en Central'],
    ['https://mega.nz/embed/t2FzGDbL#rpremfTMGuVbDsgxtNtjXexjyxq4s8oHtvcjboyviug', 'Episodio 51', 'Ejército inmortal'],
    ['https://mega.nz/embed/omc2AAIb#4TbU4DBGXolz4qJ4LkTk0k4iCffN1n4ibir_URtrroE', 'Episodio 52', 'El poder de todos'],
    ['https://mega.nz/embed/ZnFz3Ioa#ZqQa75-IohP-Dr6sswtpLP3YyqFNkS_13ObYgU-ofCk', 'Episodio 53', 'Las llamas de la venganza'],
	['https://mega.nz/embed/oucFxRjL#iOFcS4awyw3h6MQoc8N1-YxCyN0x5VWwzEh8WTxBDzw', 'Episodio 54', 'Detrás de las llamas'],
	['https://mega.nz/embed/w2sXWJTL#Z0wsYPWU4JllWqn25PMZH-LC67mgtWvE2Mad1cBhAdE', 'Episodio 55', 'La manera de vivir de los adultos'],
	['https://mega.nz/embed/kucmiBLa#HuhUjI6fR-498OWvrfUx17_Qsx5YfzGp5_FlF7Nw6qM', 'Episodio 56', 'El regreso del Führer'],
	['https://mega.nz/embed/Rv8XmLxA#fn4Ctga1E5mNosgiamg9JvQvCWlLp6_hUMHPKJzSqdU', 'Episodio 57', 'Descanso Eterno'],
	['https://mega.nz/embed/YnVnnSya#tL0_6zIu3DhzWeFYaQVbCzxlc15p8ZKruGQUAeicdB8', 'Episodio 58', 'Sacrificios humanos'],
    ['https://mega.nz/embed/4i8iETAK#xbL0l2IwYEu_elHyzmXj7yrPdOHFIhsDPqulVZ7tCMM', 'Episodio 59', 'Luz perdida'],
    ['https://mega.nz/embed/orciHKSL#zO9KhJ6UTEFNM5fGqUS_md9141q4HoLaR9RqE1i7tBI', 'Episodio 60', 'El ojo del cielo, la puerta de la Tierra'],
    ['https://mega.nz/embed/R6k21LCJ#GkEObgmSmP7xGkt7oniYNS6PPvv7yMVD9aWN5WMJizU', 'Episodio 61', 'Aquel que se tragó a Dios'],
	['https://mega.nz/embed/lzlmQRyT#VKXxEjOf4NDfGvzL_WOVvQub9WPWKmsT8R5alVOYbx4', 'Episodio 62', 'Contraataque violento'],
	['https://mega.nz/embed/Ajk1AS4S#EqAf-VSLqwXIxlGgF91JjKt8IcV5eM5K8Rzk-Bi1A5g', 'Episodio 63', 'El otro lado de la puerta'],
	['https://mega.nz/embed/U61nlTaJ#nkFRr01BnRr50Rf3Ep2Arss-1zdWByuKyTECQHUfhMI', 'Episodio 64', 'El final del viaje']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Fullmetal/Portada-Tmp1-Cap${index + 1}-Fullmetal.jpg`,
    'iframe'
]);

const fullmetalSeason1Episodes = [
    ['https://mega.nz/embed/ZqF1ya5C#lkkWNozkVq-RlahOKSRaEMR9mCJJtD6lK9ZHmNS8ZN0', 'Episodio 1', 'El alquimista de acero'],
    ['https://mega.nz/embed/9iEwFR6Z#oqN3PEJkAOSMSErXwboaz_NMeqveWh1DCmOSxrjE5R0', 'Episodio 2', 'El día del inicio'],
    ['https://mega.nz/embed/liVFCbgA#4OeWZIjApklhWraLyY3GIA9RvBw0vuG-RmqR4jwjmKk', 'Episodio 3', 'La ciudad de la herejía'],
	['https://mega.nz/embed/5nECibKZ#2Hv3sYE3hFowu39I6oPEhYy5yX-zbsyq4XGV_sQGR4Y', 'Episodio 4', 'La angustia de un alquimista'],
	['https://mega.nz/embed/sjVEEI5A#G0zSWhl9k1nRn9gT0eNxRJlWNcXtMO4kDKdQ-tqLc-w', 'Episodio 5', 'Lluvia de tristeza'],
	['https://mega.nz/embed/hj8hRYQA#4vC_EiWeSIC1GW1nS2SW89ns3QjUZNuHmyzsJxYfPns', 'Episodio 6', 'El camino hacia la esperanza'],
	['https://mega.nz/embed/pz0WlAjK#p9jWijTMenhN-UD8e0mPCpbETREBmzb6EF9UT6TCRl8', 'Episodio 7', 'La verdad oculta'],
	['https://mega.nz/embed/gqsEiS6D#nP-vWtVlgBKdiS8pxsklup9QDuNXwtfpmtRHzJmG_wM', 'Episodio 8', 'Investigando el laboratorio número 5'],
    ['https://mega.nz/embed/MmtixIZZ#YYn8DzdTQytv71ewO90gK9YuZ6BlHNTfRSDVpYU2tzc', 'Episodio 9', 'Sentimientos creados'],
    ['https://mega.nz/embed/06EEyALS#YSDdCH9oak6ZLzaTvg-MYs02lYA4cOG6b9BVrFRZakA', 'Episodio 10', 'Cada destino'],
    ['https://mega.nz/embed/EiUVVJRD#lwx2_Y_TXnqvU7MLi_CFw9Xhtw71hnKGSOJGCGUj8Kk', 'Episodio 11', 'Milagro en Rush Valley'],
	['https://mega.nz/embed/1iFnVYCR#v0yetWvWveSrSXXP5JSlMrc9L0YejhYbuX7Uq-NBJ5Q', 'Episodio 12', 'Uno es todo, todo es uno'],
	['https://mega.nz/embed/I7lihRYA#kpqHCDMnjOXHzhq5vY04OY0knvfL156HmutAJr5gbuY', 'Episodio 13', 'Las bestias de Dublith'],
	['https://mega.nz/embed/siElST4S#XKDWhh_bx0vLBHLzbS86Mk9X7daKzoKmsUC3m-CdPB0', 'Episodio 14', 'Aquellos que acechan bajo tierra'],
	['https://mega.nz/embed/tvF33TLT#6WsuHT7jX4DPIMDIjTB8bnCbYQlmx6Lz27FRsrp55e8', 'Episodio 15', 'Emisario del este'],
	['https://mega.nz/embed/QqVSxYTK#5N6yyVrvSYQeDhzr5XWxXqGmVx7sp91OVa7Y6veiA7I', 'Episodio 16', 'pasos de un camarada de guerra'],
	['https://mega.nz/embed/U3lC2aQa#aBXbt5q8h7nN7jyOK5Z7E-IDvKVbS7sItpTw_9ocXrI', 'Episodio 17', 'Llamas serenas'],
	['https://mega.nz/embed/VjVh2JwQ#RVY1XMuSbhTL6hIcvItkMkfmJxUJZhmiim03RxwRXBY', 'Episodio 18', 'En la palma de un humano arrogante'],
	['https://mega.nz/embed/0j8CnC5I#ur1iIA9tZik4Du2HjwTzFQoBmT6PPTeRA4GuT_k8RJs', 'Episodio 19', 'La muerte del inmortal'],
	['https://mega.nz/embed/RikXRaTD#RV1FoaqrD1fqCNWJ7VaV2axurFbLcKXtwisA8Z24U_k', 'Episodio 20', 'Padre frente a la tumba'],
	['https://mega.nz/embed/U2cSxRLZ#VUCZLq391zUnsKOEIwGW32-elQ6x8AuhD2iZbEteJ0s', 'Episodio 21', 'El progreso del tonto'],
	['https://mega.nz/embed/tj0h0AwC#SwfkX1NocceJa5BMOjbSUAL4NlqVDHZIbPc08Jn_u40', 'Episodio 22', 'Espaldas distantes'],
	['https://mega.nz/embed/QqUUVDgB#RPBEClds7dbVX4SEbrCXTe-PDR4OGjjOambE-ywZHFA', 'Episodio 23', 'La chica de la guerra'],
	['https://mega.nz/embed/BzNHlSaR#8qj_iGZaSscX6MxrFNoGZs1ulzvaBpka5TwU5eBOYjw', 'Episodio 24', 'Dentro del estómago'],
	['https://mega.nz/embed/lzM3TDjS#QgRFQhTDE2QiBCtNltruXxiz7VurA9T592SSTCH7S8A', 'Episodio 25', 'La puerta de la oscuridad'],
	['https://mega.nz/embed/N2U3VRaT#pqhRbyrkFM_IYAQ3lipN5SbeI821Zs8u_Vjivy3pwQI', 'Episodio 26', 'Reunión'],
    ['https://mega.nz/embed/or1hFQrB#6m0-MpiGwi39DTQNmm78kuYeR4teJJORDmLj3vi4ioM', 'Episodio 27', 'Banquete en la grieta'],
    ['https://mega.nz/embed/UidEHI4L#dtUOEop8pOUC13s8O-VudHu1qgOIPQSpTvRHLFntH6c', 'Episodio 28', 'Padre'],
	['https://mega.nz/embed/E68EyKzb#mAuIpPssPf78DQow6z65ArHWZmg2pGizEB4bEnZFv_w', 'Episodio 29', 'La lucha del tonto'],
	['https://mega.nz/embed/wi9hQJLK#-JhDVf513CLwVXmsqIzpCUqQ4pYWbFS_DaBA6aboRXk', 'Episodio 30', 'La campaña de aniquilación de Ishbal'],
	['https://mega.nz/embed/t7kQURIY#7PCB-97JSvS8Vu8moYXMmUXZmF_qkdwwJdRyt368W08', 'Episodio 31', 'La promesa hecha por 520 Cenz'],
	['https://mega.nz/embed/9y9CGYhS#lFaFsBua4b5hD9pd-rpQfqqh6Q1360OgTS5PboovQn4', 'Episodio 32', 'El hijo del Führer'],
	['https://mega.nz/embed/A2d2RBTb#yUhCjwWSSeTk3veETQdN_9ErkK6dOLZsGETS5TGf5bw', 'Episodio 33', 'La muralla del norte de Briggs'],
    ['https://mega.nz/embed/020jlLaA#WxbA3FWSOONEYEHXn19A8sArigec1JRV8ZCJdKgcths', 'Episodio 34', 'La reina de hielo'],
    ['https://mega.nz/embed/FiczzbCD#7LK2LSslLcM1eX6nAiozUJljWz66WWMYqUYd7DnkFDA', 'Episodio 35', 'La forma de este país'],
    ['https://mega.nz/embed/wzdTRIKQ#1qburmuJVy30zcl2FWgPqWLWSIm6jwtWOiW2YMU1MWQ', 'Episodio 36', 'Retrato de familia'],
	['https://mega.nz/embed/5mNHGQbA#i8OiMJZA3RG-siK48qhfm4aPFRvC4v7Fb1AJ7W6ZUPs', 'Episodio 37', 'El homúnculo original'],
	['https://mega.nz/embed/N7F3HKBT#Cxcqj1hvt5sqNwuwBvK0U-0UYhD8VE_WFW4uXj7gMHM', 'Episodio 38', 'Conflicto en Baschool'],
	['https://mega.nz/embed/kn9zCCbS#lsmKl00RKx8VGi8_okUDbwSwTlhYEeUiH_U_4RO4ViI', 'Episodio 39', 'Soñar despierto'],
	['https://mega.nz/embed/t70SVaQQ#jP8z4_XgMt-MeIYoBvZbIcFL1yDiUhX9GrJm8r2hB3A', 'Episodio 40', 'La criatura dentro del frasco'],
	['https://mega.nz/embed/sutQQKpT#qEiWNxie38vwU8v7HF4t8Ya_C33cQAwBgyK4p6UP_uk', 'Episodio 41', 'Infierno'],
	['https://mega.nz/embed/9y1WERzb#LtPSZG4K5S3ja0d9Ouhg7jRxw7HZ5-FYKEETlOvMs-Q', 'Episodio 42', 'Señales de un contraataque'],
	['https://mega.nz/embed/QukRlDoJ#Jylbqo6GgU_vAEAbV6wOlxPtiUS-3AVtjEP-E3QgPuo', 'Episodio 43', 'La mordedura de una hormiga'],
	['https://mega.nz/embed/I2dlVR7J#BoDXMqLcsRsLwHNCGnSkzq4fLvcaNRK5j5F1rKyit3A', 'Episodio 44', 'Una recuperación completa'],
	['https://mega.nz/embed/YqN20BSC#ufCDajnPh9XfoLIS9uwXsws58KSH7_bJTm18sM2LTTs', 'Episodio 45', 'El día prometido'],
	['https://mega.nz/embed/g68ExaLJ#AFnETHUUzMIlEQkh24f6n-F0fr42UzarpsEGiPewUEs', 'Episodio 46', 'La sombra cautelosa'],
	['https://mega.nz/embed/xzsCgCbA#jjTEsOF1YuV3dIAPhz40VYIMoAyRKDGucR8mkpyaTPY', 'Episodio 47', 'Mensajero de la oscuridad'],
	['https://mega.nz/embed/Iu82RJAZ#m0drEEf6EVidLYNPeoWkGpSzdKuUw5vrP-VdyB88LyE', 'Episodio 48', 'Un juramento hecho bajo tierra'],
	['https://mega.nz/embed/A6kxFKYK#8iiq-3GYOrL8KPJ81vvkYvEAc8VPWm3rcpBB5awd23Y', 'Episodio 49', 'El amor de un padre y un hijo'],
	['https://mega.nz/embed/xi1zBKwT#yRIQGRTyhD0L-2x1ft12rzAuQQMv74Nh2UHi7QFwVXE', 'Episodio 50', 'Agitación en Central'],
    ['https://mega.nz/embed/0r932CoR#h0hapOq_gGk2bnK3UNaq8K5BaeJh1larQjL-aZhJE8o', 'Episodio 51', 'Ejército inmortal'],
    ['https://mega.nz/embed/x69GhDaT#l5Q1LyH_xPsbFfjh_PPl1zmVqSUIh3gdngHousCmrtE', 'Episodio 52', 'El poder de todos'],
    ['https://mega.nz/embed/oytjxKQL#8OrUMhR3pqXfWokg2rpRKkncIaqkjFek3cYsAnJlAHg', 'Episodio 53', 'Las llamas de la venganza'],
	['https://mega.nz/embed/hjNGwCLC#8JahnGsXMyrxX-2XeP-9qRyo4IHeSvGMqPpuPhFH01U', 'Episodio 54', 'Detrás de las llamas'],
	['https://mega.nz/embed/Mn0h1R7a#5V8s2v0Tdr5YVAvx1SYUneUspLx_m5AQxFDc0RNxogo', 'Episodio 55', 'La manera de vivir de los adultos'],
	['https://mega.nz/embed/d2lgwb5B#ViF17uxjlINCpsTQvZQjeTKyWrPECnuJeRCSg0SxD9c', 'Episodio 56', 'El regreso del Führer'],
	['https://mega.nz/embed/4ytCCD4D#Uo4QgPGIYObbg2HIrNSqQKA8A8ZkGSlUxQY3Nnpj70E', 'Episodio 57', 'Descanso Eterno'],
	['https://mega.nz/embed/NrU3GQDS#EMLQMgLsyN2gzyTxid6a10BGh-WmXdvHYFDTiDPMs_o', 'Episodio 58', 'Sacrificios humanos'],
    ['https://mega.nz/embed/wmUWTRSL#DZkV1kRCPIz-6CM4io-E_y5CZxL6HtM0ni5rfEHx734', 'Episodio 59', 'Luz perdida'],
    ['https://mega.nz/embed/FyVQRT7J#E4AEBv6qcalJfErujrXmJJ3yZlhhoCmQH9rEwcnlQj8', 'Episodio 60', 'El ojo del cielo, la puerta de la Tierra'],
    ['https://mega.nz/embed/oyt0GbZB#8FYWq0EfiMxdmGd3FdV1YulJ5UlI2d4eKf0MJX0wwKg', 'Episodio 61', 'Aquel que se tragó a Dios'],
	['https://mega.nz/embed/4zcXTJhR#aB4omiM2SeKP02infJdHIYKRLkxUiG5JPG2AW-ujKhc', 'Episodio 62', 'Contraataque violento'],
	['https://mega.nz/embed/VjFAzLIY#vKUy8kns8D1PnvCgGoY2Aw4AMFHXIQR3B7RaJSPtc3E', 'Episodio 63', 'El otro lado de la puerta'],
	['https://mega.nz/embed/g290wJQb#wLycBb0gNuRkCtIt0wz-rEduTZPpN2mWNvbYnQNSwrk', 'Episodio 64', 'El final del viaje']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Fullmetal/Portada-Tmp1-Cap${index + 1}-Fullmetal.jpg`,
    'iframe'
]);

const drstoneSeason1Episodes = [
    ['https://mega.nz/embed/ZbM0wa6R#JmALidGss83MugbbgvN9MZl8fxV4bvtYIGflo9lqQeM', 'Episodio 1', 'Mundo de piedra'],
    ['https://mega.nz/embed/IbExVJhT#PTOwHO5ECk_xQJZpS0Cg9-qN7nmyupoC_QaTnUubqZs', 'Episodio 2', 'Rey del mundo de piedra'],
    ['https://mega.nz/embed/ECdlgJAR#9x8sV9Teg2kgYX3Vhg9krKL2uV4sCKTb64baGfdCSrY', 'Episodio 3', 'Armas de la ciencia'],
	['https://mega.nz/embed/pTFTGaQL#8ywE-iFVnZDpntIDxheqMxeHZlUuh5SzrDlkxocXKYA', 'Episodio 4', 'Dispara la señal de humo'],
	['https://mega.nz/embed/gD0SlD6K#6bpyw_U_R7rYLisB5NMaPdqSi-XDswNrjNiNb8ysJN8', 'Episodio 5', 'El principio del mundo de piedra'],
	['https://mega.nz/embed/JaFz3SwI#raQYRCOUcTYXXPJdf-Z35xU69F6uC_aCg4x0b6JfIGY', 'Episodio 6', 'Dos países del mundo de piedra'],
	['https://mega.nz/embed/wKl3HbYJ#zeJXWmC-MqmtUNhqcol2TMMQbsHEy3IWfSGjw7JjN-s', 'Episodio 7', 'El paradero de dos millones de años'],
	['https://mega.nz/embed/kXMFgbAD#oF9IbzPc4ADM0QMflG2Jav9m2Er2M7MUC6TYeLeuhMk', 'Episodio 8', 'Camino de piedra'],
    ['https://mega.nz/embed/1uMQHbhB#MLNvlYn1w2bYp-uLNcQBOXejimmghbEpqxt1gSTag4Q', 'Episodio 9', 'Que se haga la luz de la ciencia'],
    ['https://mega.nz/embed/RS9QxLYA#WqTYuuoiV11egjDxO-VFjHichRPRb7WX7f5DnJ_fH4k', 'Episodio 10', 'Una tenue alianza'],
    ['https://mega.nz/embed/0S0TVSZK#sJYrbGLWw8nrv43seRlBnJ7HPsaMB689nUJFvOJJMfo', 'Episodio 11', 'Mundo claro'],
	['https://mega.nz/embed/BeknSbiK#0Iv_vcl6z5bkpCJJy4QSs2g8QHipYWYOYFkxUspvINU', 'Episodio 12', 'Compañeros espalda con espalda'],
	['https://mega.nz/embed/xTVy0BSL#2Fjb_sBI3vDP_yPbWAagbZVXlPTmqvEvOXQsXo9k_4o', 'Episodio 13', 'Guerrero enmascarado'],
	['https://mega.nz/embed/dXNlGYzT#t1J3ivzHJLAX86iIvMcjtwzaRwa3AYeZ5_5IJUrWnmo', 'Episodio 14', 'Amo de la llama'],
	['https://mega.nz/embed/lf0TzDAR#jAO7gYwBOAFZCBseD1mOrVMwJLK6DCKgVr32ZjYrvaU', 'Episodio 15', 'La culminación de dos millones de años'],
	['https://mega.nz/embed/NXNwBKYR#p0FP3viMeMC5TxpKBVosNO6EM-dIgY4nJkQ_mzUpTqU', 'Episodio 16', 'Una historia para la eternidad'],
	['https://mega.nz/embed/oK8lWDiL#XYK-d4OWZw8OveVdIUxLM956YOvpblcgeNKNk8rq25Y', 'Episodio 17', 'Cien noches y mil cielos'],
	['https://mega.nz/embed/wS0XCJrB#FribpMbtrCjEcE50nACmyjfN6bJ8K9FHdCtQIXaFVsU', 'Episodio 18', 'Guerra de piedra'],
	['https://mega.nz/embed/wPcEjThY#1J1PhgEDN99Eqt0QXCzS32Iuet4nqVbskA3L9CGiCMY', 'Episodio 19', 'A la modernidad'],
	['https://mega.nz/embed/UXczHY5B#ujYSmPMSBjiG0ZHXgblI2d8dO686B5iIY1SqTeabY_Y', 'Episodio 20', 'La era de la energía'],
	['https://mega.nz/embed/4bcwDCKZ#CNqAjpuZWIN6hrC7AJGCXz8qaImLoOd77QTbKAiJxKQ', 'Episodio 21', 'Club de manualidades pesadas'],
	['https://mega.nz/embed/1C1QxIqB#Tx7a4JVyGf9OVWxjpT9rlthtvhuE2wXmLsHOpOqyg5g', 'Episodio 22', 'El tesoro'],
	['https://mega.nz/embed/hOtmESKA#8xprQSwmNLRfv6Ja3UxVUmQ6PIp0OCGOCKy7jcpHknk', 'Episodio 23', 'Ola de ciencia'],
	['https://mega.nz/embed/RX0yTAZT#8BLkCNSUi5efKgASADc2jpSH0it7IiXbKI3oDaKGras', 'Episodio 24', 'Oído a distancias infinitas']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DrStone/Portada-Tmp1-Cap${index + 1}-DrStone.jpg`,
    'iframe'
]);

const drstoneSeason2Episodes = [
    ['https://mega.nz/embed/kilGAbhL#H27UkYlfc8uaFuyYjSz8OhiHNb2Ps-Bq6BP1d6UbTFM', 'Episodio 1', 'Comienza la Stone Wars'],
    ['https://mega.nz/embed/catl2byQ#-LNRij9tl_nNTowSeEfpMKDwPQW3IJDJkb7iMe_8rfU', 'Episodio 2', 'Línea directa'],
    ['https://mega.nz/embed/AeMhTZCQ#XtzTaBKrRw7C2sdzPXpBwwQvFcNtMocdA6wxhfXCUVE', 'Episodio 3', 'Los muertos llaman'],
	['https://mega.nz/embed/ci8E2ABD#wA7kQUBxK6O5gzay0aSqYSq2HO0ZaIPlpTTHd-9v62U', 'Episodio 4', 'Marcha de todas las unidades'],
	['https://mega.nz/embed/gmVyHRxR#Fnoq0Leq8CCfMlQZzkRO4guMAUAikywR9HyP_zUqWxU', 'Episodio 5', 'Gorila de vapor'],
	['https://mega.nz/embed/07VlxLRT#aSGtfCMfmqDRqag2Ippft8US9DFyLTanioANUP2SUfY', 'Episodio 6', 'Escapar de prisión'],
	['https://mega.nz/embed/N78EiaQT#Qla_UC7La_JadllFG0-muVmGJ95vDmX0xz-dUp6LrKE', 'Episodio 7', 'Misión secreta'],
	['https://mega.nz/embed/oWkBkDCQ#LkLzqCtX0Fpp_vUOLP8Wp2Vy2NSIF5Nb8btlO9s28vY/AuthToken/kBkDCQ/LkLzqCtX0Fpp_vUOLP8Wp2Vy2NSIF5Nb8btlO9s28vY/-11', 'Episodio 8', 'Batalla final'],
    ['https://mega.nz/embed/wLV1zSaR#N9Gy8_tg3vV7CdMF8MQrdiQaY6Koe0xAuGdKbTIt1vU', 'Episodio 9', 'El que destruye, el que salva'],
    ['https://mega.nz/embed/oHcnjIwS#w7GLr-F0RNCWi9wK0BIp4g9dlqDDlXLkZYclmIdmgKc', 'Episodio 10', 'El dúo más fuerte de la humanidad'],
    ['https://mega.nz/embed/xX0WEQgA#1y8EIhw58kYiFbadI1FPGBNz7qRs7q2ol6vADmH028I', 'Episodio 11', 'Prólogo de Dr. Stone']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DrStone/Portada-Tmp2-Cap${index + 1}-DrStone.jpg`,
    'iframe'
]);

const drstoneMovie1Episodes = [
    ['https://mega.nz/embed/QC8UzaqC#dBZcHBRPDl_KuTkh_rfK8ddA-xgCXe0xIEAOTd9hqyg', 'Episodio 1', 'Dr.STONE Special Episode-RYUSUI']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DrStone/Portada-Movie1-Cap${index + 1}-DrStone.jpg`,
    'iframe'
]);

const drstoneSeason3Episodes = [
    ['https://mega.nz/embed/OmpElC4b#g4ullSG1dJ68sWVOVSxMOQAcroz6RrUCTtYIUHSnU4E', 'Episodio 1', 'Un nuevo mapamundi'],
    ['https://mega.nz/embed/aqQhnYxY#oULegxjJjsw5p-uitZE0Jh68UMImDBvbEPOVIYciAf4', 'Episodio 2', 'Lo quiero = Virtud'],
    ['https://mega.nz/embed/6nZH0KoB#L7H4sQDXxqMZkFB3ngkbr84QbMrni2gWFWDD6pVqk0A', 'Episodio 3', 'Primer contacto'],
	['https://mega.nz/embed/LmQkXDSQ#xPzgr4awCjQxcTtBEBNlfQipd4pT8QTeh1oQgs2EjSg', 'Episodio 4', 'Los ojos de la ciencia'],
	['https://mega.nz/embed/CqRBHZrR#xHWH8HSkfviyATdAOhjA606y4zb1IUDUqwBtx1oxEd4', 'Episodio 5', 'El barco científico Perseo'],
	['https://mega.nz/embed/qywhBDqB#oroDqjtIwzNyk_F0wFZcmUruEX9YjH1fiIh_42_u96U', 'Episodio 6', 'Cofre del tesoro'],
	['https://mega.nz/embed/z74HHIob#xoWoRJZKAC53ytZ1JESIs4dbE4aUHrZjUoLctG_g-gs', 'Episodio 7', 'La luz de la esperanza y la desesperación'],
	['https://mega.nz/embed/inJzAKCQ#OK_Tg_wRHhCoxyoXOGpYVbnPGzecN4YcmmHPQmBHrIg', 'Episodio 8', 'El as está en el barco científico'],
    ['https://mega.nz/embed/r3ACBQTb#RbwzarUyLrppGQtsfy8nUKL9dvTspS8AQ1ZCwe_WnqU', 'Episodio 9', 'Ciencia hermosa'],
    ['https://mega.nz/embed/3qI2lbRR#Mp9_EidFbEesoLHhbGEv5esiXlVfrhHb7jbQifpSgGg', 'Episodio 10', 'Guerras científicas'],
    ['https://mega.nz/embed/vvJ3yQbD#V2rSL3flb16L4FmnS92Gy0dVO0wnsiDT0vUm_ZCWPUM', 'Episodio 11', 'Haremos un milagro'],
	['https://mega.nz/embed/K2Y2wCZa#h-zdgDcYgfJ_kHgj9ohzv74kEtBPUaiai6hyjpR9hKs', 'Episodio 12', 'El reino científico contraataca'],
	['https://mega.nz/embed/CywGEbpZ#e-wMmUgNGFdiOTNKfjjnbx45-BPZGN8QgNSAbIpYpKM', 'Episodio 13', 'El verdadero rostro de Medusa'],
	['https://mega.nz/embed/bvBwHaiQ#dxbU-wZTWlnsuj8-gcTBICIv7B57PFE5iAGxPuBqMoc', 'Episodio 14', 'Maniobras intelectuales'],
	['https://mega.nz/embed/HjhExZpA#9Z150UGthtt9ZYEdFZHzgLquslv9mzh-R9fHTpNCjZg', 'Episodio 15', 'Batalla decisiva tridimensional'],
	['https://mega.nz/embed/3vRHmbaK#PdG9g195ZmNe0HsTuLdmb2VsMsE7hDTRPeckMGw7CkI', 'Episodio 16', 'Refriega por todo el territorio'],
	['https://mega.nz/embed/SiZhBTJZ#VqyLGSAgoFrFafS3fh3xNUWrEm6AYL-VKYILby3PscE', 'Episodio 17', 'Joker'],
	['https://mega.nz/embed/2vhSELbZ#GNxFQ2ko8awZMak2IjrAYAYjCQKMGgXjkS8KOLC78es', 'Episodio 18', 'El resplandor de la ruina'],
	['https://mega.nz/embed/n7gl0JrI#NkTa7ennjdm5My1q8hXseNWmwXo6GN7SIZNrxkAySdY', 'Episodio 19', 'The last man standing'],
	['https://mega.nz/embed/OnBn1bAQ#bFAglUKhX2jw9_d2bG9euiJ1bMU0omVTTkr-zPwLmnE', 'Episodio 20', 'Primer sueño'],
	['https://mega.nz/embed/OiBGEB5K#ceOBrtjTD7MEsfe4G88PXPflB55DG6iuPuxpaoceT58', 'Episodio 21', 'La isla del tesoro'],
	['https://mega.nz/embed/HjZ0XQZI#0cORNPKDIf9fC_ugtupg4OM1zxxClal-raqgMJ7d9Kw', 'Episodio 22', 'Más allá del nuevo mundo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DrStone/Portada-Tmp3-Cap${index + 1}-DrStone.jpg`,
    'iframe'
]);

const drstoneSeason4Episodes = [
    ['https://mega.nz/embed/6OQ2HJDY#WemNSb1lF5COJ77_ul4r-jt_O3dTy2pjZfwLe9UD0Sg', 'Episodio 1', 'Ryusui contra Senku'],
    ['https://mega.nz/embed/yexj1aoJ#SLl9ubMp_7Ml6ZKeVfRApef8MSsPK0ClVzBK2lnb4tw', 'Episodio 2', 'Science Journey'],
    ['https://mega.nz/embed/ueJVgLbJ#iSwPIMXG48rW_EU3S9WLTmbYPGaFsyzKOz0BcsMw0GU', 'Episodio 3', 'Trampa de luz en la oscuridad'],
	['https://mega.nz/embed/uPpATSgR#XrwkRS83276VmuyA84UtihjY2R9wDZwpadeKduWT1JM', 'Episodio 4', 'Dr.X'],
	['https://mega.nz/embed/DX5HnL4L#Z7q2K342n_IFAarwRk0SD3Rhjkajgt5DpUoaVmbL4vs', 'Episodio 5', 'Doctor VS. Doctor'],
	['https://mega.nz/embed/3DwBXYyS#Y2avtphO_kSJ3SQngDSMMpfCMWLu_DWNEpND5Fjf1p8', 'Episodio 6', 'Science is elegant'],
	['https://mega.nz/embed/LHAyEKgD#cF5yuEuPtvV4EHtF7Xn4Ht3HosclDzYJZteu2n97XTo', 'Episodio 7', 'Dos científicos'],
	['https://mega.nz/embed/joxGDKLI#OptBDVGdoUJnuyCZ8WlDSAREDiHqqW4UrUJDKJX8OjM', 'Episodio 8', 'Lock on'],
    ['https://mega.nz/embed/EiZgUDLL#BfYis4kwTkg__cNaH6Z0BzQuJsqylre108YTxjqZl9M', 'Episodio 9', 'La luz de la ciencia'],
    ['https://mega.nz/embed/WgQQUSQa#LXeebp4H26ohL8sPVxyAGLojnFmQIH61ogbxc0Yfch0', 'Episodio 10', 'Un camino de tierra'],
    ['https://mega.nz/embed/q4p2hA5L#B3DKd19jcb22p-e8T9NDN4_xFLsN6E0EHLsaYYcSM4o', 'Episodio 11', 'Quien conoce y quien hace las reglas'],
	['https://mega.nz/embed/2sgXhTSb#aH1ZwDZW01NSdYKF_RkCdKcGGojnx0NsnKHMyWt_t9k', 'Episodio 12', 'Reencuentro'],
	['https://mega.nz/embed/rw5S3LKZ#Enzc03inlEVbfrRiFRDK3OSdpsegSDRQAHGUL70SDRs', 'Episodio 13', 'Mirando la misma luna'],
	['https://mega.nz/embed/6gRAAQCC#WriHXh0EkU7hqcNd3ilFpOerUQTUKL_z-el6quoRCu8', 'Episodio 14', 'Carrera terrestre'],
	['https://mega.nz/embed/u4IlBZaT#6ttfc-wBo5u_h-9Xi3PZt4CGbLTo-OHk01IFWK2tCc8', 'Episodio 15', 'Zafarse de un asedio'],
	['https://mega.nz/embed/iwBlBT6a#sJx3UeAZuFxX5Rom5DxuIG568WetMyuEtQXeORGT24Q', 'Episodio 16', 'Medusa Mechanism'],
	['https://mega.nz/embed/H9pDgQbL#XZeC8xs2Vyh1uM-Zjx-UAe-I19qiIkij56nCDn_Qvok', 'Episodio 17', 'Repulsivo pero hermoso'],
	['https://mega.nz/embed/GhhFEQiZ#BH1mFRVggN9xKiMSb_LSjweqpugKJ6DKILRgOt51B9I', 'Episodio 18', 'Diamond Heart'],
	['https://mega.nz/embed/ePxFDb6I#IVdx0UWQnXYEu7qF-QaRwkxwRcWVGgY-447o-mqJGaQ', 'Episodio 19', 'Stone Sanctuary'],
	['https://mega.nz/embed/7g5WAAjC#yKvCrOBATBtziUQInR4o-XqaePUT7EGMTaHfZ3NriiE', 'Episodio 20', 'Lo que una vez intenté destruir'],
	['https://mega.nz/embed/2xpRySIC#NzecarA9mYBP1x6n77L8dvTEnSI82IdVXqAkxnyqwZo', 'Episodio 21', 'Our Dr. Stone'],
	['https://mega.nz/embed/OwRGGSIZ#G0RwOtmivDb5RMGvAANZwLVjHnpvMOBc4cCYX7Lfln4', 'Episodio 22', 'Hasta que volvamos a vernos'],
	['https://mega.nz/embed/K4Ax0S5C#O-fpQei2zxG2aV6luy643DBAgtKZqOsSnOsKyDbCPQg', 'Episodio 23', 'Una científica en soledad'],
	['https://mega.nz/embed/6hBl0CKZ#0FmJ7HzuiIkZIQBddFIm-y0dxt8X1i5hEycF4LQib1g', 'Episodio 24', 'Whole New World'],
	['https://mega.nz/embed/lutm3RhA#XfOeFIsEPOyVoKOKvF9xM5u8BtCPIzjSXXFgCC94yDQ', 'Episodio 25', 'Future Engine'],
    ['https://mega.nz/embed/a1gXSCJZ#0a2QGgZgOAJp9OT7hWWII12w8BqUgzyZssLjCHj6hkQ', 'Episodio 26', 'Fire'],
    ['https://mega.nz/embed/x6hzTbIb#dpQNbSwf84YRmu8OXwpg-aDuvg9e4ooQu3xfITekM_8', 'Episodio 27', 'El universo está hecho de números'],
    ['https://mega.nz/embed/lrBGRaBb#KlOUVbc6LUxWfqm1f6nOUZ1WOnEcrTI685-bkuYjTiQ', 'Episodio 28', 'El amanecer de los ordenadores'],
	['https://mega.nz/embed/TkJ0SZaD#PvQ4LtFMhQp_ZD2U0-Qf76J37UweHt3vX7QqgWGjUt4', 'Episodio 29', 'La verdad sobre los cohetes'],
	['https://mega.nz/embed/SbZzWKjQ#NtEv0VpyFxmB_-GRhSKUr-GnKCz8VBtWhXvpodUGz-k', 'Episodio 30', 'Stone to space'],
	['https://mega.nz/embed/BnhFwA7a#CFExM17Uz_LQNOMoORoOu-kwruUL8XgxJ1-0Pqz34Go', 'Episodio 31', 'Count down'],
	['https://mega.nz/embed/Iz42lLgb#1AAJx2GTL2IG5JwezqCcygratWlEn6keXDbFjBs8Y_U', 'Episodio 32', 'Aspirantes de la ciencia'],
	['https://mega.nz/embed/GbpyAJhQ#qMyZpnt1_N2qXg3Y51l7CGjQF6QSqu_5BnDpzSoPDi0', 'Episodio 33', 'Lo quiero todo'],
    ['https://mega.nz/embed/Z75B3LAI#d4l6IfdBqCkywnUlE1wdIF3df4jBhASaMS6NNBVnAK0', 'Episodio 34', 'Count Down'],
    ['https://mega.nz/embed/BmBixQhJ#vJ1G1V8F_LxlvcZf0orMjGH46PXhK1syt12EMjZXJLM', 'Episodio 35', 'Giant Step'],
    ['https://mega.nz/embed/NqRCGbbb#AVCJ47IW72ey-F2Ws-R90JJHvniVyj0khjBrN_KTk3A', 'Episodio 36', 'Whyman'],
    ['https://mega.nz/embed/trEggSLC#tqraDHMiXnMCbFgS0LyRNrcIk_hH8NgsJttJXE5OT6Y', 'Episodio 37', 'Lo que instiga el futuro']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DrStone/Portada-Tmp4-Cap${index + 1}-DrStone.jpg`,
    'iframe'
]);

const quintillizasSeason1Episodes = [
    ['https://mega.nz/embed/9S8BTBRK#RH2vKvLhDlSUfgV7SMIZEzNTULFUDUBDLjecuTDX_DE', 'Episodio 1', 'Las quintillizas'],
    ['https://mega.nz/embed/UGc1TZDB#LlrGxhU-l6urP-bHdBNrs_uO-CO9mf9CQVa2G9f18O0', 'Episodio 2', 'Declaración en el tejado'],
    ['https://mega.nz/embed/sOsWiBZK#zVtaH53D5QPy35PbaqDqDO3IOQODVMaPjI_vgrYmgMM', 'Episodio 3', 'Un montón de problemas'],
	['https://mega.nz/embed/celUHK7b#0VMXb5d5_tPM75ivrjrxY7gft6S-BN0biGnRHCmg7Jg', 'Episodio 4', 'Día libre'],
	['https://mega.nz/embed/AGlhCRDK#RRhKTBTQeQs7KNJGLH8Eq-qKUhRcqplq1nWPEOuCLt0', 'Episodio 5', 'Cinco partes para todas'],
	['https://mega.nz/embed/ZSlTFSzR#xk2YDjVWe5X51W6wMaHv5WO8uHd2sgw9alX78fEWQK4', 'Episodio 6', 'Lo que se ha acumulado'],
	['https://mega.nz/embed/U6t1CQiA#vLxKIoY75Z5zhmP_S38r2MKrRqTEJKGI29ob2GPY1Mg', 'Episodio 7', 'Oso, oso, mentiroso'],
	['https://mega.nz/embed/RGUQRRaL#d7e-THaxBiV36mWkLZiNr0QfvrDoJJFCMgO7b3p-cvM', 'Episodio 8', 'Fotos del comienzo'],
    ['https://mega.nz/embed/YfkFCJpT#yXFJ1KlblwxgV8sobi2y3CVWVq15TAi3gw_jtgeE-hE', 'Episodio 9', 'La leyenda del destino - Día 1'],
    ['https://mega.nz/embed/oTECWQLS#_zt-IrYPTi2GfeqIPrmTGe4OHL6ge_HuF-LSGtoV-Ac', 'Episodio 10', 'La leyenda del destino - Día 2'],
	['https://mega.nz/embed/MKN1CAaC#OKc6nP75jz0_SVfvLLrH4uq9k3ssu8LidSRHZl5N-Es', 'Episodio 11', 'La leyenda del destino - Día 3'],
	['https://mega.nz/embed/lTthCKKS#HA-TEBq-gsVl49SeisWk-7jyzNje4F03gOayklvgD_E', 'Episodio 12', 'La leyenda del destino - Día 2000']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Quintillizas/Portada-Tmp1-Cap${index + 1}-Quintillizas.jpg`,
    'iframe'
]);

const quintillizasSeason2Episodes = [
    ['https://mega.nz/embed/0FdkHAYL#ECaKu101zFDhn0UXUyOyNc_6MNoIUoO8SwAVf3h5ji0', 'Episodio 1', 'Enredos y desventuras en Kioto'],
    ['https://mega.nz/embed/dZsRBJKD#vZf-NyXpMOgwz3YXz_J1yopZeO5HDdapB9Vz8EB0Pqk', 'Episodio 2', 'Siete despedidas (Primera parte)'],
    ['https://mega.nz/embed/gINRHb5a#op9jE6i23yBwvX2kXBbW4fbN6NOlAoNH7fuJ_SGBb5U', 'Episodio 3', 'Siete despedidas (Segunda parte)'],
	['https://mega.nz/embed/5Y12QKbQ#On3d4FFkglWW40Va67pYw6uFfTSArXwDdFa17mFUtbY', 'Episodio 4', 'Siete despedidas (Tercera parte)'],
	['https://mega.nz/embed/JAtxiYSY#anBLL7G4BQCMKwWkaThp4xPRkgsV4ZzAhEMSj0E-mBU', 'Episodio 5', 'Muy buen trabajo'],
	['https://mega.nz/embed/kJoGXIpD#9twpuO6FwxfGWzejhJ90P68nOXJrzlkvNLs0npnsD2c', 'Episodio 6', 'El último examen'],
	['https://mega.nz/embed/RBVjzCDS#CD-7k0odE4AibirMz1n-HizAkdKWruXgRPw89Pli9Gs', 'Episodio 7', 'Comienza la ofensiva'],
	['https://mega.nz/embed/YBtXmB5K#BI7OYYf26Iq-Bv-JqyFdfrbYwsq7pV9TEhBw2NHLxHs', 'Episodio 8', 'Huevos revueltos'],
    ['https://mega.nz/embed/UN1jUDLA#6mkUzXY2aW7xz4saxYADL4pXhc4bCQXOLIE6uoP77tw', 'Episodio 9', 'Bienvenidos a la clase 3-1'],
    ['https://mega.nz/embed/NUl1GZBR#p-KTspwvKDlSR0JYQoKYIhHPS9gjHsr9wcwkAaXczv8', 'Episodio 10', 'Las cinco grullas devuelven el favor'],
	['https://mega.nz/embed/wYthFAhY#EL8AWh4kQuXB3vnxURiq0rXv3x0kUCWbrSL3jcYPnSA', 'Episodio 11', 'Guerra de hermanas (Primera parte)'],
	['https://mega.nz/embed/gdNBlRYb#E51nTZVXe-WeeYLu6sfoccDUN7b8UXTEjhtdAo98xiI', 'Episodio 12', 'Guerra de hermanas (Segunda parte)']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Quintillizas/Portada-Tmp2-Cap${index + 1}-Quintillizas.jpg`,
    'iframe'
]);

const quintillizasMovie1Episodes = [
    ['https://uqload.is/embed-i1mirjycxfes.html', 'Episodio 1', 'The Quintessential Quintuplets Movie']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Quintillizas/Portada-Movie1-Cap${index + 1}-Quintillizas.jpg`,
    'iframe'
]);

const cyberpunkSeason1Episodes = [
    ['https://mega.nz/embed/FedC2KKA#651SPhd_YgjS1fPtFHitXDbBuBZmJxGyxxJYX7eOAWc', 'Episodio 1', 'No quiero decepcionarte'],
    ['https://mega.nz/embed/UOkjiJ7R#GjdDUdRqrGMyY1Ye4ACNXj0LSAi4vXiahksMyeXpyuA', 'Episodio 2', 'Como un chico'],
    ['https://mega.nz/embed/sHtRmAZQ#JeNX5v8U0eXd9Y6UxBpcF45kpwPx___0rs1Ecl_LdRo', 'Episodio 3', 'Banda criminal'],
	['https://mega.nz/embed/4P8VUZKA#y8Q9nzJtpSx1nO-MeJoloCxz3wvYKpJRACRFlN2J0mo', 'Episodio 4', '¡Que suerte la tuya!'],
	['https://mega.nz/embed/4HNmyCjK#i7MswFNkzRoq1-BzYsNbXoJTYxrfb531c8h_3apobuM', 'Episodio 5', 'Todas las miradas sobre mí'],
	['https://mega.nz/embed/hD9XAIKZ#w12xfEtSVi-Zm-fAp8RnfDTDyg_A1fQy1MNg_Lw7aac', 'Episodio 6', 'Chica en llamas'],
	['https://mega.nz/embed/8f10wIjY#_WMzDSk9f28xHkGsegbq3OWfnoeoUC-GCeBr5ctnQbM', 'Episodio 7', 'Más fuerte'],
	['https://mega.nz/embed/5XdgjIja#o_98JXuP26faXwdY01e8X1acS64hX98yiFZXyMy2gt8', 'Episodio 8', 'Quédate'],
    ['https://mega.nz/embed/5LVw1C5a#_6KdCF8sXsa14nxzOH-vO4lIdY1ppD4kvbCSUPQcC3M', 'Episodio 9', 'Humanidad'],
    ['https://mega.nz/embed/VaNDyTCS#1DGI7_ChAjs7tsGsNlAjtyoVPU0ir_iemyKRV--eARY', 'Episodio 10', 'Mi luna, mi hombre']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Cyberpunk/Portada-Tmp1-Cap${index + 1}-Cyberpunk.jpg`,
    'iframe'
]);


const cyberpunkSeason2Episodes = [
    ['https://mega.nz/embed/5FJVXZZb#IsyHylWKYVDdKIN0X4e6PgHn_XrBSTSP3JduC-P-mok', 'Episodio 1', 'Última oportunidad para un baile lento'],
	['https://mega.nz/embed/BEwWia6R#U0eT0ikbsksc7QNOBRWCc50Yf2k33UnVuSH814Omocw', 'Episodio 2', 'Dame un día más'],
    ['https://mega.nz/embed/cAwnFLCB#af71Nhlxf10QMEfAXvWGUZxIx5BTJhAnF_zFMfVYtbw', 'Episodio 3', '0+2=1'],
	['https://mega.nz/embed/kNRSlT6Y#U-6YRlU9Gckhe6z3GNyMI9160azGEWyd2fE1yqGLO9M', 'Episodio 4', 'Alguien que solía conocer'],
	['https://mega.nz/embed/wM4inS6A#hf3wCMYqDx68H7AhwyXTI-TU-wS_zVJeQ__HWP7Cf5g', 'Episodio 5', 'Se desvanece (Pasa la distancia)'],
	['https://mega.nz/embed/sJ4URSJL#dLFlx7hZqwVdtSaZUdz_yZLGD0rAzG1UeqE7b84rYm4', 'Episodio 6', 'Odio a todo'],
	['https://mega.nz/embed/oV4igQQQ#eCfVKlii_u2AkSG1ODt2QYmQqBjdjAJRr-xwdgq9luQ', 'Episodio 7', 'Hacia lo más profundo contigo'],
	['https://mega.nz/embed/kdAj2awD#S-lTwSTRQDcckHaEZgk_BgiYhrIoFHS09_6yoaUva78', 'Episodio 8', 'Corazón'],
    ['https://mega.nz/embed/lIoV1AzT#uh9Zb81YsTS14CISDFZtbhPOpUYvZ7lAdoRV5kF9Rco', 'Episodio 9', 'Reservado estrictamente para ti'],
    ['https://mega.nz/embed/cNZT2ZpQ#3FuYG5SRGJHwj9Sng_GoFv8hi-DIfyZ9GAYJlW94Bp0', 'Episodio 10', 'Al final, todos se fueron a casa']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Cyberpunk/Portada-Tmp2-Cap${index + 1}-Cyberpunk.jpg`,
    'iframe'
]);

const tomodachiSeason1Episodes = [
    ['https://mega.nz/embed/XsJ2zapL#le0WAeeGjyGJSoeMjUGkMXm3Y9DWVAIbQlLg_l0AHcE', 'Episodio 1', '¿Dudas de tus amigos, Yuichi?'],
    ['https://mega.nz/embed/igJViJhZ#itI0UKXQ9kj3zHPU15zf8OoDsWFvmu6tnwCSH20Bpmw', 'Episodio 2', 'Tenemos cosas de las que hablar, ¿no?'],
    ['https://mega.nz/embed/34g2DQpD#9qLKXUAPlnL-OEK_XjwxhuKtRgVUlKL1XLFUh3Sii0Y', 'Episodio 3', 'Eso no me lo creo'],
	['https://mega.nz/embed/L4plnByJ#7nbAv12Blykfi2Dts6GemhZ3tufJVUaQqH7jbbj-PJw', 'Episodio 4', '¿En serio? Da mucha grima'],
	['https://mega.nz/embed/Xlp23LbT#BNkRW3gYgwADjo3QaN4tWlJNcwg3UMC07W1IQBPbCWQ', 'Episodio 5', 'Eres bastante tonto, Yuichi'],
	['https://mega.nz/embed/q9ZmRCCB#216EivZOg_WJI6Fpy7kanEPxqAJTiZ_-IkLey21GvsQ', 'Episodio 6', 'No puedo ser amigo de un asesino'],
	['https://mega.nz/embed/btY0nBpZ#d78u1RoIzvcNU0Dt6C8-9cXxzM-p6xK34Yo7lEn6yh4', 'Episodio 7', 'Me quedo con tu vida por valor de 20 000 000 yenes'],
	['https://mega.nz/embed/WlBHlDJY#izuBx2fZerS1A1QGGT_ppDd8VBvSHzSgBca3mAGWPhc', 'Episodio 8', 'Es un juego en el que esperas, esperas y sigues esperando'],
    ['https://mega.nz/embed/fkgHXSjQ#ttr5DnxD4yUfM5SA1-vteKeOuvQFuFpkF7ZTVvaOeIM', 'Episodio 9', 'Cambia de bando de una vez'],
    ['https://mega.nz/embed/mloRSCzT#06OgVnNJcHQgZJP5lR9KYO7SwIz_SIsHXNlY2yfU2DM', 'Episodio 10', '¡Se acabó el tercer juego!'],
  	['https://mega.nz/embed/rgBgiYaT#xjeYdoTyIIm8TQMZIQ7TuN8N3kIdpi1vvY6nHtWeo7Q', 'Episodio 11', '¿De verdad que no tienes nada que te importe?'],
    ['https://mega.nz/embed/f4gA1TKD#FPoSwn3D-b7vFHkK0PYyYO3v6TxpTgbHh5hU6lSAt7E', 'Episodio 12', 'Lo que más me importa es...']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Tomodachi/Portada-Tmp1-Cap${index + 1}-Tomodachi.jpg`,
    'iframe'
]);

const gachiakutaSeason1Episodes = [
    ['https://mega.nz/embed/1YgwXBCT#UJAC6QFdnwcVPRF52z2NMrMeriu7ubIpouEoUsEWPbc', 'Episodio 1', 'Altomundo'],
    ['https://jkanime.net/jkplayer/um?e=MjRnSlJiaVdVMjVpOVB4OUJLMURzZVZIMFJXSy82NmJhTlR6dXVMUkExRXBSWTl4a3RIYTZpampuQXdWQ1FuVmdVK0d4VGJxN2ZjNk83UEZqdzQ4K2J4YU16QlZOR2NOeVBwMDE1KzFKMUE9Ojq8YVv6xr1sQMmuUSvOrSvW&t=2e58964c6d2bdddcfb69c7f9082a6832&op=NjQ0NzE=', 'Episodio 2', 'Receptáculo'],
    ['https://jkanime.net/jkplayer/um?e=dms2WWJ0d0t5OEpZL3Bsemk0NzNJTjlRVzlnWVRoZEdCSVhob2JIbjZSaldXL2hPcGc4RUFxdkxHdzl4czNnY051VXJlWXQ3MkhGSURzOWZhVW9yTWc9PTo6yJs2._eW6wqveYnSj_ILoA--&t=3449034203344c7d4ec09dd6a990365b&op=NjU0MTA=', 'Episodio 3', 'Sotomundo'],
	['https://mega.nz/embed/7V9WjYyZ#LsDTSEAiVf00Ki93b1-ji8VHEiqMJ7xEQIOowi0CVzg', 'Episodio 4', 'El cuartel general de los limpiadores'],
	['https://mega.nz/embed/lc4R3Dyb#nM9e_ktzB27pCXLsOosluA0ks6xWIQvG-L7H6kAgKjo', 'Episodio 5', 'Saqueadores'],
	['https://jkanime.net/jkplayer/um?e=MS9WUkdkbCtmMFBYdUtORGJoazYvUDB3MGd5V1d4RVpTT1UzMWlYMUlnaEVWc0loTVhtQVNQcVNrdlE3cUszQWVQMjRjbVdSSUxxc2NkT1o5eVVia2YwQlc2dm0wVlhxTTRjUkxuaEZ3VmM9OjobO71lOXE31Ez.9NIUMjyq&t=5d0727fedbc16cbe0a41b67ffe599a65&op=NjY5MzM=', 'Episodio 6', '¡Te partiré la boca a puñetazos'],
	['https://jkanime.net/jkplayer/um?e=MlJ1eHg0NnorQ1dJSnNsT0tvZjlHdjY1WCtGVFNzZEVUTU5aMzVrOUNVRnVBdTA5MldWeGpPTyt2QTRacVZBOHRSc1dpbmkvVS8rSm0rc3ZISTBhWFZsRXdVVkhjbDVyUTRoTzViOFNUSHM9OjoTmaC.oJ.S9Hhi4XI_LvUj&t=f3cd793254cfa2bfc3fab8790826c22c&op=NjcwNTk=', 'Episodio 7', 'Conclusión'],
	['https://mega.nz/embed/X4oBVJwS#RWK1LbKZ7fsLfdDHAL2vXZcFdPDfmvj6kCknb9SNnP8', 'Episodio 8', 'Un paso al frente'],
    ['https://mega.nz/embed/9QJ0VK6S#aDh8FR3iTukSFyLVzph1-NV_0gcy2lN7HB_1ycMpn4M', 'Episodio 9', 'La ciudad de los grafitis'],
    ['https://jkanime.net/jkplayer/um?e=ZEdjWlpXMnRTWVBmajc5Z1BEd0lnRW5TU0NUVHhNTGR1TC9BejFvbUtaWjdiazFKRG4vanJWejFXaks2a1VUMUo0Q3NEbXo1K0cya1J5OTYzMm5UVVE9PTo68TYzTaEmXZXVjBw3k7C4pw--&t=76fdff5821a16472a49559782ab13b25&op=Njc1Mjk=', 'Episodio 10', 'Penta, el Dominio Prohibido Desértico'],
  	['https://mega.nz/embed/ntRTRIrK#Z-A_p_dQIKTQwSCJsrKkQPrhAD0wX22C3CK9okRT5gQ', 'Episodio 11', 'Las atenciones de Amo'],
    ['https://jkanime.net/jkplayer/um?e=eHBFUjVRZWx1ZFhuVm5yUWxKZUIwSk5YS05DbDRWZUh3UVJPVjhCcDB3eHhQYTlNb1VWV0s2VW9nSmgyNjllOUxPZ2xnRjZ3UVNMWjdTaDVnRmxTSnc9PTo6bXIbdwhAz2.P3QcIKw9wEw--&t=77fddb942f85518f04048be60a7d8f25&op=Njc3MTY=', 'Episodio 12', 'Como una maldición'],
	['https://jkanime.net/jkplayer/um?e=Q0JFMXVRYm5neTNwcUN3ZmpQY3FmazA4UGJUcC9Wd0wrbzhSQnZuU3NSZlA1Q1crb3ptempWRldFVzYxQUhYdjhFNElzN3lDZ01mMHZncXR1TUo0U2c9PTo6XUCH3zt8.LaCkipeQm42nA--&t=b2764bbe520f0f157f77439f93cb59e4&op=Njc3OTQ=', 'Episodio 13', 'Mirada mortecina'],
    ['https://jkanime.net/jkplayer/um?e=R3FWR0tNSVB3Z2puVW1tZE1NVXA3UmRDRXNmQk1aeFE1bHBVRm1jS2wyemw0ejVlUWJJMzZIWlQ1VkR6YzJ3RVE4MHBpS25wakk5VFB6dXphN3dvamc9PTo6e75Ewrq3ohlPTa7kFLYK2w--&t=1c0857099b7ae80514cd0490ded52041&op=NjgwMDc=', 'Episodio 14', 'La tormenta antes de la tormenta'],
    ['https://jkanime.net/jkplayer/um?e=QkFUMzBiYkkrWE5JZXBlMDNLelZ4MjRmSW5OZ29DbTBZYk5MUWhuUlFxTEJhdlQ5dGhvc1p6c0ZJWHg3ZkEreDFCU3NDYklvWE8rNEV0U2h6blNodkE9PTo6J6CkB6LcK.bM.NlbA7O_ww--&t=893aa6e87e56527a262c140eb93cd207&op=NjgxMTg=', 'Episodio 15', 'Oe, en serio'],
	['https://jkanime.net/jkplayer/um?e=Q3hrMUlhV1J2N1c3NEdsMm9hZ0JWdHkyR3FqVW1lQlBTcmxmSW5nN0xzNWlNRTliQUNZQ0hLRGo2eFpKYTVvR1lmemh3MVFKTWdIY3JVOHZ6dzRiUVE9PTo6yH1vNj.GWvwP.6ioRWC5pg--&t=c2f9f2f9fada724fb5d675159ae7c970&op=NjgyNDc=', 'Episodio 16', 'De genios y mediocres'],
	['https://jkanime.net/jkplayer/um?e=c3hGdWpPVXJSMHd5b1BSbElQZURVUmFlTCs1S2owbE01N0twcWRkYmVVd0p5M1dha2hEVyt6NHpVTVg4Y0xteEF5YnV4dkgxZ3h6RkRwazM1VFBJa3A2MHdvN3pUajRMTDlScGsxUU4xMG89Ojqysa7Ek0OLOHeRLYuz6gxZ&t=4055ac3f6fd08abca4f9b2422e067a7b&op=Njg0NTY=', 'Episodio 17', 'Recuerdos de un mediocre'],
	['https://mega.nz/embed/GZNShTrD#4Vr0Fx0UkpTIrqLgvf55UnCjKOSiY9CaECwguHKdaHE', 'Episodio 18', 'Anterior empleo'],
	['https://mega.nz/embed/blYn2LZD#frumPqoExTvUUvkEJ-R_VXNp9-fcpHixooEd1grtNZM', 'Episodio 19', 'La colección Custodia'],
	['https://jkanime.net/jkplayer/um?e=eXFsSWNTSHM4OFBvZWxOZmRYRGVqQzJHRnpxZUJZd1FQNFY4eDc0MXRqRkc3QkFsWEsxclQ0RzJpOThOWkF6LzM0bXR0SnIvMHMwVnBXODFBc2w3VEE9PTo6UsadvoPlHDnd6ji.Gcz4zg--&t=57834e03f505192aed84abbd677d42a1&op=Njg4ODY=', 'Episodio 20', 'Símbolo'],
    ['https://jkanime.net/jkplayer/um?e=S0VyUlFQdTlJYWU5K1hDNDNURXFKRExCUEM4bkFnQVlwenRhZEZ4Z25seWtkeWwwT09NZklJcFY1NVRKZ2lZZm5odjY1Vk81SVBESTRHMmRWcmswbEE9PTo6hw8sck9WVI3N_CYu54eQMg--&t=bd2c2fce752cb06005ef58788e42460a&op=NjkyNzU=', 'Episodio 21', 'Contra reloj'],
    ['https://jkanime.net/jkplayer/um?e=YXdyQnBhR2Z5TGdiTHgweU1uTmcybHJncm9LNngybjJxbk91K2xQdERFUWdmQlN6ekJsaHFubVlZQVFHcytsY0wycnNBTmNPZzNDQWptSEZZUmJmTFE9PTo6QfvZusmiYKAFzoyIKQULUQ--&t=8d837da3cbae7ce65a42fc03a02d6590&op=Njk3NDQ=', 'Episodio 22', 'El poder del protector'],
  	['https://jkanime.net/jkplayer/um?e=eGxwZkR6dCtqUGdWS21aT21uaFlmVldqTzh0SnJPaDZFZkJhUlNabWNWN0cydjRMM2RxVjNNcmZoOFVISVlndnl0b2FxMGxpUkJKWXQ0ckxCTzVtd0E9PTo6y10XasgsPK9b0CFNyMYcuw--&t=ec07a7d02bbe9d717ec086db2e3935f2&op=NzAxMDg=', 'Episodio 23', 'El hombre que se hará fuerte'],
    ['https://jkanime.net/jkplayer/um?e=eFgwdjh0WStLUUtsRnljNGlqVmhMM0tSYng2Q3NNZG1FeFlrUmxMUjlWWkpkOGdTWkNCUmlGajRIbVRnd1pidzEvS1VWemk5R2VwYWhlSGw0ZklLYlE9PTo6EWn_qcLIe1GgR9.LGv4mUg--&t=00fac7cbed88bb0332f3e024e26de6a6&op=NzAyNjU=', 'Episodio 24', 'Excursión']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Gachiakuta/Portada-Tmp1-Cap${index + 1}-Gachiakuta.jpg`,
    'iframe'
]);

const yourpancreasSeason1Episodes = [
    ['https://mega.nz/embed/ZuEAXIIB#1SNg0VA6mCLrRLK2Id7d4sQXd8X4w5BAwVyeNcR6ik8', 'Japonés sub', 'Kimi no Suizou wo Tabetai - 1']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/YourPancreas/Portada-Tmp1-Cap${index + 1}-YourPancreas.jpg`,
    'iframe'
]);


const bunnygirlsenpaiSeason1Episodes = [
    ['https://mega.nz/embed/VK0CgYhT#tKNihXHbIgytLsf50eWLxoxKjw03Axv8mz7Cf7ZNxmo', 'Episodio 1', 'La senpai es una conejita'],
    ['https://mega.nz/embed/kfk3wBjS#A_91jsMOInLXT0Tzns0oZksTgfX4Hgk2SerUG0rQ9KU', 'Episodio 2', 'Siempre hay problemas en la primera cita'],
    ['https://mega.nz/embed/V3VyiBCL#tjNuw770PIbaDQAnffGozT4XY8PX5SW1Y4Ov8lPdjOE', 'Episodio 3', 'Un mundo sin ti'],
	['https://mega.nz/embed/4m1AxTyR#Flgn-Ax9gmhXqhdsL3JK-XchTf8k_k6qDGm1FDWYrfE', 'Episodio 4', 'Los cerdos no tienen mañana'],
	['https://mega.nz/embed/AnVUxK6B#K-OB7DjA6X_cwQ9OFKAsEPNjsLHROLQRcpQGLrrKscY', 'Episodio 5', 'Todas mis mentiras para ti'],
	['https://mega.nz/embed/k7txQTTJ#HtLlUqbPXUE7_CA97DufZOVIqwXYKof42yITWSod3eo', 'Episodio 6', 'El mundo que elegiste'],
	['https://mega.nz/embed/xytnAS7C#vNFF7TgIPOwazAqA5b65Rm6qRcd5PpEwj-ZL4W0kRvk', 'Episodio 7', 'La paradoja de la relatividad'],
	['https://mega.nz/embed/xmc0lQ5D#-db4LscgOkc9aXWMrqWnpF5HiM8eTkoW2k2LSH4HdQk', 'Episodio 8', 'Lava la rabia bajo la lluvia'],
    ['https://mega.nz/embed/AndzBCDZ#BqGCIMRMPadCk-7WM7FNtcTnn4-LLk1oaqGHxR22gvo', 'Episodio 9', 'Hermana en crisis'],
    ['https://mega.nz/embed/97FCGbpB#l_71kmjHsbmJWxWAmNioax8nHQ25iOdQ25b7fWttrp8/AuthToken/FCGbpB/l_71kmjHsbmJWxWAmNioax8nHQ25iOdQ25b7fWttrp8/-11', 'Episodio 10', 'Complejo insoportable'],
  	['https://mega.nz/embed/kjU2zJ6S#5vr-Y7lm6O6TCL0x6b9KWQItvcQZupk0hP2XCO-0JNA', 'Episodio 11', 'La pesadilla de Kaede'],
    ['https://mega.nz/embed/gjsx0KYQ#9R_1-v0EF6twtwDfQPtzUe9BQpf6B8KsIuNjfcWO_Ck', 'Episodio 12', 'Vivir en un sueño que no termina'],
	['https://mega.nz/embed/478lWawa#BbKfOKNGpVJaKMi_75MuGQ8QOJB6dy-329g3i3IRXqs', 'Episodio 13', ' El amanecer de una noche eterna']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/BunnyGirlSenpai/Portada-Tmp1-Cap${index + 1}-BunnyGirlSenpai.jpg`,
    'iframe'
]);

const bunnygirlsenpaiSeason2Episodes = [
    ['https://mega.nz/embed/OgRS2BKA#-wEF_pI3T3pyfl2Fl462jys_vN2UGaES4lG9LYuAZnI', 'Episodio 1', 'La pubertad no termina nunca'],
    ['https://jkanime.net/jkplayer/um?e=R1BjSVJKNzBWRkIxc2ZEOUpxTjB0N2k2bTNpRXJTK3MrN3JvZG9HWlM2aWs1d1YrVFplZGpCd2JaYUNzVGhRbTZPNmFHOVJJQk9YU3FpOVRqZkZXRlB6QWRuSkNRZ05tcDZNMC9seHZqSlRiWnVzY2lpWkIxVDJQM3k5TFNJUEw6Oqr0bffEA4pw.kcT9H.wvLM-&t=a053c460dfb066676611c68ad8732c13&op=NjQ0NTc=', 'Episodio 2', '¿A qué sabe el aire?'],
    ['https://jkanime.net/jkplayer/um?e=VkJIdHErU2YwdTVNSjIwaHVGOU9iYXBBVVNJSm1UM3B4VXk3Z1lsTE9qRFdZRWxCeklpTTRrSEozRE1vSWs3Njh0cXZxOGtROTNNUkxVQmxwblZXeXdSaExRZG9TUFlTc1FJMElMb2wrR3hFSS83eEF1UDVXOWpPTVFQdGwzV2w6OpQEyL5cWC9J4YvYgkxuFns-&t=5e9fc9b1cefdfa220e1024c4ed0d9243&op=NjQ1NTk=', 'Episodio 3', 'Canción de idol'],
	['https://jkanime.net/jkplayer/um?e=K1JhZlB6Q2pERW9KeEVYZGlPdFltSnFVNkd1SDFZMitDZDN0dHc2cGFHR1ZqQWlyT3VtVGRYRzNBOVE4VGpIT2w1Wm1BU1F4K3MrdHltTzdFd2xEZTd3KzJ3ZGRUYkRIZW1VekExZ2Vock09OjowUvZ7C0l1aIRlF_MgAx_G&t=3c5db99810fd0b1d8df89cf6b190ddb0&op=NjUzNTY=', 'Episodio 4', 'Canción de cuna para una mentira'],
	['https://mega.nz/embed/TeBnXAyQ#dzikOb4B3KkDbMopJBBicDJ0-1IzawpuuWVFAO5HEFE', 'Episodio 5', 'Atrapado en la partitura'],
	['https://jkanime.net/jkplayer/um?e=eGx1UGZIbVo2cVFESDcrMVEwTDNwUWhuOFRMT3hGU2J5b0hLNGhKNW1SekpxMDBiYjVUd3M5QnhyQndQbG8ycHVoTFM3SFlTaWZpSDZHVS83MkM2cEl2K3pLcnhoZEpLaXpWUVNQLzR1bGM9OjqbWaWL5opkKOToLsM5vM_i&t=1c3843dce2683bd171a19dad307fd182&op=NjYxMTI=', 'Episodio 6', 'Escenario sin salida'],
	['https://mega.nz/embed/q4QVRaAR#eFwj8CVTGwmw3klK3TNSQi_Xd915LNa-QYXLDfE8CSQ', 'Episodio 7', 'El ruiseñor no canta en invierno'],
	['https://jkanime.net/jkplayer/um?e=aS9jTkxITW9VcmRPTTlyRzFxOTBQMW5xUEFIK3VKaHd6SHRsaTVSRTRBNGxGdnB4SEZPcWowQlBRMlI4MGZkNFloY25Yb2FXcjQ3RGlVUTVmSkZPVzcvaUgweVZ1Q3NYT3g4QjlvMVB1ZnM9Ojoa6rM4JtSJ.K3HTzoRfzEJ&t=5d4fc0627bcda19351e61982bc68d356&op=NjcwMzE=', 'Episodio 8', 'Una jaula llamada normalidad'],
    ['https://jkanime.net/jkplayer/um?e=WWNlSFp0Zm0rUkFnbDF1a3Z4YWtza2xwcGpwSFB4Yk13SEVxVm13M0s1ZEJNMlZPMVZXbWErTGkrZDg5VklaOXJpbWdMWXRLR2VEaXJtV2h4YVpTdm96OHMvUjZpOVUvRHUvQlFtK28rMjQ9OjqGgij8nSKGFyqknBG.nEWZ&t=3a44602f2cc1fad96354789dd8a1553c&op=NjcyNzE=', 'Episodio 9', 'Adiós a las alas heridas'],
    ['https://jkanime.net/jkplayer/um?e=bXk2TVFNQ2RjNnNrRGxPUUdNTkpaT1FJeXUvVjVQOHR5OHZNbEdQUXF6UTlGRmF6ZGQ3ZFExeWRyb1pGU2VkRTkyd2RtRkFLNHRsUi9NeDhTei96NkdTN1l1ZUh1RDJqTE9ibEdaamxVNm89Ojqg3HKuv5DNJAqC7EhP6ATi&t=acebc44d966d822cbb3853457b67fd03&op=NjczOTY=', 'Episodio 10', 'El primer alumno'],
  	['https://jkanime.net/jkplayer/um?e=cGV1b1ZjSnRSaSthS3RYbjJRclI4ak4xTm1nSU1qb0ZIUk9tZDhzakFydjh2VXlMNkFNK0xrWXlCNXRITEpRK0xPNXdkd0NKY1RPOTNocGR6UlRNYU01T1pVZ2RrbWpMeTBBT0RIVGdZd0RxVnJ6YnE2ZnUyajdsaE1pNjk4SSs6OgVU1JU2K9uuG3yCXHNw8dw-&t=6251a54d8c003c41e7c3288c5c278ae5&op=Njc1MDY=', 'Episodio 11', 'Lecciones sobre el mañana'],
    ['https://jkanime.net/jkplayer/um?e=bXV6VVQ4QVQ1YWdKY1JEWGM4aW9rRUwyaUpyVlJaRExYSUlKVnU5YlRFaUhLVzZHY2lGRlFjUFZLcjNheTZyTE4zVFJRQjMxRXhkK0g0UUpRRlNnTTlVNEFRR2d1SnU3eG5DRHBUa0RxNlU9OjqurBipQy5CENJXRT3FtvxF&t=725ecba44c00d95704874f926e9bdd53&op=Njc2MjI=', 'Episodio 12', 'La víspera del milagro'],
	['https://jkanime.net/jkplayer/um?e=RDFUM2gvUnhwT3dEaHBHUlp0NDBaeE5EV1ZKZjlYbDUvK1dhNlJmV2pFZ1ZZcVVTVmQzbVlzbXJDb3h4b2NrZXBtZzZTczJ2elFkRmtKTXJ3KzVCZ2xocU9WdkNXRlBSQVVDaWdtQXBwZmM9Ojo6aQk4.evtQqwiFDymhqgs&t=8e8f9c841a6a8134d3985494086a752d&op=Njc3MTA=', 'Episodio 13', 'Un deseo para Papá Noel']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/BunnyGirlSenpai/Portada-Tmp2-Cap${index + 1}-BunnyGirlSenpai.jpg`,
    'iframe'
]);

const ippoSeason1Episodes = [
    ['https://mega.nz/embed/Ve8X0IyR#rm5lB6ppnW1INPlDRo8gjflAF8DcXttWB2ijPRv-5ao', 'Episodio 1', 'El primer paso'],
    ['https://mega.nz/embed/pS9QGAxC#dR5g4t8hIVRx1dX0luVLJasGvf91zre81EwI58t70PM', 'Episodio 2', 'El primer paso'],
    ['https://mega.nz/embed/VH9xTZ4L#OjM0xfHwKF8pwQzgnhmVT-cXrZHJaBThLGvBAKIf3pw', 'Episodio 3', 'Lágrimas de alegría'],
	['https://mega.nz/embed/tD0BhRrL#ORPsPZP_EzGe5PiFMWFikbnKVYcx2NcgbVCHk9jNSbM', 'Episodio 4', 'Sombra'],
	['https://mega.nz/embed/4ClTzQSQ#uexkKPHFw6CFYM7nGi_N20dNXz9glQIsbZr2Q5uyzaA', 'Episodio 5', 'Tres meses para el debut'],
	['https://mega.nz/embed/waEVlYhY#k8rcxgb3kQ-H23rXTqYDixIA9d9_QM9EqI41zhWguDI', 'Episodio 6', 'La campana de la revancha'],
	['https://mega.nz/embed/cXlGSCoS#W6S6Od_ejf9Ta77QV3PX4pdfwc1fFCEtVC7ctXjDCkQ', 'Episodio 7', '1 cm de dinamita'],
	['https://mega.nz/embed/1TNgXIha#moU7izYnYhHLKvaMsqz1WpspzxtohndLOJmU0KSBfK8', 'Episodio 8', 'Promesa de reencuentro'],
    ['https://mega.nz/embed/pWtzSKhT#rW4IxOnQOStybNzxxjDGxDkVnoaRfhlZnDeGu20ysy4', 'Episodio 9', 'Licencia de clase C'],
    ['https://mega.nz/embed/Fb9WTDCT#hxdLKcLvdDqKrxvzC4xBIf60vCdMie0ZaVElQtKNoyk', 'Episodio 10', 'Combate de debut'],
  	['https://mega.nz/embed/tSMziTjb#vaADlnOpwC4YdnYDN4p-CB9lKvbRKbcTlc3AQPXxDd4', 'Episodio 11', 'Obsesión por la victoria'],
    ['https://mega.nz/embed/kCsHHYRK#MlxwO-A3cN0BxUMhQsyfeGxUbJuSESTjO_ZCGtH2Z94', 'Episodio 12', 'Declaración de camarada'],
	['https://mega.nz/embed/0S0X3ZCL#vV1gSQ_c6w2epNkSDe1IL7Xa2fjM13W4pqhuAjhxsBQ', 'Episodio 13', 'Torneo de novatos de Japón'],
    ['https://mega.nz/embed/ZOMHAQCa#y7tfhkwdMGvbTpeu1z_ErpC3R-5RFIYX8JHL6KJZoAw', 'Episodio 14', 'Brazos fuertes. El gancho'],
    ['https://mega.nz/embed/tSUyBDjT#Vx-ul-RKzK8GIs4t_Jjl5ZuWDgqxPRT_Rl4amPulJCA', 'Episodio 15', 'Prueba de resistencia'],
	['https://mega.nz/embed/gXdBTQaR#fcLkJzmrBTEGl2ESWFzN-4UKqxw1y84Hz_WRZgO4aTU', 'Episodio 16', 'Premonición de un combate encarnizado'],
	['https://mega.nz/embed/RLtDwDZB#8FVO7WtxfaGmmDKp2VtS3IfyGUF7khecUn5XAZTR0hg', 'Episodio 17', 'Ippo en la línea del frente'],
	['https://mega.nz/embed/0D9wzRrJ#S1AQtE-ax96rZE_57PBb6AJH3cHnU1rbQS1X-v1iduQ', 'Episodio 18', 'Choque'],
	['https://mega.nz/embed/FDtQiQaD#MxR5du2opEteoFa2MBqN3zPOnabvsDcRMFeFxEDI9AY', 'Episodio 19', 'KO técnico'],
	['https://mega.nz/embed/IfsVAaaa#ZhNYN2XOFXnZTO4nbetdc94GDFRqF6bmeJpo-aS7RN0', 'Episodio 20', 'La amenaza de la mano izquierda'],
    ['https://mega.nz/embed/tT9RgY6I#xa0lEWBR1FpWRMMH0TjjxeJIOkaBTPHljmhs2Suhf20', 'Episodio 21', 'El genio'],
    ['https://mega.nz/embed/9HEwiI7L#J7vHCa1U0jrgIFd5rwRU4ApimbeYhy_I0cXRBqoqq6g', 'Episodio 22', 'Combate a muerte'],
  	['https://mega.nz/embed/9HtBGaiJ#7p1oPHA9w6mpxlIuW5xEaVSFfmdGoC3D_IT5pK9tyJM', 'Episodio 23', 'Otra semifinal'],
    ['https://mega.nz/embed/gHtT1ZAL#oamG0EC0EEwCVKBZe6Rzh3MSTUJr9HfQxD3l-Rj4ZZ8', 'Episodio 24', 'Al lugar prometido...'],
	['https://mega.nz/embed/ELVxUZCb#htywF_Yc4uNHwHiqn7UMLL2t_ToZyfongF9SIVzKaRY', 'Episodio 25', 'Los pensamientos de cada uno'],
	['https://mega.nz/embed/Ze1nyCLY#vhBcZo4H-dfPCxAi1VgCIsFunQl9Qsj1ey6gybUPbww', 'Episodio 26', 'Lucha por la distancia'],
    ['https://mega.nz/embed/ZK8iSS5b#ZtRESbtvc8ci8iT0NNbwaAJzauD_CZbnqPdrlmCyZNI', 'Episodio 27', 'Combate a muerte en la distancia'],
    ['https://mega.nz/embed/hbdijZKR#Qr2gU65SgYFnr5r9bue76KYKyTFPlrHf9mvwjJOHonw', 'Episodio 28', 'Victoria o derrota'],
	['https://mega.nz/embed/5CsDER6J#7Vec4tpgqEgLGZPaDIPLyVnTgCqj3v_tJB6UDS2jXww', 'Episodio 29', 'El fénix de las zonas marginales'],
	['https://mega.nz/embed/AbFCQZwI#xHSGpSJlCSxpQxSLeW0-fheecAD9kRpX7-l7Z11Uh5Q', 'Episodio 30', 'Petición'],
	['https://mega.nz/embed/RTsxEIbb#TB58-58urXfUU_L97tA87oQqs-dySXgl3B5OjbfZ000', 'Episodio 31', 'La sombra del rival'],
	['https://mega.nz/embed/9H9SzKbI#wjHl-BIIBRT6S_DSbWg0yF28VFJ0gSQIOCK3Kr5DrWU', 'Episodio 32', 'Volver a empezar'],
	['https://mega.nz/embed/RTckzBaQ#SzB9pyvXIEOO4cwoRABhUoNh-5iVJm6YoMNSieikYkc', 'Episodio 33', 'El golpe maestro de la mano derecha'],
    ['https://mega.nz/embed/1fFUiRyJ#zAYC-6V8pYy7Jppz5Vg83wjfWuQmEZ6v65yOe6y-EEw', 'Episodio 34', 'Novato del año de Japón Oriental'],
    ['https://mega.nz/embed/UGtW2LoY#19ZV3CpY26GOlb9kgSJXbXah6cQX7swslqwg8nvnACE', 'Episodio 35', 'El viaje de vuelta'],
  	['https://mega.nz/embed/5GFyzLbS#rqrA4pXqpe_hRvvdJl25teKzNMOXtsy9fhHwFprRuN4', 'Episodio 36', 'La determinación de la madre'],
    ['https://mega.nz/embed/JbFSHDhQ#HSIMuuif3QO0eBVcYA3zdq39gMF0daks8gQEszhJMR0', 'Episodio 37', 'Un momento de paz'],
	['https://mega.nz/embed/sTE1hAoD#UuDlRGg5QOQu0xAzz70YclKKwe22XGxntf12iaL-ak4', 'Episodio 38', 'Dos campeones de novatos'],
    ['https://mega.nz/embed/pbdgxZLT#TMzwmhL1YhbDKgzbeexh3eSHv5Q0U3urLowz0bjCweA', 'Episodio 39', 'Desafío en tierra extranjera'],
    ['https://mega.nz/embed/5P9ngKoC#z2B7L5ZIaP_8-tzM_GN5aoz000URzdnHyiCuWWuWPBY', 'Episodio 40', 'Un gancho que supera al Dempsey Roll'],
	['https://mega.nz/embed/4C1QUIAA#SMuQHzvC_Gd9yl-v6JqAXg80LxPBMSmzDUHIMsK-Dj8', 'Episodio 41', 'El combate de Geromichi'],
	['https://mega.nz/embed/tLdUWSzZ#nMgVIPCHW6XkGQcmVtkmIAwKK9quhuXD1kqw5KE9hIg', 'Episodio 42', 'Sentimientos compartidos'],
	['https://mega.nz/embed/hOkT0YZT#Wi100-O8FUN-H108Q7BfMbhF5tiKE9oKJe6dDw4uUgw', 'Episodio 43', 'La determinación de Geromichi'],
	['https://mega.nz/embed/kGsUCYZS#GjFTxrm9HEqN9rSPfVk7Dlv5ATTW7O8liFrvgMM2YvI', 'Episodio 44', 'Orgullo de hombre'],
	['https://mega.nz/embed/sXNR3bTZ#6s-Wzd39c1Qg98Ev9rH_t6S-iLtBgNW2JOloFZG-tg8', 'Episodio 45', 'El lobo de Naniwa'],
    ['https://mega.nz/embed/EPV0FaLI#gw-FSuhoBLKqy6YhPlZ36nZ6xgz-MxhfoVH9xuU5NDw', 'Episodio 46', '¡Conviértete en un lobo!'],
    ['https://mega.nz/embed/FD91SD5L#ujHhWxWyBYcnlv01NnSbRJQ2tx4h1AKls0DLFZXI7cg', 'Episodio 47', 'Alma de luchador'],
  	['https://mega.nz/embed/xfsTlYSJ#LNpP88CMF4hhXanhuT5kIer6z7_gvRG4PMsBBLEjX6Y', 'Episodio 48', 'El lobo rojo'],
    ['https://mega.nz/embed/USNlUSYR#lk0Nz-VdA8e_-wgMWmfSwVZMe2et4rwZAbIFxj-Cl30', 'Episodio 49', 'Coraje para confiar'],
	['https://mega.nz/embed/FG8QVJpK#QMG5t4vScj_esTPzM89mD0r4wLtFPJupIXw9SE2gqcE', 'Episodio 50', 'Palabras que transmitir'],
    ['https://mega.nz/embed/Na1xCazA#tHPH9aRQExyotOz3eWBveECcELVrk25zUSYsCYOaUKM', 'Episodio 51', 'Cita'],
    ['https://mega.nz/embed/Eb8wBKgS#K1xC9diRMKiahn6xm_2SyoCze_uncXFDOVA87AtC2-Y', 'Episodio 52', 'El regreso de la estrella'],
	['https://mega.nz/embed/sGsT1IJS#9wEYlQnOve7pj20uGwgR3z4V8LdlB_0_rQFKaNYohGA', 'Episodio 53', 'Todo o nada'],
	['https://mega.nz/embed/UD9n2IwA#TShYpYL9vZnb4w-YI9rxPiZAAWk4cDS8sUwXmHLBJ00', 'Episodio 54', 'Los puños del rey'],
	['https://mega.nz/embed/JCNwEBTL#trR6nSWxeErZI7TCQ1epv2jAXC99gbr69XWkRk3oO8k', 'Episodio 55', 'El combate por el título de novatos de Japón'],
	['https://mega.nz/embed/MLlGiZxA#EnigyhUt5wUf7j_uRLM27NGtlyY42cmur3MH7xJVHqo', 'Episodio 56', 'La fuerza para mantenerse en pie'],
	['https://mega.nz/embed/Bb82ybxI#l3_Ba1OESIsP32zwzMmt9SJXPn0CE8o6A6CQMjvSv7o', 'Episodio 57', 'Decisión final'],
    ['https://mega.nz/embed/5LMHzCTK#X9iOhz58-ly1tYXdBBC94RT1XL4FPeMh0lJFjEMWY5c', 'Episodio 58', 'Corazón roto'],
    ['https://mega.nz/embed/BG0hVbjb#9pjy0Qd9WmY1bsooa8Q4IbHHDQuO-pWHAZvfz-ntNZ0', 'Episodio 59', 'Voluntad de hierro'],
  	['https://mega.nz/embed/BbFS3Dja#oxfnz-LuX0rvZx_tT-Kj4v33MH0GFEpJdZh0qVOFBq4', 'Episodio 60', 'Rival'],
    ['https://mega.nz/embed/VeUD2JJY#zAtTFJfecHtua7uR4R61X7EFTVxqaXQvsqcUIVcl030', 'Episodio 61', 'Ansiedad por el regreso'],
	['https://mega.nz/embed/pbE1ESJS#dS7tmN_RS5w6t3njbshHOjVs04H34hXgDLIsoMMLPE4', 'Episodio 62', 'El camino de regreso'],
    ['https://mega.nz/embed/Re8yQbKL#XS2d7g9piYWSorNpbbEysZPNyk_k9rtfjaZ1mqASASs', 'Episodio 63', 'Juventud ardiente'],
    ['https://mega.nz/embed/BedDVARB#pvTOFX__2q7wE4Kj-AS8vmkS74lFlxpajPgb6qkN41g', 'Episodio 64', 'Época de pasión'],
	['https://mega.nz/embed/oe1x0S6B#Tdcp6yOJ0Zv5LBbEUIxX9jV9fuzs0eKbgilnIbslnwU', 'Episodio 65', 'El campamento de entrenamiento de la familia Kamogawa'],
	['https://mega.nz/embed/Zb1UGJSL#nbQn__Kyp2pwWVqxSo4T9lbrU7jKOc6DbAItyizZTow', 'Episodio 66', 'Las lágrimas de Takamura'],
	['https://mega.nz/embed/NeNDlKqD#z1QYush48GaVmSX4t--pidfzQsuCauPZ1BsYsPr_pfs', 'Episodio 67', 'El gimnasio Kamogawa en movimiento'],
	['https://mega.nz/embed/sW0lCLpT#pbiv7GCegf7Pjv7qAL2tnaqHG2ffeZBkWZQr1pPaReo', 'Episodio 68', 'La crisis del entrenador'],
	['https://mega.nz/embed/IGcklBTS#GZxORAZRqPUf4nDHjIDFhKdaEw4DrN4gGOXtx71gews', 'Episodio 69', 'La trampa del Southpaw'],
    ['https://mega.nz/embed/kG1XHZDB#aEIWnZy8j698m8opiKvSNKh5yoMEaf1jQn8W9Cxn7Io', 'Episodio 70', 'Un joven problemático'],
    ['https://mega.nz/embed/ge9yWBYI#H4td14G9A5pAD8WfbFuuuiVKtsJSAZqHrtzJwOn6PPo', 'Episodio 71', 'Momento de luchar'],
  	['https://mega.nz/embed/tSVDGRxL#ZXWzjpmHNgQ3NXj4WUNB4fswR_BvNnOj50D5JCZL0z0', 'Episodio 72', 'Lallapallooza'],
    ['https://mega.nz/embed/xO1AxLDS#YCQbDjDRjI51XlQa54o_dlwgEHV6uKI_JVUsgTFELDw', 'Episodio 73', 'Superar el pasado'],
	['https://mega.nz/embed/dL1FhYQa#CXB1k39wTLCD6WCxpRovrx33_n2O8YjbRrbS4fw7GFk', 'Episodio 74', 'Mezcla'],
    ['https://mega.nz/embed/8PNRiAyA#gMSVENGB0PZ58DlAkM8WGVE6W2EMYJu05goJtulVji0', 'Episodio 75', 'Hacia el siguiente paso'],
    ['', 'Episodio 76', 'Los puños del boxeador']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ippo/Portada-Tmp1-Cap${index + 1}-Ippo.jpg`,
    'iframe'
]);

const ippoMovie1Episodes = [
    ['https://www.mp4upload.com/embed-jakpauhaq364.html', 'Episodio 1', 'Hajime no Ippo: Champion Road (2003)']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ippo/Portada-Movie1-Cap${index + 1}-Ippo.jpg`,
    'iframe'
]);

const ippoMovie2Episodes = [
    ['https://www.mp4upload.com/embed-qcf8c8bz0kxn.html', 'OVA 1', 'Hajime no Ippo: Mashiba vs. Kimura (2003)']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ippo/Portada-Movie2-Cap${index + 1}-Ippo.jpg`,
    'iframe'
]);

const ippoSeason2Episodes = [
    ['https://mega.nz/embed/7zgyFSID#zspZROQ9YZOVX7RtElFNZmbGiiBzs0HmOibIYLNrYtU', 'Episodio 1', 'Un nuevo paso'],
    ['https://mega.nz/embed/rv5EwCDJ#y6qRjRx4dJ7GdOxeuw7E_H5F5BNlQOM68ik_SwFGWaI', 'Episodio 2', 'Cruz sangrienta'],
    ['https://mega.nz/embed/eip0HahY#mIzsg9ltCsjw0QD5Wjx8Z9oNXVeHiJmSHwD54JH-E_o', 'Episodio 3', 'Al lugar que prometimos'],
	['https://mega.nz/embed/ezoSwCZK#peumYXn96N2wLWuoiPQ0bWNCIQL2E8RpwGRGvJnViJY', 'Episodio 4', 'A por el mundo'],
	['https://mega.nz/embed/Srx0WQIY#EqSxMp2n0QzLkRSze5UfFCAlfOjAYF3e7P8AUZvGVeE', 'Episodio 5', 'La fuerza del mundo'],
	['https://mega.nz/embed/CupATSoC#sAbOF8yrE0Lr8JdGJZ-j-YyVrFOpcjjBwRz9uuAhaSU', 'Episodio 6', 'La figura a seguir'],
	['https://mega.nz/embed/nuokFaxC#xN1tkipN2tgE_hJfxrzLKgIptykJqyximNZmQHNr_xs', 'Episodio 7', 'La llegada del diablo'],
	['https://mega.nz/embed/DzoUCYhT#0RLA0AOtXeliB9tU-8ALnja3tl0ws20O4YNt-3ZLMmM', 'Episodio 8', 'Espíritu de lucha para la derrota'],
    ['https://mega.nz/embed/bvgwgQwL#fCqOGqgcqznPxH8iwt816QzHbl6QuBYncSCoET4KXLc', 'Episodio 9', 'Calificación para aspirar'],
    ['https://mega.nz/embed/vjgUBAwb#f9puRHqyHwYdrIx-Z9eoXriBn9dBqzoFWs9p1CjSRSc', 'Episodio 10', 'Chatarra'],
  	['https://mega.nz/embed/7v4mzSDZ#k8H4rdcInC2OQoxF2M1GxyFK2ers63pgaG8nR4YQ2Y8', 'Episodio 11', 'El puño de Kamogawa'],
    ['https://mega.nz/embed/P2wAyC4B#nsfq1779Y6rKn2a6SrtGflKugH-WHKZQdGVkQLzEoHA', 'Episodio 12', 'La condición de la determinación'],
	['https://mega.nz/embed/33hmga4A#K1mNhbqZHi2-S5JrvSw3cQIhc6ijPvvmQPm_0Sg4j_g', 'Episodio 13', 'Promesa de graduación'],
    ['https://mega.nz/embed/KngmAQCZ#j52Op1a4e5TZoXdW-kwc4rfZrKJXONQJgLRjjCsQ1Tg', 'Episodio 14', 'Visión del combate'],
    ['https://mega.nz/embed/nu4U3SCD#gJ_Iadj0NLXRTFPQGqgu3dAkroeU7wXlkH6G1fBK1pE', 'Episodio 15', 'El momento del juicio'],
	['https://mega.nz/embed/Cz4GSCSB#3Zywda4CVB-agfEVbPVx07oplLAj8VHO0qzZjRMyqKw', 'Episodio 16', 'El corazón del campeón'],
	['https://mega.nz/embed/v2pSBACQ#UeXILUYKcOua5Tfe3iEDyhBfzQRlUrrnoRl21L1eM8M', 'Episodio 17', 'La coronación'],
	['https://mega.nz/embed/Cnx2XILJ#fVYs_Q77QJNIghPsq7cbfZmUXWFOgaDnffbB6I2Ig2I', 'Episodio 18', 'El rey de la contracarga'],
	['https://mega.nz/embed/Gz5wlYDD#gd6g1y15dD4XTtHE-2FMyAwxtPJw-blwA-Gx8mPrGSI', 'Episodio 19', 'El desafiante'],
	['https://mega.nz/embed/63oyEA4a#PlyYvvSrwPQVVFG_ILUQCWSrDdSqtqS2qUHsr4Z1CXU', 'Episodio 20', 'El cazador'],
    ['https://mega.nz/embed/iyhw2KSD#m8mWa7FPBHgJhZPColhyEloAV3w7cW0wxStxoGwDbzc', 'Episodio 21', 'El regreso del campeón'],
    ['https://mega.nz/embed/vz5UHaAK#V-HbR8D7MCLFVItqQdLiQNoYlyC9q5v40taefjJD-r0', 'Episodio 22', 'La técnica secreta de Shimabukuro'],
  	['https://mega.nz/embed/ynxCTQgL#H5OUyDcqeQWG-pwX46ka4NRZ4umNJWyysLOPRyQ-3QU', 'Episodio 23', 'La noche antes de la batalla'],
    ['https://mega.nz/embed/O35EBAbZ#Gftd1IZVdPS1pUSd71Y8_d9AarOQ0HEHG-hCPrCMfF8', 'Episodio 24', 'Combate a muerte en la profundidad'],
	['https://mega.nz/embed/O2w2kaaT#JQYAhQWF5e_LXK3xZH_gxZj3BqQRnEklk45QdHYR5As', 'Episodio 25', 'La fuerza que impulsa'],
    ['https://mega.nz/embed/WzxCkKRB#VZz-9DtGJo2XI9oGFMBGz2k1h1Y27K5Zxf9CkSgOBDE', 'Episodio 26', 'Hacia la cima']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ippo/Portada-Tmp2-Cap${index + 1}-Ippo.jpg`,
    'iframe'
]);

const ippoSeason3Episodes = [
    ['https://mega.nz/embed/bIYjWC6Y#X8t4kKZ6VK9XHMueHcqJ0PmlGgRQGxjMkKB_4WoQ23U', 'Episodio 1', 'El rival más fuerte'],
    ['https://mega.nz/embed/vdYXkIzJ#8i_aefHNCTRYkOTnY7XKFceYBqqPAQKz0-WGTn3Q6vE', 'Episodio 2', 'Destruyendo el Dempsey Roll'],
    ['https://mega.nz/embed/vERjhK7A#VMFb914re_neua926oLZ2h13qZ7Cis5C_Oxc4rJMPrA', 'Episodio 3', 'La batalla de las mujeres'],
	['https://mega.nz/embed/fQQzGITS#8B5BuvZNRrRdZ_BeT4fjL6kOVPpv9EpnJPW-l_EHRDQ', 'Episodio 4', 'La diosa de la victoria'],
	['https://mega.nz/embed/KMIxxaob#_0P3QEtEd3ThQBCJT_WJtqXVtOHTXg0Su71ZZiqw5Dw', 'Episodio 5', '100% farsa'],
	['https://mega.nz/embed/6cIRWS6I#EPA_k4_vKsoCRirFidpvG6tOX6q_IDeP1lUMlm95RXA', 'Episodio 6', 'La lección de la victoria'],
	['https://mega.nz/embed/qVJRCKhK#ecmaUpGA7jroaA2IHK3Wbt2aOQCe1QJ58AzHQUz5--U', 'Episodio 7', 'El queso del héroe'],
	['https://mega.nz/embed/XNZjyICA#gYF97Yx4gldxXnxJUsX54nVNggrzHZvqfu2PUqkW2DI', 'Episodio 8', 'El perro rabioso y el lobo'],
    ['https://mega.nz/embed/mNAB2QiK#wLgKYhYrXcLrDJZaOnS7XjnQltAGiSXQAJ0qIjbMCZU', 'Episodio 9', 'Un escenario despiadado'],
    ['https://mega.nz/embed/eUBlgSSK#6HU9t3atO0Dbz2PUF7nx-5Dn3Ta-z6FvWO1hD6ts8dw', 'Episodio 10', 'La cara de la determinación'],
  	['https://mega.nz/embed/2VIxQQCR#dvtBt9OGxJWUU31mhfRqdc9exj85eQs8ZQ66-BbE4no', 'Episodio 11', 'Un rival intrépido'],
    ['https://mega.nz/embed/uBJl2QhZ#HOMZbVgU_qyh0tM-RUTK_kJP0aHMBQvPAGd1t-WcSMI', 'Episodio 12', 'El Anti-Dempsey perfeccionado'],
	['https://mega.nz/embed/nFYjQCwT#Fb0Hv4dLNnEFItOQ1LrF3khmBX64QcggyCaj4gS4gBc', 'Episodio 13', 'El puño que te destruye'],
    ['https://mega.nz/embed/jcYRyCrQ#WuZiNdQp-pj3pJX9xgr1L1B8rDl0Pjk3to2-eBBnVU4', 'Episodio 14', 'Palabras de fuerza'],
    ['https://mega.nz/embed/3RYhFACZ#xWyX6W6OW34JEKC2eK2KBaohgs6J65xdLeTl_ZPnWj4', 'Episodio 15', '¡Tempestad! ¡En el bote de pesca Makunouchi!'],
	['https://mega.nz/embed/PJwRkKwR#_rQKI0t4xN35MI4iDZuhCsVf8mAUEK1kyrnTXT_8ix4', 'Episodio 16', 'Águila dorada'],
	['https://mega.nz/embed/nZBhEAaQ#pa_Om1TtSqgYr8UCE5NQajmoKPBv4WS16BOCh0A0q5M', 'Episodio 17', 'El impacto del drama'],
	['https://mega.nz/embed/zdAlUChQ#D72ag-blIUEEWA6S53Hr4kQGrKR9JKddQDlZx7d-1Qc', 'Episodio 18', 'El nuevo novato'],
	['https://mega.nz/embed/2VABACQS#PtuUAFLRfxNW-2gmebcLU4m1o30dJKLSO_VwELeLQ_E', 'Episodio 19', 'La noche antes del combate'],
	['https://mega.nz/embed/zFRlBSjL#qvJkZ3W5iyaQ96TNBWUYBMymYH96wzE07A_5AZ1pHDU', 'Episodio 20', 'La lección americana'],
    ['https://mega.nz/embed/HVYzHYqa#2658QzwEBk5-3QqwGFBRJJAsYp7WQ_pZgfx_D_NNL_U', 'Episodio 21', 'David Eagle'],
    ['https://mega.nz/embed/WVBTzIrQ#EKfvBDxP_ANdbc-MxRPEZSM2jfULnKgobVcjCXqL3EY', 'Episodio 22', 'La flor de la esperanza'],
  	['https://mega.nz/embed/7VRHQATQ#7eBiv4O7McaIPktfDVf6BjtiHxOTqsT1OcYOhSW-Yz0', 'Episodio 23', 'El coraje para vivir'],
    ['https://mega.nz/embed/KYBVSS5a#aJNmgUm-yeoQNxNq6X0lZClVlyMoUqnXPaBv2Yje99k', 'Episodio 24', 'La promesa'],
	['https://mega.nz/embed/eURVES5C#Zhja08STRGlJm-N4dEdzhWZtv3xUWwWVjA8Ph9foPG8', 'Episodio 25', 'El puño de la promesa']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Ippo/Portada-Tmp3-Cap${index + 1}-Ippo.jpg`,
    'iframe'
]);

const erasedSeason1Episodes = [
    ['https://mega.nz/embed/4qsUhTwT#KcFHmF3vpGA0wS4iKy_tdbKYaYK1iM7fljkZVpEkPjA', 'Episodio 1', 'Mi vida pasa ante mis ojos'],
    ['https://mega.nz/embed/JndwkJSI#uOqSvp2tK5-y0sIaOZ5nMZYMVqrkYuN5glnEsIh2_w8', 'Episodio 2', 'La palma de su mano'],
    ['https://mega.nz/embed/FrcyHIiZ#s_ciK2B7fjWC7efj5Q3OzdS61ghlCGVpKdZbuM6rANY', 'Episodio 3', 'Moretones'],
	['https://mega.nz/embed/lylXEZjL#AcIPuLDAudIr84zDCm3iiRyBH32T1cvFFKs6IHi62G0', 'Episodio 4', 'Resultados'],
	['https://mega.nz/embed/hzslgDqA#PtjxP4ysVcBiI_zEkUdru_w_iuqXWL5hqvca0YWhs9w', 'Episodio 5', 'Huida'],
	['https://mega.nz/embed/Jm8DDRYI#NPjN68gFewQWKqCzxFjtRtHTGNauZiKMfbpZvz3eLSw', 'Episodio 6', 'El dios de la muerte'],
	['https://mega.nz/embed/tmMT0BLZ#QSkbgvXWUVa9JkLGvfNxtj2NHobB0f6llun4uC55Ams', 'Episodio 7', 'Acciones temerarias'],
	['https://mega.nz/embed/lvMgBRTD#4sjMHNGCqvHzIgNq_jumIQv7s5T49IZqOeHNpZYtuaM', 'Episodio 8', 'Espiral'],
    ['https://mega.nz/embed/VmkUwAJD#Y0ohDsTFKUSvTqBTywbCnuG9IBv7rx-e2ZXozvAPDXo', 'Episodio 9', 'Cierre'],
    ['https://mega.nz/embed/x2lU2RIZ#d-l8e-ZlxEfNoIXvGwlNh6rPEzlNK6CZZ6bEh_fnp-c', 'Episodio 10', 'Alegría '],
  	['https://mega.nz/embed/lykxRb6S#d-SNs9itMUpf0yTxbW0MnNHSPa4MO4c1xPzxfTeeaL0', 'Episodio 11', 'Futuro'],
    ['https://mega.nz/embed/AzEGQJoA#7PjZZQxmjYQy4bNHKY-EDL0YsgbQpIHOOK9qCvUpV5o', 'Episodio 12', 'Tesoro']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Erased/Portada-Tmp1-Cap${index + 1}-Erased.jpg`,
    'iframe'
]);

const deathparadeSeason1Episodes = [
    ['https://mega.nz/embed/iuZFRIra#17sUh491364Pm0vGl1Vl04_xxxz3judfT7_2K74bFNo', 'Episodio 1', 'Siete dardos de la muerte'],
    ['https://mega.nz/embed/7rQ1QKoB#EBVgDtBGWb9NPKGn6qAquVp3a9kLI9bHZz6Wd570-WU', 'Episodio 2', 'Muerte inversa'],
    ['https://mega.nz/embed/CvRBmKaS#8zNacQjRlC2NDjjCh-U9qY3pezZgO8-gZt2mdXgx6YM', 'Episodio 3', 'Balada rodante'],
	['https://mega.nz/embed/zmQjBYgD#nNDRy9dIzFw7OjmRsGOSQKv2JJEkcPOMBBqQqYG7fDY', 'Episodio 4', 'Arcade de la muerte'],
	['https://mega.nz/embed/LiZHHSTR#VrVX_H-zfGbDd7JBVfiUKu72LQNm-VQqnC78pM_8F8s', 'Episodio 5', 'Marcha de la muerte'],
	['https://mega.nz/embed/frAhmaJD#quwtZmvbAgPXB0fDmi3NqhhmRtbZ1hW3jGvpq1yN-VI', 'Episodio 6', 'Ataque al corazón cruzado'],
	['https://mega.nz/embed/KyI1TCJT#PuEV4-PFvZe_dPcZv2gZYAYmM-OJ21e11LHxz9PUfl8', 'Episodio 7', 'Veneno del alcohol'],
	['https://mega.nz/embed/ajIzjaKT#JXxlcuYhU8YGfiGnXhIRK_lrS7yflFLPUn8GamAFfp0', 'Episodio 8', 'Reunión de la muerte'],
    ['https://mega.nz/embed/TiIDVCBT#9iaJb2_4Nt4JLnTwf15fEZ-96FVbI5Hky8HHFaX3wZ0', 'Episodio 9', 'Contador de muertes'],
    ['https://mega.nz/embed/32JBTCZC#QxBnJn97NSm7BcsrLmWKU_dMChuZnyEk-XVmaGduED0', 'Episodio 10', 'Cuenta cuentos '],
  	['https://mega.nz/embed/v7QlXIbZ#qBiHnrTr9Sb6YjO0zvXl7y_S10UxP7W6erpYLOQZr4Y', 'Episodio 11', 'Memento Mori'],
    ['https://mega.nz/embed/vnYFxaiK#mDy7jphh-fWQ8oh15sxceyQdVBuMGXWSGKoPUbdvrjs', 'Episodio 12', 'Tour Suicida']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DeathParade/Portada-Tmp1-Cap${index + 1}-DeathParade.jpg`,
    'iframe'
]);

const pingpongSeason1Episodes = [
    ['https://mega.nz/embed/mB5kAKbR#Z7ne15Hvs3Ibpr1kZVGmGOPltGmTBGCrl8TNTb4yvK4', 'Episodio 1', 'El viento obstruye el sonido'],
    ['https://mega.nz/embed/zJwWiYiJ#s8cscsuWIKOjJ5ispzBIxjeqah4t2kQc00zzLamoQxM', 'Episodio 2', 'Smile es un robot'],
    ['https://mega.nz/embed/eVhmSKZK#TMWlywVKd8h7S1nuAwBpmbG9C5l3Z5LwitzDvDRWkdk', 'Episodio 3', 'Arriesgar la vida por el tenis de mesa es repulsivo'],
	['https://mega.nz/embed/KYh0wIaZ#PVqr0i6cG8wq4XeBQE0KthmnY-eVdiTuIAnFRMkDjDw', 'Episodio 4', 'La única forma segura de evitar la derrota es no pelear'],
	['https://mega.nz/embed/eAgGwS5C#aM1Ttru3jIi3PuMHi88ggXaZ27SyOx1exU3fLR22hWU', 'Episodio 5', '¿Dónde me equivoqué?'],
	['https://mega.nz/embed/aV4w1abC#penwCFx68dIjkdzlMQWKCUqsHfVtI3E8lPMzSWj5Oxg', 'Episodio 6', '¡Si amas el tenis de mesa más que a nadie!'],
	['https://mega.nz/embed/TIhi0aTI#soPwMnxQ7hEsSGzl6fsENfDUK9_R2hc6GTtseocAyyg', 'Episodio 7', 'Sí, mi entrenador'],
	['https://mega.nz/embed/GApm1QQK#Y7UXLQgdKBEznc2-cwPRBNK0ijCoD6Wty53wnmUSMD0', 'Episodio 8', 'Ven, héroe'],
    ['https://mega.nz/embed/fIpWDS6Q#x4DckjhDq6yZ2qd9RlP1jb8UAHi_P1iNKlvkfCDO3gQ', 'Episodio 9', 'Voy a llorar'],
    ['https://mega.nz/embed/iUo2ga6b#JDC_Xk1VHQz3bsSUgS-sf1_M-oL-QsDvTb1pmhWawDo', 'Episodio 10', '¡Eres un héroe, ¿Verdad?!'],
  	['https://mega.nz/embed/6EwWXIyZ#6-HmvafWczzkNnBATkKwYV_UMv9W1apJ7iJNqhIj2ss', 'Episodio 11', 'La sangre sabe como el hierro']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/PingPong/Portada-Tmp1-Cap${index + 1}-PingPong.jpg`,
    'iframe'
]);

const saoSeason1Episodes = [
    ['https://mega.nz/embed/gfdEDKLJ#16ltZiNaANZA9ikRKcGoQh5_nQ0mniF1sLDWZLDm05U', 'Episodio 1', 'El mundo de las espadas'],
    ['https://mega.nz/embed/8WcWUJiI#aX82BtvzxXP810cXJwGnMRLb3A94u5zTJumNxdBBSl0', 'Episodio 2', 'Beater'],
    ['https://mega.nz/embed/ATNhkCja#6ecDplm1UHUWMvRDsuwWNKhPfTXno2-lsiTfh3hMmwY', 'Episodio 3', 'El reno de la nariz roja'],
	['https://mega.nz/embed/QH0zEBaB#T--zMYJ74l6VCxSkiri69OYw3diQwClFwfUIpYrx_8g', 'Episodio 4', 'El espadachín negro'],
	['https://mega.nz/embed/pW0D0S4L#FpRy0IWEGb_F-5E6L5vk56CcnS7MYCfBpvdfUSv1q0Q', 'Episodio 5', 'Incidente en la zona segura'],
	['https://mega.nz/embed/oPkDTQJA#0SziKpo_wGYSER5f5uwTumPUqWReyaFoB4bicZguKDU', 'Episodio 6', 'El fantasma de la ilusión'],
	['https://mega.nz/embed/gfFhSaRC#Ct6flKrwKpQO58DR4Aa3TooAE8yUWWi8DsHTj53T-Mk', 'Episodio 7', 'La calidez del corazón'],
	['https://mega.nz/embed/VSlinRwB#qut7Wvt150IDDHgwgk22oJh5gtYYW6N6atvI8xVvTVU', 'Episodio 8', 'La danza de las espadas blancas y negras'],
    ['https://mega.nz/embed/tXFWwSSY#INSeSfcm4IZQbPFBoeznm5Ub16E1E2eIuAkBbmitQEs', 'Episodio 9', 'El demonio de ojos azules'],
    ['https://mega.nz/embed/xTcViJrD#0IsyHyOhwDshVXgxFRfjrQkzbt2dByolA3gARu0lOro', 'Episodio 10', 'Intención asesina carmesí'],
  	['https://mega.nz/embed/wb9GVaYT#-h5qDQRnJ6g7S63VxMSHZdZ6vfEtnjyRgnqYkG2Nh3U', 'Episodio 11', 'La chica del rocío de la mañana'],
    ['https://mega.nz/embed/kf0VwJBT#1yRYzqOCkay60AElcvws7gZHzBNd-Quh2MxZq6YrpCQ', 'Episodio 12', 'El corazón de Yui'],
	['https://mega.nz/embed/RaVzkQLL#bA5fhXsXSUwa216B3GIab8ZnLrQ48EQ49Ts7_q6NrKU', 'Episodio 13', 'Al borde del abismo'],
    ['https://mega.nz/embed/0atEVTRB#IYjqpSf32DDznKkly_rEnKtIuZUuFLu_RKnXCSCvoqE', 'Episodio 14', 'El fin del mundo'],
    ['https://mega.nz/embed/Re1CTZKQ#PCuUTpgRn-LDQ3gs5x2D2XDczdYr6uzJ5oP1MYareKs', 'Episodio 15', 'Regreso al mundo real'],
	['https://mega.nz/embed/4DcAACxZ#KZIEM1mftKGMC0ded-j4SrHZzVBFFzUr3VThmDCy8Fo', 'Episodio 16', 'El mundo de las hadas'],
	['https://mega.nz/embed/Zb0wjaZK#BhDagzP_5fkMjVtopML8l47a_vCD0q5Cpcnt63PY6Lw', 'Episodio 17', 'La reina cautiva'],
	['https://mega.nz/embed/AbEF3QzQ#hDC3U06zkjVpFbSVCotJNpQYzDWMfrvLOXPe3Xq-ei4', 'Episodio 18', 'Hacia el Árbol del Mundo'],
	['https://mega.nz/embed/cONkBRIZ#kAfDwJLo9tzZ4Y1s5UHFmM83kEs4lP2Tp6MqxAhN2To', 'Episodio 19', 'El Corredor de Lugru'],
	['https://mega.nz/embed/hTEhgAxB#K8RSOBltOmqILkYRt_IwPOksnbpkNivOzUKxcScBy68', 'Episodio 20', 'El general de las llamas rojas'],
    ['https://mega.nz/embed/ADsFRD5I#_AJuooNJ4SelC6Vzzf24-qn6ZsGDp7DSLae7K2Y09BQ', 'Episodio 21', 'La verdad sobre Alfheim'],
    ['https://mega.nz/embed/cS0A3YxD#VRiCPzkP1-gNZxXbPMYZArSz6oHcUyA-LcNRC37Tkd0', 'Episodio 22', 'La gran misión'],
  	['https://mega.nz/embed/sGsSVQQA#fnIHI0xxVrPDoddWuHsrkDkeAFV4iCYvD1VdXn-3QCg', 'Episodio 23', 'Nexo'],
    ['https://mega.nz/embed/sS0mTAqY#fTMhcMJY50Tyr2DzVS_hSwU7jVRXKWLahJ3UZnvD994', 'Episodio 24', 'El héroe dorado'],
	['https://mega.nz/embed/Fe12nTRI#ngz_h2JrB9sI6qTWYQtHYQGVtTGiBwgb6GgAq23DVzk', 'Episodio 25', 'Semilla del mundo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/SAO/Portada-Tmp1-Cap${index + 1}-SAO.jpg`,
    'iframe'
]);

const saoExtra1Episodes = [
    ['https://mega.nz/embed/NacVxbSa#-ftZeGUoXDZb91EzuWzUtcekbfo9CcUEClaej9b3v2M', 'Episodio 1', 'Sword Art Offline - Extra edition']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/SAO/Portada-Extra1-Cap${index + 1}-SAO.jpg`,
    'iframe'
]);

const saoSeason2Episodes = [
    ['https://mega.nz/embed/Q3EVCJjI#-mTB5OvnqvzFzzlGhudBJ9QSqx6ZlBin0Tgjty858Ns', 'Episodio 1', 'El mundo de las armas'],
    ['https://mega.nz/embed/Iz9GXJDD#KgnsOaJq9lF6Xl7heC_DEwNUjcKz9qgsXxriIbstaY4', 'Episodio 2', 'La francotiradora de hielo'],
    ['https://mega.nz/embed/si8CSBpI#3zn2X0Cr_bLrws7D59SvPoki8DoRVL7OQ88AWz1ZqU8', 'Episodio 3', 'Recuerdos de sangre fresca'],
	['https://mega.nz/embed/479wRJAC#H3mzqWY-h-_BLM5893VuUtNKu9vh3leee0-1wTlY3J0', 'Episodio 4', 'GGO'],
	['https://mega.nz/embed/82EmxRDS#m5oUW8VSwOuIIXEtjJqBx17HSWiCTfrEvPFnSb0KadU', 'Episodio 5', 'Pistola y espada'],
	['https://mega.nz/embed/Mmk2kabQ#nTZkI4UDb3vwLuuY6vaL2q5vvdB5fBqFY9XHqv1itio', 'Episodio 6', 'Un duelo en el yermo'],
	['https://mega.nz/embed/hvNEgJrB#3po490jFbFizFmRD7yCwYHqlRRhmxw-cn_Xzj1BOZo4', 'Episodio 7', 'Recuerdos escarlata'],
	['https://mega.nz/embed/hzcyDBDA#zdb6w4SCXsp2SoTwOe5N8lkn5jzsdjrX6fIj8JwCNYY', 'Episodio 8', 'Bullet of Bullets'],
    ['https://mega.nz/embed/Vi91ABqD#34nelrtRDBnjagiJlKfjwwnar6cv9QW3Ns0kefvbeVo', 'Episodio 9', 'Death Gun'],
    ['https://mega.nz/embed/x6sHQQqa#T1PpczM9CX_BY-gIi3qJFX5JJB37Wmt1OzRCJAOZGao', 'Episodio 10', 'Perseguidor mortal'],
  	['https://mega.nz/embed/luMDTBrS#psq0notR_VPGieJ73IGIvl7iCtG8o4B_G0Djg7l6fQI', 'Episodio 11', 'El significado de la fuerza'],
    ['https://mega.nz/embed/86kVnA7I#c8YImci4ns5dYP5qY0AMVuNFhc49UwAuO2497IhvjXk', 'Episodio 12', 'El espejismo de la bala'],
	['https://mega.nz/embed/Ar8EhKzZ#bzD0TFisnxuzepmM5FkILXPDnlZ2p1YHN2eX9VMzVVQ', 'Episodio 13', 'Phantom Bullet'],
    ['https://mega.nz/embed/Y7FkHLQC#R8VtefL4C0tOCPvKDvUG4hlh97iZZoMbvTrEOaLfypw', 'Episodio 14', 'Un pequeño paso'],
    ['https://mega.nz/embed/I3FwFYoQ#GjDUUDr7wLD0WiB42_vgdkmahaUquROh5_f6dkn0d4I', 'Episodio 15', 'La reina de los lagos'],
	['https://mega.nz/embed/Y6UU1QjD#Pg7TDyi7CipyZNT1EZr-A7RAOEEk5uAZRJF84yUkcoY', 'Episodio 16', 'El rey de los gigantes'],
	['https://mega.nz/embed/53cxyZJC#Ii4FOUvf8zaa7Pu6shPug5TN0N1f9z-ak7QijmFVnFM', 'Episodio 17', 'Excalibur'],
	['https://mega.nz/embed/BuFByZzC#oSqq-X-w0NElSLut3gXT6lJkGbS_qFYOhEnT7yiUu1M', 'Episodio 18', 'El espadachín absoluto'],
	['https://mega.nz/embed/AzlFlKhC#GGnqhE9_8-lHWz8Su9rBugD1qhZVAoZnP6d-gC8EHxM', 'Episodio 19', 'El fin del viaje'],
	['https://mega.nz/embed/0y1zlDwQ#xOWezxww4D5jr4bQuXF9OQ_WXbrV_-hRIqbN89TgUjc', 'Episodio 20', 'Los Caballeros Durmientes'],
    ['https://mega.nz/embed/5isWyR5K#7-CmLeevkWgQpHGVg6bPiZuwkhOz9JrkDLzrsEcPubo', 'Episodio 21', 'El monumento a los caídos'],
    ['https://mega.nz/embed/16UATTKD#xH3gJFf9wQViZN6Qy98BR-8zuu2506MlMyOlvhutCZE', 'Episodio 22', 'El fin del viaje'],
  	['https://mega.nz/embed/07tF2TgB#O-ktkKaAWRr2T9muXD3neGq9dAHTgoK9Q4BdrOclW7s', 'Episodio 23', '• El comienzo de un sueño'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/SAO/Portada-Tmp2-Cap${index + 1}-SAO.jpg`,
    'iframe'
]);

const saoMovie1Episodes = [
    ['https://mega.nz/embed/9msR2QDJ#uS9psEb8izciYPLU6YBmFLJ-ejwqqwEFWL6YuUXNU7o', 'Episodio 1', 'Sword Art Online: Ordinal Scale']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/SAO/Portada-Movie1-Cap${index + 1}-SAO.jpg`,
    'iframe'
]);

const saoSeason3Episodes = [
    ['https://mega.nz/embed/sSFxETgI#zoDh97jpeToXnORyPWu2KNmGfIu8BFQ4_TQSw4I0jxU', 'Episodio 1', 'Inframundo / Underworld'],
    ['https://mega.nz/embed/1W0ijBSR#xFh4F0dwpYil1jOEcqGAdSPzKug3t3uJpzKT9uoDt84', 'Episodio 2', 'El árbol del demonio'],
    ['https://mega.nz/embed/hLNTGQBS#yHIqO5GNdzkY6Y1GaWGsas1mY2FC3vRxaulYvP0jNoA', 'Episodio 3', 'Sierra Fronteriza'],
	['https://mega.nz/embed/lXMwGIDa#mYII7zaxxcw-D47NnE-ikgQb13L2bKjl-o89GkJLm84', 'Episodio 4', 'Partida'],
	['https://mega.nz/embed/wTtREDxY#h5Td1vl_gdCWn9MHEhywkWl6IKoYCl3gxBrfw6Nq7jg', 'Episodio 5', 'Ocean Turtle'],
	['https://mega.nz/embed/sOl1zQ7Q#eETuFhwDWwpR6IvO9T4gMwAnPCqMQuMsJxmgf4sJ4Q0', 'Episodio 6', 'Proyecto Alicization'],
	['https://mega.nz/embed/pacCQTqL#NlOjVdpK0i1CBrmOi5VDltbdruL0koxmOwgzsFmApm4', 'Episodio 7', 'Escuela de esgrima'],
	['https://mega.nz/embed/8Cl2HbBB#IPnjPDBQ_L4seGfJy6Gc1plcO_fEG634_GttNCSOaL0', 'Episodio 8', 'El orgullo del espadachín'],
    ['https://mega.nz/embed/EG0xxYAT#pEwaF5gXVjt7mGr3qpUn67olPUU7U44vN2ePO_tel18', 'Episodio 9', 'Responsabilidades de noble'],
    ['https://mega.nz/embed/hbkjQLYL#1a-c-Sy-5eUadFyKTi_QRWq6kAc-R78ouf6GDsDNgYs', 'Episodio 10', 'Tabú grabado'],
  	['https://mega.nz/embed/8HNBgB4D#uqbvu4HBpl2g1yPmggUXcN3uaBc_BvDPBArqOaUq_yM', 'Episodio 11', 'La Catedral Central'],
    ['https://mega.nz/embed/Ff9VhZ4C#Gw7t8L1K1Rh37irNSmipE96su2_g-qNDp1e5XOG_t2o', 'Episodio 12', 'El sabio de la biblioteca'],
	['https://mega.nz/embed/NHlUySaI#R5umTnO90ahZzU1d1bK2xO6B_dZFvSHqXHFSjYzfCE8', 'Episodio 13', 'El veredicto de la Administradora'],
    ['https://mega.nz/embed/sW0ihQqa#SpD-SArQzlKfbzJEOdTzKBS3t3u4dn8m6qd6YV5_pNU', 'Episodio 14', 'El caballero carmesí'],
    ['https://mega.nz/embed/sO0GHRgQ#7raihT7OdC6rY46xwJto_7Bv2LaaTqbnIZIjz9Q8ejM', 'Episodio 15', 'El Caballero de la Integridad implacable'],
	['https://mega.nz/embed/QOEwBTBK#84Qqx9vOQC38KInf4I7McHTsX_nHKUiq3qcWx2yTyM0', 'Episodio 16', 'El Caballero del Osmanto'],
	['https://mega.nz/embed/JWNxwQaT#Y1-4LuVVlIbzqQcm_2d7fbaCUUWMe2hZU0XdSIYVIAA', 'Episodio 17', 'Tregua armada'],
	['https://mega.nz/embed/ZfMiAZ4R#9qNWBe0cnC80BDtHiPXlFHjPhGrGxyBBRpkMIdFf8EM', 'Episodio 18', 'El héroe legendario'],
	['https://mega.nz/embed/AH8xWSTD#4twsVMrZdIc6uk8wPpuxQJCcxlZXzZh2MQK3B8lB170', 'Episodio 19', 'El sello del ojo derecho'],
	['https://mega.nz/embed/0CETHJ6Y#KS1gdohPzlqPkwji-BTbUQr6GFoAcb9LMfCoADJ542k', 'Episodio 20', 'Síntesis'],
    ['https://mega.nz/embed/8CM0AQDb#KIvK3yxKOBIr_9U8-lp-JwWi8rKhMEtV9B-IiVEHtyo', 'Episodio 21', 'El Caballero de la Integridad número 32'],
    ['https://mega.nz/embed/8ekTDC6R#W-qBzB8yNh57Krl7Z6gEd8mKMtrADFzwonjK7zOYnAw', 'Episodio 22', 'El fin del titán'],
  	['https://mega.nz/embed/ADdhmRoC#E6wE-049VYjisMdoSeTPtOXGKMwSbnpk5LKPwTbuXU4', 'Episodio 23', 'Administradora'],
    ['https://mega.nz/embed/xKdihKxB#OB-_FTz0wX7aWCznBhxSpSaQLVSBITn_WM7q7H12hik', 'Episodio 24', 'Mi héroe'],
	['https://mega.nz/embed/MSd0ELTT#EnY3_avWOKoJdRLJlL5DLDCZMDLTIpukQxFwGTTHK7s', 'Episodio 25', 'En el norte profundo'],
    ['https://mega.nz/embed/Rb8mSaKJ#APVLZWrxhF2TUKLJahz-QvgilhaMy6H5PfCjoJYjFmY', 'Episodio 26', 'Ataque sorpresa'],
    ['https://mega.nz/embed/hKt3TLSa#VP0Z6UHLq4LhV3njRl8h6MQmtRZNEvUI44KHCpjfbN8', 'Episodio 27', 'La carga final'],
    ['https://mega.nz/embed/FKVjTJTZ#iQVAjhHVOxenZ5x6hOcJElLU6q1q8cSG9V4HaCH0YQU', 'Episodio 28', 'Dark Territory'],
	['https://mega.nz/embed/JLdQXQTY#oHkXshF15LxZ99TOPDkOPkGh58ZS5Q1EPIP3vZYzPqg', 'Episodio 29', 'La noche antes del combate'],
	['https://mega.nz/embed/UbskmRQb#FYXJmeO6KrOyvXe-yBaE8_EpEdTkrDHXc-W-2oRpimw', 'Episodio 30', 'Batalla de caballeros'],
	['https://mega.nz/embed/8GFgXBAR#vwo4NwtD7RFe9DGaVOBdHLtTbw52K7-C286L9M4kmA8', 'Episodio 31', 'El estigma del perdedor'],
	['https://mega.nz/embed/QC1QUQbR#xOKCTBlY0jkvNKZRF-_GvMbJ589aC9gZB9ECIN5ywSE', 'Episodio 32', 'Sangre y vida'],
	['https://mega.nz/embed/NeEDiJAZ#tmk0_q1zbVfdn5fcqc37AyI_fYSP-Fmjd8fMpV5-Ew8', 'Episodio 33', 'La Espada y el Puño'],
    ['https://mega.nz/embed/peEDyaYR#tW0UCTqgk5ZkOB8syrCixI4SiomwEEfT8ehuYAr5s54', 'Episodio 34', 'La diosa de la creación, Stacia'],
    ['https://mega.nz/embed/UCVAhJ7L#TSnszCTnjcXAnq0HHUZAJLsczHQrzxL6srO70tyEiYc', 'Episodio 35', 'Elección despiadada'],
  	['https://mega.nz/embed/0HMjka7T#pDq7DtZ0xh_68LGyBuLfgbieQjXUrc6Rzam8Xoo0Osc', 'Episodio 36', 'Un rayo de esperanza'],
    ['https://mega.nz/embed/cv0BEC6K#80H3ZCuGyJuG3eipH7m94a4BbId-IWVuqqK4VRvBPFE', 'Episodio 37', 'Guerra sin cuartel'],
	['https://mega.nz/embed/UmFjXJyB#P_UEwQi1MPcD8ASTnDX50fQQ4BKbCPj__W8A_n-6Ki8', 'Episodio 38', 'El fin de la eternidad'],
    ['https://mega.nz/embed/tjsV3Sza#sFELR2EOaOgBhF0m_BGq1mUJOqg07vjZhGeTrkepQUw', 'Episodio 39', 'Agitación'],
    ['https://mega.nz/embed/5j0gyTYI#IVGbPiWHxkd7muq5-J10Uj4G9tvDn4lqoetu1V7oSQY', 'Episodio 40', 'Código de conducta'],
	['https://mega.nz/embed/An0j3ZbI#-Mc1pm2XXhOH6WNsM25UhTGaBCI9RymcrSuAiouvi3s', 'Episodio 41', 'Pecado original'],
	['https://mega.nz/embed/YqUlFbTQ#JWV2uOOMlS9r45KHdREqcg2vp_PM-Y75FH7de9bncVc', 'Episodio 42', 'Recuerdos'],
	['https://mega.nz/embed/k3lxhbra#Ts_Qlc5ltZEnF2f4tQ3nzKz1be8vLe_JunVUa2JKZ0k', 'Episodio 43', 'Despertar'],
	['https://mega.nz/embed/c2NHEYzA#iYmfRHH2F-WXWsy_lY3VYIWkqySvau2F9kXvG_XWVXI', 'Episodio 44', 'La Espada del Cielo Nocturno'],
	['https://mega.nz/embed/UzU0FbAI#3U6Q92NbF_w71wglagWJgwlpsvETm6zY-t6m-IoFU9A', 'Episodio 45', 'Más allá del tiempo'],
    ['https://mega.nz/embed/wqsyXTxT#_5r5poKNzP7JLQnxeqEfVRqBHL0oPSu8VYDLNy3-gAs', 'Episodio 46', 'Alice'],
    ['https://mega.nz/embed/RzlyxZZa#SIcBoR_QCkK0LWDVnYWGxtEZEVp4VIbbi99xjCEG3JE', 'Episodio 47', 'Un nuevo mundo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/SAO/Portada-Tmp3-Cap${index + 1}-SAO.jpg`,
    'iframe'
]);

const burstSeason1Episodes = [
    ['https://mega.nz/embed/KGQVkAzR#S1ZFM_ShyZEbzYEk6jkNVecuxmRBvb3aGK_h0YT-BsE', 'Episodio 1', 'El infierno se acerca en silencio'],
    ['https://mega.nz/embed/uXZhjIpB#nVXL1SpdOrBmXEv2HzjB3S1Y1H6GHP_L1GQaj8gMFXs', 'Episodio 2', 'El francotirador despiadado'],
    ['https://mega.nz/embed/efAHESgb#_x_7NnK0Mjc6f8tK1w4jdwh2DdQPOg63vXRDOmc5H0c', 'Episodio 3', 'La ciudad donde las bestias aúllan'],
	['https://mega.nz/embed/3CQljCqK#Yt65NsVwjqVndyEi-iBcKYxK-SYrTgtHmZircjRdSEE', 'Episodio 4', 'Los hermanos mueren al amanecer'],
	['https://mega.nz/embed/zTBXwIgK#4JsvXi3Ds0shGEp05TEhNN8HSBBYg4zU4cw-xxn43JQ', 'Episodio 5', 'La mansión donde acecha el demonio'],
	['https://mega.nz/embed/3GIDCKaC#b2TVokfbJ6-tsFcRRwD0Mzx7IlFpoA92mx-mzAMuUcQ', 'Episodio 6', '¡Limpia este jardín con sangre!'],
	['https://mega.nz/embed/6CB3AQZY#bR5rizzqjYIqyLSA4UQR0GQeopAnz0qnIIuWqwX4tRE', 'Episodio 7', 'Cielos negros'],
	['https://mega.nz/embed/LXZXlIJQ#s1B_QyMw0kNTbweCa_V5SYJOHsPzVr-EUK-dVUsGr9c', 'Episodio 8', 'El fugitivo herido'],
    ['https://mega.nz/embed/qOZ10aRA#YNMaN2QcSIO3SS_m3JdUFvDc1ApIobXEsWeCyDUXlZM', 'Episodio 9', 'La fiesta del dragón'],
    ['https://mega.nz/embed/neAThCRJ#mGC9DRIlfPuYrsNEv0iBd8esOZz9v7RnjmpuiHjXKO8', 'Episodio 10', 'Ciberespacio inexplorado.'],
  	['https://mega.nz/embed/6DQxXCSI#3Xq7dGjQ8ZtKLTfjf6RBGbAmEOzJUt4ixEFiU9f4RKg', 'Episodio 11', 'Ángel del Este, Halcón del Oeste'],
    ['https://mega.nz/embed/TPR2VQJK#iuZJo7uFqzqyC29XEJIHcPYGXdFhO7ki_I2IzX-q5Ns', 'Episodio 12', 'Torre Tsutenkaku, bañada en lágrimas'],
	['https://mega.nz/embed/WCBD0I6Y#ZbCHEF_VQ27evj0GQ7_KU6Kdw7BhQfkzQKv3B_5peLI', 'Episodio 13', '¡Batalla Sangrienta! Los rufianes de Naniwa'],
    ['https://mega.nz/embed/aTRRTIpS#dVEH7LAnrXQmkvi7J3WW6puEmJpB0tL0tPv8kTyjC3w', 'Episodio 14', 'Niños salvajes'],
    ['https://mega.nz/embed/GHZgnIRS#p-wIJnA0tJuA-fClz6T4juFhS-j4qu7mGZmAICxM4Jo', 'Episodio 15', 'El mar, trajes de baño y un monstruo marino'],
	['https://mega.nz/embed/fOZRjaCY#NK0Ld9PPfo5nLEMvOe5sPAwGTtd54tp_TX8KhZQF29Y', 'Episodio 16', 'El Demonio Guerrero del Reino Encantado'],
	['https://mega.nz/embed/SHQWlCyQ#FZBz5uqQ-46enZeFkb-dUYY5FlJ2Dx9kepVLlHH5YLw', 'Episodio 17', 'Enfrentamiento de ángeles'],
	['https://mega.nz/embed/DTRUASzY#M3LReiZlgsYpDZzstQbPCSG38sWKIHe5Njw6r2KsoZQ', 'Episodio 18', 'El compañero de clase inmortal'],
	['https://mega.nz/embed/eGImhIAQ#6qozBOMWpWzsehYAvh2nZMwuZ0Lv9lmZO6mIJr1nwFA', 'Episodio 19', 'Plan de 24 horas'],
	['https://mega.nz/embed/vSYWWACb#TFbbqSzolYmdEPsypIM2pS4jdgqqjHMeQDR1MsVUssc', 'Episodio 20', 'Autopista masacre'],
    ['https://mega.nz/embed/jfZ01YJY#oz38r2TyHOhL7kv6MA6NNwdnqkliQTNF-8qV16WC-T4', 'Episodio 21', 'Balas en la Torre de Hierro'],
    ['https://mega.nz/embed/rLYmGKjD#r9LkOFth02Tq77hTft8h5SdbI1ieARpObAXAuSipFzM', 'Episodio 22', 'Amado diablo'],
  	['https://mega.nz/embed/7XAWHIBL#M5nhNNRk0clhiyO1MxkXyvkfUFdH24AT3O5XqPaWdaY', 'Episodio 23', 'Área de ejecución en los mares rojos'],
    ['https://mega.nz/embed/WfRygQia#wHqXfwnG9XfD9_a1H8kuAjpAfyrUxg7wFe5F4Xpbvhg', 'Episodio 24', 'Ángeles explosivos']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Burst/Portada-Tmp1-Cap${index + 1}-Burst.jpg`,
    'iframe'
]);

const fireforceSeason1Episodes = [
    ['https://mega.nz/embed/5GMiiJgA#KoCBpU_zfS2muHhJrpaCrUWhw0bHUX1jJGtfWKgpGJk', 'Episodio 1', 'Shinra Kusakabe se enlista'],
    ['https://mega.nz/embed/AT1RULpQ#lTRWxiTYimH36qV2kcNGfy1gwo1LHqmi5ont5uJl-Kw', 'Episodio 2', 'Corazón de soldado de fuego'],
    ['https://mega.nz/embed/hbkgBQiR#Sr5COXTqSz6DZcPtpDBWi4Vt4EdTrS6BV3gR4qzFJuU', 'Episodio 3', 'Juegos de novatos'],
    ['https://mega.nz/embed/MDdzHQBQ#15JOyF8C5UHt9jki7dtO0ujx6ukMjUlZ3mx4QFYse_U', 'Episodio 4', 'El héroe y la princesa'],
    ['https://mega.nz/embed/EWMTFYYI#BhXi6RmjKAj7Uej79PDxvcxdNuNqio6nh2UE2b_vn00', 'Episodio 5', 'Comienza la batalla'],
    ['https://mega.nz/embed/GmwCgZwL#EFROsWauht8fjEhgzz4tOezKu1ORXWOXqNBhCZUQogw', 'Episodio 6', 'La chispa de la promesa'],
    ['https://jkanime.net/jkplayer/um?e=REpZSUczZ2NwTXNpY0VGU0gwMmhmVDAzSmUvcXRLKzNLMncyZVB3dzBxc0h2a3RhaWtYNkNpZGY3WHlXK0JYcHE0ZEhtR3VCTHdFN1NzT2NLdDBreGc9PTo6taL5BwrqB01gu.c0v7ZS1Q--&t=03300a14fb9934cc5c613e26bdfbaab8&op=NDA3OTE=', 'Episodio 7', 'Comienza la investigación en la Primera'],
    ['https://mega.nz/embed/pOkQlLRJ#8JPYMLuQlCynUZR2m9fXPRVsNGzUH9Xn-GL8jmzTcdU', 'Episodio 8', 'Insectos infernales'],
    ['https://mega.nz/embed/lXUwgIiI#UCrtxxZvBD0bFW0t80qy8EeZJMc3Dd3GP6efhlmsxDk', 'Episodio 9', 'Malicia propagada'],
    ['https://mega.nz/embed/1Gk30SgK#vFOsJg97Ym3piUxP-a_ixzxpffio1Gf4FQsZgWI8xz8', 'Episodio 10', 'La promesa'],
    ['https://mega.nz/embed/YTURHAYR#ulfT3PmmZQ7RfLKDndAmtA30wJB07yahnWBk7Rjr6S0', 'Episodio 11', 'Formación del Escuadrón Fire Force 8'],
    ['https://mega.nz/embed/ZXVnAKqQ#tz_-6eAnkrPhJ4SLU2HBwtG6kuLg41AjOfc4k5x5bYM', 'Episodio 12', 'Tarde de hostilidades en Asakusa'],
    ['https://mega.nz/embed/QGFFSYoQ#0-qkciDLuzKO9euaotEZYVkvd4wL_oKHPHJYUNoA1Qg', 'Episodio 13', 'Se tiende la trampa'],
	['https://mega.nz/embed/xa8VkSIY#EyJ_XXizALd88CNlW-dWJa2DUOj8YAjUSoYyiTc0dJk', 'Episodio 14', 'Por quien arden las llamas'],
    ['https://mega.nz/embed/ASVDwCSJ#_HEc8IV_IXiFjZ_EW5FoKGx9U-Iq5u10Bazvjm3rc6E', 'Episodio 15', 'El sueño del herrero'],
    ['https://mega.nz/embed/kD0wGICR#-gZFz0P0MVdpMKyEv7XL_ztE910M5gkdhgAXsLwbgBw', 'Episodio 16', 'Somos familia'],
    ['https://mega.nz/embed/NOMX3RwS#JjLRel4pZKficw-4namBFrPryvduMeY5ZfkyZNoUvps', 'Episodio 17', 'Blanco, negro y gris'],
    ['https://mega.nz/embed/5O9HlLyC#l9lagzf7U5hzZk2_nrdWKl_PNEPxM2FKR9eE1M3loOg', 'Episodio 18', 'Los secretos de la piroquinesis'],
    ['https://mega.nz/embed/YOljgK7R#2exAr68cfEqjDaowN4RkXkCekUh448iTcB9TQbAhiMM', 'Episodio 19', 'Al Nether'],
    ['https://mega.nz/embed/cXsgQIgb#0sN0kQrzm1u2QMPVqaqktoM4npWzYYKHCvGLHBCTGqM', 'Episodio 20', 'Su orgullo'],
    ['https://mega.nz/embed/5DlyWIzY#MrCOv03OeLjEzh1-VCoDH9aAio4RyfaAOiMgEMqnYDc', 'Episodio 21', 'Los conectados'],
    ['https://mega.nz/embed/FG0jkJCL#Z_hmYDeZxy92PLcN3kBRS_nlswrMn7xfgVaP7HPt9sc', 'Episodio 22', 'La determinación de un hermano'],
    ['https://mega.nz/embed/Ma8j3IZR#9FBfkWVwIue6XR5JbKJWRDPJ2FheOWqqpYZc4bq-SCg', 'Episodio 23', 'Sonríe'],
    ['https://mega.nz/embed/cCUwCLbZ#N5lUKUifnoK_IjY_gtWhI2G6UbTrJKwIppq1ALJQ0Zo', 'Episodio 24', 'El pasado ardiente']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/FireForce/Portada-Tmp1-Cap${index + 1}-FireForce.jpg`,
    'iframe'
]);

const fireforceSeason2Episodes = [
    ['https://mega.nz/embed/hq8FTDyI#0sC_YuKELSC6FcoV4bSiC5h944qHPs9KBLUKUluGb6U', 'Episodio 1', 'La lucha de un soldado de fuego'],
    ['https://mega.nz/embed/py11XJIB#DCcOj3PpDeITO6yBpitCgrXaa7DCgZKEyD3GFYgR1qk', 'Episodio 2', 'Llamas de locura'],
    ['https://mega.nz/embed/p3sGkZaD#R99QlZyJKzU2i659ljIGmM2gPqWLNwZNlsWwtFsV4Ck', 'Episodio 3', 'Un nuevo punto de ignición'],
    ['https://mega.nz/embed/Z70xkR5R#qPtIoEphmKo7Tka4YR3DnxWc9FBN07tjPPmIkzlzv9c', 'Episodio 4', 'A ciegas a través del fuego'],
    ['https://mega.nz/embed/xyEX2ApQ#IJB64EyfVDFqZGktmTTho6L1VtXrN94ko0KbMQ6nhpE', 'Episodio 5', 'Corna (La señal del diablo)'],
    ['https://mega.nz/embed/5jNjCKST#0bRgOobBPmji9KZfau7bohTFiWPxRgoVaicTLCED5WQ', 'Episodio 6', 'Hora de elegir'],
    ['https://mega.nz/embed/dukFFDgI#QxfALw-8AW3JR8xZfzyEQnd2V8uHsuvyzaaOM83cmcY', 'Episodio 7', 'Camino al oasis'],
    ['https://mega.nz/embed/R7sWyKBK#zvOX2gyf3UYq4LQwS5o6w5ii_7fP7Jf3tRr-fOBWEJc', 'Episodio 8', 'Que arda la maldad'],
    ['https://mega.nz/embed/sjkyjL7Z#RDB4-vmM3tTJ9nKqdyhzyzVNSCluO7cEX9YCtLANaOk', 'Episodio 9', 'El núcleo'],
    ['https://mega.nz/embed/Fm9BmJaR#uEMkgIkQRiUWgG4ZyOVSmJ77F5sBBmlZNXbktIzzodQ', 'Episodio 10', 'La mujer de negro'],
    ['https://mega.nz/embed/Jz8jELTK#6o0_oXiynNX_6vY60t-PAeQFoDTjkTdCOar6kQpaE-M', 'Episodio 11', 'Héroe oscuro'],
    ['https://mega.nz/embed/BqNmVIxL#51FGqbyUYZIyshvsi4kvqQaIIaOCtNPW5Re6nx9RzKM', 'Episodio 12', 'Sombras creadas por la Luz Divina'],
    ['https://mega.nz/embed/ECM11DLB#RMxpUy-NL_6Ukf0uJ5LXSRTnbORbLelgxD7BwkIMXvg', 'Episodio 13', 'Un par de tuertos'], 
	['https://mega.nz/embed/R3MVERLJ#lcGFu5WTQmykzbs8p3xAEpZGdau3mFEGAOuf4z5j3DY', 'Episodio 14', 'El shinigami ceniciento'],
    ['https://mega.nz/embed/wytBhYBT#BqNfNyV7F1MHgNAe2qfimXdonn90OPbj59o26L_rORo', 'Episodio 15', 'Una pelea a tres bandas'],
    ['https://mega.nz/embed/grsGyBiA#q1LdUGfmqR63tpAiSUaGDrh3b2ndxtXsuFXCZhUs3BA', 'Episodio 16', 'Alucinante'],
    ['https://mega.nz/embed/tjNUSCDL#DA0N2emYubKYM7aousc8RC0e9WZGdHKFdVJHTehkIkE', 'Episodio 17', 'Niños, sean débiles'],
    ['https://mega.nz/embed/wr9X3BBK#VrYi73TPkRVX8hAV0z31eRy-E1V_4WmrGvOQ99WHSkU', 'Episodio 18', 'La angustia de la Mujer Santa'],
    ['https://mega.nz/embed/ZzsC3DbQ#2G4KiW09zRorAQrrjT1EAfqVG4u5J8pIVTKIP1iBxu0', 'Episodio 19', 'La familia Oze'],
    ['https://mega.nz/embed/Euc0nB4Q#AX4V9UHFwc8F8LCc4oRTexflTgzklNfLD-21Mxl6lT8', 'Episodio 20', 'Armas de destrucción'],
    ['https://mega.nz/embed/IyUX3bxI#4ahZnxjJutry8yGMDio2Qlns3-g9K9SHE66TKC47BhI', 'Episodio 21', 'Contacto enemigo'],
    ['https://mega.nz/embed/461khZ6I#HKKGndTRJyEMw0kz393Y30CO6tgaIyjDGB2_IQrBfoI', 'Episodio 22', 'Conspiración para la extinción'],
    ['https://mega.nz/embed/IudhSI5S#mvmFyIQIVdVXzLMxxc4qSgUNKQLwnJUQ-X0GVMAtrKc', 'Episodio 23', 'Gato de fuego'],
    ['https://mega.nz/embed/pitA2ZYK#g5oN_t_XbpzDjq_OFigPkYkU02HAIik9g6voGLT_TwA', 'Episodio 24', 'Signos de agitación']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Fireforce/Portada-Tmp2-Cap${index + 1}-fireforce.jpg`,
    'iframe'
]);

const chihiroSeason1Episodes = [
    ['https://mega.nz/embed/HloDWJBC#Wic3Cnkg26Bhu_60z8GWmilSkJiQKFiCp4xHIGnBcfg', 'Episodio 1', 'El viaje de Chihiro']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Chihiro/Portada-Movie1-Cap${index + 1}-Chihiro.jpg`,
    'iframe'
]);

const kurokoSeason1Episodes = [
    ['https://mega.nz/embed/USUjzDAb#fm32y4kso78NBeGGWTahlSbVnwLVGAxnNbVGYr9_ABM', 'Episodio 1', 'Yo soy Kuroko'],
    ['https://mega.nz/embed/hGV3FRzD#_DZVffmDKiBxDrGrRcaYl5xT4fK5ldIx5E1ZTu_H2uk', 'Episodio 2', 'Hablo en serio'],
    ['https://mega.nz/embed/Ve9TEQbY#zERC11ueI19Gb3plvX8QktGIEJ45M6n2FolIcMy2IrQ', 'Episodio 3', 'Es mejor si no puedo ganar'],
    ['https://mega.nz/embed/oH12jQCb#pcOZdIs5p81miP47Gs0ZCY0S_8wHS9UmB6k-FK7cklo', 'Episodio 4', 'Les encargo el Contra-Ataque'],
    ['https://mega.nz/embed/hSVCCaBT#Ihx4Fn0d98uc21lep2EBi3sKdDt_piEaGhUfEB0_SmM', 'Episodio 5', 'Tu baloncesto'],
    ['https://mega.nz/embed/FL8g2QpA#nMBQCTSqWxhHrnFHtHuUC6cMAdO9fWktSYyAKj118bM', 'Episodio 6', 'Déjame decirte dos cosas'],
    ['https://mega.nz/embed/pPMGXBpI#_wKmMkAEpP8MUPTp5ymDaPA8wlU0cj7x6Nx0G7G3_2A', 'Episodio 7', 'Verás algo asombroso'],
    ['https://mega.nz/embed/xOEmSTaA#CPQqgQxWyBeyQjyeMOtS9tmCUk1rDmEYgHAtgy8pbY8', 'Episodio 8', 'Ahora que lo pienso'],
    ['https://mega.nz/embed/ETtE1KbI#osKoX-wEcAnrbhQnthJmRtaqLKhLH4qVgMNHCrOjUPg', 'Episodio 9', 'A ganar'],
    ['https://mega.nz/embed/cXtFTBaK#gli5OSq2oD7GJsliYmRGWO3whYZdTNMJbCd_5d2Ux-c', 'Episodio 10', 'No puedo aceptar eso'],
    ['https://mega.nz/embed/wPlTzDTJ#JXUcDBFBv1Yj5Ouub3zqSDs_edz_3pxG9sbZ2m54ziw', 'Episodio 11', 'No es eso'],
    ['https://mega.nz/embed/lSkkQT6S#4zh1fBYAfurrYskHOTMFNL9Jyz_w5gpSTDmUsjPs05w', 'Episodio 12', '¿Qué es la victoria?'],
    ['https://mega.nz/embed/1XMHgLxI#xZMnrSGuvxeui5VyPC0CJ3k6ZHROpamAOp7fnF_zJDM', 'Episodio 13', 'Yo creí en ti'],
    ['https://mega.nz/embed/FH91lBjS#Bc7TVNuO7kaIxMAqK2Syrbg28NPR6U-d_7AFiEfz9Uw', 'Episodio 14', 'Te pareces a él'],
    ['https://mega.nz/embed/oTlFHYYZ#cJipZSFbHY8FCbv094r8vFJqILMdeTUWCIz1_0TL0aM', 'Episodio 15', 'No me hagas reír'],
    ['https://mega.nz/embed/gX8GBJgI#W8DgAKOJj6nP3yA8ZMj2xJ2pPtJMYQgX-HNNhufmILY', 'Episodio 16', 'Hagámoslo'],
    ['https://mega.nz/embed/BTVEAARb#0EGcn1ndcWEW4OFhtGpH_ogWAnVhEpQgXxQi4DsFT5Y', 'Episodio 17', 'Todos ustedes son ridículos'],
    ['https://mega.nz/embed/4KtSDJJZ#4xbeoHMb3kw_FY7Gm7ddkgWWpu2OteTjL4-quhCS8gQ', 'Episodio 18', '¡No!'],
    ['https://mega.nz/embed/lHVH3STD#ix7S9fOAnDymtaXWlyY1vQ5q-kmghLmbKXR7mFDHiBU', 'Episodio 19', 'En un nuevo desafío'],
    ['https://mega.nz/embed/EGNWEDQC#pEEJAL2fIQLtMKtW5UuEtcQ70HpBxMjBwwanu0auu_s', 'Episodio 20', 'No quiero ser'],
    ['https://mega.nz/embed/5fcX3YyT#IHvbvvbRzinxYnyQBVyOraGfVLcX_Q3UkDiKXpVJjj4', 'Episodio 21', 'Comencemos'],
    ['https://mega.nz/embed/xe9ADZSJ#XecL4xHovjS-HQ_LjcWGLx9ZiHo0WnpM5xHyn1GMJbg', 'Episodio 22', 'Ganaré, incluso si eso me mata'],
    ['https://mega.nz/embed/YeVGXQAI#4DrhsYybFbtnmjaJ3v1Rv0vXd5lVBEMBB4lWh5ACzQ0', 'Episodio 23', 'No soy lo suficientemente maduro'],
    ['https://mega.nz/embed/VHUDHBLJ#teZnnV1_meoCsog7N75fruGCu0ghPT4pY58SGDrHTp8', 'Episodio 24', 'No me malinterpreten'],
    ['https://mega.nz/embed/8bMmFI4B#ihodW9H9joulRC4owFCJkKfmlwCPOZFfhpCNhs083-Q', 'Episodio 25', 'El baloncesto tuyo y mío']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Kuroko/Portada-Tmp1-Cap${index + 1}-Kuroko.jpg`,
    'iframe'
]);

const kurokoSeason2Episodes = [
    ['https://mega.nz/embed/UHUQRRjB#TEcTRLErTEcAZmOMDgieZR5LurMDC7jVjehGNVR_O1s', 'Episodio 26', 'Nunca pensé que nos encontraríamos aquí'],
    ['https://mega.nz/embed/5GsAzRqB#mW6xBVUTqyOCjOG6f9Gny2cgfNuACJmYAaL6-1u1Ulo', 'Episodio 27', 'En la Copa de Invierno'],
    ['https://mega.nz/embed/df8n2RzL#A6NB_xB2YED6ZRkfXTXB_-2h4LxkYmeKP6mjhnQ2aW0', 'Episodio 28', '¡¡Empecemos!!'],
    ['https://mega.nz/embed/ILVDhLDT#Qcvgp894mn0MSbThp-7c_TNjWbUvmSnpTZMbeO4t84M', 'Episodio 29', 'Solo hay una respuesta'],
    ['https://mega.nz/embed/JCF3VITK#VeE6wIXjNNvzfA1fmxbE1fAajb8gdADFO5KDvMLdX1c', 'Episodio 30', 'He estado esperando esto'],
    ['https://mega.nz/embed/FX0jzL4I#4qmFcpfkTIMUkEx-yxDQ81n3kGBXS5dVa_vnO09wVrQ', 'Episodio 31', 'Te superé hace mucho tiempo'],
    ['https://mega.nz/embed/VO8wwYBQ#pZ_qVXEgyIr5urGj4Fo_jdoJo9shDSF7R32XXhUwjm4', 'Episodio 32', 'Rendirse'],
    ['https://mega.nz/embed/QbUkDLDJ#lK80Fse4-79R5fe3B8P-svlMqTQz5r5uaqPsSf8V-IU', 'Episodio 33', '¡Somos el equipo de baloncesto de la Preparatoria Seirin!'],
    ['https://mega.nz/embed/hXNSCSbI#x9UqE1U1hqqalTlcmZ94JDpxYIARecBNPCkhfxwLpWY', 'Episodio 34', '¡Te venceré!'],
    ['https://mega.nz/embed/VClkHbQa#dUrstEll78J7Q1wPrjCGg6S6K60mC0-MEaOB1RClam8', 'Episodio 35', 'Es confianza'],
    ['https://mega.nz/embed/IelFDCJb#9WRkEaPdfVs26GixyV_Zjg1f9sPozXfVSfGeHOzv6SQ', 'Episodio 36', 'No seas ridículo'],
    ['https://mega.nz/embed/xPMjAIaT#1G3XzeTT7pm9R97zpEiRKwa-rRDn_gmrqF5ij6SMzPw', 'Episodio 37', 'Lo espero con ansias'],
    ['https://mega.nz/embed/8WEHBawb#IodrisrvV5IMU0CA-_wr6Bpta9MlP-4uRf3pIVfahxw', 'Episodio 38', 'Esta vez, sin duda'],
    ['https://mega.nz/embed/4X92DIrD#1GIU6eIYm-tJ2C4W7tZBFE3Dt2ehukI6oVoxn_7UImY', 'Episodio 39', 'Esfuerzo inútil'],
    ['https://mega.nz/embed/1GNgAZKD#JVDAavzh4fNXF9XorzjdIbXD5PgRGLkdCIgBjvZ3CA0', 'Episodio 40', 'Está conteniendo su alegría'],
    ['https://mega.nz/embed/oX1gBQLL#eAwuG90f4MbvuTWV5j8nbRAsN07dgguDmTEkq-mJPgg', 'Episodio 41', 'Ganar ahora'],
    ['https://mega.nz/embed/RT9BAY7b#00H_V-HSxoMEDaWoGGwvBNteKi_cMP8lHI8fgZzGXJo', 'Episodio 42', 'Yo creo'],
    ['https://mega.nz/embed/5f9WEIJJ#qymKdqPnO9oiwLYmUTROM5xW6oL0Ml6Za139Ud0u2lQ', 'Episodio 43', 'No perderé'],
    ['https://mega.nz/embed/lS0DQaoR#RCwpeHfPrfSTV1fwtgGAV0CWtore27FIczasjiaqnt8', 'Episodio 44', 'Dime'],
    ['https://mega.nz/embed/YLlD2YaS#mZorYnrkdYEfFitOaKQW1FfvWtoJLgFnFcCGBu9iUJU', 'Episodio 45', 'Claro que no es fácil'],
    ['https://mega.nz/embed/sKNRlLJS#8tyA1bk8GcIBF0ijIcOew8Dpdq-zc7QoELqpDVQ2MSQ', 'Episodio 46', '¡Primera canasta!'],
    ['https://mega.nz/embed/1al0TKhQ#7xUWzYBh9DKgnrsi9O5booA2mZfMnbCDJYcD64EAmoQ', 'Episodio 47', 'Es Obvio'],
    ['https://mega.nz/embed/VelD3ZpJ#_vT7yRxQEAYSzsD-xJXqlfTevaGuFUSqRtPUgYNTF2U', 'Episodio 48', '¡No quiero perder!'],
    ['https://mega.nz/embed/Nb9gkbCQ#lYX8UPkbPHcvZ97jzMqemTnX5XSMYBmS8aA9rNnD6k8', 'Episodio 49', 'Suficiente'],
    ['https://mega.nz/embed/IHNkBIha#suhp76bSO6TAB6GRecbLDy7v_xgCQe0tdMYUMSa9Vnc', 'Episodio 50', '¡Gana!']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Kuroko/Portada-Tmp2-Cap${index + 1}-Kuroko.jpg`,
    'iframe'
]);

const kurokoSeason3Episodes = [
    ['https://mega.nz/embed/VS0GVZjC#xSlCTspQJXfT6MrKdxPxEDxLOgDU0_fULD-c0Dd1dpY', 'Episodio 51', 'Sólo he jugado a tope'],
    ['https://mega.nz/embed/oTdwlaiA#w4CLcoi5ZTfeEqdmhBYpXgwFp3sQvHGJoi6vomDjnss', 'Episodio 52', 'Es mía'],
    ['https://mega.nz/embed/VOsGiQya#2MT_-Z1GhcqGFJ3C0gog3k20INBAPOm2T7jgu-evAbc', 'Episodio 53', '¡Quítate de en medio!'],
    ['https://mega.nz/embed/YX9z1Kaa#4bYZyy5NqYXzsroNcoxwiFQ3l_p3J88sARCm0mPPjYc', 'Episodio 54', 'Me las quedo'],
    ['https://mega.nz/embed/cD12CIZD#VC5t8CWJ9_Yq_WtZbLjrWF2Znx4O2-bf9m55Dp8KWxA', 'Episodio 55', 'No lo conozco'],
    ['https://mega.nz/embed/Ra0CjA5R#taZHp990AxNrDcFktXaZKcGJHzG4X1FHr5bbXH7eRcc', 'Episodio 56', 'Se los daré'],
    ['https://mega.nz/embed/VflklB5S#DvTGiB36XLxPz_4jkPaH2lZxS39kL2LewppC-Cn6gKg', 'Episodio 57', 'Me vas a hacer reír'],
    ['https://mega.nz/embed/RDtUxIZT#mz_HQLtLeebSpBZ9RntABs7iSve9HF4G3oXuGDIqOZ4', 'Episodio 58', 'La auténtica luz'],
    ['https://mega.nz/embed/5XFSUTRY#RjbHNcRmgCGOyQP5oJOaPyRt8VY1_nk1XAA-V2KqOBs', 'Episodio 59', '¡No nos subestimen!'],
    ['https://mega.nz/embed/tXNC0J4C#iZkZENCqzzgc-3Aspyrhmq5PivDUg20OxSVtcGibE4o', 'Episodio 60', 'Para ganar'],
    ['https://mega.nz/embed/pCFxHBLR#XoLQNUh_UB1Mq5S71HS54B_zojUk-jUfNs6bUcNHCUM', 'Episodio 61', 'Esta vez sí'],
    ['https://mega.nz/embed/oO0HGZqL#FCP_ySYsMOQYf0VFxK5hI3OOU5ZWU_0PrBIXkhiWjxQ', 'Episodio 62', 'El mejor jugador'],
    ['https://mega.nz/embed/ZW9kUCra#pKFD3CEyuUrfDbYtwsK22OCP61RgQ5yXQ-9AKLVV_-Q', 'Episodio 63', 'Un día de cielo azul'],
    ['https://mega.nz/embed/NCMESB5K#CVKMoDJcrQyZjIcqwyYwJ195T1jdDVT_BWlJC39jMJ8', 'Episodio 64', 'Lo lamento...'],
    ['https://mega.nz/embed/ECkESDLS#qAmG0n56techJNOoD0qE_A49GsvFlRUuV3pSBfuijiU', 'Episodio 65', 'Nosotros ya no'],
    ['https://mega.nz/embed/4eUXQbKL#lG8YNAlLiEWJKgvnESwVGwECkruGlKfPYZr3E7vfnSk', 'Episodio 66', '¿Qué es la victoria?'],
    ['https://mega.nz/embed/IHsGXADL#drTAf3KyDaH3u3QgSD9xkocsHI_AM2uTrXrtLYtDc70', 'Episodio 67', 'El tip-off final'],
    ['https://mega.nz/embed/AWFRXBjY#3io92sH8I7dokMdbonGjBwq7Swsk4LQAvJAwfNH6eMs', 'Episodio 68', 'Esto es lo mejor, ¿No crees?'],
    ['https://mega.nz/embed/we00SIiY#A2j7bXYLK4q2ItLQwvzpH47QMu5psCpbGAMxKvYXjC8', 'Episodio 69', 'No sucederá ningún milagro'],
    ['https://mega.nz/embed/sOVRHBSJ#cgJc2cR7rh1ElZiItp0KP98MFBRBYLlrt3IvZZqCHjY', 'Episodio 70', 'El peso de la determinación'],
    ['https://mega.nz/embed/VL8FxBpZ#UlnCxzZPbETrelTzYVI8S8VaClSJbETDT4wsegk8XAA', 'Episodio 71', 'Hago todo lo que puedo'],
    ['https://mega.nz/embed/MK9UlbxK#eX5-yB5EO4XHR6kSpe4KUmJB10EqWpKDenufaq1mC2E', 'Episodio 72', 'Es una advertencia'],
    ['https://mega.nz/embed/MWNgyBTb#_5qo4-tlWe4fvU2wAK5FfKBlnHsYtmZhe_g0iLcOxfo', 'Episodio 73', '¿No te rendirás?'],
    ['https://mega.nz/embed/xCVU1CIb#fcA7gsW2tuZp4zgRMJZK3SSqURlR9i9HPi2pC28M5i4', 'Episodio 74', 'Eras tú, ¿Verdad?'],
    ['https://mega.nz/embed/hC0UVJrA#XNEeQnz4G-EQZmjqji2AlvCTdWxY6umNxoIompUQbbw', 'Episodio 75', 'Tantas veces como quieras']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Kuroko/Portada-Tmp3-Cap${index + 1}-Kuroko.jpg`,
    'iframe'
]);

const kurokoMovie1Episodes = [
    ['https://mega.nz/embed/UxUjzSzS#kPPrFlY_Br7KPWmsfcMgYl3JhrwQkhlkgL_6cI71TYQ', 'Episodio 1', 'Kuroko no Basket: Last Game']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Kuroko/Portada-Movie1-Cap${index + 1}-Kuroko.jpg`,
    'iframe'
]);

const codegeassSeason1Episodes = [
    ['https://mega.nz/embed/UHNWCKJY#0e1_scRqZmqP2JUvK5MYKQXdksFeLABzS7OsjcZGhRI', 'Episodio 1', 'El día que nació un nuevo demonio'],
    ['https://mega.nz/embed/cT9jXLjC#XU92qtjj3Dy6NtC1IA0gz-CLCjkFL8NEzdyWRrRWXVg', 'Episodio 2', 'El despertar del caballero blanco'],
    ['https://mega.nz/embed/NDFVjJba#ezQn0d4DgGR8Mk1uB3ZE7U2Q8lzdHYPW11r3U1fsD6k', 'Episodio 3', 'El compañero falso'],
    ['https://mega.nz/embed/gSEF2AxZ#HrpFGvBJgZ_z7uDklUABw3ol0NYHYo36p1oeZy9M8UE', 'Episodio 4', 'Se llama Zero'],
    ['https://mega.nz/embed/oC1mRQiJ#JmusXXzwa9X2UVSzocxDvBMF-uOX20zxJLazeKTUQys', 'Episodio 5', 'La princesa y la bruja'],
    ['https://mega.nz/embed/dX83GDRa#XQSoak_yUznwlBpRGOe6lx-h1U1FEcNtVPfMeUsidoE', 'Episodio 6', 'La máscara robada'],
    ['https://mega.nz/embed/NGN2kaAb#FwmvxjNHn2lWnAnAu-MboHhmPai8o35lkzWT6qj64vY', 'Episodio 7', 'El ataque de Cornelia'],
    ['https://mega.nz/embed/YLMiwbyZ#qhfENaF9EgfnRltcNW6NK4o6x6UAMJNNwdaueZTMPUU', 'Episodio 8', 'Los Caballeros Negros'],
    ['https://mega.nz/embed/oDEySZiA#Tx52Aj9EK8Oc-56jS_5xz8yV4CKEyB5aKr4gXM1y1yQ', 'Episodio 9', 'Refrain'],
    ['https://mega.nz/embed/QL1HyL4J#1Ac8-ighplirGOBlcy96xxj0mRWEphGE0Box-QOSaeg', 'Episodio 10', 'La danza del Guren'],
    ['https://mega.nz/embed/8al2QbiD#ufYto21z1IVowWRRRTpvWV0S_bZcYk0QW91DXY4J53w', 'Episodio 11', 'La batalla de Narita'],
    ['https://mega.nz/embed/hDMlBIhZ#Igani0AGv1nyWvBYIwkKnf9zNswNiHKtxYd-GmUG53E', 'Episodio 12', 'El mensajero de Kioto'],
    ['https://mega.nz/embed/wH8SlKKA#5Md957TJKhQ0HdXw6cDdAI0yHFhroCz3BlkRBt40qkk', 'Episodio 13', 'Shirley y la pistola'],
    ['https://mega.nz/embed/0SkzED5R#idAagAIFpOmuHv47fzF6GlDpQrD3w3yXDWJJhdjnoWs', 'Episodio 14', 'Geass contra Geass'],
    ['https://mega.nz/embed/tHV1zbSJ#_BtBZFRIo49fh8DxnlZnsCcud9Yra4IfooFFd4m4uDM', 'Episodio 15', 'El aplauso de Mao'],
    ['https://mega.nz/embed/5LslkbaC#QaLYyQeRI4nb4kebIT5okuqM7MPZlDn0Yd5ESMyEEXQ', 'Episodio 16', 'Nunnally secuestrada'],
    ['https://mega.nz/embed/BHFjxaYI#__8BjaNTw7Hb1PXyV11CxG64RG9kfX4esoZLG75zCD0', 'Episodio 17', 'Caballero'],
    ['https://mega.nz/embed/ES913bJI#beN9-d9seFHHnFNrkhZJc9iWgcARjPp-XJ-5uAHyPVw', 'Episodio 18', 'La orden para Suzaku Kururugi'],
    ['https://mega.nz/embed/JGM3QbaD#R9yaNTOlIIKM9WfkqLyVSVzeNSHN2oq_LNaCOcOhs10', 'Episodio 19', 'La isla de los dioses'],
    ['https://mega.nz/embed/pPcWFQCQ#WJI99pcHIL70k3AwMe87ubJ1KjQjFmUw5eKD_RE6J5A', 'Episodio 20', 'La batalla de Kyushu'],
    ['https://mega.nz/embed/RPFQiSAA#XC2YWMLdL7-fQGQ4dUVA9QO_TEO7e62lQ_e37cL8FZQ', 'Episodio 21', '¡Declaración en el festival escolar!'],
    ['https://mega.nz/embed/xPUjyQzJ#6AC6ZTXi1QkCAKekkj4MUrJLLHwTC-EhAfmFVfK_ioI', 'Episodio 22', 'Euphemia manchada de sangre'],
    ['https://mega.nz/embed/ESV0yIQY#T-W0dvtFhpp_I79MkRAaiiPra9q3ls5Uwy64t3Xz-q0', 'Episodio 23', 'Al menos con dolor'],
    ['https://mega.nz/embed/ZCVwUK7C#mOtEBq-LmFoHeFoYLbAfm4w9cCCM6tDRBxI84p2JSj4', 'Episodio 24', 'El colapso del escenario'],
    ['https://mega.nz/embed/cT1yQCxJ#o5SmHQpQuQlb9FYHICbbk8HuitizTUrhX8nUjZYRWzg', 'Episodio 25', 'Zero']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/CodeGeass/Portada-Tmp1-Cap${index + 1}-CodeGeass.jpg`,
    'iframe'
]);

const codegeassSeason2Episodes = [
    ['https://mega.nz/embed/Bb1WhbDC#sGsid_mjwl5jujKCu5TtdYFCXG4K_a2aNr_1eD-n42I', 'Episodio 1', 'El día que despierta el demonio'],
    ['https://mega.nz/embed/VT9G1CTQ#WBLvN8BDMH8CNo4w9658FVL1U2jxRsESO1ZW-gPvmhQ', 'Episodio 2', 'El plan para la independencia de Japón'],
    ['https://mega.nz/embed/daV3hQRJ#I2Xzv6mZALdTFjIbwXUrSodjxu_j--crV2hTy7XUhMs', 'Episodio 3', 'El campus encarcelado'],
    ['https://mega.nz/embed/IXURyBwQ#DSFGg9ZXpD8CgmlWu9Zj2me584ayzVQcP4PZ-fvOqVE', 'Episodio 4', 'Contraataque en el patíbulo'],
    ['https://mega.nz/embed/AG9zTZoY#dp-5eE5i4VKMStAlGLeVS5pv9BaSsscH5WTTzwTwcvk', 'Episodio 5', 'Knights of Round (Los Caballeros de la Tabla Redonda)'],
    ['https://mega.nz/embed/RTFl2KAK#7BBPIGwRErVD66minTS_4ofdTCGQ6SiSYS5lrB25Ecs', 'Episodio 6', 'Operación de asalto sobre el océano Pacífico'],
    ['https://mega.nz/embed/cecwQIzI#eLkO8gpGg8TrSBvKO79711XeT_YChVVj3oD3p0ltyDc', 'Episodio 7', 'La máscara abandonada'],
    ['https://mega.nz/embed/cKkAGarT#F8N6iiYgAdALkZcMIky-2ZoTQnYfWnq1sf_34fRfq9Q', 'Episodio 8', 'Un millón de Zeros'],
    ['https://mega.nz/embed/wed2iY4Y#alQpKyESmen8lWnp7g1xMVrPb-GNFzhhQ8cXXIlmafU', 'Episodio 9', 'La novia de la Ciudad Prohibida'],
    ['https://mega.nz/embed/dD8E0CAI#QKbmsUGHjNm-NzjQln-BVwJ7NeJsM8CfhmZtAuWoGII', 'Episodio 10', 'El Guren brilla en Shen Shen'],
    ['https://mega.nz/embed/lb1BiIjJ#pE1cWxYNuBxyMgTb9vCGKpUzGK2Qx4auVQhrh3XBBKs', 'Episodio 11', 'La fuerza de los sentimientos'],
    ['https://mega.nz/embed/hO0lQSzZ#lxBzRl3XYcHGVLhUeYuExpxuPUuLCiu6toxGQBF5-4c', 'Episodio 12', 'El ataque del amor'],
    ['https://mega.nz/embed/cCNmTQzL#dCLZiWU_S1i1HR3kXTnz_oNbz35X8hcmS3_UbNt2Xvc', 'Episodio 13', 'Asesino del pasado'],
    ['https://mega.nz/embed/oCU3XbiZ#1dvLAHWijDX9fJVeBVRZq5p8I6A8CgzPnPv5tzOpqS0', 'Episodio 14', 'Caza de Geass'],
    ['https://mega.nz/embed/QWlDyIiZ#lS-plo0xLqCKL4G8sMM8eaXHrZHBnRoa4fm6nW7zsFE', 'Episodio 15', 'El mundo de C'],
    ['https://mega.nz/embed/pLNylIBY#YMt8fMV7YeX_C8pY1QnMRA5KpXCV96IrzoLsT4DVoDs', 'Episodio 16', 'Primera resolución de la Federación Unida de Naciones'],
    ['https://mega.nz/embed/4T8zBZ7J#tuo1I4qK0sYgi4Ros_BMfGXk_8Pl2b8hTAAIXdfwUS8', 'Episodio 17', 'Sabor a tierra'],
    ['https://mega.nz/embed/oOtV3JRY#Jvs0qrwFtDhjxRQ62kHF1WUkibRRtdaVS-oSlVIX1Ss', 'Episodio 18', 'La segunda batalla de Tokio'],
    ['https://mega.nz/embed/lK9iGCTZ#BbdrFXSLArA9f2jXVzipNvjwltOLpVmo97D_m77yM4Q', 'Episodio 19', 'Traición'],
    ['https://mega.nz/embed/helDXBLK#bCgfN9iXrWMPFLd6KfVwBocYSXCGbCgFEgayhU32iH0', 'Episodio 20', 'El emperador descalificado'],
    ['https://mega.nz/embed/dPVW2bwL#9tGU9W3TbUq-UOtkEzYnRLb8pJZAckXyYoD7-J1NshI', 'Episodio 21', 'La conexión Ragnarök'],
    ['https://mega.nz/embed/hCFWFYCL#mtjkO5HQJOZHHUC_4lXcN2aY1o4EOrHf0VGIPdFF6rY', 'Episodio 22', 'Lelouch Emperador'],
    ['https://mega.nz/embed/xLlg0SzZ#GLjzOU4uyMhgQjuAI3il5e3IrZAJRP8P0iL9y6C3tsk', 'Episodio 23', 'El frente del Fleija'],
    ['https://mega.nz/embed/QXNyDTQK#yLnTIcZPT0oEBmcnVxKAPVBHzIm_t3jCUYIUN_P4WoQ', 'Episodio 24', 'El cielo del Damocles'],
    ['https://mega.nz/embed/VS9gnSSS#EXjbtv0AoO4yS7LL_DHJAeTPfBXlndLHYJCwlZL3wdo', 'Episodio 25', 'Re;']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/CodeGeass/Portada-Tmp2-Cap${index + 1}-CodeGeass.jpg`,
    'iframe'
]);

const monsterSeason1Episodes = [
    ['https://mega.nz/embed/4XkGQBYL#FTL87I7ExZEywgK7cKRk-tjIBXkXFiQm4Ml93LLBS2A', 'Episodio 1', 'Herr Dr. Tenma'],
    ['https://mega.nz/embed/oWkRhK5I#PHO7LrYqCQDiuFwRfiKOXh6tPqU4iXY9jZnMJSwTKe0', 'Episodio 2', 'Degradación'],
    ['https://mega.nz/embed/VL1hWJwB#6RIF4bthtbUkSrcr-Zi6AXN2TnY0LhYIkiU4cdcqESg', 'Episodio 3', 'Asesinato'],
    ['https://mega.nz/embed/5OMEALzK#P_b_IES3Y1gcAHmJFJ6H8WqtONoJAWoUxiaUq8p1zAI', 'Episodio 4', 'La noche de la ejecución'],
    ['https://mega.nz/embed/hTVDSKRC#YbAXcWGJir62rnJAX_QmfEsxr3HzH5J-Q3JlvCUhG7o', 'Episodio 5', 'La chica de Heidelberg'],
    ['https://mega.nz/embed/ROs31bDJ#xRrCBM6tHqKSE_-z6pjLZ-Lmvm8EIS_l6Lv52m7bIAs', 'Episodio 6', 'Artículos de desaparición'],
    ['https://mega.nz/embed/oKUDjRLD#UmPxKZ7PAdP0a7X6wH8WEiVkthbyQySYczvZhlAmHQQ', 'Episodio 7', 'La casa de la tragedia'],
    ['https://mega.nz/embed/YGVzhRrS#A6q-BbxRXaKNFJWMc_T1rUknIfNKtN3f58o21AaYB5Q', 'Episodio 8', 'El fugitivo'],
    ['https://mega.nz/embed/dedyxZga#i6DZg0HGrSOSWL0Srtin9lFsMNXpsu32unbn-pK11-0', 'Episodio 9', 'El anciano y la niña'],
    ['https://mega.nz/embed/Re1CCYJb#hT7gGoZBkqkELmprCCRXiUJ4drJtVZ2Q-wb_rbLokXU', 'Episodio 10', 'Un caso del pasado'],
    ['https://mega.nz/embed/dKEWWBKQ#idzK2cpxAB-sGv5qosW05EpmexwitTy-igGo6RI91jQ', 'Episodio 11', '511 Kinderheim'],
    ['https://mega.nz/embed/8TlQSb5a#cmXrqHhz3S2UcxjOdafR4CHXW-9Uz-RcPvXrxLj6h88', 'Episodio 12', 'Un experimento modesto'],
    ['https://mega.nz/embed/dWMGgaoS#pzPycM-laJAUSLj8SKVbEF9_J9LZcdr4vixt5VcNZnE', 'Episodio 13', 'Petra y Schumann'],
    ['https://mega.nz/embed/tSsTyCqQ#1kseuk84dHsXDxTKUn01WTWm-ssDlpKYD1qok6QPDW0', 'Episodio 14', 'El hombre abandonado, la mujer abandonada'],
    ['https://mega.nz/embed/MekyDQaa#7MTgI4ouArnykCd__JVk0r_8YLIFpuG3JjRW0Civ_Vg', 'Episodio 15', 'Be my baby'],
    ['https://mega.nz/embed/JG93CYCD#v7TbagF-yZJybTZnjZs5Jb0-fVmTiA5AN-zGNwazOqo', 'Episodio 16', 'La confesión de Wolf'],
    ['https://mega.nz/embed/Ue0ziZDb#Y39sTQkE2xfL_60SXIcX6MPDNsD6Q-bA-CR9hW05cJ8', 'Episodio 17', 'Una reunión'],
    ['https://mega.nz/embed/kK82wSwJ#cVUrpli0lQVEKZjjal-N9RmUSTrFMu4oMiRgVEbYRYM', 'Episodio 18', 'Cinco cucharadas de azúcar'],
    ['https://mega.nz/embed/AGlSXK5I#UQG47qd7KZum-ZsbSDSZM6NeQ-AP83LXoIneiTBenQo', 'Episodio 19', 'El abismo del Monstruo'],
    ['https://mega.nz/embed/gaMVWSKJ#kbZo80Vlp6y7eR7ext7Tl1qfBFEs6Gcwk2nj85AqBv0', 'Episodio 20', 'Viaje a Freiham'],
    ['https://mega.nz/embed/Ia0zgKIQ#AhcXgrw_iD6_1p6PZsfkIG3WlUPRWKZvNJXESsg78Ic', 'Episodio 21', 'Unas vacaciones felices'],
    ['https://mega.nz/embed/4LEikJDZ#4DsK5Pj_f3x1qOkg77zgtR2MXOcKh8a1UgTIWS5u_YU', 'Episodio 22', 'Las trampas de Lunge'],
    ['https://mega.nz/embed/gHM0BDrT#-AkUvNcROBxg4Due5upqn_rB7SCWc9ZvqU3QqPbseLA', 'Episodio 23', 'La confesión de Eva'],
    ['https://mega.nz/embed/xHdGlSoR#sCiQ8tQocdm3k0fkVRtZ65HxUZkJLUieaEgs4v7WrdU', 'Episodio 24', 'Alrededor de una mesa'],
    ['https://mega.nz/embed/gLcTCKzY#mSaZbtia4jImPnC6rgOd6mvsePdyz4UxqipGHVSffqw', 'Episodio 25', 'El chico del viernes'],
    ['https://mega.nz/embed/4flgXRRD#zIuWFZ2PhShhDbnpMr_oGHuADwWF_3swFPPBGvBNxHM', 'Episodio 26', 'El bosque secreto'],
    ['https://mega.nz/embed/1bd1kBSD#kFwCtL8een_1uB8-Gkarq66q5cIbhXBktdm_kbFFGso', 'Episodio 27', 'El caso de Richard'],
    ['https://mega.nz/embed/JOswVYrQ#H0zGxLEJaMxcD5kQ-R4LhmJYlWh0pnT5S9AZ9hM_V6A', 'Episodio 28', 'Justo castigo'],
    ['https://mega.nz/embed/lHkCAIbb#LJlIY5CcM_Kl9IZwBsHLPORSTwo-m6qbkS9B34Z7lp0', 'Episodio 29', 'Ejecución'],
    ['https://mega.nz/embed/AflVDTzb#kvdv23lBsFnWyDm8OKU1yNcf2WbIo4znfOP_XWhokX4', 'Episodio 30', 'La decisión de Schuwald'],
    ['https://mega.nz/embed/QD823Q7L#_pwcTE6tWPb4GuCUF8W8gOnPnu9CeT093G1Cv7Xg42A', 'Episodio 31', 'A plena luz del día'],
    ['https://mega.nz/embed/NeVGTKiC#T8-9kLSqS6KZUyyorITKc4JTydsYFGEB-iadS1VXbms', 'Episodio 32', 'Santuario'],
    ['https://mega.nz/embed/dPtCiajJ#Sok0Qk67dmDLp4NOruQZtMK4bPu7sauAM9QiFDRxZFA', 'Episodio 33', 'Escenas de la infancia'],
    ['https://mega.nz/embed/4aVHXajR#FljTHSQo18kDWjIxLruggVQKm3NOuA-W_rO7UK6vfM4', 'Episodio 34', 'El fin de la oscuridad'],
    ['https://mega.nz/embed/dSF3HZhA#soZSDAcjK9D1dm3uAxXUaFk5DPZrmgGTRlgd5Gc1XtU', 'Episodio 35', 'El héroe sin nombre'],
    ['https://mega.nz/embed/RKNS1aTK#cKlewYsEw5eAvTwpYGxwcQS1UU8g6Yw3lPAxjeriT0Q', 'Episodio 36', 'El monstruo del caos'],
    ['https://mega.nz/embed/8WtlgS5S#ptOUeAqX6DRnOFV28NDWKiD978vu40MQzkqmKShYnF4', 'Episodio 37', 'El monstruo sin nombre'],
    ['https://mega.nz/embed/8GFViZaB#6sjH2J2I8rtrJdrwZ2YulOK0V5hmgxWTlL9U1aFfICs', 'Episodio 38', 'El demonio ante mis ojos'],
    ['https://mega.nz/embed/FX1Twb7R#hD06Pfa-j022Fmriz4QSGSCE3x4CQWLb7hgP_BlIT7Y', 'Episodio 39', 'El infierno en sus ojos'],
    ['https://mega.nz/embed/FGkVURwb#GBAI1kJDQSthBmaQG7K4kVvktszkT3o09XHIelK0Lw8', 'Episodio 40', 'Grimmer'],
    ['https://mega.nz/embed/QetEFJ4Q#ojlrScsybNqj7Cky73_s9LmMdBpwYJcA9SNbmpVAs-I', 'Episodio 41', 'El fantasma de la 511'],
    ['https://mega.nz/embed/weFVmJyT#s2YsUDqWfiX3SGANdJWo2Xkx0uWOrf1QLaHeDYsvyks', 'Episodio 42', 'Las aventuras de Steuer el magnífico'],
    ['https://mega.nz/embed/tflXBS4R#ogf6c1YPm85WVa6N72l0n80GCpQ84hIir00OyaPiy04', 'Episodio 43', 'Inspector Suk'],
    ['https://mega.nz/embed/dCEiiKoD#YE1Q8lVeBueUZmztTyuXB0f2ycUc6vk3-rnHk2yndww', 'Episodio 44', 'Las dos tinieblas'],
    ['https://mega.nz/embed/5LFX2SJA#PAC9qFA1vSjUVomrkPubt0o95lE6jAsL5uygOKPgtiY', 'Episodio 45', 'El rastro del Monstruo'],
    ['https://mega.nz/embed/hCUTWD4C#-LSqc3UzAEn2AnER0aRoXC-gaaasCXqqrbdxMQolDL0', 'Episodio 46', 'Llave de contacto'],
    ['https://mega.nz/embed/hfE2gYjJ#WXUMVhoGbRlyjvDakicASd0jWBXGpDTi_2Bui0wB4jA', 'Episodio 47', 'Las puertas de la pesadilla'],
    ['https://mega.nz/embed/0WsWBLwB#qpuHBqI_WjpFWeoO-y4dQXFYPB0IlZFwJLp7Al_X848', 'Episodio 48', 'Lo más temido'],
    ['https://mega.nz/embed/1PMlEKYD#iI8QoYavQJLHzbJ0ntc6ghufrMd6VBufcLp8S3lQZGw', 'Episodio 49', 'La crueldad más absoluta'],
    ['https://mega.nz/embed/hDVEmZbY#qId1HeltmG-vdvQd3ybtjfbRi-jKZnk8ACT2in86iVE', 'Episodio 50', 'La mansión de las rosas'],
    ['https://mega.nz/embed/Basg1KZY#2vnKLMqTdDMdUXqG7rc1KXtvcNc9ThQA7ug9qdOQ4Vo', 'Episodio 51', 'El bebé del amor'],
    ['https://mega.nz/embed/NG0nCLTZ#N9c2TjSpqkyIMsIt5jZ9amEWvKDI99mIiTkCpkrVy70', 'Episodio 52', 'El abogado'],
    ['https://mega.nz/embed/UHkUTTKC#2Q2mWez5BaNSfAIJMlzDsKq2I4mAU7J2GOZYmc6IgcY', 'Episodio 53', 'La decisión'],
    ['https://mega.nz/embed/8C8BUb7b#olSd_U6P4MuYF3cO5t66f29vmcSCzDDcWQf1igkFq5k', 'Episodio 54', 'El escape'],
    ['https://mega.nz/embed/9btCSIZT#wEg5ERyCop26CscMp9YJwJisMKvEACgVSj83LmTXwHU', 'Episodio 55', 'La habitación 402'],
    ['https://mega.nz/embed/BL0UlICK#ZCXUsjPfD7AUJN_SzbHyp5c5LQagWa4NHPgH7IOXTgM', 'Episodio 56', 'El viaje sin fin'],
    ['https://mega.nz/embed/kGUQlLRR#odpSRWAHnj1qDITvtYhncBfesRPN767mtBVoUfuyNDM', 'Episodio 57', 'Aquella noche'],
    ['https://mega.nz/embed/VWkVkRYK#UlR-Iz4N6CnZCs2y_aeFmsADjQnTN2Fb9rM-DmeeAjk', 'Episodio 58', 'Un trabajo indeseable'],
    ['https://mega.nz/embed/UetB1KIC#b0Cl_BuNu1Og5mns-7bF561gUxItbDWHBOskX21ehJM', 'Episodio 59', 'El hombre que vio al demonio'],
    ['https://mega.nz/embed/pWF0gCBQ#OSXEJHTocRHgNkjENhvMvlKUcrKFVH9z35IQ0dc6DPI', 'Episodio 60', 'El hombre que sabía demasiado'],
    ['https://mega.nz/embed/pWsFzbrA#SgyE8cBYeywix_DOsEbCDwbJgco0XtJaY-VWjldW7R0', 'Episodio 61', 'La puerta de los recuerdos'],
    ['https://mega.nz/embed/RDknXR5T#Oy7qu49e83_sdUpgcA5HKsdtVkdZdOJQ7vvNn5f2xSA', 'Episodio 62', 'Una mesa placentera'],
    ['https://mega.nz/embed/kP8iHZrA#FnLVTEgHLZfFcbzoIIOu85IHewn7innyNohZb9jMpPg', 'Episodio 63', 'Asesinatos inconexos'],
    ['https://mega.nz/embed/VD8XwIKB#7cafAY8fkwELV0PiWeWhO99W685XIMY9lRu6rz_HpbU', 'Episodio 64', 'La angustia de bebé'],
    ['https://mega.nz/embed/9TdUmQLa#bV-OrH8knrjUn2PD8Bki4EhLEmpusMcvPx5Q7Z8nrno', 'Episodio 65', 'Las huellas de Johan'],
    ['https://mega.nz/embed/1DUjUIKL#sEpaSH8atrAs2giu9YGUfj9fMNcnkKhPFEcB_Ea6F2g', 'Episodio 66', 'Bienvenido de vuelta'],
    ['https://mega.nz/embed/JCMlALQS#QkPyDICwFScSkEYNUXxhYCeK9MGGTbF4vQvva2rmJDw', 'Episodio 67', 'Ya estoy en casa'],
    ['https://mega.nz/embed/FPsnGY4A#o1IrrRMM3htx7NbqUZ1cOUzer-h9tO66fBKggY5ehXk', 'Episodio 68', 'Ruhenheim'],
    ['https://mega.nz/embed/FftSHQpK#36IctkIFrC-bBDA2xSLePc9mWGceIHpWsUHzZJW5NOQ', 'Episodio 69', 'Un lugar para el descanso'],
    ['https://mega.nz/embed/ADdEAJJC#oVBf6vcD9YYbg3-bgfYmrrW7mtP4baZbtQusmzFGn0s', 'Episodio 70', 'El pueblo de la masacre'],
    ['https://mega.nz/embed/1f9WRZyS#1CnrK8_bMH0iuahEveNQUgJcI0CZrJ8EvzoT_j-TGWg', 'Episodio 71', 'La ira de un súper hombre'],
    ['https://mega.nz/embed/gGtyQCTB#WdoLfN4QDkq-Q-02tJGFcXmEb6otvAEMOmPaRMM638Y', 'Episodio 72', 'Un hombre sin nombre'],
    ['https://mega.nz/embed/tDViiAoA#sbw4u7_WKPCmUY3fiP9ptanhEVVEB2YoliG0iv_isT8', 'Episodio 73', 'El paisaje del fin'],
    ['https://mega.nz/embed/JSlCnbjA#sqLDXaa-h3QlkgVfBOj0OYvj-MrIbpemefmqrKTacfU', 'Episodio 74', 'El auténtico monstruo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Monster/Portada-Tmp1-Cap${index + 1}-Monster.jpg`,
    'iframe'
]);

const akamegakillSeason1Episodes = [
    ['https://mega.nz/embed/gZkA1abb#VC17UiciWY2LbMYKN0ZSDIFm6s5UF0CczHEIWHsNHwA', 'Episodio 1', 'Mata la oscuridad'],
    ['https://mega.nz/embed/i9ZQHIJY#PfHVO3OmZISvSEglEw2L8qsEFrvYaGyGJ_YTF_4MrD0', 'Episodio 2', 'Mata la autoridad'],
    ['https://mega.nz/embed/ZR8WRRLL#Mx4JM_yBJaoH6YaCckkJ94qvb3fKTztZm0bCzB2u-Y8', 'Episodio 3', 'Mata las preocupaciones'],
    ['https://mega.nz/embed/cQ9RQSpK#Tnivy_9Cf9OUEezo1-Ar6N7kDSxZcOPhHmFxDpWjnNY', 'Episodio 4', 'Mata al portador del arma imperial'],
    ['https://mega.nz/embed/Rc9wjTyR#lO059Fpyfy72o9wWAJqtwhZdU9OdHXJ7LvEvaPUyAcs', 'Episodio 5', 'Mata el sueño'],
    ['https://mega.nz/embed/QIsHSbjB#LiQFDjtQCJOCuEI2NrUxukFYyjEhtzkU2b4gaIs9vqA', 'Episodio 6', 'Mata la justicia absoluta'],
    ['https://mega.nz/embed/EQEgUaTT#L2Qt5_Ttkzt66pKR7PR4OUEQSNWVk4V-XK1R3akb8qA', 'Episodio 7', 'Mata a los tres (Parte 1)'],
    ['https://mega.nz/embed/gFUFAZqY#kF-7vHQyYF7ifPLLZNJz-LwfWjmVvjiSxhxmcdvZVDs', 'Episodio 8', 'Mata a los tres (Parte 2)'],
    ['https://mega.nz/embed/lRECVLKQ#p3H3oP9Mg0G-yiBToLa9rTPTAEdwXEBhy0f_EkMawnk', 'Episodio 9', 'Mata a los maníacos de las batallas'],
    ['https://mega.nz/embed/IIUxnJAB#Pw1b-rnME9EwrSjw5sMPy5L1QQW1SJlCrgVzeyOW8jY', 'Episodio 10', 'Mata a la tentación'],
    ['https://mega.nz/embed/SpYWWbzb#_ccvFbMSdkHB6fQdq-6mW1PuHMrCFEDdG2jMWCDaXjI', 'Episodio 11', 'Mata al doctor Mad'],
    ['https://mega.nz/embed/oA0zWYAa#NAKkZ3d8eRTfjD2NQpUgSBVPMGYmYtgEimXz8s1Rar0', 'Episodio 12', 'Mata a los recién llegados'],
    ['https://mega.nz/embed/H0AjHbrI#c5qPa6P5CTDOLSmON2NIfT_1yQkm10FqVf40TqDXOq0', 'Episodio 13', 'Mata las molestias'],
    ['https://mega.nz/embed/0QtgXQjL#uoIh7MUdLNYafqmDQay5tR_KthdAAzYcsgOhfaRPq1k', 'Episodio 14', 'Mata a la enorme criatura peligrosa'],
    ['https://mega.nz/embed/gYV3VJAb#iis6EflOctlpwRoQ2vQvc3JZHevtLa7KDHMn21B_M7U', 'Episodio 15', 'Mata al Shura'],
    ['https://mega.nz/embed/xNdRhB7I#yPY6_TT-YAW4HXt-78kc-sxw3L5SMlUJH9Mz0O2Y87c', 'Episodio 16', 'Mata a las marionetas'],
    ['https://mega.nz/embed/28o2kLgQ#iAioADFq3eRlFpQnCxoPVthuWm_X0VsOC70sOJX-5DE', 'Episodio 17', 'Mata la maldición'],
    ['https://mega.nz/embed/jlZQECbL#J9_M4Slo1l8HaPMVIs2wTDym1Zbu8iox3CuZMT4ai44', 'Episodio 18', 'Mata los demonios'],
    ['https://mega.nz/embed/wM0wHTIC#G_osMcfE0uaFMaNMQcAarb-e6A4j7VNUgXBhuWoqE5o', 'Episodio 19', 'Mata el destino'],
    ['https://mega.nz/embed/UNcmQQ4T#_Epw0O215P7caCXZ4eckHPzgZo_2gAaJ9ei2J3JAiUs', 'Episodio 20', 'Mata el eclipse de Shura'],
    ['https://mega.nz/embed/cd9RDJoS#n91aq7wyRzdj8d6MVrMsokLdic11NOFfk1uyw1B3hrE', 'Episodio 21', 'Mata a la desesperación'],
    ['https://mega.nz/embed/tAlHRawZ#53KjKEzutQqa9XNJ-OjCOh1HZ8i-9nXoiyDByfEOFa0', 'Episodio 22', 'Mata a la hermana menor'],
    ['https://mega.nz/embed/314BlbiY#mrGSTN87C2UC4JRLYTb8Ei2zp2ZC7MGOB3M-TVjci1o', 'Episodio 23', 'Mata al Emperador'],
    ['https://mega.nz/embed/sIkjXC7D#1f-ZRpDwPRd7RNBO84Lvt8ne57906AsNqzr3TwjovWk', 'Episodio 24', 'Akame ga Kill!']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/AkameGaKill/Portada-Tmp1-Cap${index + 1}-AkameGaKill.jpg`,
    'iframe'
]);

const akamegakillLATSeason1Episodes = [
    ['https://mega.nz/embed/bRsxTKQL#iZz-awUEPIU8cGNv4RmsVslSZRVGH4pcq-pEowZfgVQ', 'Episodio 1', 'Mata la oscuridad'],
    ['https://mega.nz/embed/jMtB1LoY#QICbcrb0RG0Javc9PDj_DHvpWIRWLtg169AGZ1BD_lA', 'Episodio 2', 'Mata la autoridad'],
    ['https://mega.nz/embed/7NtlTAAK#_rlFeE_wGcWmpSeNu4aJtuxuPljptuw7Qv3AP85VMp4', 'Episodio 3', 'Mata las preocupaciones'],
    ['https://mega.nz/embed/6c8zAJrL#VriTjEbC4_0n7p-oKMSK6Go6TuweyzK8lxOId7xDvSw', 'Episodio 4', 'Mata al portador del arma imperial'],
    ['https://mega.nz/embed/OENnTZKS#AUnp_s-aTDkt93r-5j8XV-PlZcLcyS7Q368kGap5xCs', 'Episodio 5', 'Mata el sueño'],
    ['https://mega.nz/embed/3FkDSawT#KyGTjfXdV9_mepPuIEP6AgpDQmcy74d1yISwr0y7WkQ', 'Episodio 6', 'Mata la justicia absoluta'],
    ['https://mega.nz/embed/TFEknZYL#gkJja0A3OpyJdqUmi4DK8oF2X6JHb08th-Aox2d8NYE', 'Episodio 7', 'Mata a los tres (Parte 1)'],
    ['https://mega.nz/embed/mN0ChDbI#WdGEHE_ESZ9cPtuTuGul3xIt5bzlwjaskdo-RluTTcI', 'Episodio 8', 'Mata a los tres (Parte 2)'],
    ['https://mega.nz/embed/WRlTABIB#jvcyVD95SkPG_qcZGT4y7vJvl3P9xREcuRWDjPGb5ZE', 'Episodio 9', 'Mata a los maníacos de las batallas'],
    ['https://mega.nz/embed/2UcjTAwJ#ULrcylqTbR_CIAV3_4vIMMNOJWupcf7UP8JDM_Fz6Pc', 'Episodio 10', 'Mata a la tentación'],
    ['https://mega.nz/embed/yZFiWRIA#Zo9rH59ux1jFMDdVAokTbUUk8FXuXwhf8ZVKhKw1kpA', 'Episodio 11', 'Mata al doctor Mad'],
    ['https://mega.nz/embed/yNEW2bII#mN7r3BZSkhkxtOTmWsZ4M3ln5OlQD60wZ7l0HtqAK4s', 'Episodio 12', 'Mata a los recién llegados'],
    ['https://mega.nz/embed/GJV1mLqJ#fa3SaCU8MSzkh8nPE8Ha4dBUj4GU0I1oT6P0zkMr3bc', 'Episodio 13', 'Mata las molestias'],
    ['https://mega.nz/embed/fBcSGT5b#b74Hrkh8NDRtG7tAWWtUOwuvIxajfVnfRKkDjReFJq4', 'Episodio 14', 'Mata a la enorme criatura peligrosa'],
    ['https://mega.nz/embed/iINUiY7T#Tq2QoQu_UIIfEwmU7xVkoFyXIu86GqbTohdnWWCBKEU', 'Episodio 15', 'Mata al Shura'],
    ['https://mega.nz/embed/qMl3DDbb#FHPb-NCewPcd2PU2Bhjv0rVEcbUMdQw6bwmutlPbd-Y', 'Episodio 16', 'Mata a las marionetas'],
    ['https://mega.nz/embed/PdkzmJaZ#BLoSCr__lWL0l_He6oCJ1bOKtKHUlXcn1mAXrub-X34', 'Episodio 17', 'Mata la maldición'],
    ['https://mega.nz/embed/jY1lhTqD#8pb5hiBoZEKMASpRxpVEaVBEgeSdga4hbzZfRF1MFRQ', 'Episodio 18', 'Mata los demonios'],
    ['https://mega.nz/embed/LNdnBRLC#KbLBVBhJQgWjEueAMjmB2iubx-rZtb1ET6uvG2LWZFk', 'Episodio 19', 'Mata el destino'],
    ['https://mega.nz/embed/KAlTzKTI#v3vK-ANoFOt2lFpSqvjy76G1piG8ipQihrHQ9cEQWYc', 'Episodio 20', 'Mata el eclipse de Shura'],
    ['https://mega.nz/embed/PY1nDbCD#xKIgKMwnWZXm9jo7qYzXRoi_tqMwRfbgtIBW0wlu09s', 'Episodio 21', 'Mata a la desesperación'],
    ['https://mega.nz/embed/OUFRxA4I#_rHefzhEowdsmEsiN-W7M2C-XjQTmhfR2XViG-9iXlc', 'Episodio 22', 'Mata a la hermana menor'],
    ['https://mega.nz/embed/3FslxJbb#C9p4e9n88oBTNVBMdp723DZPmyWud7zRvcoYIvFPbBo', 'Episodio 23', 'Mata al Emperador'],
    ['https://mega.nz/embed/Oc1glQjI#3yO7xZOcxEETjg-xjqtykwd5cgB1PQ8HkGPe8A708Jc', 'Episodio 24', 'Akame ga Kill!']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/AkameGaKill/Portada-Tmp1-Cap${index + 1}-AkameGaKill.jpg`,
    'iframe'
]);

const demonslayerSeason1Episodes = [
    ['https://jkanime.net/jkplayer/um?e=YXFtSG1oNytjVGRNQVVVQUdLZHpLVHJaYmFMWTdKVXJKYVA0dkJDWi8yc05Kd2NGcTJtcmRicVdRck42SURISzZ1aWJ0S3J2eVpZNWt6Z3FGeFdxOGc9PTo6m_gwcfwjcbu_wuiofKA1vA--&t=f47b47a611df8ce65ef10b826ed1ad2e&op=Mzk1NTU=', 'Episodio 1', 'Crueldad'],
    ['https://jkanime.net/jkplayer/um?e=QzBUQ01yaVlSaGdTTWxwUXM4dnZKL2tqSUw3YWVqdU9mRFY0MVVKRmxHbmpTQkhHUGY0bEVrbFliZkljUkNVeURNWnRxV0pPTHpHZkhJekVJN1NKM0E9PTo6zXyImVs3XadiOULPiSKFHg--&t=7fbe9bcd262e88e7dcede2bc52fbae08&op=Mzk2MDU=', 'Episodio 2', 'El instructor, Sakonji Urokodaki'],
    ['https://jkanime.net/jkplayer/um?e=MFlMc0pnSDFrK3R6MUtjSzZRbnA5Q3lRYkVRTXhQQUcvcDErSWRHK1lNWktZaVpnMEM5SnZ1UklRR3ZMWDl6UGd3STlsek5tMlBQdVhNcDNORTVWWWc9PTo6cePaRIJGCR3JQDYDM0MoQg--&t=bb4e0dfd6acf0e0ac1279445b598971e&op=Mzk2Nzc=', 'Episodio 3', 'Sabito y Makomo'],
    ['https://jkanime.net/jkplayer/um?e=N2R6bzNPWkExYVJHRTFUQXhxNmNqcVJwMk1xVDJjVndweS84eGJWTUhLV05qMDY3UVZWM1VjQ0ZqRTBQeSt0QlBKSkUycUNvc2VMY25VbVR6RWE4VkE9PTo6AIet2fGUctSan3Wn688imQ--&t=a528bca9b3e06f60ba610a7249ab99e5&op=Mzk3MTk=', 'Episodio 4', 'Selección final'],
    ['https://jkanime.net/jkplayer/um?e=U3FtUmxpUmM4NFRkOW1ud2JSWFAwUnVHbjE2U0J0QWFMVTcwOXJ4TVpyMGRVSE5rbEt0aXFSNGZqVDZHYWYxODQzSk1nQTREdWZkSm5Pdnl5WFpXRXc9PTo613a_q..YuM_IygFwwBw.4w--&t=667986c93812d47ecc3ad2ae4442b118&op=Mzk3NzM=', 'Episodio 5', 'Tu acero'],
    ['https://jkanime.net/jkplayer/um?e=a1g0T2Jpc0hmNjdMdG5vUWFZZHcwbEd2WlVLRGtRZDZHdWNPSmF2ZTVxMTF1R2JmaTVLTUN4UjB3cDl0K2o3RkdXa1pNOVhJZ0dEdDNVcThHSCs0emc9PTo67CAnJBk.wISdKDIZM3DbJg--&t=21b12b67cb6ff82b0d5e9e1d96d4b56c&op=Mzk4NDk=', 'Episodio 6', 'Espadachín con demonio'],
    ['https://jkanime.net/jkplayer/um?e=K1ZpdnV4NWQrQVg2eXNtU3d3TjFDVUIyZm4xQ242bXU2c0hISWFGTHlUSDNwRnZBNEdrZ1JiNjhPNjJQOVhoV3ltWmhkaEVpUVFzejRyTlVYVVk5K2c9PTo6QBPACHgH149fROnGROzPUA--&t=f5a05c19630b052f3fb3e434a0a175ea&op=Mzk5MjM=', 'Episodio 7', 'Muzan Kibutsuji'],
    ['https://jkanime.net/jkplayer/um?e=NzFMMEo5R21XSzI0clpqYnlIWFlQL2xVMFkyL3I1ZmpQb3creU9ReHNDbWMvYjBnWlFTUGRjRy9PT1h2ZnNjck5aTGZIKzBHV2o3UDhmTzNpa2ZscWc9PTo6hQF7K5sngGX5BtNOFXMsNQ--&t=3724f1b309d02b7f475f69eba8107ae0&op=Mzk5OTU=', 'Episodio 8', 'Cautivador olor a sangre'],
    ['https://jkanime.net/jkplayer/um?e=TUVRclEwODE4RGU0OFNUdWhpQWI4cG51NGF5eVFncDNsQUVtWFBoSVp6djlRVWZuVWh3Um1FSXVDVkR4V3pvc2duY05mamsxM3phU2FGNVMzdzVUQVE9PTo6CNvrKoh2YEH4P3M41DKNFA--&t=82aa20a74dbe3e0e85c23ba8d645d3ce&op=NDAxNDU=', 'Episodio 9', 'Demonios de temari y flechas'],
    ['https://jkanime.net/jkplayer/um?e=QnB2RVBPSGNLWmkzdCtYd1N4dHgwMWFvUnlKRTZCcnh3bGVVNkJkUURKUUN0d1R4Y2dQWXlEYjhhOWlBaWdsTk9hUTUzcnpZMDJTU3pYckJDQ1pncEE9PTo6cJj2Rp.456.1m0w8.UKLaA--&t=894518b12e9073cc763965a852f65788&op=NDAxOTE=', 'Episodio 10', 'Siempre juntos'],
    ['https://jkanime.net/jkplayer/um?e=NGZBK2hNNDh5UWpVUnNGOE9CY2pDWDdHdWVLaklWbTBmWENEWTcrQ2RtYmF0RmlycEpVSXI1OXBtek13UkwvUlpwQy9XbUJrNGo5Q3FweDZndC9IVnc9PTo68OOTRSjVYG0F71_Ant5sNQ--&t=b8bb2a1d59f4ecae0646fc039b75391e&op=NDAyNTc=', 'Episodio 11', 'Mansión Tsuzumi'],
    ['https://jkanime.net/jkplayer/um?e=a3RwK29IUGx2cmhFU2hhUDBhV2l0azE0alJyVUVWL1hHbW1ablR3TmpPM2ljUHE1NmNiMzEvNTFxcmZlWXRxdWRvZ0xaWEEwSjI5LzdHcFhRQ1RSVWc9PTo6omtSFTRrhlLTcTZf0DB2Ww--&t=21e7b6bc0412d4aaaf4158fdacb1d1ad&op=NDAzMjQ=', 'Episodio 12', 'El jabalí muestra sus colmillos, Zenitsu duerme'],
    ['https://jkanime.net/jkplayer/um?e=Y3U3REtWcG5OK3JhN2h3RU9SaXRpNklhbHpqMGRQR3RXL2thK0t0Q0FsckJjeXFCV25oSzNHL3NEMmduV2VVZ2J3VWF1NUtEak90eXR2TEN0K2lHelE9PTo6D9iHC7YxzcDgGEHtXU7wmw--&t=0113c64ca9d9475255c5d0d83e6d2367&op=NDAzNjM=', 'Episodio 13', 'Algo más importante que la vida'],
    ['https://jkanime.net/jkplayer/um?e=NENYZVJrTHFYaGdKOFJYcVJGU2dmNTY5UFh3YjlleEJ3M0NCVkhYb1BRdjhSRTlwL25aUis3UnNuY1RCeFNQODBpNnpaSnlWWlhMdlhkbGJ1eFJDOWc9PTo6Wsb7hEVg7G4vZQ7LqX.Pyw--&t=a61d04c4458e15ba36380b95e0a76780&op=NDA0MDU=', 'Episodio 14', 'La casa con los crestas de wisteria'],
    ['https://jkanime.net/jkplayer/um?e=TmpBU2RjUy9zWE41MERQMG5VeGRmTjRVV29MQjFEY0h4VnNyaDJ1L1pKWGx4czhkSkJwblkvVnJIaVB6K0FzRjFuSURhdVhUK3FvTmpzVDFmSDZNaEE9PTo61v7L94XhwzkZacx7CVc23w--&t=54ba2d06c11229826ca8143a2933df73&op=NDA0ODE=', 'Episodio 15', 'Hinokami'],
    ['https://jkanime.net/jkplayer/um?e=R1dhM29INTh3dHg1RTlYV1Z6ejNhMExCakliWm1zWmNPSjBjb1ZBVjc4MENJcVlucDJKTWltaU5YbEpvVXAyeUdGSHRlUkd1ek8yNXZOZWNrM3ZqZ3c9PTo6I67u4mcLUDkbPxUSNT5PbA--&t=5625c3aac56c198ad77688028e08a4c3&op=NDA1Mjk=', 'Episodio 16', 'Dejar pasar a otro primero'],
    ['https://jkanime.net/jkplayer/um?e=S1N1QnFzNmQvUEJiREJ0WkhxUXl6R3dxUW41OTJCSC9ZUHdYZlRyNUloaXN4RFlhSHc4WVk5SitYOHVLOXdQby9BU3J3TTd2c040WWsxU0t0UzJ2a0E9PTo6JMCkMZlJ4WRrBb5nBQbzXg--&t=0a08889a1d62bbd68371b0b4980a09b7&op=NDA1NzA=', 'Episodio 17', 'Domina una sola cosa'],
    ['https://jkanime.net/jkplayer/um?e=Q2pQRjdKMGR6YXRpWEdtc295SU8yTmd1TFljOU9JdDJ3RjltTVRiek9qcXVoVmxBdkUvSVkyYUtCUW1VVmNwZXBCMnhTQlZtQjVlK0RYd2xtVnBjbGc9PTo6c_9l8A_aJWraZQ3jgKWQjA--&t=fe75268bb28b40ef89979d0ec2c54497&op=NDA2Mjc=', 'Episodio 18', 'Un lazo forjado'],
    ['https://jkanime.net/jkplayer/um?e=UGVleUxFK2pLYjJ0b0QrS29JMFhDN04vbVRUdDBMSHdXTWZibnZ0WDNQUm1GdUI4QVhDWXFBWlhrUGdMNlEzSFgyWDNnTm1QL0xxclRzVlZwQW1RbFE9PTo61cMo6fZ48BoQcbaYaSjG_w--&t=9c2bab00442da25569e13f04de9ffae5&op=NDA2NzU=', 'Episodio 19', 'Hinokami (Dios del Fuego)'],
    ['https://jkanime.net/jkplayer/um?e=NFJoNEtDdXNKYUpnRlRhRmx2dVdueVF2UnNRb3FBTWtnLzlYdy9XeHNmSnlrSXcrQjZJeU4zZUlqb3IrYWJMUDZ6cnRUZEVlY0xRRFBhUGV6K3ptU2c9PTo6Y6i_MfqMsSmifmzmM8eJGg--&t=e1ad6ffc6195076ffef9077d6f57e4ed&op=NDA3NDY=', 'Episodio 20', 'Familia falsa'],
    ['https://jkanime.net/jkplayer/um?e=TVBaTzBxV3dKTXJMRmZGTjIxTFoyV2h3TnVneXkwQ1FhMndXYjA0dlJCVnFJOURyclg5Tmlsa2dpNkxDN1Y4WUFDaEh2VTN2UURGK1pLNXRRTVQyM3c9PTo6utvlbLC4IIU.0qJFNoe_Kw--&t=4744cb82bfdba1fc70703ccdcbcbd03d&op=NDA3OTI=', 'Episodio 21', 'En contra de las normas de la hermandad'],
    ['https://jkanime.net/jkplayer/um?e=SXUzZ1hIZ0diTDNDTHlFckh2akpKMVVMZXZkQXVBdjJGVDd1czY2SGRYNUVid2hhUkdoQWRaaFRlNFdJZ3owMVNmNTJqOEtRSnprbDVOT09GOWVWRXc9PTo6CVrb3hIp6qQFvb9ZIrbpNw--&t=ea2348dbd72165cc69aa7c26e89ed8d9&op=NDA4NTA=', 'Episodio 22', 'El patrón de la mansión'],
    ['https://jkanime.net/jkplayer/um?e=QWdxMmhibFhuNEVORjdHbHV0akdDOG1OSjBtRXVVd2lNL0ExZmgrSVBRZk1oWkowQmtFb29zOWRyck83TU1DcUFkWG5sZ3YwZ3kwUkpXclRiWll4K0E9PTo6mSDGEgm_Iya91IKyAmtqWA--&t=aa839cfb74f9e5ae2a89572a0093dd58&op=NDA5MDA=', 'Episodio 23', 'Reunión de los Pilares'],
    ['https://jkanime.net/jkplayer/um?e=R3JycVVuRFFtK3RiOHN3MkJkSUZMdksyeGNYL2xENHdDUXFBZzFOdUFRTVhRVmV0RFgzZ0RSWVpjOVZhc21XWUx5bkh3VWh0cHBrVWJNZ0d0V0UzeVE9PTo6pXERshVINUFRTmhgP1_OlQ--&t=d256e49359ddb82dc0659cb2061cb2ee&op=NDEwMzk=', 'Episodio 24', 'Entrenamiento de rehabilitación'],
    ['https://jkanime.net/jkplayer/um?e=TzhZUit6VFpwZ2o2M2Z1c0ZGMXdPV2VCV0Z1L1ZOSlhIYWxyN2FjUnlFVzFrc3VZQUl0MC9kTGhvOTE5QndXMk1vRzd3RDFZYmM5cThqK1gwMUhxeUE9PTo62XjbDmYO_a..FdGLceQyww--&t=d538fafd2c832e8cb5d424d68dc7f8af&op=NDEwODY=', 'Episodio 25', 'Tsuguko, Kanao Tsuyuri'],
    ['https://jkanime.net/jkplayer/um?e=YVUzWnNDTmZSVHBBa2daK1A3bEt1US9QRWZTMUpkMHVXNmltWERWZkdvT1lsZG5oSldEcm5pSlZQNzQyTkdoMGgrUTQrenBpbi83cWl4Q1MxSDNpd2c9PTo6KtDuuidoedgGFOKUOEahIg--&t=4611b8ff403bea67637c3f1911940668&op=NDExMzE=', 'Episodio 26', 'Nueva misión']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DemonSlayer/Portada-Tmp1-Cap${index + 1}-DemonSlayer.jpg`,
    'iframe'
]);

const demonslayerMovie1Episodes = [
    ['https://mega.nz/embed/0rsl3Zia#4wSsnrh_rYps6VsO_XeB1zDeNsv3UqMKLMEWFxGXM4M', 'Opción 1: Mega', 'Demon Slayer: El tren infinito'],
	['https://jkanime.net/jkplayer/um?e=ZUZieTd0RTBkRG44N3R2TTNHUThoUXdBc1c4bjdrLzY4emRwSTd4clJmSEhjei9SM3pVMXNHRnNuZWVGbkdwUVBrTjYzc1lNUncxYnRCTHNYa1I3ckE9PTo6RBs9KJcoQrVllKdYj2fPww--&t=147daaa4d649f65f12a78c8048338128&op=NDQxMzk=', 'Opción 2: Jkanime', 'Demon Slayer: El tren infinito']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DemonSlayer/Portada-Movie1-Cap${index + 1}-DemonSlayer.jpg`,
    'iframe'
]);

const demonslayerSeason2Episodes = [
    ['https://jkanime.net/jkplayer/um?e=M2tmQkVlZG1hMGZrNGU3V1p2VmhSZzQrUmIwNXkwSHg1bDd6SFc5TDduU3liYTdjT0kwMG1GUFVwazErOGxRWTF6SFRBNVlmN2NLa1RqMWtJZVBhaEE9PTo6GA3NXt3Vp6QHmTrjzmb9Nw--&t=4bf9decb991cfa0ff9d26f47f2e807b9&op=NDc0ODU=', 'Episodio 1', 'Tengen Uzui, Pilar del Sonido'],
    ['https://jkanime.net/jkplayer/um?e=S2lKL0wyaFp5NXZOMHBITUxZU2VZTHZtNTFDSlA2ZEM2ZU1JcTJmbHhnVWJ5dDRjWkVGckhhdUJ0dk51Qng3Smt5Ry92K2RmaWtpMzlCMW1wTDlBQVE9PTo6Q52C1OtcgJrU2Wv2tiGBlg--&t=6644eaf8176718ed4e1656418ab3628a&op=NDc1NDY=', 'Episodio 2', 'Infiltración en el Distrito del Entretenimiento'],
    ['https://jkanime.net/jkplayer/um?e=b3lEb1lQcVMyRFJ4V0hPWjVSSDRsQmVZRjZVcXlUQWpGR2lwenh4YkV6TWFFWi8vQjkraFFFS0NWRERTUEF5c3NoV296eG03WW53Yml4S0ZDOWtBWFE9PTo6YJkM_IdpE55HAIr1YULPkQ--&t=dfdc927d9542600572d2a16e41d6f005&op=NDc3ODI=', 'Episodio 3', '¿Quién eres?'],
    ['https://jkanime.net/jkplayer/um?e=dXZNakZudTBUT0NqcjVlbnkvZlVPUWFiSlJIQTA3MVNKM0lHQU53Uld1QjNOSkRZNzB2OHdDZ1VTa0FrUWJYSGtuWG52Wis3Rm84em9oQUJiY2hFeXc9PTo63LyZ.zUh7c_I26Uh1FezLg--&t=df1d7cf1ec07fe3f4f3883ea11abb992&op=NDc4MzM=', 'Episodio 4', '¡Im habría!'],
    ['https://jkanime.net/jkplayer/um?e=WjdLcVN3S3k1SGsvMDVRT293cG1PdEhDeElzM0toaldmZmsxZVArRWxqL1VwQ0JwWUVsVk83eWRsVDlmOVhyd0djQmpXTnEvN2FhVGFCVnFxaUlWd0E9PTo6i8RT5UfTPiO5pvX19e4i6g--&t=aae86d5288085041f684fca44422f4ca&op=NDc4OTg=', 'Episodio 5', '¡Recuerdos acumulados!'],
    ['https://jkanime.net/jkplayer/um?e=b1BSdmRWdFBMOUVMRWI0NGZOamZod0NSd1ZHcVlvTFE0REI5SE9vcXZkRW5mcVNPbVpGVWZUZDgraHJJNkxGYXJnR1o2OU4rV1VXWG9QckhWcnVlWEE9PTo6ENxGfjEaKjX5YLb3AlJkYA--&t=ade022cfc5a5e59959b5df2e4c0cd06a&op=NDc5NDA=', 'Episodio 6', 'Superando los límites'],
    ['https://jkanime.net/jkplayer/um?e=Y0lLUGlJelJzTjNPODJrcyt5Ykl2M0h2N3pCdVY4UDJyY1BGdXY3dVBGVEdiTzZUMlY0SG1xaU16WkVEVWxDbnloK1ZaTTcrMHQ2OHZ4M0JXa01CUVE9PTo68qC34JFcsDg3qHLVefLk0Q--&t=5559e615e9ea5b54784524d145068c28&op=NDc5ODc=', 'Episodio 7', 'Transformación'],
    ['https://jkanime.net/jkplayer/um?e=UTdzYWUxZGdhbzRpRzVMVU9LUnB1cUozaW5xZU9kc2pmeXAxa0lJNWNuS1ZDalVlS3ZWd0ppeGxVVDcrS1pSeEprQThZV2xZZlVlTlVZemhkZlBpTGc9PTo6zSzx.M9J3p30LKObnC6gmQ--&t=1f387bc2a9c80a56bee76617742bc094&op=NDgwNzA=', 'Episodio 8', 'Reunión'],
    ['https://jkanime.net/jkplayer/um?e=TGtkbC8yTGxnaU1OcHp6Qi82TjlDNHBYMmhyVzZCaThPUllKaXdCR0dGY0F6aFprVy9RSHlJVlJLcGpoQVZGYiszaytKYWducTJmWHJzb1RyRUlqWVE9PTo6Ory3MoV7XVE8r1Mt_75y.A--&t=7fbb984af657be4635b59d346b7ab799&op=NDgxMjk=', 'Episodio 9', 'Batalla sin cuartel'],
    ['https://jkanime.net/jkplayer/um?e=YkVWUEdnZ05qak1sZlZpYnBkT1ExSGJZTmt0eVJkMTZlYlV3MHR5WXRRcSsxekpXUlNWVTdZT2xFV1Y3YzBUL2ZGVm9oQzhpZzVpdkU0QlZRVnB2Y2c9PTo6ksHmc_ZCDbKAAi.5xIzKDw--&t=32fed8b2d7ce5d690373e6cf309d5282&op=NDgyMDI=', 'Episodio 10', '¡Nunca me rendiré!'],
    ['https://jkanime.net/jkplayer/um?e=dGxWSHFNaTZlTzdQYkpBdG1vWmx5WEFZVUlYSWR3KzJ5NXNIWEY1amI2cE84VHVpT0w2blZBbkc3RXJucjBKc2VKM3lyWnlmdldPZmVoT2tRcjJiMnc9PTo67b4mYIz4I0utOhO70fMHSQ--&t=3f471e0e587a9e83b568eb6759d1fa15&op=NDgyNjA=', 'Episodio 11', 'Sin importar cuántas vidas renazca']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DemonSlayer/Portada-Tmp2-Cap${index + 1}-DemonSlayer.jpg`,
    'iframe'
]);

const demonslayerSeason3Episodes = [
    ['https://jkanime.net/jkplayer/um?e=SWwwd0xXcWs2Qy92NGk0Qy9pa1lmTjhtNjVqL3k2SnFiakpMZkRwaU41dVBqYWpKRHVJSnpDU0xNRG1YZlFBUWZtb0hlbmR5Si96SXpQakw3VkpENjA0bFFwcks5MnZaSXh3eExxT1o0TGc9Ojr4ZHEjhp55AQXqJ0G7qxR_&t=49fffb39831addd8927601020ae12798&op=NTIzNjg=', 'Episodio 1', 'Alguien de hace más de doscientos años'],
    ['https://jkanime.net/jkplayer/um?e=UDJ4azJhTFBoZDQ5dFlSVk0zMU5ObTJSNGtHUVVWQ0txRE5hMGlnbk1vMW84Z2lRZGIvdEo3NFI0NE0yWENVbHkwMDhXRHBXQzkxdHlOcXVjc1gwOXlRdEVoSFk3Y3ZkNjI0dGM2b0owSHM9OjoDWL6raX18.h8WiQxAASjo&t=33b20fe22cdd73462bbb3c64d1913097&op=NTI0NDg=', 'Episodio 2', 'Yoriichi Tipo Cero'],
    ['https://jkanime.net/jkplayer/um?e=dmJPWUlaZG1jeVZVUERJOVhLTjgzejIzd0lrS01GSlhHRE5xS3ZIQXQzOUYwV09wTFcrQ3QrUlpuekdQNzZVTzNQc1hxbHc0L3owanY4eFR0R1VtSEZqYlRNZHIrOFNNWG84b2RHc0JVU009OjpjsH_VZ0XANw2_lelvHoWD&t=8958d265a97f8827937c06df92eeb047&op=NTI1Mzg=', 'Episodio 3', 'Una espada de hace más de trescientos años'],
    ['https://jkanime.net/jkplayer/um?e=QzA3SmhDUSt4allSMVhmcTVrVFJPTDhFV1pUaUx0ZGMxUDRQSFZPYW1kTk9XRmx4Z2lQdlZpNDBDSUNNTm1mWjN5VE5jZGRxZ3Z6bkNDcHIwUnVITDJWQ2tlVXkxNE96enROYWxGeUZYNEU9OjpGaJUFZkxzd4omrPMrZEU9&t=ebc8a84695fd09018cff995751bc0e70&op=NTI2NDE=', 'Episodio 4', '¡Gracias, Tokito!'],
    ['https://jkanime.net/jkplayer/um?e=M1lWU1dBNk9pVFdwcEdoVmF0T0taQzFhV1U4eFBCdGVjNUZLcEhEL1hkUENmNXdtSGh6dXFaUnlJTFVQWEpDUHVnTzluQVdjUUhBMmtoMEIvZS9qQUE9PTo6Ef9WL5GdOd9gUb.nRVUQkQ--&t=b75193dc38b4ff2cb2d40f5cd724602c&op=NTI3MTI=', 'Episodio 5', '¡¿De verdad vas a rebanarme a mí?!'],
    ['https://jkanime.net/jkplayer/um?e=V0hBejNuUnlybEVHaFZxdlBYNDYxQ0x4REdvM0JmcE94dDBraGtldjVCWmpjT0ZFQUNPU1JwZzR4YmxFTElRN3pmRzl0Q0x4RkZ5djFWVm5oV1pSMXc9PTo6c.v5SBVpMqDB9u6tSh4W7Q--&t=cb340ada88928fa323601a948e2a740f&op=NTI3Nzg=', 'Episodio 6', '¡No voy a rendirme!'],
    ['https://jkanime.net/jkplayer/um?e=d2NYLzN3YTNjSllPQ1ppS2dSS2ZrZGlQYVlQY0x4WVN6emRDOVgwMXQ3eHJXV3pSd3FLZ3dZclhOWTl4cWpFYlh5N1RHMzg3b21zaXhhSEpnRU9TU2R4NUJvN3ZYZUhuWkFWRExoMEtUTnM9Ojrjabc0ElV5o0AYzRflUo.i&t=a31d354046b2c5237c81cad71589c864&op=NTI4NTg=', 'Episodio 7', 'Unas marcas temibles'],
    ['https://jkanime.net/jkplayer/um?e=MmJHMCthM05sT2ZGeUZqaFNxU1FaL09WS1dmeXVPM3cvTkJvVXVjM3lPUlFmYTNmR3hwS2x4NFIyR29HQThFaEZmejFJUFJaUnJ4THdwWlI5bUxQWFE9PTo6.lCoheM7ch_1_ZmD1nDy0g--&t=7d87fdec3a9afe3e1381b5f1928150f1&op=NTI5MTM=', 'Episodio 8', 'El punto de ebullición del cazador'],
    ['https://jkanime.net/jkplayer/um?e=OFpwb0hrYVFiTFRXZ00yWGdEcHZIOHRtUVVoRFJQUm84TmpnZmdFNGhvR3UxSWV3VndVRGxGNkx6dXoyNXhVVmVIaFJlZlNWekhOWE5pNkRDQXk0MVE9PTo6VVus5J91.jX_VN6O1VEuew--&t=6d42cc57901fe8925a6025743dbaf3a5&op=NTMwMDk=', 'Episodio 9', 'La espada de la Villa de los Herreros'],
    ['https://jkanime.net/jkplayer/um?e=eVBjaDBSTHlhSlZWUmUvZERIZ0R0NnlQN3VqdkdHZ0RXYk4wQ2FvZElwcEN4VGtncGRza3F4eTdxR0lDUGpoOCtUMlRVc29VYmVvRmhxM1lkYU1TQmFyeit4ZjdnQTlOc0JXMW1Uc2ROQ289Ojr4XdF.bC39Wpgx0_b1Gjm5&t=e3bb472af57d167859c07286040abbf7&op=NTMwOTQ=', 'Episodio 10', 'La columna de luz de la mañana'],
    ['https://jkanime.net/jkplayer/um?e=YWFaeVZRNzg4NkF5Znlic3A5VnloaXFtRVhpVTVwUUhUb2MvcHRMY1M1OUVqVjQ3M3lGM2RFZVU0QnNIU21hOUF0b2c3QzRxdzk3Mm84RU1kQVVVR1E9PTo6CEYuRicjKP9PdjpGyRyBNQ--&t=ad9a02bf88eb35dbd5b3e2f933c9c507&op=NTMxNjA=', 'Episodio 11', 'Un lazo que une: ¡Amanecer y primer brillo!']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DemonSlayer/Portada-Tmp3-Cap${index + 1}-DemonSlayer.jpg`,
    'iframe'
]);

const demonslayerSeason4Episodes = [
    ['https://jkanime.net/jkplayer/um?e=aWZDZk5MczAycnJKcVkxb1V2VGt6N3JKb2ozQzVjMTd4ODVNL010Yys5SlFUYUpxdGM4WTNVL1NNQk1DV1ViTFgzS29uNmVUb3U5ZFYzN096VlVLQXJRKzVTcERDbUhQdmF5Q2FSaUpHcGc9OjorO.styOO9X4FypB6KIDuP&t=7af4005e60a2bc048519574bb14dfec2&op=NTcyMjQ=', 'Episodio 1', 'Para vencer a Muzan Kibutsuji'],
    ['https://jkanime.net/jkplayer/um?e=YW9tN0loY3UvcnM2bjBQNEkySnE3UmNuVkRCaE5meGkyYjluc0dIRWt2c0tpRWVrYmhkNmJRWlNUWmJDdFNkcnNVY1I2c2ZCMUo2R01Nb1doMDhVZG1DMEg2eVhIMmVtTjJSaG9rV2xvYkU9Ojqs1xOJrLR6LCFlbq35J9be&t=b9f0ceb7c702db436f5802d2d59bb1a8&op=NTczMDQ=', 'Episodio 2', 'El dolor de Tomioka Giyu'],
    ['https://jkanime.net/jkplayer/um?e=bFQrbkFhaGpicTdkL0FISExMeHQzUkpSNHhRamZyTW1LYkVVK2ZCRVlMLzNPUHBCQjVldFRFVFpwb2pHZm1pcWhaVlI0MlZhZGgzaVpLWGVUQ1lFRmwzWTlFdENUdmhiQzhZUWhTME5tVEk9Ojq_fZceyT2U_45tekQu5Cyj&t=1356fee5d793918d6953c73761e91f7a&op=NTczOTU=', 'Episodio 3', '¡Tanjiro revitalizado!'],
    ['https://jkanime.net/jkplayer/um?e=U0VBT2VlcDdXdzduNUtaR3NXcVN1cDFnemkyU0tEWVYzTUE5aHl4c2NnNTBqb0p0VnJheVNJR2lPb2xHcmt4NStlVUp4MytEblUyMFVOanEyMXg4YzJvV0hoQ2kvUHh5YkJ2emRYeVdvWWM9Ojrye9r9CoHTla7OHeQ5wVJ3&t=1756de8854c866aaf9e81db33a15028e&op=NTc0Nzg=', 'Episodio 4', '¡Confianza en sí mismos'],
    ['https://jkanime.net/jkplayer/um?e=YmMrVVUwT2RST0xsMWQ4YW5NTXlKeHhhK1lWYjVzZ0IzaWJPV2VONEk4NmYrQXdnQXBjUmdIUmlXWE1vRTBZQlpyODZ5dEpVaWcwWmx1T1lBL0Z2bW5IYkVVS1ZGcjFWNlllWUZRK0RWT1E9OjpVaS_Eux0IE8LPMy.bEXsr&t=15da481965716c40aa67aee1fe6535c4&op=NTc1NjU=', 'Episodio 5', 'Comiendo con el Pilar del Pilar.. digo, del viento'],
    ['https://jkanime.net/jkplayer/um?e=dmpQSWV6WHI4MzZPaEFpNFo0QjNUT1N1NlN6VWJ6eDR0QjNWMWplYVg3cytKZjA4ZDRZSmVJSUZYd3FkY2M5OTJjTC9QbXRmUlNFY2R4TEdFdTVha1MxU3hZTGFjK1JHOXp3cG5Fa08wLzg9OjrgJ2SIe5OSvKUjHaKor3BM&t=599e371a7d3db53de5f1bd5d0aea93b8&op=NTc2NDg=', 'Episodio 6', 'El clan Ubuyashiki'],
    ['https://jkanime.net/jkplayer/um?e=VVVhQ3JkYlQ0UFU3aVNWSXpIMWFEYnpZMW9iTkNWZkJjOXFJb2E3QU9ZWENRVHVsUmNsclpxQVNEZXVOM05md05lRnhQWmhCS0RRNWdiZGlldmxWek5aMFVsSERXZndUMzRWZkR0ZlFRT1U9OjrTO9XClfVW3p2.qMVqyhrp&t=f4fc00dbbb350fe518a507e3c3b0ca28&op=NTc3MDQ=', 'Episodio 7', 'El enfrentamiento final comienza'],
	['https://jkanime.net/jkplayer/um?e=L0Fzd09ZZ1pyTWdaZDg3MENhVkFycVV0WFlMbVIwaTYwM1gxbzgrYVhMUVlya3Zia2NIb1dJRjlFTlNkNWtWNE1tOFNlUkx4MGg2QnFpYmduOHZPZVNCNEhDYkZnc0lBUkdjN0ovZDh1Unc9Ojqd1dgzIkYgslTIJ3QmcPoX&t=1485381780996a469258a97cd4232bc3&op=NTc3NTk=', 'Episodio 8', 'Los pilares se reunen']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DemonSlayer/Portada-Tmp4-Cap${index + 1}-DemonSlayer.jpg`,
    'iframe'
]);

const demonslayerMovie2Episodes = [
    ['https://mega.nz/embed/VrRQGAjI#_Mo5brvL6F1n57DLTxwsQxLs1GnUPI7a8zKZ2vdG80U', 'Opción 1: Mega', 'Película: Castillo Infinito'],
    ['https://jkanime.net/jkplayer/um?e=bTJIeHF2R0pPbGxiejhVVjBabmsvY3ZIVitpMm5VeVlDVFZYMkkrMTFPM3U1Qmpsa0NJTmlXNmJhVWJLbmRla2xuZmU2U2FsYzdYeGg2enEyLzJQeDhvRjFyQmhkQzBJSkRYa20yUS9GaHdUUEk0S3hHTlA1OXFFMklYa2kyN0Y6OmTOQ.AaCPF_MR30Sb1dsmQ-&t=fe022b3f50bd808a87bacd434f9f670a&op=NzA0NDk=', 'Opción 2: Jkanime', 'Película: Castillo Infinito'],	
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/DemonSlayer/Portada-Movie2-Cap${index + 1}-DemonSlayer.jpg`,
    'iframe'
]);

const souleaterSeason1Episodes = [
    ['https://mega.nz/embed/ovNEwLIb#pt6DsMe0il3RTI3mIWEW50UrJrkDTE6RRBoo_z3TFno', 'Episodio 1', 'Resonancia del alma: ¿Se convertirá Soul Eater en una guadaña mortal?'],
    ['https://mega.nz/embed/FjtD2Ajb#da3twGWw7tPK4SJkLMaSFQKSL1Zrg75njfvyDnwKQT4', 'Episodio 2', '¡Yo soy la estrella! ¿El gran jefe aparecerá aquí?'],
    ['https://mega.nz/embed/tn9DVYwR#p9dT1lccq-bSpXHTkUS4I3lOoqF7Rihu7VTp-GrirSY', 'Episodio 3', 'El chico perfecto: ¿La magnífica misión de Muerte the Kid?'],
    ['https://mega.nz/embed/FyUWHTDB#sGs3OrMYubkvDu0VPJQOPh-dlAWAKbpO9NvRKnSUnBM', 'Episodio 4', '¡Ataca con el Cazador de Brujas! ¿Una lección de recuperación en el cementerio?'],
    ['https://mega.nz/embed/x71wiLJD#ohakkwDs098fkgTtMNnL57F3Oqfz-yYV2x2aHR1rCDQ', 'Episodio 5', '¿Forma de arma del alma? ¡Da en el blanco con el alma de Tsubaki!'],
    ['https://mega.nz/embed/M29DWaBB#zA-we_9Dk22vpe73_1weKBD_3NA_0kXVp7JqEofVftI', 'Episodio 6', 'El plan del consejero: ¿El hombre que murió dos veces?'],
    ['https://mega.nz/embed/VaFyySCS#jsOC2Zn2F5M-IjvcgTrPKL8k5TK1xk3egkFCk7j3OWA', 'Episodio 7', 'El terror de la sangre negra: ¿Hay un arma dentro de Crona?'],
    ['https://mega.nz/embed/pK8gjRIT#Rp_4WEgBUs3vY59glnehcO38r6dDG56Crubt9Sqwbh8', 'Episodio 8', 'La bruja Medusa: ¿La poseedora del alma más malvada?'],
    ['https://mega.nz/embed/1WlHyQKA#-0KoKChjW5kRoIbWtuqxS06lW_r09TBxXkf3ux0LTcs', 'Episodio 9', 'La leyenda de la espada sagrada: ¿La gran aventura de Kid y Black Star?'],
    ['https://mega.nz/embed/JGMQXALC#Xf6xxQrLHP-vCyyTvdLa8axH5oSJU21miTp3CDSsVws', 'Episodio 10', 'El desafío del Excalibur: ¿Tenerlo no es un problema?'],
    ['https://mega.nz/embed/UO8CDCgS#f3qDWTErsQ-EhweGT8FkI2UlKt1zkFaZ04w2YOo3P28', 'Episodio 11', 'La admiración por una flor marchita: ¿Un corazón que late con valentía?'],
    ['https://mega.nz/embed/NPsE2AQZ#vJ_Jth7Df5CGykomgqif9j_8GG8F9194vX0CnloZhC4', 'Episodio 12', 'El tren fantasma: ¿Quién abrirá el corazón?'],
    ['https://mega.nz/embed/Ze8VULRD#_e3FJCks9sNDrwpEZoxv8lkHW3-CFc47XgQ8wRdM1ys', 'Episodio 13', 'El espejo de la bruja: ¿El alma que no puede escapar de la ilusión?'],
    ['https://mega.nz/embed/sOEE1ZDC#yaqR8UFLJG6M6K8m0c1Mzd1Cle2E-UmNaOZa7Vj8zFE', 'Episodio 14', 'Súper examen escrito: Latidos, emoción, nervios, ¿en serio?'],
    ['https://mega.nz/embed/oD8QDJgI#Xr2VNzwnO1QJvGn4MJG8dV_S2Cfuw9cdzCH7eCrdLQY', 'Episodio 15', 'El eclipse lunar negro: ¿El poder que devora almas?'],
    ['https://mega.nz/embed/pSUDlTLT#ARrrrOZ5jYBZmR_dChAAJgxE7JGFqGE6iTDdq-FSRTg', 'Episodio 16', 'La espada sagrada de la tormenta: ¿La gran pelea de beber cerveza?'],
    ['https://mega.nz/embed/NTdGSQoC#XsYFxcTRQgprAluTyS4OYr5pdDvRlccxrBxeV2cHncY', 'Episodio 17', 'La asamblea escolar sagrada: ¿Protegiendo la escuela de la pérdida de vidas?'],
    ['https://mega.nz/embed/BGtBHRwL#0VYZd4on-6b8Bywei9bLq76x9i17xoCBNGNvsBegaTM', 'Episodio 18', 'El barco de la pesadilla: ¿Quién se ríe en la oscuridad?'],
    ['https://mega.nz/embed/NCdnFRSA#tCY7ntOwNwq_Clg8lo_XMVBxyYm1DdXzwbDQzEA2W1w', 'Episodio 19', 'El encanto de la espada negra: ¿Comienza la batalla del alma?'],
    ['https://mega.nz/embed/lGtwyABS#kMyAZmxihS8S7mjanuL4MruTT3G2r8ApzlLCsDYXK3Y', 'Episodio 20', 'Una melodía flotante en la noche: ¿La sinfonía de la muerte y el dolor?'],
    ['https://mega.nz/embed/NT8DkAbI#pFotBTJ5tss4wLtcj-G5GEFYIlogOhKeBUFZORAtqY8', 'Episodio 21', 'El desafío de Crona: ¿La resonancia del alma de la sangre negra?'],
    ['https://mega.nz/embed/QetxhQTT#O4tUcAd1N1XbWbKAb104LgZ4c3lmPHGCOl3Teu8HsNw', 'Episodio 22', 'Vivo o muerto: ¿En la grieta entre el renacimiento y el deslumbramiento?'],
    ['https://mega.nz/embed/8CVywahI#eSiIldiNJBYJZeX7k0I00GNEgaT5zHvz9w1cLbatg0Y', 'Episodio 23', 'El refugio sin aliento: ¿El hombre inmortal y su trampa?'],
    ['https://mega.nz/embed/4SUiWYAY#BjA_lkJMOqivkMh5civxdPnIEq6WDsDyWQSUpGkwmVo', 'Episodio 24', 'El combate de los dioses: ¿La batalla en Ciudad Muerte?'],
    ['https://mega.nz/embed/4HlDnKwR#Wku88cYnmbRNNLQ53OsGQlSCA5Dis_dmHVkwa-lvFdM', 'Episodio 25', 'El festival del aniversario: ¿Listos para la lucha a muerte?'],
    ['https://mega.nz/embed/lS8TzIDb#i0sdmxPCAu9FCe7WLMWs7iqJYjINBBJcfl3ifk-QUgA', 'Episodio 26', 'La alegría de la felicidad: ¿Tener un alma pura?'],
    ['https://mega.nz/embed/0K1iDCwQ#b2ubbKe6Ld6IJJI0R5PP-IMMXLNEhqlS1LG_HS5i9Rg', 'Episodio 27', 'El jolgorio de los 8 principios: ¿El gran estilo de Black Star?'],
    ['https://mega.nz/embed/JTlgGKyC#DThtSlA9KVshY4gmectWU4lbO3bsPcZakP_c9e38kpw', 'Episodio 28', 'La espada del demonio: ¿El secreto de Masamune?'],
    ['https://mega.nz/embed/Na0zgIJJ#49zO8rkkvbSWHXY3vtMFGzAhODqoziy2cC40mry4vDg', 'Episodio 29', 'El despertar del estruendo: ¿La resolución de Tsubaki?'],
    ['https://mega.nz/embed/ZKMHUDiS#22r0Iv49VYauZqwr0CRllhLqwbqp5vHKk02uprDouUU', 'Episodio 30', 'El tren de la bruja: ¿Huyendo hacia la verdad?'],
    ['https://mega.nz/embed/Zed2yZoR#8_y3_2uWGpkP8YthgWSs8RNRCHxPUFGqnkBKMEe2V3g', 'Episodio 31', 'La maldición del pantano: ¿El secreto de las brujas de Eibon?'],
    ['https://mega.nz/embed/ZbcAWK4L#cvndaaIzjKd0KkKbcDi1G1T_oYZ6gqR75nEACM0EYRs', 'Episodio 32', 'La pistola sagrada: ¿La prueba de carácter de Kid?'],
    ['https://mega.nz/embed/ZSklFDoR#IH6EoBIGH1LjwpvfYx7GqsfW9G_Ks2XTGhSpJ1xG_yk', 'Episodio 33', 'La resonancia de la bruja: ¿Buscando la sintonía perfecta?'],
    ['https://mega.nz/embed/8T8UGZZJ#HIqZ1vcj8Tip9bVmHv0GR9V8iqJ_naqgQYCAcojDKkk', 'Episodio 34', 'El laboratorio de Stein: ¿La verdad tras la locura?'],
    ['https://mega.nz/embed/ITNxGToY#VMwo0tPE2EzQIHSDfh0Q_sAoa7dJXhQpW-hh7LF4HKo', 'Episodio 35', 'La tormenta de arena: ¿El secreto oculto del desierto?'],
    ['https://mega.nz/embed/BfsFzL6L#W7TMr7WcH4bDoxtS5NcJHfO8vW9bK19bSmJjGSawvQQ', 'Episodio 36', 'El castillo de Aracnofobia: ¿La infiltración desesperada?'],
    ['https://mega.nz/embed/ULUwDZJC#b8MbhMsMR5HB47eZuQ_m1s1zcJlGrF75KxdUO2e5ZzU', 'Episodio 37', 'El vagar de la locura: ¿La trampa en la mente de Soul?'],
    ['https://mega.nz/embed/IStyQI4I#IoOYV6StGH8PmMgJq3m5xznsoNKcm9VuEAxu086NF2U', 'Episodio 38', 'La tentación del demonio: ¿La melodía que arrastra al abismo?'],
    ['https://mega.nz/embed/gbEwBB5R#tYS6XO-2ZkPMNXm7ZeJCF4yvbJh1nxWx2Fg0T_HDLYY', 'Episodio 39', 'La batalla decisiva en el castillo: ¿Maka contra Mosquito?'],
    ['https://mega.nz/embed/lDEBkSJB#0hygQeC24SeCxdb4Gu20gJ_sFB2c72RM0PCUtF3wy3Y', 'Episodio 40', 'La caja de BREW: ¿El legado del gran sabio Eibon?'],
    ['https://mega.nz/embed/1WEHSZbA#gg7k3Q7XPz2kDr7fLzq6JmEWJb10WcxFfmN2qB_12Pk', 'Episodio 41', 'El barco del abismo: ¿Navegando hacia la oscuridad?'],
    ['https://mega.nz/embed/gT1y3CbK#6E5f6TBRLHvn770WWQtgCRVUCiIpLhN_ZA9NNUZL6vE', 'Episodio 42', 'La ira de Asura: ¿El renacimiento del Kishin?'],
    ['https://mega.nz/embed/sa0jlY7C#1Zyrpx0fhEMwj2WbDefLb8fUcJIlHHGeF9FPtDaoOnU', 'Episodio 43', 'El último recurso: ¿La decisión de Shinigami?'],
    ['https://mega.nz/embed/IaVCEKiJ#PzZvfLkortQCbT23idMB4hk_16uHPNd9U3yqUAd66jw', 'Episodio 44', 'El choque de voluntades: ¿El valor de un técnico?'],
    ['https://mega.nz/embed/9KsiGAaY#XzcpVX_tUPcwx0YbW_nbgX0YBeKDhbJTU42WwE7UgrA', 'Episodio 45', 'La luz en la oscuridad: ¿La canción de Maka?'],
    ['https://mega.nz/embed/tb0wCYza#TX8YtKaPcWuTzu_3XD1FzXINp_u5RCWkDCKo9peMXuU', 'Episodio 46', 'El orgullo del guerrero: ¿Black Star se enfrenta a su destino?'],
    ['https://mega.nz/embed/dTdCWTDK#jKNkn-l2XKRistKnhyBcbv3DqySj1dJl2wpLoxEreCY', 'Episodio 47', 'La simetría del orden: ¿Kid desata todo su poder?'],
    ['https://mega.nz/embed/FedgXabL#RuyQuRxOMuguVQVZe5HOL0EjtGqPhEZZ4nWEml7w_Vs', 'Episodio 48', 'El interior del alma: ¿Superando los miedos?'],
    ['https://mega.nz/embed/xedVwTgQ#3NMHyAPr7fSEZHu1A_L9x2ULtDDzbjAjHW89mGXmitk', 'Episodio 49', 'El valiente corazón: ¿El golpe de la fuerza de la locura?'],
    ['https://mega.nz/embed/MGElVKTZ#g-_BmZ3ut3IfZy8W6VXmLZjL3XFncso76HEGB09mSgM', 'Episodio 50', 'La fuerza del respeto mutuo: ¿La unión de los técnicos?'],
    ['https://mega.nz/embed/gGERRB4A#-y0Mj9ibT-BvakYQhB-TtHeLj_2JqHGHGiiM5x7J27Q', 'Episodio 51', 'La palabra clave es valentía: ¡El final de la batalla!']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/SoulEater/Portada-Tmp1-Cap${index + 1}-SoulEater.jpg`,
    'iframe'
]);

const tokyoghoulSeason1Episodes = [
    ['https://mega.nz/embed/lrN00BRD#Q2NdNW-6qq27q9pX_bGHQh-TeNGvYpl9oFwffxq0PvU', 'Episodio 1', 'Tragedia'],
    ['https://mega.nz/embed/E6t1AawR#sgM99C_j8-T1nTwX56Z2zM7lAMUMxhQDUdbdGvKrhao', 'Episodio 2', 'Incubación'],
    ['https://mega.nz/embed/Bv912JoQ#1fr1v0RMozCwvE1ExaUy-ELam80TKMMlE_K5gvgQeKU', 'Episodio 3', 'Paloma'],
    ['https://mega.nz/embed/47lRUJra#Lgu10RFgF1KYDRCHCKNro2iquDTXFYlrtW2OYQmSrEI', 'Episodio 4', 'Cena'],
    ['https://mega.nz/embed/h2EBXJrJ#Nc9433XteKsAgIb_DfWPrpePrXPUVMEknXMztYsTmro', 'Episodio 5', 'Cicatriz'],
    ['https://mega.nz/embed/h2kTnK7Y#0AayV0im14L7JvE8DRkwUqCh8WMYcLksJa3stJ9hwFc', 'Episodio 6', 'Aguacero'],
    ['https://mega.nz/embed/9uNkEaCR#Yu-1TaMP2xdHoS7zGaOUjCGtNXkcr6efpXTG-_0vkDk', 'Episodio 7', 'Cautiverio'],
    ['https://mega.nz/embed/Fmsh0CKD#yJRxgc_OO_RYLmsUuVaQq6WVq9czjHlfMZVKcY1QH50', 'Episodio 8', 'Circular'],
    ['https://mega.nz/embed/omFygApa#FzeqmR6rJWPHcmpnRNatiiN0uyRlQB-iswCx8K1uh5w', 'Episodio 9', 'Jaula'],
    ['https://mega.nz/embed/0qdUHBTa#ITVzgrtcIqZ6gU4uMEGdZfAtyW9LkyTQfNzqDqFpXw4', 'Episodio 10', 'Aoshima'],
    ['https://mega.nz/embed/U70SmCSJ#i8ufya8dMWdHjBbQkjovKofPgtN2-B5YH5XbRGKRRU8', 'Episodio 11', 'Euforia'],
    ['https://mega.nz/embed/l6MCyJiR#PYr1KSzQ0GH5jFX4YBOSO316L5-5RXQJkytGZV7bvgk', 'Episodio 12', 'Ghoul']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/TokyoGhoul/Portada-Tmp1-Cap${index + 1}-TokyoGhoul.jpg`,
    'iframe'
]);

const tokyoghoulSeason2Episodes = [
    ['https://mega.nz/embed/B3VRHbpY#h_FaYdQb6AZOUH5elPT7DEOAndf8DrWhNJrZJuJW8ko', 'Episodio 1', 'Nuevos brotes'],
    ['https://mega.nz/embed/NrMUDACK#pj9By4we13In2Ozo8IYhfR8k2UTOjvrB9_eAcOdMhoA', 'Episodio 2', 'Flores bailando'],
    ['https://mega.nz/embed/Zj1RXTCA#YaXDY2460XWMIXFAUy6GY8wQ-5ZX0V8nyYMTrax6-ck', 'Episodio 3', 'Colgando'],
    ['https://mega.nz/embed/F6cDUJ5I#bAlaW2_Y0Jy8y390U4e0f7Li1Uayr2Boff0j26h4hLc', 'Episodio 4', 'Profundidades'],
    ['https://mega.nz/embed/4rlUiIYY#v5uYP7WKXy0nRd5Rnva8IL79N1LZYXqKySgAQMeAopQ', 'Episodio 5', 'Grieta'],
    ['https://mega.nz/embed/UrFFiLIb#T5Pj_OADfkpLrgJUendyX4IzcIhElIKF4uCKc5UCSJA', 'Episodio 6', 'Miles de caminos'],
    ['https://mega.nz/embed/Yyl02YYa#PKJKZL-wJP9hn-HGH7jY3rif50XvPBK-jaMeD-TmpqE', 'Episodio 7', 'Transmisión'],
    ['https://mega.nz/embed/Ui1XnTya#NeUbivm2oHjTZj-2i_vOka4nqCXvQpGCq9zJjXVpwSo', 'Episodio 8', 'Antiguo nueve'],
    ['https://mega.nz/embed/gnUwgayR#WSmBy7ONXhU5bKuBRP7mHTVKiJZeFAJACWzVLisuGos', 'Episodio 9', 'Ciudad en espera'],
    ['https://mega.nz/embed/kj9hmLLL#cWvFpK0legIPwtx15Vl0QiBeJ4E_ZzG1vUEWC0Zxe48', 'Episodio 10', 'Lluvia de disparos'],
    ['https://mega.nz/embed/VqtkAC4J#tZhyIEYSWuL45p2nYfdbtPbuhfUD8ECEeqh7vsIxBng', 'Episodio 11', 'Diluvio de flores'],
    ['https://mega.nz/embed/8msVXBoK#SdVf6KzEabAuadSmhN0-zWhbuDfPXNXP3QGbFCa8l3E', 'Episodio 12', 'Ken']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/TokyoGhoul/Portada-Tmp2-Cap${index + 1}-TokyoGhoul.jpg`,
    'iframe'
]);

const tokyoghoulOVASEpisodes = [
    ['https://mega.nz/embed/5HU0VZZS#9U-RK6kv_y-relXJF5qbFXSafQXb4sr0pE0CKJpahbA', 'OVA 1 (LATINO)', 'OVA Tokyo Ghoul: "Jack"'],
    ['https://mega.nz/embed/5a0ghCKZ#S0peCaKC16oHWFHl_HRXT5r5KDrx8IbE7IvBCjmlWMo', 'OVA 2 (JAP SUB)', 'OVA Tokyo Ghoul: "Pinto"']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/TokyoGhoul/Portada-OVA1-Cap${index + 1}-TokyoGhoul.jpg`,
    'iframe'
]);

const tokyoghoulSeason3Episodes = [
    ['https://mega.nz/embed/trVh0YCL#f9A4uptaGdp0r3CAmoGY9BRuANk0GPE4oFcFygvMxIo', 'Episodio 1', 'Cazadores'],
    ['https://mega.nz/embed/d2dVnb5a#ZfDZBmUANYOEGHJ4eBz1VlWc84o004x1oqM43jAnQR4', 'Episodio 2', 'Fragmentos'],
    ['https://mega.nz/embed/gz8DVCDJ#BFabGiRdlThsE0obRwi3bKoaEEfZo-vMjSEo9dTJhxA', 'Episodio 3', 'La víspera'],
    ['https://mega.nz/embed/UylWlTwQ#N0YWNA8pgYObPyvYjxve6AWBD7nkF7NbKub_eKStsa0', 'Episodio 4', 'Subasta'],
    ['https://mega.nz/embed/02UWnTrB#bWQtvgH_7w-uETsBTwEdKUFT25biZEuYGViNFCzd1ao', 'Episodio 5', 'Fin de la noche'],
    ['https://mega.nz/embed/lucE1Aqa#JQYUzCpVX7gg1R0UDBkxCHfOMnQM1Yk2UMi88ql2wIc', 'Episodio 6', 'Al final'],
    ['https://mega.nz/embed/xrMVjB7L#3mIfNOinh_1Ux6VzlNNAdVxf5S9826Tu-BVM3wRK910', 'Episodio 7', 'Recuerdos de días pasados'],
    ['https://mega.nz/embed/o6tiwQrY#-edPDNagn2Xz2dS3Md4HN5yumjQB1b4-mboxLeVyxgQ', 'Episodio 8', 'Gusano'],
    ['https://mega.nz/embed/86swWL4Z#EdeMJydl4kwdIiHDN18bzPiv3mtD5TX2TBl7QQj2dP4', 'Episodio 9', 'Fantasma'],
    ['https://mega.nz/embed/xjkxxC6L#JFAf7eOuTBLCI86lxwMlTD0wlZkQ6dOW4KbvF-OstLg', 'Episodio 10', 'Temblor'],
    ['https://mega.nz/embed/8m9kHazB#vACkTp9GJfa9FRnu9uRd7D06aCZnuDDeATujsyhOrVI', 'Episodio 11', 'Defecto'],
    ['https://mega.nz/embed/QiEGDLCA#tp7gWhML8Fd6WJN95K22SZq_HcqbuytjFFK1KJdZSYY', 'Episodio 12', 'Amanecer'],
    ['https://mega.nz/embed/8msgQIyT#zz4bnOvFOuX2uCUt7TijqPAfqUDqCdwqNe0ldl6z1SQ', 'Episodio 13', 'Y de nuevo'],
    ['https://mega.nz/embed/oqty1KiD#3Endf8vQ2HB1bNCi53VYHPYhMoaRBjugNRNzAbV1Jug', 'Episodio 14', 'Blanco'],
    ['https://mega.nz/embed/0yUjSYiY#jay5GbqGNpR4XpVZ2Ci1BSEkvqExjpARDBvzM60xFvk', 'Episodio 15', 'Cruce'],
    ['https://mega.nz/embed/M61iEIBQ#4QDe2Yh7w4QUGxtyQPTziqfGzqNwpgb5PdC_9oUpyKI', 'Episodio 16', 'Despertar'],
    ['https://mega.nz/embed/5mFjhDjS#oQ4UQc0tKxliBjuyPOChylonoYXIv8JroI_Xlxnpbq8', 'Episodio 17', 'Recuerdo'],
    ['https://mega.nz/embed/E28ESDZI#KqVVakRECdg7EMEkRugvTFXToM4wuti1LPkgrRxSxAw', 'Episodio 18', 'Lazos'],
    ['https://mega.nz/embed/RzkVmbyY#65LW65gGfWpx3Ajr3u0Ai6k0FZLYTUIk19T_kD3z3gE', 'Episodio 19', 'Tragedia'],
    ['https://mega.nz/embed/l3lixIZI#EkFtR8oDFfSlxNRSNisSuZz78K8Evz4rHdbR96yv0AM', 'Episodio 20', 'Encuentro'],
    ['https://mega.nz/embed/Q61WDLZL#rT14SAeOB80FB5Gt0Id6UzexZaGo5n4vXQXhj872rTA', 'Episodio 21', 'Desazón'],
    ['https://mega.nz/embed/I3tliTRD#MS8w6gDm1KrHR2V6KpA0LfSgDDoqBuf6rHL1RWahFqc', 'Episodio 22', 'Eclipse'],
    ['https://mega.nz/embed/hu0FTCCZ#odp7qJD7QpBrSubzn_R79mjSOLxLvBMootYtVxmcmHE', 'Episodio 23', 'El fin del dolor'],
    ['https://mega.nz/embed/dq0kFB6a#aNV6pD0SQChRKWVrhw-B7PeQKY3geEWkP9xjHlumnDI', 'Episodio 24', 'El final']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/TokyoGhoul/Portada-Tmp3-Cap${index + 1}-TokyoGhoul.jpg`,
    'iframe'
]);

const tokyorevengersSeason1Episodes = [
    ['https://mega.nz/embed/tisiiA6a#CoXRTOTL9Dh7Ne6TCdu1s9Bl_JshoviMztlDDIe-ioI', 'Episodio 1', 'Renacer'],
    ['https://mega.nz/embed/g7UDiazA#ewzlcs4YoCXi3HhrNmMGfKcYLxcur_v03MyPuNI4sLA', 'Episodio 2', 'Resistencia'],
    ['https://mega.nz/embed/5nNlmZzL#czkcukD0s4OgrvGzOyZsIaWjPsL4mQykbMGVKqMhNwM', 'Episodio 3', 'Determinación'],
    ['https://mega.nz/embed/1D012IAY#ezkHnaxgYSEQEnY89tFJLQgvl4D9E9oV2bk79_nS8uM', 'Episodio 4', 'Regreso'],
    ['https://mega.nz/embed/E29CRQ4A#jwfsrEe_m7iggafJMyB9jSeNhqs2U0mNtOBBwyyPFBI', 'Episodio 5', 'Releap'],
    ['https://mega.nz/embed/QvcAgRgC#B3O87gXcz6FksFHP6SZ-xbs1RM6GhbGBhDsF0jaetSY', 'Episodio 6', 'Arrepentimiento'],
    ['https://mega.nz/embed/EGkHzIoR#BqEq4ZzCIhzBp4hFMiDh36FwR9YS2k1f639RxmM417Q', 'Episodio 7', 'Revive'],
    ['https://mega.nz/embed/cPFFgbwS#ITNDDpFSFg25Ry9s7mIwf66OjFNcEy7q9GCA06j0iMA', 'Episodio 8', 'Rechange'],
    ['https://mega.nz/embed/pHMF1aYL#4RDDvteDX2EFKwHLaCdOlOtILy2Vg2CpF4Ix1TUnLCE', 'Episodio 9', 'Revolt'],
    ['https://mega.nz/embed/wzN2haSA#KNfk7TLEf4sP_rVK3z_bMm_jYOJJc02YQ3IP-ioZO0Y', 'Episodio 10', 'Rerise'],
    ['https://mega.nz/embed/hz0lSRpL#St2lTMixgajowec63XEcfmzoRC86JazuAK4h1CreshU', 'Episodio 11', 'Respect'],
    ['https://mega.nz/embed/5bNklTqK#OvTglafHif2nn4VjD8FsrUZZ3asgolE0co11ZuwgpEI', 'Episodio 12', 'Revenge'],
    ['https://mega.nz/embed/xDshXRIQ#BKSabKH_I1eluiDlHpp4glvmc7cH2Io5uz7zyI3RcKw', 'Episodio 13', 'Odds and Ends'],
    ['https://mega.nz/embed/hbNiFSwb#5DXIaOkoqC3imPM-9OsVfvB7xaGjfoSxnOuK-in6p0I', 'Episodio 14', 'Break up'],
    ['https://mega.nz/embed/5OMCELJa#KfNoVYGgyi8oSMnuGcyj-tZWqW2ntBUVh-5Uq1K_0E8', 'Episodio 15', 'No pain, no gain'],
    ['https://mega.nz/embed/0ntBWYgC#VCSnS-lt6fckD3Kx3v2A3cIbFvrJKI3GtgPbAiXRuYs', 'Episodio 16', 'Once Upon a Time'],
    ['https://mega.nz/embed/MvcAlZ6B#dlF5M66lt-ca5GKqdngCS4GqwY1yESOl6lI-tYQe4Do', 'Episodio 17', 'No way'],
    ['https://mega.nz/embed/J3NR3JjC#4XEYzeIicC2bqaWRVoIl4h3GBMVYkn49WV0IQ3hjVVU', 'Episodio 18', 'Abrir fuego'],
    ['https://mega.nz/embed/57lylCRK#pPMn97a4s42GgGc4pAGGqwO8VgkPibDtirmRMmPCqeQ', 'Episodio 19', 'Turn Around'],
    ['https://mega.nz/embed/FO0FRZiS#rUIfy6wUPSicKUcmxIXHGsaUldSZuuotG-8NL8sv6Dc', 'Episodio 20', 'Dead or Alive'],
    ['https://mega.nz/embed/Ai8A1BKZ#GY6k2lZYxC98xLPnTtYTWaUOGce1jm_BGgxzN0sLl14', 'Episodio 21', 'One and Only'],
    ['https://mega.nz/embed/IiFUwKYZ#XGY0KaurpljgOWVSErVNdmlCD_0K1MuyW92RPXiPi8U', 'Episodio 22', 'One for all'],
    ['https://mega.nz/embed/saF1EBgZ#EIIJ9Bt5q8d2hhpMRsdKy9I4iX5HzCKMqh0kQ9Rjchc', 'Episodio 23', 'End of War'],
    ['https://mega.nz/embed/IT1k1KQB#VhmyJZwVECutLHmVpz2L7jcJflffzeFc0EzyV_l13Eg', 'Episodio 24', 'A Cry baby']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/TokyoRevengers/Portada-Tmp1-Cap${index + 1}-TokyoRevengers.jpg`,
    'iframe'
]);

const tokyorevengersSeason2Episodes = [
    ['https://mega.nz/embed/kicjkAoY#LKALC4raWlGQQ3OG5SH-N4opotPNoM0KNn1rbPRW7YY', 'Episodio 1', 'Es lo que hay'],
    ['https://mega.nz/embed/Qn1TSK4B#vkUr_wLBrQODIxrqn2I29AK3LjzA_mWMtFRM372GuKY', 'Episodio 2', 'Tengo que irme'],
    ['https://mega.nz/embed/M28xFawI#igJVymLYAPDqjsiYoxZgGdgpTPeMky1iOS5UROg4deo', 'Episodio 3', 'Mantén la cabeza alta'],
    ['https://mega.nz/embed/FPkmkSaB#q_lcHgM5IFDRRHHDykazfR4rj9TBNLX_uqd3R77zgX4', 'Episodio 4', 'Lazos familiares'],
    ['https://mega.nz/embed/ACEEUIxI#meyts9p_az2pL4_qWaVe2mHPmeIy2yKBtcilWABQJkg', 'Episodio 5', 'Nochebuena'],
    ['https://mega.nz/embed/MvF3gRyS#cn23jq2CI7lRRVuUdQznUz5xbr3Je9CQWxIV9BMAENs', 'Episodio 6', 'Las desgracias nunca vienen solas'],
    ['https://mega.nz/embed/8qlCzJDb#xAwQj708W-JFIVplcdj5HKpvJcbwq8pHNQAwQc4yo0Y', 'Episodio 7', 'Rivalidad entre hermanos'],
    ['https://mega.nz/embed/t3913DCQ#ElcTCMTmv_dzMNeMH2GqiZFi4og6I9ajw2Yp1mHf4sU', 'Episodio 8', 'Luchemos juntos'],
    ['https://mega.nz/embed/BaNmHbgY#ppRuoN0j-wb93Ads_G_j1N7BTECPMbzadlVMQa1I6fY', 'Episodio 9', 'Un hábito horrible'],
    ['https://mega.nz/embed/pH8nHR7B#DGaPoz7MgRnWUWK6G8cyIARrkxR6LELea3WcmHBCIeI', 'Episodio 10', 'El tesoro sagrado'],
    ['https://mega.nz/embed/ISlixAbT#zVeNLNpDolXb9nfZeODbWznyNlWYGh6KThIrxSzxV8M', 'Episodio 11', 'Érase una vez en Tokio'],
    ['https://mega.nz/embed/MnciXSqI#o_rtqZKhgKLxpbIOv3a8UybIfcM1WSKus30nSBHJFGQ', 'Episodio 12', 'Última orden'],
    ['https://mega.nz/embed/teE3xahL#iAkuxmPeGRDfJ8g2RleFKcSJrAeQ_WPbQgmooohsSrU', 'Episodio 13', 'Cuando llueve, llovizna']
].map(([url, title, description], index) => [
    url,
    `Episodio ${index + 1}`,
    description,
    `img/TokyoRevengers/Portada-Tmp2-Cap${index + 1}-TokyoRevengers.jpg`,
    'iframe'
]);

const tokyorevengersSeason3Episodes = [
    ['https://mega.nz/embed/BikgxQhC#1qb2RegGoFN96JV10jgsMjI2XxovFrM99CM3u4t3Nqo', 'Episodio 1', 'La disolución'],
    ['https://jkanime.net/jkplayer/um?e=TVV5YUg4U01EbGNSam9zZGN5VGcveXpUam5STWVwWFpITHA3YmxGSWhuYzRxMFRjQk5sZGM3TE1IZ0Z4akplZkdaa1JoZWdRU1NMRWJXVVBBOTJSVVE9PTo6sut0LlqWY5Q2LdcsrUXo8A--&t=b91814cf5cecf826f20ad6b6b2b0a41e&op=NTQ0MDg=', 'Episodio 2', 'Quedarse en el pasado'],
    ['https://jkanime.net/jkplayer/um?e=OW9xN1pLazFIaWVRRjFTMzh2TzFIZTArNk9NUVFIdlFDdjczL1VESng0MFVhNW5sMmFMYVZIVC9jY3V4cjVFS1pLOU5IZzhTNWZhbW1mbEwydGlpZXc9PTo6yMUHzegyub8VNGnQi8m41Q--&t=efde915850f175d3192d41fa22f51317&op=NTQ0OTY=', 'Episodio 3', 'Sonríe'],
    ['https://mega.nz/embed/8L9Hlb6Q#0xdyQY8-pXKbL6mngXct1PJOqzh5rCRcO3m4HGpjiX8', 'Episodio 4', 'Dame una mano'],
    ['https://mega.nz/embed/tzUTCSKD#8xsbU4dYwoAzuEt6OAiuCQPdnClSoz-TRHKJWri2-ag', 'Episodio 5', 'El día más largo'],
    ['https://mega.nz/embed/prcCyDqB#XnsWTyilqxaTLrZCkoxJrVY-RjdyGUDG5BW52DgwJHc', 'Episodio 6', 'Amor fraternal'],
    ['https://mega.nz/embed/h2MRmJiJ#Pkyz5fAwkNyjr9rOWB0dd8Sur_ckTtI5UMf0hSr3Tis', 'Episodio 7', 'Cambiar las tornas'],
    ['https://mega.nz/embed/MbUBQS5J#fCuCTBqvE0TCJJnczvn1eObd-k75_lehO_GszgUqyqg', 'Episodio 8', 'El cielo y la tierra'],
    ['https://mega.nz/embed/kmcRjTia#J104MqIZockowLn7oxed_7JWiT79G8d9ulYssy1S89Y', 'Episodio 9', 'Agallas de guerra'],
    ['https://jkanime.net/jkplayer/um?e=WVF2d2doV3ZNakxsTmUrMWJ4L21QcCtvMThVQ29vQkVObThTRUtnNW12cFZMVnFML2J0ZElhVUFqeVVObGxBOENIRUs1VUxhTElRWlErb1RnQlYydWc9PTo69.YRLV296JppVzx9jHbfDw--&t=8e01541dc0ec2935558317011504c68a&op=NTUxODA=', 'Episodio 10', 'Ataque banzai'],
    ['https://mega.nz/embed/Iz11gJaI#mx3T0j7U-4VGW8OHV74KADf3i6v-WsRFwM53CH9KMiY', 'Episodio 11', 'Detrás de escena'],
    ['https://mega.nz/embed/t7kAkDhS#PhIp-LtG8OhsPBotFiKdB9knHc5BD1D9j3MJB6_8ztc', 'Episodio 12', 'Una noche fatídica'],
    ['https://mega.nz/embed/gucAgC6Q#XLvv7syyG5j-iOCOFjgaCwbx7d3SK-gK8CFApvnM8uQ', 'Episodio 13', 'Cumplir su destino']
].map(([url, title, description], index) => [
    url,
    `Episodio ${index + 1}`,
    description,
    `img/TokyoRevengers/Portada-Tmp3-Cap${index + 1}-TokyoRevengers.jpg`,
    'iframe'
]);

const tokyorevengersSeason4Episodes = [
    ['https://mega.nz/embed/HK5gFCgS#tAFI8fPWetg177p4DYl5A0smfpHPeGi7g3XgQO4Ybok', 'Episodio 1', 'Ruptura'],
    ['https://jkanime.net/jkplayer/um?e=cjZib21VWllEemJTR0JGQ24zdmhUS0dOejNlcXpvZEJQWnNiYkV6S1V5czFtdWYxdTJsbU1CN1hURXdOaFFlc1FpQXNFa21uZ0RUZDl1T3EzdWVVUGtHMmd5c1YxMUlTU0hCcWg1REgyejg9OjoY0LcsLRYobmfXfBx5k_XW&t=b8e9b180932efe4e6ee14ca880a167e0&op=Nzg0NTA=', 'Episodio 2', 'Un enfrentamiento inevitable'],
    ['https://mega.nz/embed/1BwXFTCI#qdcAcLxFgp0MpEsSox68QD6Oh1DE0XzaGa_4QkD9VPk', 'Episodio 3', 'Choque de titanes'],
    ['https://mega.nz/embed/52sCEBBY#vIFGy-TEAb0ftEpb8sVq4t0liPxM_8GAwRjlrc2IR2M', 'Episodio 4', 'Échame una mano'],
	['https://mega.nz/embed/z65xyAAb#KwuTNwdvpWuVBrcyxMInwxpeQRGw2xTjJhAqFfzyYPk', 'Episodio 5', 'Periodo Turbulento'],
].map(([url, title, description], index) => [
    url,
    `Episodio ${index + 1}`,
    description,
    `img/TokyoRevengers/Portada-Tmp4-Cap${index + 1}-TokyoRevengers.jpg`,
    'iframe'
]);

const madeinabyssSeason1Episodes = [
    ['https://mega.nz/embed/1X8imLAC#nSt4-GkHEd9HkeR_YC2RKcKr7luDmFpKFPLFQseBHjQ', 'Episodio 1', 'La ciudad del Gran Pozo'],
    ['https://mega.nz/embed/hXUkzZ5L#N5QJq2pJeP8AwQ9ot2jexsakjly2lIcBdXVxprYTF8k', 'Episodio 2', 'Festival de la resurrección'],
    ['https://mega.nz/embed/cLcEwBrI#mcIOks58e3l7z-_ulPFF4n8ymz6_kUa-3bbceJYp4ag', 'Episodio 3', 'Partida'],
    ['https://mega.nz/embed/YH8SQRLB#RfGDoFnnfyU86JVCnBbxT-50g0lgfeDhB4-8ViMn49Q', 'Episodio 4', 'El borde del abismo'],
    ['https://mega.nz/embed/tPswxYDJ#Ckn-mr-e_JRDRy8hQZPQYki1UEhKjL36lB3TkVW3BaI', 'Episodio 5', 'Incinerador'],
    ['https://mega.nz/embed/xe1gVRTQ#qKl3e8DCjNDt82POFrL29BGJnMa_IV9-uLV3fdJ9qT4', 'Episodio 6', 'Campamento del vigía'],
    ['https://mega.nz/embed/hGMzhbaa#p3X6J320BGiOxHKmg-IcsdjNv0sJPEoDsjuBY_H69YM', 'Episodio 7', 'La soberana inamovible'],
    ['https://mega.nz/embed/BSN0lKyZ#RbNt2QHkFL02oAWXSmUnA60xdpOwouwiUifX0lVC6mU', 'Episodio 8', 'Entrenamiento de supervivencia'],
    ['https://mega.nz/embed/EOcGACBb#LOxqy1kPKZv0p60s5YuiKpEXBHj7wLRXOd7tA7ZR_cs', 'Episodio 9', 'El gran laberinto'],
    ['https://mega.nz/embed/4e8j3RiZ#VrAONwmXPwcKEbGltxyo_GMN35MlEQhqgiQS02028uc', 'Episodio 10', 'Veneno y maldición'],
    ['https://mega.nz/embed/VS1zTbAC#8khWoO2L_pBPn0OsCjn6MBlTjLqu612NVgM3q__N00s', 'Episodio 11', 'Nanachi'],
    ['https://mega.nz/embed/sDs1wCjT#Aq6vuXSKiSvAdxsvfDzFAeaLtWoK_wrc2op9NJHWI_c', 'Episodio 12', 'La verdadera naturaleza de la maldición'],
	['https://mega.nz/embed/0fVmBRKC#ryl23y3yA7Ahka9l5WbxaBlg9-_DmSAPpJ52inAXZUc', 'Episodio 13', 'Los retadores']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/MadeInAbyss/Portada-Tmp1-Cap${index + 1}-MadeInAbyss.jpg`,
    'iframe'
]);

const madeinabyssMovie1Episodes = [
    ['https://mega.nz/embed/ky9FhAba#rglqCzoOLiEbrcsAywJmaLAGJ603S1YqolqKff2cntM', 'Opción 1: MEGA', 'Made in Abyss: Dawn of the Deep Soul'],
	['https://jkanime.net/jkplayer/um?e=dkxOLzRqaFpTTC9vTkM5cFgrRlp6Sk9lM1ZwUXQvbmd3c01nZlhBaWtmeU9XNGg0dmJyeWJZTEVOL1pVSnd6SkZJRm9zNmFmNm1JL2g0NGdHSjBjQVE9PTo6iGG2L8E0Tc4_K71hzHFAhA--&t=42f9c6d8b3b6858c6659b0d4b04030ac&op=NDY4OTg=', 'Opción 1: Jkanime', 'Made in Abyss: Dawn of the Deep Soul']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/MadeInAbyss/Portada-Movie1-Cap${index + 1}-MadeInAbyss.jpg`,
    'iframe'
]);

const madeinabyssSeason2Episodes = [
    ['https://mega.nz/embed/Ye1FTZLC#U5kRYEd6515JnGOIgdBaeBBw0wTKTaE7LzAq--cFxKY', 'Episodio 1', 'La brújula apuntaba a la oscuridad'],
    ['https://mega.nz/embed/lDcmACYR#jldzRwg6r_Sdp5CBhezxLSZoalp_Mpe8twshcJutnFM', 'Episodio 2', 'La capital de los que no regresan'],
    ['https://mega.nz/embed/pftg0KjL#bFe8C9Ljw-nnfoLFs1_fA4Zz2dAumAckvCVR5kaCYxQ', 'Episodio 3', 'La aldea de los residuos'],
    ['https://mega.nz/embed/gKM0SBpb#x2HJU7esqVkGd8RqtVMNwrFCWKaIL2puad-SyzFXZgE', 'Episodio 4', 'Amistad'],
    ['https://mega.nz/embed/M2cVjbSb#Y2ZxaajQ6piO5VIp0b5mkYQGawV99LWOwEy1wXFrgxs', 'Episodio 5', 'Ocultación'],
    ['https://mega.nz/embed/p61mXTzD#zkl6hgi8lXyPingySQS8p_1gjTAa75V5QVMDOnKgxz8', 'Episodio 6', 'El anzuelo'],
    ['https://mega.nz/embed/ov10wBaK#d7PcufPTkPW7DZgOhaAEgr1DvrtyIA7F-bcQJ4mNJXM', 'Episodio 7', 'La cuna de los deseos'],
    ['https://mega.nz/embed/g3kwxYTI#_GP7hSx4bL9tXbbhnX11b79T8AygIQ57I5r6cpJen8A', 'Episodio 8', 'La forma que toma el deseo'],
    ['https://mega.nz/embed/Bq5jBSBZ#qs_8Rtave8p2ixsT4rFAYRZMc7yefF5VEEtv07ULxL0', 'Episodio 9', 'El regreso'],
    ['https://mega.nz/embed/pjNRxADT#4f1ytJRm4BiCaewYZ8sdH1w2Sj_q3UZQe1kWG9iz1T8', 'Episodio 10', 'Todo lo que recolectas'],
    ['https://mega.nz/embed/haUAFCaR#5-kqy-UA8YfvV1QVw41h01M89OL0uI5jKvg8fYNryfw', 'Episodio 11', 'El valor'],
    ['https://mega.nz/embed/QOkyhaiT#HFBKTRQO17b99tMlZDEymPDeATJujrA6WLZqi5UGiQk', 'Episodio 12', 'Oro']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/MadeInAbyss/Portada-Tmp2-Cap${index + 1}-MadeInAbyss.jpg`,
    'iframe'
]);

const onepieceSeason1Episodes = [
    ['https://mega.nz/embed/I2sn2TTS#YytSsdxTUVaZc9wb6oZrrLpagSbnSAwMZWRXqbVcUsk', 'Episodio 1', '¡Soy Luffy! El hombre que se convertirá en el Rey de los Piratas', 'https://m.media-amazon.com/images/M/MV5BYzY4ODY3N2ItNWEwYS00OTY5LWI5NGYtZDE3MmNkY2E1YWFjXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/FutAXYCA#4DxxlxkKbnz7UcuTghFTv_Ws2XtH1s-Ohp1N6p8LuD8', 'Episodio 2', '¡El gran espadachín aparece! El cazador de piratas, Roronoa Zoro', 'https://m.media-amazon.com/images/M/MV5BZDE5MGFjYTYtY2M1YS00MGUyLWJlMTgtYzZjNmU0M2RmMzZmXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/tr9wQBBI#ie57mt1eWW03vutdGsj1_5cwDgUsFp51bzure9iCM-g', 'Episodio 3', '¡Morgan contra Luffy! ¿Quién es esa guapa muchacha?', 'https://m.media-amazon.com/images/M/MV5BMzRiM2ZkNjItNTc1MC00ZDQ3LTgwZDItZDJmM2I3ZWRkMGU4XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/N2FCDJjL#s0sk3C0I-_mL1R7bu5qtcMW1gfLJ3RVtPsRR4Y-p7FM', 'Episodio 4', '¡El pasado de Luffy! ¡Aparece el pelirrojo Shanks!', 'https://m.media-amazon.com/images/M/MV5BZTVmZDlkODEtNDc3Zi00NmRjLWE3ZmQtYzI4NTc3YTBmNzgyXkEyXkFqcGc@._V1_QL75_UX389_.jpg'],
    ['https://mega.nz/embed/xzUHxbDL#At21avl31JgWmfvZzrEAc7oZnM7-9LXmxqd0pNgoQd0', 'Episodio 5', '¡Temed el misterioso poder! ¡El capitán pirata Buggy el Payaso!', 'https://m.media-amazon.com/images/M/MV5BMzgwNWEwNTEtOWQ1Ni00ZWE3LWE4MjItYzA4MWE0MjI2YTEwXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/Zqs3ARZT#OKx9TQlF2Sy5bF3oh8UZGT2LUsDT60fLyAI-Diillqg', 'Episodio 6', '¡Situación desesperada! ¡El domador de fieras Mohji contra Luffy!', 'https://m.media-amazon.com/images/M/MV5BMjVjNWQwOTYtNjdhZC00NGQzLThmNjYtY2U4YTY1YmVhZjVmXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/ZiMECCiS#H8sNcnE8ukcvlC0ZfN2e5mY2CbyYjSdtMm4xkArfrhI', 'Episodio 7', '¡Gran duelo! ¡El maestro espadachín Zoro contra el acróbata Cabaji!', 'https://m.media-amazon.com/images/M/MV5BNWQxOWZmYjMtMTA5Zi00NTAwLThlYjMtNTA0ZmI4NDkwMDFlXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/RudxjB6A#ZxWsGN1NLJGGiEkArnjbT-tCARpI2LsTVBI2DOIAkk0', 'Episodio 8', '¿Quién ganará? ¡Ajuste de cuentas entre los poderes del diablo!', 'https://m.media-amazon.com/images/M/MV5BMTQwODkyMGUtYjg5Zi00Y2I1LWI1ODYtYmU3N2FiNTQ3MWZlXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/sycmETpD#5IZNqUdC7DJsS6rfYZLIaYbtUY9_2uTutM_QkUh7AIc', 'Episodio 9', '¿Un mentiroso honorable? El capitán Usopp', 'https://m.media-amazon.com/images/M/MV5BZDkwOTA1YTUtMGExMi00NjA2LWFhNjAtOTdmNzc3ZTA5YmJiXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/N78CVR7J#asjqW1CtwqfMnQ8yENaxeXIT8Mw-_4puiMrKSg3g_hw', 'Episodio 10', '¡El tío más raro del mundo! Jango, el hipnotizador', 'https://m.media-amazon.com/images/M/MV5BMjBjMmEyNGEtODM0Yy00Y2YwLWJhMDUtYjQ3ZDFlYTAyMzVkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/dmMiQD6I#KGfgEYIc4NrtEV8p0ruonaJIAMXN4qH1aIgqq1_s7u4', 'Episodio 11', '¡El descubrimiento de la trama! El pirata mayordomo, el capitán Kuro', 'https://m.media-amazon.com/images/M/MV5BYjMwOWZlZjUtZTg2YS00OGZkLTkyMDgtNmZlYWJiOTgyZjM5XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/t71TyCbT#SOveUgEUrDUljv7hFjwXA-DZWjXTKh5RX-ugSo0STGA', 'Episodio 12', '¡Batalla campal! ¡La banda del capitán Kuro en la cuesta!', 'https://m.media-amazon.com/images/M/MV5BYzcxYzI0NTctN2RiYy00NzY1LWI2NjQtYjlmZDI0MmQ5ZTk4XkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/QzN2WLSJ#bha2KUhTAc9RF-L09iHwpzbHVugR_Snx7hLbud7WDyw', 'Episodio 13', '¡El dúo terrorífico! ¡Los hermanos Nyaban contra Zoro!', 'https://m.media-amazon.com/images/M/MV5BYzQ2MWRjNTYtZWFkOS00MjM3LWFiOWEtOTliOTE2MzUwNjEzXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/lr0WGaSS#M_TTBmin4VMdV0A-jtKvJjzrV48SZViN4zT1aAYerE8', 'Episodio 14', '¡El despertar de Luffy! ¡La impotencia de la señorita Kaya!', 'https://m.media-amazon.com/images/M/MV5BOTY2ZjE1YTYtMzIxNi00YTQyLTkwNDctNjk5ODRkODk1ZDQxXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/B3EEES7A#dDLAZGVDiYdiaRofujVHNQBJ9kVnZJcRfZPiSzmD0Xs', 'Episodio 15', '¡Derrotar a Kuro! ¡La determinación entre lágrimas de Usopp!', 'https://m.media-amazon.com/images/M/MV5BNzZjMjZlM2EtZjU0Yy00MzEwLWJjMmMtMjg5MDZiMTljZmU3XkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/QmkBmDAB#-18ylkZ9YezQNmZH5EGf3Phu7CCb4FmwQgJXnBeFxdc', 'Episodio 16', '¡Proteger a Kaya! ¡Los piratas de Usopp entran en acción!', 'https://m.media-amazon.com/images/M/MV5BNzU4M2M1Y2MtYzRiNy00M2Y2LWFkZmEtMjhkYzM2ZmQ5ZWExXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/Ni0SQZDK#3ACQw6wON0sYnlTd5J4fTE4kZRFyGsHDV3HgDCR1jPI', 'Episodio 17', '¡Completamente furioso! Kuro contra Luffy, el fin de la batalla', 'https://m.media-amazon.com/images/M/MV5BZTI4NzVjMzktZWRmNy00N2EyLThkMWQtOGE1ZjNmNTEyNjAyXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/MrEQUDgZ#-c4uLU6xIbFMoVprbP-w3gzq5K8doGonJBYJ9457Yhc', 'Episodio 18', '¡Eres un bicho raro! Gaimon y sus fantásticos amigos', 'https://m.media-amazon.com/images/M/MV5BZTRjMzkwM2MtMDZjMy00ODhiLWE5YTMtZWRkMmE2Nzk1YTM0XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/AaVjTDQS#Z7U3suAhAIs1akhizk7AmG3uOOssUE7-INQJhJpi61Y', 'Episodio 19', '¡El pasado de las tres espadas! ¡La promesa entre Zoro y Kuina!', 'https://m.media-amazon.com/images/M/MV5BNGFjYmZmYjgtZDJjMy00ZWU3LWI2NGMtNzNlNGY1ODQ5YjIwXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/EetDVSIC#BeV5LYQH1sH2eG3OuHvrt9mjWHtVsO96SAT7O_RB5fk', 'Episodio 20', '¡El famoso cocinero! Sanji, del restaurante flotante', 'https://m.media-amazon.com/images/M/MV5BNjdmNGRjYjktNzY0Zi00NGVlLTlmYzAtN2Q1MzNhY2Y1MGVmXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/0Ld1TQDL#qtsCk322eCXIWiVadWRlK8My45TXEpj1Wy6F71FyeT8', 'Episodio 21', '¡Un huésped inesperado! ¡La comida de Sanji para Gin!', 'https://m.media-amazon.com/images/M/MV5BYmM4MWYyNDYtZDY1OS00YjYxLTljY2YtMzM1NDM4YzBiMzJhXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/ZOFmyTIB#7yhws3L32_EfT3aNoqjJ6p-QrHAEb7X_alOVpPLw2qM', 'Episodio 22', '¡La flota pirata más grande! El capitán Don Krieg', 'https://m.media-amazon.com/images/M/MV5BMjkzNGI5NzQtMjg0YS00Njk3LWIyYzctNmE1NTc5MzAxZjQ3XkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/we8XkZgI#RF2wJZXDVwfvAr4dKoxkqiJrc4rGZWofZSBh0qL8gq8', 'Episodio 23', '¡Proteger el Baratie! El gran pirata Zeff Pies Rojos', 'https://m.media-amazon.com/images/M/MV5BM2ZlZjllNTMtNDE2NC00ZDRiLTllZjgtZmM3MWNjMjg1NmQ2XkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/pKlTmbTS#gvRpbGQqHn5RYOeQEtZoSE-i-ssW5MN_oIRdQ49_HVk', 'Episodio 24', '¡El espadachín de ojos de halcón! El declive del espadachín Zoro', 'https://m.media-amazon.com/images/M/MV5BYTMzMTM4NjktZjVkYi00MjAxLTgyODUtMmEwMzYzMDYyNTRiXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/pfNhnIgI#s34Gw9FVteOPCjsW7Swtd6hOE4bMv9CiVuE39obeH-M', 'Episodio 25', '¡Especialidad en patadas! Sanji contra el impenetrable Pearl', 'https://m.media-amazon.com/images/M/MV5BNWJiMmFlOWEtNzBkMC00YTRkLTgzNzAtOWY2OGVjM2VmY2JiXkEyXkFqcGc@._V1_QL75_UX291_.jpg'],
    ['https://mega.nz/embed/VT8A2bKA#80BfDlxvbzXHqvpCuNteQR7V3csE6xdd3bXbbe8EFCA', 'Episodio 26', '¡El sueño de Zeff y Sanji! El milagro del All Blue', 'https://m.media-amazon.com/images/M/MV5BYjkwNWYyY2MtN2VkZS00NDRlLTlkMzUtYmI0N2U5ZTIxMTUwXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/pGcFARZJ#N6cVzDI82w8w8NnBbJA-Fa8uw-YmVQdGwNvMF98n7G8', 'Episodio 27', '¡El hombre sin piedad! Gin, el comandante de la flota pirata', 'https://m.media-amazon.com/images/M/MV5BZWE5MzQ5MDMtY2NhMi00MGQzLThlYWQtNjI0NTNkOTE0YWFiXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/ZDUQga7I#aUXhJOe8q7vELL_sbaNYs_nh_CmSwx_tu_Q1XbO8hjY', 'Episodio 28', '¡No moriré! El desenlace: Luffy contra Krieg', 'https://m.media-amazon.com/images/M/MV5BYjM3ZThkMWQtOTY0Ny00OTc4LWEwNDgtOGNiNTk4ZTFlNzY3XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/hf9lhCiA#Q9baiAs3bzlI_Vcl4Leu6OBPBPQaS59EGk9s6zyKXJE', 'Episodio 29', '¡El fin de la batalla! La determinación de un hombre', 'https://m.media-amazon.com/images/M/MV5BZTU5MGRlODktNjNiNi00OTg2LTk0NGYtYzNjMDI0ODdiMmE1XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/pfMiCIiT#WjfrDLskPJSLb4F33derzKS0W1S02WlZd01dyM_EnOU', 'Episodio 30', '¡La despedida de Sanji! Los cocineros del Baratie', 'https://m.media-amazon.com/images/M/MV5BOWJjZWVmNzEtZTYzYy00YmVlLWE4M2YtYjQ3N2M3ZmQ4NjAxXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/hfsXDLoY#rO0ABK6YL--dSjnVljWqfuio77Xnjk_al8yOkFa7pTI', 'Episodio 31', '¡El hombre más malo de East Blue! El pirata tritón Arlong', 'https://m.media-amazon.com/images/M/MV5BM2QxNjIxZTktNmY1ZS00Y2NhLTg5ZWItNzQ2Y2RjOTA3MDlmXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/ZHdlQCiC#EDGEJbLT2JzumZil_U-UE_MsrkhwQD6Lr_-RNb4qWjQ', 'Episodio 32', '¡La bruja de la aldea de Cocoyasi! La regente de Arlong', 'https://m.media-amazon.com/images/M/MV5BZWFhMWQ0MTQtMDA2Ni00NGI3LTg2MmEtZWRhOTcyNWRmNzYxXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/QCMj0ATZ#dyhCFXkbTYayLRD4kl-4nIaMkZPleWN2A-_RsGyRRj4', 'Episodio 33', '¿Usopp va a morir? ¿Luffy todavía no ha llegado?', 'https://m.media-amazon.com/images/M/MV5BODEzNTI4YTEtMTE1ZS00NzkxLTk4YWQtODcwZTE5MTJmMDNkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/le8WQTTR#wqJIgHBllV0sGUv8GuOQS5Xf-OSJWE7CnxvSoWJ39BU', 'Episodio 34', '¡Reunidos! Usopp cuenta la verdad sobre Nami', 'https://m.media-amazon.com/images/M/MV5BODkzY2ZlYzctZmJiOC00NjFiLWFmNjUtNzQ1YjhjMzA5M2JjXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/VH0nVCYY#NI_-BjGkGT4tyg2zhGLb1G5gNh11kN0CRD30ZvHBUO0', 'Episodio 35', '¡El pasado oculto! ¡La bella guerrera Bellemere!', 'https://m.media-amazon.com/images/M/MV5BZDZkZGNmMDgtMDNhYi00OGVjLTg5M2UtZDUzNzJjYTMyMmE0XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/JLVQ2J6S#tUfoe3-dCu5SHlKleyZ2bkcTa0EKnXr-Wqsukc1q6JE', 'Episodio 36', '¡Sobrevivir! ¡La madre Bellemere y la familia de Nami!', 'https://m.media-amazon.com/images/M/MV5BZTZlNDMxN2MtZjQ1YS00MjBjLTkwMDctYTgzMGFmNDQ0MDFiXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/YbsETIAQ#nqO9VLjYRyNFYYo4f42VGhQ3pvqw8PH8xot1wZW9ITE', 'Episodio 37', '¡Luffy se levanta! ¡El final de una promesa rota!', 'https://m.media-amazon.com/images/M/MV5BODQzN2NlNTUtYWQ3OS00NmViLThmMDEtOTAxZGRhY2UxODRhXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/8OthzCaQ#YznzTFGiQfw1-bU_bamNIsiHyjUU7QZtYMrXM63bZ4w', 'Episodio 38', '¡Luffy en apuros! Tritones contra la banda de Luffy', 'https://m.media-amazon.com/images/M/MV5BYTA0M2RiNGUtNGMwMi00N2I4LWJhNzEtZTJkZTZmMjY4ZWFkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/pS9nVaqa#cuc08M9M8tabRHlvvbV0jA49SsgWykHs0X2YQqZ_j0s', 'Episodio 39', '¡La caída de Luffy! Zoro contra el pulpo Hatchan', 'https://m.media-amazon.com/images/M/MV5BYzVlNmJlODEtZmMyZS00ZWIxLTllNGQtNjJiOTI2YjQ3NmExXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/0X11yLbS#PaMFt9mbLIdwGOSsYCM2-FztfpARgYxkLS_z-vtd5kE', 'Episodio 40', '¡Orgullo de guerreros! El gran combate de Sanji y Usopp', 'https://m.media-amazon.com/images/M/MV5BYzJjOTlkYTktYzM3OS00MDMwLWEyZWMtNzE2ODRmYjU4OWM5XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/4DdzXBwJ#OMla96vkz1W8WHdqN9DezubKSojBEeGZ7GNJ7cUdOyE', 'Episodio 41', '¡Luffy a tope! La determinación de Nami y el sombrero de paja', 'https://m.media-amazon.com/images/M/MV5BYzIxMGEyOTItNTEwNi00NTgyLTg4MzUtYjJjYjg4ZGU2MzRmXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/AXEmGJ6A#cg2qiFWI363TSk-gHLhrp575HvNYxgv_Tm1Nh8l0eKw', 'Episodio 42', '¡Explosión! El temible ataque de Arlong desde el agua', 'https://m.media-amazon.com/images/M/MV5BNTkzYWRlMzMtNjIyZS00NmE2LWFkMDMtMTMxOTUyMjg2ZGFiXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/wLNzlA4C#S_qXpi5qQtNwqkH8pNoLL0u1HRvAy4EU3haHhtZt-5Q', 'Episodio 43', '¡El fin del imperio de los tritones! ¡Nami es mi compañera!', 'https://m.media-amazon.com/images/M/MV5BMTM4ZTRjMDctZDIxNC00NTg4LTk1OGEtYTY3YWU1NmI4ZjhmXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/sKdQlIKa#BEFqdbe6t8USteZBPMZe10abDmKNM-cvr74APJGyRQQ', 'Episodio 44', '¡Partida con una sonrisa! Adiós a mi pueblo natal, Cocoyasi', 'https://m.media-amazon.com/images/M/MV5BZjMwZTYwZmItZTE0Yy00ZWFiLTk5ZjAtMDJiZDQzZGJhYjQ1XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/YeFB1RZC#AkK0UX76JPnWgx3IviM9QrUYq6-eED7uA0VxTjL9jlw', 'Episodio 45', '¡Se busca! ¡Luffy Sombrero de Paja se hace famoso en todo el mundo!', 'https://m.media-amazon.com/images/M/MV5BYWUxMTU1Y2MtZWI1NS00YmVjLWE4ZTktZDY0NWNhNjQ1N2FkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/EGV13YSQ#TZa9RJPqidI2v-lCjdstXH35FbojTARDV_FscloL8C4', 'Episodio 46', '¡Tras los pasos de Sombrero de Paja! La gran aventura de Buggy', 'https://m.media-amazon.com/images/M/MV5BZmQyZDVkMTQtOTBlMS00ODQ3LWI2OWEtZmNmOTQ1NGYxMmI2XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/tXUzGQRL#s3x17fX3-9G4Zg1Vg316jknA5W-0eWP9Zjd2ItXrCaY', 'Episodio 47', '¡Lo estabais esperando! ¡El regreso del capitán Buggy!', 'https://m.media-amazon.com/images/M/MV5BNmQwNzExZGItYmQxOC00OTgxLTk3ZjgtMTI1ODcxZTJlOWNkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/YWUnyArK#D-D-ST-hLbGVjP4PI02N3eGGdmVY5rePZZtMp-K-Tt4', 'Episodio 48', '¡La ciudad del principio y del fin! Llegada a Loguetown', 'https://m.media-amazon.com/images/M/MV5BNTM1YzViOTQtYzU5NS00NDY0LWE0OGQtNzQyYjE3OWYzMzE1XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/ZGN1HZ6R#l8FGlge6GkaTqiUf-dKkiZAmh-AZQxlUcJ92IfKOIAI', 'Episodio 49', '¡Sandai Kitetsu y Yubashiri! Las nuevas espadas de Zoro y la sargento Tashigi', 'https://m.media-amazon.com/images/M/MV5BNWE5ZjAyZTMtNzYzOS00MTVkLTk5OTctYzQ1MzA1OTYwYzhkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/kDlkiQIB#u3IZg2DKPv6Jgy332GSbewwJvJoxGxyafElP0ORG2XI', 'Episodio 50', '¡Usopp contra Daddy el de los tres ojos! Duelo a mediodía', 'https://m.media-amazon.com/images/M/MV5BNzY2MTNkNWMtYjc0Yy00NTMyLWFkMGUtYzJmMzM0YzUxYTY3XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/8GFj2apA#r-qHHZ3n0k5PYqS_Xww1jdb47x5wDOf7yVEH4Sck5fI', 'Episodio 51', '¿Un ardiente combate culinario? Sanji contra la sensacional chef', 'https://m.media-amazon.com/images/M/MV5BY2MyZjk0YTctOGE5Mi00Y2VlLWFmYmUtMTVmOWYwMDQ2ODFkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/EPF2RBoY#aHnkoqgqwsBe_E8Tsbwgd5fKro7PFyS55rf2MIEympk', 'Episodio 52', '¡La venganza de Buggy! ¡El hombre que sonríe en la plataforma de ejecución!', 'https://m.media-amazon.com/images/M/MV5BNzE1Yzc4YjEtNjQzZC00OGNjLTljNTktNTliMmFiYjI1MzRkXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/9bMC1CJT#2MRAYgc9iYIO07b3ofmSDK_C2zRlqWk8Mm3Vws2RwGk', 'Episodio 53', '¡La leyenda ha comenzado! Rumbo a Grand Line', 'https://m.media-amazon.com/images/M/MV5BNzg5NzY1ZDMtZTczMi00ZmYyLWFlYWItNWYwNTdkYmQ3MjMwXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/QfUzURAT#rDtNWNMz4A91LqDYstk_-9H-CHq5sSL0env6CboXl3A', 'Episodio 54', '¡El presentimiento de una nueva aventura! Apis, la chica misteriosa', 'https://m.media-amazon.com/images/M/MV5BYzdkZjlhMGMtYTNlOC00MWFjLThjNzctYTU3ZjYyZjQ5YWQxXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/0X8EXAjR#eQK0S5xx-skw5bW6nVX-GtDtLR2vY2Gc6GVALrYEAcc', 'Episodio 55', '¡La criatura milagrosa! El secreto de Apis y la isla perdida', 'https://m.media-amazon.com/images/M/MV5BZWY2NDcxYWYtZWM3Ni00NDc4LTkyNzgtMjllNGU1YjNiMGZlXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/secEgY4Q#pi2hmyZ7185vPz6GFpawq5RAkW3VKHKFg1trk2F4vq4', 'Episodio 56', '¡El ataque de Erik! ¡La gran huida de la isla de Gunkan!', 'https://m.media-amazon.com/images/M/MV5BMmRlZTYwMTktZGY4Ni00Y2E2LTliMzUtY2IwMmI3NTIwMDg0XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/9LdCQRhJ#1_LFLCe9EjVr9Ha_y0yFqsyMRT8NrYS41w_5BiYkDNs', 'Episodio 57', '¡La isla solitaria en alta mar! La legendaria isla de Lost Island', 'https://m.media-amazon.com/images/M/MV5BNjdiNDllNTAtNWIxMy00MjI0LWE1Y2YtOTRkODQwZDNiMjlhXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/UWU1QALI#Tm26c-UqM4Iphtu57Ntf9Kl2kWEByIGRNPbFl4jMKLw', 'Episodio 58', '¡Duelo en las ruinas! ¡Zoro contra Erik bajo la tensión!', 'https://m.media-amazon.com/images/M/MV5BYjk4M2NhNGMtMmQzNC00OTkwLTkzZmMtMzkzZTI2Zjc0NWZmXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/8D9m3R6S#BZHbSlRzz27Yv8GsLrPl0BNvmhoZQLZj9TE-8XrhBpA', 'Episodio 59', '¡Luffy completamente rodeado! El plan secreto del almirante Nelson', 'https://m.media-amazon.com/images/M/MV5BZDRmMWJiYTktNTVmYi00ZWE4LTg4NzctOGYzMDA3MjViMDA4XkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/YD0xCTaZ#2nE5o7S22sK5QrX-IvxgpMPneFAwt8V0S4lZ8nBMB6Q', 'Episodio 60', '¡Los que vuelan por el cielo! ¡La leyenda milenaria revive!', 'https://m.media-amazon.com/images/M/MV5BMjg4MDEwZjMtNDdjMS00ZTMyLWJlMDAtYWRkOGUzMDZlMTZhXkEyXkFqcGc@._V1_QL75_UX388_.jpg'],
    ['https://mega.nz/embed/0aNnxaSY#pzkvH2xGXee2pTiPcSDl2y8Vt2cyQoun4e9VnNTMBMA', 'Episodio 61', '¡Final amargo! ¡Cruzar el Red Line!', 'https://m.media-amazon.com/images/M/MV5BYzAzMjRhY2QtMWYyMi00Y2QxLWI4YTItNWU4NjI1ZTA5ZDUxXkEyXkFqcGc@._V1_QL75_UX388_.jpg']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason2Episodes = [
    ['https://mega.nz/embed/oPNRmQZA#99sWA4thXrKF1eYZ4wz6_jidS2xg3ZTc1IuXmWa-8HQ', 'Episodio 62', '¿El primer obstáculo? La aparición de Laboon, la ballena gigante', ''],
    ['https://mega.nz/embed/laUGSBaA#uc_cFz45tecfPrl7Igmji11CPZPWljlAjssQiyz68gM', 'Episodio 63', 'La promesa de un hombre. Luffy y la ballena juran encontrarse de nuevo', ''],
    ['https://mega.nz/embed/EKVESBxb#JZ9dfPEq4lzlWEVPJRc40bY3ZafQXRWhYWSkGyco_AY', 'Episodio 64', '¿Una ciudad de amantes de los piratas? Llegada a Whisky Peak', ''],
    ['https://mega.nz/embed/pXkXHZoQ#eIOl3jC7hzjezG_NnZRQWdYvS2W4t2yXB3tclqbH7Eg', 'Episodio 65', '¡Explosión de las tres espadas! ¡Zoro contra Baroque Works!', ''],
    ['https://mega.nz/embed/QfUyjCga#-5Tu-T2PHVXV-siLIsnbUF0U5GINi8NppH1x2s_rykg', 'Episodio 66', '¡Un combate en serio! Luffy contra Zoro, ¡el duelo inesperado!', ''],
    ['https://mega.nz/embed/hfdyVT5L#xl-RqV0D4L9_wvRB-6ydXUn6VXG2KHACX6DpmbTooV4', 'Episodio 67', '¡Entregar a la princesa Vivi! La huida de la banda de Luffy', ''],
    ['https://jkanime.net/jkplayer/um?e=M2xENjVTVmEyQTY3RTdianNqS2lTYXdCVmtLbXBsa082TytNdi92YTYzNWxqK1ByRjZVczdZL2ZiMXJobG4wbDo6sYWE2WBRWdkWmAEHbhulZQ--&t=2654d1a3f16bf62d0dc4f91fa3ec9377&op=NTA1Ng==', 'Episodio 68', '¡No te rindas, Koby! Diario de las luchas de Koby y Helmeppo en la Marina', ''],
    ['https://mega.nz/embed/kqkVFSTS#wV3CcRG60ZtRmShVVuS-qNUSeE2ZoOHES6Kuq21P-GY', 'Episodio 69', '¡La determinación de Koby y Helmeppo! El orgullo del Vicealmirante Garp', ''],
    ['https://mega.nz/embed/0z0RxYqZ#C4A84D_Hp6W9pQ-zVdvLNOBncSgdOZ2SUnZWUhQvIIg', 'Episodio 70', '¡Isla prehistórica! ¡La sombra que acecha en Little Garden!', ''],
    ['https://mega.nz/embed/FzMDmZBL#6aGmTRB3l9D2IlJUHn8YSeYibPwE7FybF_WhPWkAlAc', 'Episodio 71', '¡El gran duelo! ¡Los gigantes Dorry y Brogy!', ''],
    ['https://mega.nz/embed/hyUmwDaA#Z1VcuT5NR0eeC6ZtGbl4EdLpuTOME8FnGUPYIVytNoM', 'Episodio 72', '¡La furia de Luffy! Una trampa infame en un duelo sagrado', ''],
    ['https://mega.nz/embed/EuMiiY5L#-3NvxY2YtmDp1q7zh-hrocSHRmxS3AYgVH6yOjd-c5E', 'Episodio 73', '¡Brogy se lamenta en la victoria! El juicio de Elbaf', ''],
    ['https://mega.nz/embed/hnVEgK6T#1FFSQQAo8gJCEFVdZa8iOWBMg4s9e9P0Eag6RMFeO10', 'Episodio 74', '¡La vela diabólica! Lágrimas de remordimiento y lágrimas de ira', ''],
    ['https://mega.nz/embed/pmNzQDbZ#ytC5wrw-EF1x707BepC2n42jze0PmOH0KWo94GOgvyo', 'Episodio 75', '¡El hechizo que ataca a Luffy! La trampa de colores variados', ''],
    ['https://mega.nz/embed/km0UkboL#W7pHxJg2OuOc4Dgm6YF16OMhvQuwAalzwJVfHtDRks4', 'Episodio 76', '¡El contraataque crítico! ¡El ingenio de Usopp y el Kaenboshi!', ''],
    ['https://mega.nz/embed/lv9DwZKB#YKmOTT3IvCsNhw0oJSBdNl9QLgxKLTY5z8OI8_1BtEY', 'Episodio 77', '¡Adiós a la isla de los gigantes! Rumbo a Arabasta', ''],
    ['https://mega.nz/embed/9mUj3TqR#N_re3yFxQcQrVBJkiY1DTw1z76UM6-rs28DHJPxT9yA', 'Episodio 78', '¿Nami está enferma? Más allá de la nieve que cae en el océano', ''],
    ['https://mega.nz/embed/xuVSATAD#JWHBMLsAqU1G5tvP_qS_AC8L_Kz9FewYQlLNQjaWRuo', 'Episodio 79', '¡Emboscada! El Bliking y Wapol el de las dos fuerzas', ''],
    ['https://mega.nz/embed/cz8kySbZ#64p2V-F0LXaEjIGDC7Psorrov3J_HwLWJ6cAC0S8qeI', 'Episodio 80', '¿Una isla sin médicos? ¡Aventura en el país sin nombre!', ''],
    ['https://mega.nz/embed/pzcSUQBa#lRmuLhqtPMyDQdTFOSJkeaSu0TsWh7NEYVzw2WKoJKE', 'Episodio 81', '¿Eres feliz? ¡La doctora que es llamada bruja!', ''],
    ['https://mega.nz/embed/gi1VTSAC#ELHVSVhbtIkaoxubM9qvOq7eGWHHc_FDQl_4qie89cs', 'Episodio 82', '¡La determinación de Dalton! La invasión de las fuerzas de Wapol', ''],
    ['https://mega.nz/embed/QrF2DKhS#Jwt-I_4XqU3kxvK7M0bmoEW62KHI-SOb840X9B49A1c', 'Episodio 83', '¡La isla que vive en la nieve! ¡Ascensión a las montañas de Drum!', ''],
    ['https://mega.nz/embed/F2c1wZCC#qJh24dMCWnuegzuJBO6K0EKievdFeo49xcXRLC4xo3A', 'Episodio 84', '¡El reno de nariz azul! El secreto de Chopper', ''],
    ['https://mega.nz/embed/4qswBZTJ#ZJXiY66nrFjKEs29e1S3MdHgZpi3xn9dQZCYp6BjQsk', 'Episodio 85', '¡El sueño del loco! El curandero Hiriluk', ''],
    ['https://mega.nz/embed/BzFDBRYT#6z0mrfCocIS029LTLjzh8ysFkKpdNl4Z2kLmcAVgknE', 'Episodio 86', 'Los cerezos de Hiriluk y la voluntad heredada', ''],
    ['https://mega.nz/embed/ciMwxCSL#wcf6zjMUY3vWkOPNfa3TRB5HOQBmEouEOtZu8Ijpt4c', 'Episodio 87', '¡El ejército de Wapol! ¡Las habilidades de la fruta Baku Baku!', ''],
    ['https://mega.nz/embed/47F3lCjb#EU9qVS9mHnK3-5E4IMDSzcjjTn4zppQnMrE3hUbYU1E', 'Episodio 88', '¡La fruta del diablo de tipo Zoan! Las siete transformaciones de Chopper', ''],
    ['https://mega.nz/embed/Bj0FyZ5R#I21yxA3F9Dtr3bZMwYPEuULfjwa99o3rsFuYp4I0FUo', 'Episodio 89', '¡Cuando el reino termine! La bandera de la convicción ondeará por siempre', ''],
    ['https://mega.nz/embed/Eut1CJST#0QkoQLFVWHpZOlGvUmFqwVeBS6IFHq5Z9PtQoqfi3fQ', 'Episodio 90', '¡Los cerezos de Hiriluk! El milagro de las montañas de Drum', ''],
    ['https://mega.nz/embed/Z3NX2CSS#6PUKpgHzTnzXkthSAZhDy9IerAp6VUYQrSM14vVaziU', 'Episodio 91', '¡Adiós, Isla de Drum! ¡Me voy al mar!', ''],
    ['https://mega.nz/embed/x7N2kKRa#4QlgD0FlJChaoqFpA50dH8E30jfqTJRp4SbCsa4pVwo', 'Episodio 92', 'El héroe de Arabasta y la bailarina de la cubierta', ''],
    ['https://mega.nz/embed/huUXTDwZ#3xsLiFHufUIvXQ2_83L6NIEMUy3RbKfWEwW552GEirk', 'Episodio 93', '¡Rumbo al reino del desierto! El polvo que llama a la lluvia y el ejército rebelde', ''],
    ['https://mega.nz/embed/tzdlHawZ#Fk03jy-6JlRalWE6YARy2GEKX-gEIEXFsXqLr8NUaIY', 'Episodio 94', '¡Reunión de los poderosos! Su nombre es Ace Puño de Fuego', ''],
    ['https://mega.nz/embed/omtAxAhT#60HF12bawc9kP0ndfG3dVq7-xOmFLfS6XBVcaMCyoD8', 'Episodio 95', '¡Ace y Luffy! Recuerdos ardientes y lazos fraternales', ''],
    ['https://mega.nz/embed/A39RHCbI#ZK4XGr1VpxXnqEn6aNZTAJZeLxwpR24ErJTrjCnIKpg', 'Episodio 96', 'La ciudad verde, Erumalu, y Kung-Fu Dugongs', ''],
    ['https://mega.nz/embed/k7kQ0BDC#Psw73kBQbDYSSMxgXpdZz4BE8R0wWRG6-lWMgj7l1i0', 'Episodio 97', '¡Aventura en el país de la arena! Un demonio que vive en la tierra caliente', ''],
    ['https://mega.nz/embed/Um1wgQLR#cGRffg0rcuEnP1quHheU0ak0tbE54CqvV6xdAzfOxMw', 'Episodio 98', '¡Aquí llegan los piratas del desierto! Hombres que viven en libertad', ''],
    ['https://mega.nz/embed/AusghRxa#Ev0UlHxNmMmt9tLOZ-5TKv97X6sgiMJD_EO9ZZLBv2c', 'Episodio 99', '¡El orgullo de un impostor! Kaza, el guerrero del ejército rebelde', ''],
    ['https://mega.nz/embed/c7NAzKQD#_OxDbfxZs75Q_knCznM-PLcxfsfLfYMZHZYcoEfmGC4', 'Episodio 100', '¡El guerrero rebelde Kohza! ¡La promesa jurada a Vivi!', ''],
    ['https://mega.nz/embed/My0nhDxC#3N9obVdopijujjMGYv1FcYltGsz_cHITj2I5MElzFVA', 'Episodio 101', '¡El duelo en las ondas de calor! Ace contra el hombre escorpión', ''],
    ['https://mega.nz/embed/cr8iQCIQ#hIFvZTgjumBnOGOt0Vex5cbBLG_-KHc7ST0Pqg21XVU', 'Episodio 102', '¡Ruinas antiguas y almas perdidas! Compañeros perdidos', ''],
    ['https://mega.nz/embed/gjNViRzJ#DuHxXXdH2lZMtzVkegyRiEX-T0_1uXeUGqhul6uCgh0', 'Episodio 103', 'Los oficiales enemigos se reúnen a las 8:00 p.m. en el Spiders Cafe', ''],
    ['https://mega.nz/embed/Z61XAS7L#Xejj5iIUoUyymvEoxLGfMR81nLB7zG_dTwGiG0_wmbs', 'Episodio 104', '¡Luffy contra Vivi! Una promesa entre lágrimas para los compañeros', ''],
    ['https://mega.nz/embed/V70gXQaI#ZVkrCmpjrodM2pL_sQsKdMXfgJSjiNzrzOdQGSKNm6c', 'Episodio 105', '¡El frente de guerra de Arabasta! Rainbase, la ciudad de los sueños', ''],
    ['https://mega.nz/embed/Vyt3GZwQ#vFaqUVNVRFpzGjBP7nUET_sQKCR2i-NkN0u6y3zXvHg', 'Episodio 106', '¡La trampa del final absoluto! Asalto a Rain Dinner', ''],
    ['https://mega.nz/embed/omtXXbBJ#ciJIGJBmPZkiqsOs_kQZVOMOHr9zddPk7wzk3JT2hGw', 'Episodio 107', '¡El plan Utopía comienza! La ola de la rebelión se pone en movimiento', ''],
    ['https://mega.nz/embed/lrUnlJCB#kmu9_KBiNNmRkw1FWS80y9ln3AOhm75aYs5pjQXR2wE', 'Episodio 108', 'El temible Bananawani y Mr. Prince', ''],
    ['https://mega.nz/embed/Q690TYYS#M3dghEPYanFLIfbrGBotu7HwhQDDqihWHXgHFMRdwOM', 'Episodio 109', '¡La llave para una huida milagrosa! ¡El Doru Doru Ball!', ''],
    ['https://mega.nz/embed/h3kXhAiD#kPJiqd5lB-jLfn_9r_cEqyi68u2f40J0O26Et6Dt3ow', 'Episodio 110', '¡Combate a muerte sin piedad! Luffy contra Crocodile', ''],
    ['https://mega.nz/embed/x2UAyKhb#4aITRqaedgzleA6tObx-Ss7gPVUYu5pr2CrDrvGbcCY', 'Episodio 111', '¡Carrera hacia un milagro! El desierto de Arabasta y los animales', ''],
    ['https://mega.nz/embed/QvE2yJjQ#_X0A8mxrqJI65G1FENnyuy5S5YG6Vvm-sk279p-aYMA', 'Episodio 112', '¡El ejército rebelde contra el ejército real! ¡El combate será en Alubarna!', ''],
    ['https://mega.nz/embed/ti9x1KaJ#91U0XikrrrSqFCuR2rRWewdROoQrULc6_RGcUuy3NwI', 'Episodio 113', '¡Alubarna llora! ¡La fiera batalla del Capitán Karoo!', ''],
    ['', 'Episodio 114', '¡El juramento por el sueño de los compañeros! Batalla en la madriguera del topo', ''],
    ['', 'Episodio 115', '¡El gran día de hoy! ¡El Clima Tact de Nami!', ''],
    ['https://mega.nz/embed/0vclVaZA#3n3Ahpx8iv6HqdgE2hzB1l4K-9-7JHfRWiYTEl5e8OA', 'Episodio 116', '¡Transformación en Vivi! El ballet de Bon Kurei', ''],
    ['https://mega.nz/embed/xikzQK7B#DvtPwAxuQLM1F5RrJ6B8dY-Ep2Bi_xV9iFklhieaffY', 'Episodio 117', '¡La advertencia del tornado de Nami! Explosión del Clima Tact', ''],
    ['https://mega.nz/embed/wuVQHRrD#E6jgv0gN8IjgVKIJ235jSrOrosedMgwRaXwu2TEztSY', 'Episodio 118', '¡El secreto de la familia real! La verdad sobre el arma ancestral, Plutón', ''],
    ['https://mega.nz/embed/87tjyAYa#WAAj_CxnghaAtL_pZsGUrUsF5Tb43gWLan-FAAzRfKw', 'Episodio 119', '¡La esencia de una espada poderosa! El poder para cortar el acero', ''],
    ['https://mega.nz/embed/4iFh3BbY#TJioGssD3s6QGtqBEeth70huw7F26VpQBx_0szCickM', 'Episodio 120', '¡La batalla ha terminado! Kohza ondea la bandera blanca', ''],
    ['https://mega.nz/embed/E2sAmZQK#3mGZHoACAc7uejwPaB8SUCNbIeeuUoH3oLuxMosM6AM', 'Episodio 121', '¡La voz de Vivi no llega! Un héroe desciende', ''],
    ['https://mega.nz/embed/Vy0BBDII#D9Hgw4EDIWs3cWHjW_UBGksfH5lUudpO3o7fZ8y4SMM', 'Episodio 122', '¡Crocodile de arena contra Luffy de agua! Duelo en segunda ronda', ''],
    ['https://mega.nz/embed/EvVgnL6D#v8Bifo-pu3FkCepWZDazkaP_xpxJraAl0FOzTHWSNWo', 'Episodio 123', '¡Huele a Crocodile! ¡Luffy, corre hacia la tumba de la familia real!', ''],
    ['https://mega.nz/embed/8ut11YoZ#WqoJZySmueVsOqn4bwI0yAf3Ehr7LGDjC_GeCNVp3_g/AuthToken/t11YoZ/WqoJZySmueVsOqn4bwI0yAf3Ehr7LGDjC_GeCNVp3_g/-11', 'Episodio 124', '¡La pesadilla se aproxima! La base secreta del clan Suna Suna', ''],
    ['https://mega.nz/embed/97MACSAT#w-apO2g7sZl3vGrFiTAhXGD5QjaTmqgXT6JodLKWkII', 'Episodio 125', '¡Alas magníficas! Mi nombre es Pell, el espíritu guardián del reino', ''],
    ['https://mega.nz/embed/Yr1FwZbA#-PSOL5ccS6mX6ehqohXVomB39ANKmckUDfszFT9-YDc', 'Episodio 126', '¡Te superaré! ¡La lluvia cae sobre Arabasta!', ''],
    ['https://mega.nz/embed/kj9EyTKY#3gA68I9RsB1SqUyZIkRPtSfhSe0LUel0UIr_HUY18zc', 'Episodio 127', '¡Adiós a las armas! Piratas y un poco de justicia', ''],
    ['https://mega.nz/embed/k20CSCrJ#iZexmf9hHCdvy5eQLzzpMxophgLcO-e2RUZTm_i0cgI', 'Episodio 128', '¡El banquete de los piratas y el plan para escapar de Arabasta!', ''],
    ['https://mega.nz/embed/MmcAkBTB#6CnM3FpBaQI-1BH81U_pZCB1LRg4UgRjKRSJCsa__TE', 'Episodio 129', '¡Todo comenzó ese día! ¡Vivi cuenta sus aventuras!', ''],
    ['https://mega.nz/embed/5iMjAD4K#-axVfl4O_HQ3Mg9BQvKu5Ffd4uruhQ7SeIl5c5myHOU', 'Episodio 130', '¡Una fragancia peligrosa! La séptima componente es Nico Robin', ''],
    ['https://mega.nz/embed/cmkgTLKS#DNeGSzAbobYWhgt7WxBLg5q9EVZyMSl9gX3v_of8pAE', 'Episodio 131', '¡El primer paciente! Anécdota del Rumble Ball', ''],
    ['https://mega.nz/embed/BjkmmQIT#WnzdeKP3FjGfSsqi4ZDHQa6czrsYYLF_C_0vRoCv1CE', 'Episodio 132', '¡La rebelión del navegante! ¡Por un sueño inquebrantable!', ''],
    ['https://mega.nz/embed/Fy0yCA4Q#3WkkzzR94glwKGSgSHdl7AEl00UVIVnOtTvZOn0L-go', 'Episodio 133', '¡La receta heredada! ¡Sanji, el experto del curry!', ''],
    ['https://mega.nz/embed/Y78kwRQJ#dKuOJwl41n_0f20X5eBwvA5sL9Q95JsttS3SIEs4Qw0', 'Episodio 134', '¡La haré florecer! La bola de 8 shaku de Usopp', ''],
    ['https://mega.nz/embed/47EmzTqb#Qjq0yyJJJkaa3M8SX21uxm9UURx1t_80nIteq8ZTQrk', 'Episodio 135', '¡El infame cazador de piratas! El espadachín errante, Zoro', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason3Episodes = [
    ['https://mega.nz/embed/IjdlWKia#XvhP0zYlKPKDKK-25FCVPrUQQaWcRtCCeP1e_wZ-6zA', 'Episodio 136', 'Zenny vive en la isla de la cabra ¡y hay un barco pirata en su montaña!', ''],
    ['https://mega.nz/embed/YzcBQYjb#AqFQKoInKVtoIGgqG0a5ia2__Y4UzzR8ouChVUIHEzg', 'Episodio 137', '¿Qué os parece el trato? ¡La ambición del prestamista Zenny!', ''],
    ['https://mega.nz/embed/9rdD3SBR#cGFAr_zsirJVZwxudh9BHELcBz4diJEHtdDwwlv0g-M', 'Episodio 138', '¡El paradero del tesoro de la isla! ¡Los piratas de Zenny al ataque!', ''],
    ['https://mega.nz/embed/Aj0D1Bya#chhL0P98MahIIseJo-a3fVWBoFYmAs9nzR2cUmhXO3k', 'Episodio 139', '¡La leyenda de la Niebla Arcoíris! Henzo, el anciano de la Isla Ruluka', ''],
    ['https://mega.nz/embed/N6Vj3Zha#eNVCrIFNwxZ8LqOPLrIUZq0LQ3rcPkMY2MmRGJYDYXI', 'Episodio 140', '¡Habitantes de Nunca Jamás! ¡La banda pirata de la calabaza!', ''],
    ['https://mega.nz/embed/17FGwDZI#o-Bucr0KpK9H7jK375wyENh__S80MfcNUP1B7HJ4xyk', 'Episodio 141', '¡Anhelo por el hogar! ¡El cementerio de piratas del que no se puede escapar!', ''],
    ['https://mega.nz/embed/IrN3CIRI#hYFfdjAH7KrvOYr9UYXVK-vjXuDwMYnm7tRPLMqL3v4', 'Episodio 142', '¡Lucha encarnizada! La ambición de Whetton y la torre arcoíris', ''],
    ['https://mega.nz/embed/k7NjwRzL#uraXxW2dFr2IylhIzCM4S3tV1_cHPcFCr2gdiDYcfMU', 'Episodio 143', '¡Y así comenzó la leyenda! Rumbo al final del arcoíris', ''],
    ['https://mega.nz/embed/NuFCkRzA#XphImIILsUwVBpyW56jZVFyVvRcI5cOfMOeHQm8cuyg', 'Episodio 144', '¡Destino fijado! Masira, el rey del salvamento marítimo', ''],
    ['https://mega.nz/embed/Xxx2TShZ#be_powcjJCQ86G6MlYIUvyE6GPDckz7fsAv3mEJJ6hU', 'Episodio 145', '¡Aparecen los monstruos! No toquéis a los piratas de Barbablanca', ''],
    ['https://mega.nz/embed/1uFD1AwA#oZR7EbGRaFwaohNbTTZDVKuq2Cfk7WGJ-dCLlJcFwN8', 'Episodio 146', '¡No creas en los sueños! Mock Town, la ciudad del ridículo', ''],
    ['https://mega.nz/embed/drNwRIxS#Hu_2seNA_2wWCZi_dtgBfkpd5LUIKcyljgwpO56S68s', 'Episodio 147', 'El orgullo de los piratas. El hombre que habla de sueños y el rey del salvamento', ''],
    ['https://mega.nz/embed/hrUT1RAZ#h1EDUDiYlWHVwuR1UdEUgYoaz67uAVWcWfpcA2xIPlw', 'Episodio 148', '¡La familia legendaria! Cricket Cabeza de Castaña', ''],
    ['https://mega.nz/embed/Mu0yUAgS#Dl57Wc-Ol23njZKAw7f1MmCmMB6Eq2M4tW1_tFNo_qo', 'Episodio 149', '¡Rumbo al cielo! Capturar al pájaro del sur', ''],
    ['https://mega.nz/embed/tiVAzLSb#6eFQJe3I5XByvtiyo2AWxWkx1aMDJ-zS-SCrD5-w-PE', 'Episodio 150', '¿Los sueños no se cumplen? Bellamy contra la Alianza Saruyama', ''],
    ['https://mega.nz/embed/Zn0GUSJT#en3C0c_iyfJRdYuWHb4ziLbQzW-70RcyQz3RJ0l3PP8', 'Episodio 151', '¡El hombre de los cien millones! La mayor autoridad del mundo y el pirata Barbanegra', ''],
    ['https://mega.nz/embed/pm9BHBwK#H7RLIbv9q1-y2tLgWt0j8owh_mP2hOHLOM_uGjkQW2I', 'Episodio 152', '¡El barco vuela por el cielo! Rumbo a la corriente ascendente', ''],
    ['https://mega.nz/embed/lm9hWbCI#4x2KdSPbUr1kRJ8zjiwRgO_v2Jhv7kwS-4EgJYI341E', 'Episodio 153', '¡Éste es el mar del cielo! El caballero del cielo y la puerta del paraíso', ''],
    ['https://mega.nz/embed/gz1XnIAa#g1HhCe8OeWcOgShd9XFXfzCKAuKKF14HnIya2FG_h6U', 'Episodio 154', '¡Skypiea, la isla del cielo! Las bellas ángeles de la playa de nubes', ''],
    ['https://mega.nz/embed/QqVxSTrL#d7llMGtPCtDiRnYwFvzfWzHhODf8W_vIqr65oJb9_60', 'Episodio 155', '¡La tierra prohibida! La isla donde vive Dios y el juicio celestial', ''],
    ['https://mega.nz/embed/Bz8nHA5S#BthUF52_85wM4bwoSyOkq8VxzpUZGqUmgqQKy8PZUeM', 'Episodio 156', '¿Ya somos criminales? Los encargados de la ley de Skypiea', ''],
    ['https://mega.nz/embed/NmUHjIzZ#hZOSbWoiPvmAZmR6W8U2AjO0klWG1AN4Qyh4gueCXgI', 'Episodio 157', '¿Podremos escapar? ¡El juicio de Dios se pone en marcha!', ''],
    ['https://mega.nz/embed/pvMnGahb#UoU1FThvFHCBbJ0ZI4koEAnxBGEGra21CwZO-XgQQTo', 'Episodio 158', '¡La trampa de la calle Lovely! El todopoderoso Dios Enel', ''],
    ['https://mega.nz/embed/IiVRQBAA#e1D4inNTlOMEXpQB8YXC5ZuDwfT424EEDI1h7vJqY_w', 'Episodio 159', '¡Hacia adelante, Cuervo! Al altar de los sacrificios', ''],
    ['https://mega.nz/embed/drUz2KQK#Rv9BV2BFc11U2DUrT1jXN25otXRk--t-d34qSE8r5To', 'Episodio 160', '¡Probabilidad de supervivencia: 10%! ¡El sacerdote Satori y el poder del Mantra!', ''],
    ['https://mega.nz/embed/VrlxxJgS#NVy116HutMjyZk6WvuTQpJclxw0kOyTTlomCPApooxc', 'Episodio 161', 'El peligro de la prueba de las esferas. Lucha a muerte en el bosque de las ilusiones', ''],
    ['https://mega.nz/embed/QqshRIgb#ahSVOyj3vMDl1BxR1uCFYT6sgpaasF9G8wpat9EqqD4', 'Episodio 162', '¡Chopper está en peligro! El antiguo Dios contra el sacerdote Shura', ''],
    ['https://mega.nz/embed/AjNx0KBB#CfqX8W2ja1Tu1AlcRYo02mZlLbA9Tl8-dDuMcETLgoo', 'Episodio 163', '¡El misterio crece! ¿La prueba de los hilos y la prueba del amor?', ''],
    ['https://mega.nz/embed/BqU0WIJC#4ow-H9pliGF1qYKOTylhfTUhr5QTY67qVGX_0AQ3cGM', 'Episodio 164', '¡Encended el fuego de Shandia! El guerrero Wiper', ''],
    ['https://mega.nz/embed/c79WSBRA#Ke7e5epC4Nke8aoLxn_kWKYgHb4Iej4kBZy_zSn00e8', 'Episodio 165', '¡La tierra flotante de oro, Jaya! ¡Hacia el santuario de Dios!', ''],
    ['https://mega.nz/embed/UyE32YIS#buou2WMWbT_weQVt0fY4KPKcfG2HSa0i31nJBcDRpMA', 'Episodio 166', '¡La víspera del festival de oro! ¡Afecto por el Varse!', ''],
    ['https://mega.nz/embed/ouE2AZbL#Tm4eFizcj2-3Q2MpnkU4sCj0hRtjK24nSsZThS7miZM', 'Episodio 167', '¡Aparece Dios Enel! Una aurora para los supervivientes', ''],
    ['https://mega.nz/embed/1ysEgaoZ#un932NdlnVysvhFJQ3qn5_y2LSxGf79asTE9ahRj5XA', 'Episodio 168', '¡La pitón ataca! Comienza el juego de supervivencia', ''],
    ['https://mega.nz/embed/xrVgASwK#mCt_6_yJ40cH-Pp6MoC2CzjAFjRZqkuF_BmL2xKAngQ', 'Episodio 169', '¡El Reject mortal! La determinación de Wiper, el demonio de la guerra', ''],
    ['https://mega.nz/embed/wm9zBADL#ka-4PZ7rR4wetTCOoY_J1wSNNvLr53WE4Md6bk8Skn0', 'Episodio 170', '¡Feroz batalla en el aire! El pirata Zoro contra el guerrero Braham', ''],
    ['https://mega.nz/embed/gjdnkaDT#HyUwIvixhqyhTilkaffL2kjj6XByrTy7EZ1lIT8Pkt8', 'Episodio 171', '¡El aullido del cañón ardiente! Luffy contra Wiper, el demonio de la guerra', ''],
    ['https://mega.nz/embed/NjkCQJSb#ii711pHGZi5fXqpM3Z2Nu5uSFuGYVHKAy44qVFCq6Tc', 'Episodio 172', '¡La prueba del pantano! ¡Chopper contra el Sacerdote Gedatsu!', ''],
    ['https://mega.nz/embed/tmEmzahD#hQFbK4dYnqS2lp6qfAxtXTIhj9o6c0peShU6oqyMRz4', 'Episodio 173', '¡La habilidad invencible! Se revela la auténtica naturaleza de Enel', ''],
    ['https://mega.nz/embed/Vzci3KSL#bCG0U9dsJ7gbPLi_RuLjLhEtXiT0_5yO0dSOEPE8Ud4', 'Episodio 174', '¡La ciudad fantasma! ¡Las grandes ruinas de Shandora!', ''],
    ['https://mega.nz/embed/Fq8hHb4a#GoYouosDOkJ8HgrS08UTZITfLEZnBS1aZdJ1aNC40lU', 'Episodio 175', '¡Probabilidad de supervivencia: 0%! Chopper contra el sacerdote Ohm', ''],
    ['https://mega.nz/embed/ov8mxSKS#OeOu-gEd9DtYGLtzSVD7n2chAhrJ4AtU1JWOyIVY9lU', 'Episodio 176', '¡Escalar el Giant Jack! Lucha a muerte en las ruinas superiores', ''],
    ['https://mega.nz/embed/duN1VICY#XZaF9ruUUkdkkWfmVb_avHXxj5uzXyG33UX9TQdqse4', 'Episodio 177', '¡El valor de la prueba del hierro! ¡Duelo a muerte en la jaula de espinas blancas!', ''],
    ['https://mega.nz/embed/g2cViDxb#IFo78t4ZwEyOfEwSwVvcyReSuU5Pa0XEE_UjLFP7W7c', 'Episodio 178', '¡Ataque de río caudaloso! ¡Zoro contra el Sacerdote Ohm!', ''],
    ['https://mega.nz/embed/wmtAUS4Q#x5MmSfeIbjXS7EJgRqpeef6wzoMFcwEBPRsbkfDOXYE', 'Episodio 179', '¡Las ruinas superiores se derrumban! ¡El quinteto del final!', ''],
    ['https://mega.nz/embed/9382jYJJ#rluVSauYrELoqOifx67XCT36_ny1D2mFPeT_T7Dd-G0', 'Episodio 180', '¡Batalla en el santuario de Dios! ¡La ambición de Enel!', ''],
    ['https://mega.nz/embed/orsRFZRb#6K1Du5NCDWT5BmqbftEIAAq3VesgdY-ctuLabB1Yafo', 'Episodio 181', 'Ambición por el Fairy Varse. El Arca Maxim', ''],
    ['https://mega.nz/embed/tqEzALJA#Zjo7otoZL6d4KwOb6A8-JD9E70fBpm80l9weXtMIi60', 'Episodio 182', '¡Contacto definitivo! ¡Luffy Sombrero de Paja contra Dios Enel!', ''],
    ['https://mega.nz/embed/EmdhkIra#JRGrNAqTStCbObO8J_qBDPHW_OeOeNpJ38K5mpxmg5k', 'Episodio 183', '¡Maxim se eleva! ¡El comienzo de la Deathpiea!', ''],
    ['https://mega.nz/embed/tzFhyATL#DEvKKlS-lqDDGdTq629bjoCPitTMWRe6r4oM8jzskcs', 'Episodio 184', '¡La caída de Luffy! El juicio de Dios y el deseo de Nami', ''],
    ['https://mega.nz/embed/438WTSoa#tdpYpb-n_ippfVA-S6yhfqhwBomhCzT9-sR1PxcaBVE', 'Episodio 185', '¡Los dos se despiertan! ¡El rescate del amor ardiente!', ''],
    ['https://mega.nz/embed/97FhULZA#LwsL6zu7gEf9bgEXd8f7GKW7DS0yINo5AQGo8T8l6iY', 'Episodio 186', '¡Hacia la desesperación! La destrucción de Skypiea se aproxima', ''],
    ['https://mega.nz/embed/p691xLgQ#JJqgK46dQ7c81-QNcgF5KvCUZnevoar3yalX2RquVbo', 'Episodio 187', '¡Guiados por el sonido de la campana! La historia del gran guerrero y el explorador', ''],
    ['https://mega.nz/embed/ZqEATLyY#fkfrmTd1HhR337OiFKpoTIp7a17YwGdcvCC99yR-IO4', 'Episodio 188', '¡Liberados de la maldición! Las lágrimas del gran guerrero', ''],
    ['https://mega.nz/embed/4uEwWR4I#7__mYwuAwnmurejYJLf7uP8pmB5UwW18Xa0XKqG5a2o', 'Episodio 189', '¡Amigos para siempre! ¡La campana del juramento resuena a través del mar!', ''],
    ['https://mega.nz/embed/lm8zFAQT#4ac3WD_FFDarGrw1QJgCwfPxfQsfK-b4NQYAo5tC-z0', 'Episodio 190', '¡La destrucción de la isla del ángel! ¡El terror del advenimiento del Raigo!', ''],
    ['https://mega.nz/embed/IrUGUKpI#bI9EkPRnWz_r4-WoBx8oNkcpuV7P4SCa1DY-yZBReBE', 'Episodio 191', '¡Derribar el Giant Jack! La última esperanza de escapar', ''],
    ['https://mega.nz/embed/NvlyVSaY#vnUKl3vUZ6wP0K3flEuOtZWD8xv_lew1fzW55-y19mo', 'Episodio 192', '¡Milagro en el reino de Dios! El Love Song que llegó a los ángeles', ''],
    ['https://mega.nz/embed/QrckgaAC#dM41eK-rS_J112ltiXNSnSwhRP41OpYM442g49FGxDM', 'Episodio 193', '¡El final de la batalla! El orgullo de Shandora resuena a lo lejos', ''],
    ['https://mega.nz/embed/xjsRkZAD#4caYnYUd2vwDVjx6KEgTzB5v9-nXwhSwyqFRCvBnhCY', 'Episodio 194', '¡Estuve aquí! El tejido de los Poneglyph', ''],
    ['https://mega.nz/embed/NysFgYQS#4yn17tzNroKf6fPHNbVu354IIe7yrHeIMiM-ueRd5WA', 'Episodio 195', '¡Rumbo al mar azul! Un final tejido de recuerdos', ''],
    ['https://mega.nz/embed/42MmjCTA#NfOAMmeixcpsd6QpiwWQFazCubueW_mGwE_yfhW0A10', 'Episodio 196', '¡Estado de emergencia declarado! ¡El barco pirata infame se infiltra!', ''],
    ['https://mega.nz/embed/sjEWQaIS#yCQvfj-cRo-Y7RiIXxjYWKkoEB8va_7dzxLgHDBD_j8', 'Episodio 197', '¡El cocinero Sanji! Demostrando su valía en el comedor de la Marina', ''],
    ['https://mega.nz/embed/9vdH3KIT#nMgJpIdOyu2jhKKiZC3Hm_HW0MYzIXb4PUa86QXAi-M', 'Episodio 198', '¡Zoro capturado y la operación de emergencia de Chopper!', ''],
    ['https://mega.nz/embed/U381hCYJ#6tWssiymT6qg1XDRrOQDZNZq9ETZkjzymrUwHzvRvSk', 'Episodio 199', '¡La red de búsqueda de la Marina se acerca! ¡Un segundo compañero capturado!', ''],
    ['https://mega.nz/embed/lytRkSLZ#AJjvMSsysy66EmG4G7xJPEWJPrRP8MKxZHp6jW6Vb8o', 'Episodio 200', '¡La determinación de Luffy y Sanji! El gran plan de rescate', ''],
    ['https://mega.nz/embed/0ukkxJ7Y#s8Rq96QGhqmY7-vwYi5MxI_1TpE1GR3dymzQch52vjk', 'Episodio 201', '¡El escuadrón de combate de almas ardientes entra en acción! ¡Batalla en el puente!', ''],
    ['https://mega.nz/embed/E79lEIoB#eDCavcdjQ6lH0Ye3dJsqI4WoNeEmQMp2el3w6HQoD0w', 'Episodio 202', '¡Abriéndose paso a través de las líneas enemigas! El rescate del Going Merry', ''],
    ['https://mega.nz/embed/1qV3nCqJ#IHjtHiiC6r3wWe-yxzyEv0Ao8mhWw5vq0WzVYXAQBqw', 'Episodio 203', '¡El barco pirata desaparece! Batalla en la fortaleza, segundo asalto', ''],
    ['https://mega.nz/embed/Mi8G2Kxa#nTdUdS4OhFh2QR7VGKqG3VPsVLDZbIV5fu7zHyd6r0o', 'Episodio 204', '¡Operación para recuperar el oro y operación para recuperar el Going Merry!', ''],
    ['https://mega.nz/embed/Ev9hXZbR#ZY3ZJiL-3PvcQ3H4GjfdXHz_Ulgns9FP3nVUcf-K9us', 'Episodio 205', '¡El plan secreto para atraparlos a todos! La estrategia del Jonatan', ''],
    ['https://mega.nz/embed/831XwJqL#L0kyrcDX6cpQ4actxqI6pqB1U6K9zq__D4GpSTh5yxo', 'Episodio 206', '¡Adiós, fortaleza de la Marina! La batalla final por la libertad', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason4Episodes = [
    ['https://mega.nz/embed/ZqVnCILA#EHHG2cB0CcqvnVwRzqwmIZSOamekVsSNd0abFfqhk-Y', 'Episodio 207', '¡Gran aventura en Long Ring Long Land!', ''],
    ['https://mega.nz/embed/NzlgXLYL#oZ-dZm0qn6Vq4SUyxWUGBGJzeneFYvM1kJY9Am0P0tk', 'Episodio 208', '¡La banda pirata de Foxy y el Davy Back Fight!', ''],
    ['https://mega.nz/embed/huUABR7C#yU3qZi_3fsCb0hVC6dw2NipuWk_CBw8BSIGlBTNgbj0', 'Episodio 209', '¡La primera ronda! Un juego alrededor de la isla, el Donut Race', ''],
    ['https://mega.nz/embed/B2dVXDhI#e0rvNDxObPL7qYrADI_XYz8cxJN6qFwOXI_rCWRz2HU', 'Episodio 210', '¡Foxy el Zorro Plateado! Una interferencia violenta', ''],
    ['https://mega.nz/embed/E2FXgbCC#TyVL-Qnbs28PzRt64qy-ATId2NKoGDcGm97x3xsjJnI', 'Episodio 211', '¡La segunda ronda! El combate del Groggy Ring', ''],
    ['https://mega.nz/embed/QndnzY6D#hL752eN0ajKwZ5rezcGFe8BWoIzrbvBNubrEftcTpQQ', 'Episodio 212', '¡Sucesión de tarjetas rojas! El Groggy Ring', ''],
    ['https://mega.nz/embed/Zyc2DagR#ShIc9iiXKjEFNPlKgQDbIZN4CaAhbDHwuZ8jf7JAEpY', 'Episodio 213', '¡La tercera ronda! El torneo de la carrera de patines', ''],
    ['https://mega.nz/embed/Av8kVYhD#bdCZokVqoROHl_7tgs4Lpse-tHBU9oQ1f0E47e3jKRU', 'Episodio 214', '¡Clímax de la carrera! El pelotón entra en la segunda vuelta', ''],
    ['https://mega.nz/embed/QiMQXChT#B9Mi2JDcbSFe0tcjZzPdGTICZ1a27wLa9r1sZ4WtJIg', 'Episodio 215', '¡El servicio veloz de Foxy! El balón prisionero pirata', ''],
    ['https://mega.nz/embed/Mmc2XToD#FBTk8tIMNrrVG08uGGTdT2Zo7YmKmZ2E4CUxn1NlF60', 'Episodio 216', '¡Combate definitivo en el acantilado! ¡Un, dos, tres, pollito inglés!', ''],
    ['https://mega.nz/embed/169g2ICY#e1zJ3Z2o3dV2oVgIjHRCSxQh6T29rPL_c-3mXRP6rog', 'Episodio 217', '¡El combate de los capitanes! El juego final: ¡Combate de boxeo!', ''],
    ['https://mega.nz/embed/R7NXGSzA#epJ4OfNhXI4yizZE4UiqHrAKU0z90RdRYiWnsuPOfRQ', 'Episodio 218', '¡El rayo de lentitud de Foxy contra el Luffy de goma!', ''],
    ['https://mega.nz/embed/ZrlB3axJ#IBHJCkA4qiNKRHarnpClDHQZlOcCzYYVyJEbNmpSdXM', 'Episodio 219', '¡Feroz combate a muerte! El final del Davy Back Fight', ''],
    ['https://mega.nz/embed/sq10yCjJ#roSJ28E53Egv42_m2eAq8PyL_U5teR-4TUCVfw6p01I', 'Episodio 220', '¿Habéis perdido la memoria? El barco pirata sin rumbo', ''],
    ['https://mega.nz/embed/g2NUHB4C#VDauQhJFWzrO9MQCsmMRgClgcipsqIlHN0AwQXLI8eI', 'Episodio 221', '¡El misterioso muchacho de la flauta y la deducción de Robin!', ''],
    ['https://mega.nz/embed/VvkFzbLC#2yNO2N3FW9-stM91mydWX48k4RUW3c5iR1cFGYvgjlQ', 'Episodio 222', '¡Recuperemos los recuerdos! Los piratas desembarcan en la isla', ''],
    ['https://mega.nz/embed/UvUTxYqT#dXyFXYU2eqJ7rGd9CzKt6_8q9-cmgrpN-KDhSOWMCdE', 'Episodio 223', '¡Zoro afila sus colmillos! ¡Combate contra un compañero de la banda!', ''],
    ['https://mega.nz/embed/53smHDiJ#hDMxehIzGnZfOXvcOlGrnYwzpw4zXnDlaSXTd4ilPfk', 'Episodio 224', '¡El contraataque del ladrón de recuerdos revela su verdadera naturaleza!', ''],
    ['https://mega.nz/embed/g7EHCLRA#MkIfCspFKo6cE1bju14SSmVYf9-zMnRIu8NCeIEn3es', 'Episodio 225', '¡El hombre de orgullo increíble! ¡El zorro plateado Foxy!', ''],
    ['https://mega.nz/embed/U6tQHIAS#V-7q8yd89V4ygqEF6CaBN9ax5I4-qjy0nxbhu2S1I34', 'Episodio 226', '¿Un poder invencible se aproxima? El hombre más peligroso', ''],
    ['https://mega.nz/embed/12kT3T6Y#enF77fNrNopHtqp_h1k8tqx_hFsl-gJAhwDOMHzQzk8', 'Episodio 227', '¡Almirante de la Marina Aokiji! La amenaza del poder militar más fuerte', ''],
    ['https://mega.nz/embed/96d0VZJL#6nJbLikrEDtJdvz5lAHmGcdpmuMYbPCnFoDDFsYFqfw', 'Episodio 228', '¡Goma contra hielo! El combate uno contra uno de Luffy contra Aokiji', ''],
    ['https://mega.nz/embed/g79jCRxY#xTkCqow6xOAQP4F66nC5uz8OAbVsHWM-hzBmO9_PISw', 'Episodio 229', '¡El veloz tren marino y la ciudad del agua, Water Seven!', ''],
    ['https://mega.nz/embed/Qjs3yYKb#RRIEgGge6uPYx08C5bM3-TPpHX9wDrgkBYwCA2YDUBw', 'Episodio 230', '¡Aventura en la ciudad del agua! Rumbo al gran astillero', ''],
    ['https://mega.nz/embed/V7l1VbTQ#K3QfsC_idY0fLWgkxFbfdGEJKTbSOrd-oCjg6LCMZlM', 'Episodio 231', '¡La familia de Franky y el señor Iceberg!', ''],
    ['https://mega.nz/embed/c7dASSzb#Cg3e55EF6vxfPljE4GHVT2JGfSH5rai9JYN4cLHxMr0', 'Episodio 232', '¡Galley-La Company! El muelle uno es una magnífica obra de arte', ''],
    ['https://mega.nz/embed/cq9DQKJD#ON4xL00rj9q8VJoxkywFAQ09DkLb8oeB2UpAKFXOXEE', 'Episodio 233', 'El secuestro del pirata. El Going Merry espera la muerte', ''],
    ['https://mega.nz/embed/JnFlmJKZ#jbLLAmONPf1QGt9muq10qkzYrZaLkilDMT11ULmf9YQ', 'Episodio 234', '¡Salvar al compañero! Asalto a la Franky House', ''],
    ['https://mega.nz/embed/FuFzGZZI#Rs5wmc0wCGiWeqCWszOBNZ7x2o3VFzkzYgLayJTZxnM', 'Episodio 235', '¡Gran combate bajo la luna! La bandera pirata ondea con tristeza', ''],
    ['https://mega.nz/embed/wrUgVCpA#bHbdKa2woNTUAHwysmMrPm9VB9XJsWG_0NnWJqabppU', 'Episodio 236', '¡Luffy contra Usopp! El choque del orgullo de dos hombres', ''],
    ['https://mega.nz/embed/RqkimKqa#G_LXN3obW5KxcS6_-pkqh65_drlXv5b6Ulx8KErGE1k', 'Episodio 237', '¡La ciudad del agua tiembla! ¡Iceberg es el objetivo!', ''],
    ['https://mega.nz/embed/A7kFybTD#oYQX4Ofbp_bkoVYZ5Ka1f3k-PGILtg_GLhLYG4iLzMA', 'Episodio 238', 'El hombre de goma contra el cyborg que escupe fuego', ''],
    ['https://mega.nz/embed/Zi1iURKD#juyS1ZXvgb-_d3DzGlnPwwGJ7xVe4ZkVA_mhLbGVBRw', 'Episodio 239', '¿Los culpables son los Sombrero de Paja? Los protectores de la ciudad del agua', ''],
    ['https://mega.nz/embed/wy1zQQiS#Im5H3Hb7q6TeEBtkJGCYLLi8rnVDHGTDv237Ekeor5U', 'Episodio 240', '¿Despedida eterna? Nico Robin, la mujer que arrastra la oscuridad', ''],
    ['https://mega.nz/embed/wnFE0KAa#wNu3ISOUUHfk1SIWz64UdTwMOxasqd_1u8y_ZC7qzdA', 'Episodio 241', '¡Atrapar a Robin! La determinación de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/0itDDbZR#lNtfU6L8whrzuymVNJU0ix0IN5937_Rlg8Cv0n9uOKw', 'Episodio 242', '¡La señal es la explosión! El CP9 se pone en marcha', ''],
    ['https://mega.nz/embed/RuNzhaAb#i4v9-r0vfpFGvV9Cvu4x_6XFrpPh-_1czjiW5ZE8uC4', 'Episodio 243', '¡El CP9 se quita la máscara! Sus verdaderas identidades reveladas', ''],
    ['https://mega.nz/embed/hr1zhDbJ#u3-YseqpFvQ1mqqChqPE03QkRO8heI7zLnCW6oRsUlw', 'Episodio 244', '¡El lazo secreto! Iceberg y Franky', ''],
    ['https://mega.nz/embed/o2UVVZxb#s1il6s1PUbK9XABWOWwPkkUYfer3hqjW8NsySKZ_L6o', 'Episodio 245', '¡Regresa, Robin! ¡El enfrentamiento con el CP9!', ''],
    ['https://mega.nz/embed/V6EkyZhC#FGuo7dlKshYQF6MsBaaHdaNk4ZdEGhSav3XeYAe4V5c', 'Episodio 246', '¿La banda de los Sombrero de Paja aniquilada? La amenaza del modelo leopardo', ''],
    ['https://mega.nz/embed/MrVnSbxS#GJ1mNZFMpUP36Dy57b3C-73NoK7_1MjwI9y8xRaZ5Pk', 'Episodio 247', '¡El amor de un hombre por su barco! Las lágrimas de Usopp', ''],
    ['https://mega.nz/embed/EqFXECpD#bztPmUFhKKkuOzd2VCLWawV9NSAzYNOcAdxPNiOD-Wg', 'Episodio 248', '¡El pasado de Franky! El día en que el tren marino corrió', ''],
    ['https://mega.nz/embed/oi9ESAqL#KTVcPbHOkiafQSU3cl-bFLAlB0I3ATew5kPRbTPsWLU', 'Episodio 249', '¡La conspiración de Spandam! El día en que el tren marino tembló', ''],
    ['https://mega.nz/embed/MvcCFbZD#nh6r3TyHuFvLlYKZk6V45v5meAEpgXEqRmn54WsLVw8', 'Episodio 250', '¡El final de un hombre legendario! El día en que el tren marino lloró', ''],
    ['https://mega.nz/embed/F3ERTKwR#atzYiR5N21Zf2gTe7fjczCevdMkHFKvK5lif1N6oi8I', 'Episodio 251', '¡La verdad tras la traición! ¡La dolorosa decisión de Robin!', ''],
    ['https://mega.nz/embed/N6EnUKrK#tEXoUF-Na82DhRQLpsVnM2V7jF4brNW9pEraAtnvg0E', 'Episodio 252', '¡El silbato que separa a los compañeros! El tren marino se pone en marcha', ''],
    ['https://mega.nz/embed/F2sR2AYQ#tDPWvtAEetRNGEsOHg9GuNw759RDsoocQ0uVeV05ZPs', 'Episodio 253', '¡Sanji al asalto! ¡El tren marino en la tormenta!', ''],
    ['https://mega.nz/embed/s3NTBQ4R#6ZwlsmBarTivtpD7yuwBXCwgyFpFfkBZaBuicAZhDec', 'Episodio 254', '¡El grito del alma de Nami! ¡El regreso de Luffy Sombrero de Paja!', ''],
    ['https://mega.nz/embed/E28iVBBY#B05Maw5jvhkyVkQZePFfi9oejV15WjVpd_UPam8Mmjk', 'Episodio 255', '¿Otro tren marino? El Rocketman sale a toda velocidad', ''],
    ['https://mega.nz/embed/YzFXiL5b#-1ewlefTw5mChRJuxE5w1jmH5xVs_reE3PHqQEUcRUc', 'Episodio 256', '¡Salvar a los compañeros! ¡Los puños de hierro que unen el destino!', ''],
    ['https://mega.nz/embed/U39xhSqK#U0jjXw5s4wZhumCVKtNGUl2dXvi_8I2UYfiPYQUNtLM', 'Episodio 257', '¡Romper la ola! El combo definitivo de Luffy y Zoro', ''],
    ['https://mega.nz/embed/cqUxkYBR#5v7R_QAEXjXvk5Qca9VoEqYO9UVcfxWwhqf9pQcyb3A', 'Episodio 258', '¿Quién es el misterioso hombre? ¡Aparece Sogeking!', ''],
    ['https://mega.nz/embed/MuFVRADZ#oPJUdxAwUm0hhEznnjFf8R6_itX_3wB0J-z4A1E6h9I', 'Episodio 259', '¡Duelo culinario! Sanji contra el combate de ramen', ''],
    ['https://mega.nz/embed/h7VQGDLA#S3zKS9dMR5H1tGLEkfzML1HvexgTsyy3CnFsqJSa9Pg', 'Episodio 260', '¡Duelo en el techo! Franky contra Nero', ''],
    ['https://mega.nz/embed/lmtiyTxB#7hhkmh5y5_VU-ngbvBOCEe-PKkM-pyzavaGF6042iEg', 'Episodio 261', '¡Choque de espadas! Zoro contra el cortador de barcos T-Bone', ''],
    ['https://mega.nz/embed/ZzVxGCKK#zZyoWTm-L1FeKM3inK4J-1xyp1asVm-caJxfERFln8I', 'Episodio 262', '¡La lucha de Robin! El ingenioso plan de Sogeking', ''],
    ['https://mega.nz/embed/Qnsj0QBK#tanYpQ7a5bPjrSUKwqFQxD75FEFTtnPNF-HjTap3bDk', 'Episodio 263', '¡La isla judicial! ¡Panorámica de Enies Lobby!', ''],
    ['https://mega.nz/embed/Y21lxDzI#6cKMxF7lrU7PpVlY2T9fVd55SGQKYRJv2xUjiwSfbBs', 'Episodio 264', '¡La operación de desembarco comienza! ¡Asalto de los Sombrero de Paja!', ''],
    ['https://mega.nz/embed/Y2FnALzI#ln4nupUaFe13L3BhKrkgHYSPVxQPUtmYCdG9-7EE8gY', 'Episodio 265', '¡Luffy a la carga! ¡Gran batalla en la isla judicial!', ''],
    ['https://mega.nz/embed/1uFnXCIY#epHMYMi9fAd8hFUhGYoUh997V3GQu7pBJhw7APk9XOM', 'Episodio 266', '¡Combate con los gigantes! ¡Abrid la segunda puerta!', ''],
    ['https://mega.nz/embed/tqN02bRD#uDukC4fH0JD71n-h0uD4Q39ffJgASMZG180XzMK-svo', 'Episodio 267', '¡Abriendo camino! ¡El Rocketman vuela por el cielo!', ''],
    ['https://mega.nz/embed/BvMlBRbA#lER-xakZjQNoqWVaOWr_phC8JnvxG2eyZSjGU5SNfDE', 'Episodio 268', '¡Alcanzar a Luffy! La guerra total de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/B2dk1B6R#lER-xakZjQNoqWVaOWr_phC8JnvxG2eyZSjGU5SNfDE', 'Episodio 269', '¡Robin traicionada! ¡Las intenciones del Gobierno Mundial!', ''],
    ['https://mega.nz/embed/071VUZQR#N11-mz_25BCabMZ3_bPruNYhgYQCX9ahdMC77Kzs33k', 'Episodio 270', '¡Devuélvenos a Robin! Luffy contra Blueno', ''],
    ['https://mega.nz/embed/17lQBaDY#JyIFpLyvtdEhWJ5KFtseurNll5b9eHdKNVc7O7bifac', 'Episodio 271', '¡No os detengáis! ¡Dada la señal del contraataque!', ''],
    ['https://mega.nz/embed/Av0wEDiD#1QJeUPWn_p2mwKOu1zG4wyTbDodRKEMxuQX7pG7pDZI', 'Episodio 272', '¡Luffy a la vista! Reunión en la plaza del palacio de justicia', ''],
    ['https://mega.nz/embed/Ym0SDQCY#D176bT0r_Qug8-5HuWbwtmhpLOjO2978N6AWziinSEs', 'Episodio 273', '¡Todo por proteger a mis compañeros! ¡Marcha! Activación del Gear Second', ''],
    ['https://mega.nz/embed/8qV0CRDD#-nJCyF7ogMeOUfjpyWCPnLLpqw-CQqVB8VBR8YOeBSE', 'Episodio 274', '¡Responde, Robin! ¡El grito de los Sombrero de Paja!', ''],
    ['https://mega.nz/embed/Y6kzTYgA#LGHsOkv4r0Bg2VBp_F_Y_OvNXb6jqyh6XUn3n61BF1I', 'Episodio 275', '¡El pasado de Robin! ¡La niña llamada demonio!', ''],
    ['https://mega.nz/embed/tuUDzCjQ#Ecja2_dq_3hFK8M7bsi93Rrpj4WT1vwmoLvxtMM2oOU', 'Episodio 276', '¡Destino de madre e hija! El nombre de la madre es Olvia', ''],
    ['https://mega.nz/embed/VydViZ7R#yYJJ5Vo9AwktFCELh1XaBo1ewA6-Y4n1OuKWCDE4XtI', 'Episodio 277', '¡La tragedia de Ohara! El terror de la Buster Call', ''],
    ['https://mega.nz/embed/Bz9VkaQa#MFeR49uS4HRcV9-eizgWQSIvM5CB6E9fL5Cr2LNL4ys', 'Episodio 278', '¡Dime que quieres vivir! ¡Somos tus compañeros!', ''],
    ['https://mega.nz/embed/ZvUWELrC#SPlS-RtGi16N6TKWH1HLDzt9ZkrQbu8MjISahg2DSZo', 'Episodio 279', '¡Saltar al vacío! ¡Los recuerdos de Luffy!', ''],
    ['https://mega.nz/embed/EjFCCSwJ#rTqof6ONdAu3H679kYDqf-odPquzWVkGDZmSDyxFpec', 'Episodio 280', '¡El estilo de vida de un hombre! Las técnicas de Zoro, el sueño de Usopp', ''],
    ['https://mega.nz/embed/42EklBDI#cVLmMca5Qb_vpFi62Dny3fHBj4k_rEYNFEj_6lxgp90', 'Episodio 281', '¡Las lágrimas tejen los lazos de los compañeros! El mapa del mundo de Nami', ''],
    ['https://mega.nz/embed/VqdViZxJ#N5XhBQNamEJX9NlDM_hL6j7OPpDJJtEZh1fnO33UYwQ', 'Episodio 282', '¡La despedida esculpe los sentimientos de un hombre! Sanji y Chopper', ''],
    ['https://mega.nz/embed/RudX0RiB#PE56qJKMaZ82Uy91eX3VYLBCvU3sHL8k0LsUEWWKM4o', 'Episodio 283', '¡Todo por una compañera! La oscuridad de Robin', ''],
    ['https://mega.nz/embed/gn1iUZyD#61RGaBRvyc7CP_sKdwyYvPbc0GBpMhpUf_l-H4KYHeA', 'Episodio 284', '¡No os entregaré los planos! La decisión de Franky', ''],
    ['https://mega.nz/embed/drkURRCa#xwf96wUrX8kGVuPEdR6nDoD-1jMT_jn-Zsr5OfMZHjg', 'Episodio 285', '¡Hacerse con las cinco llaves! El CP9 contra los Sombrero de Paja', ''],
    ['https://mega.nz/embed/gncgjbDb#uhj682brnC63K_DUz4gyUa_EcYjM28lzkgGMvgBik6Y', 'Episodio 286', '¡El poder de la Fruta del Diablo! Kaku y Jyabura se transforman', ''],
    ['https://mega.nz/embed/hm8E2KbC#YZ7Q3mW3YO6Do6KJNMidV3P2_yZViJlfmZFlPy8WTlI', 'Episodio 287', '¡Aunque me cueste la vida, no os golpearé! El código de caballería de Sanji', ''],
    ['https://mega.nz/embed/grVgSBxJ#WhLZBZe-rI0KoO_u9GlTPZWilGpzQ4sjwnmNsPaTNdQ', 'Episodio 288', 'El error de cálculo de Fukurou. ¡Mi zumo es de cola!', ''],
    ['https://mega.nz/embed/9ykwEByI#4ZZ_4DhGdCqOyPCAOJ45OEvFuxo2MKbz-qn9D4GdVuE', 'Episodio 289', '¡La nueva técnica de Zoro estalla! ¿El nombre de la espada es Sogeking?', ''],
    ['https://mega.nz/embed/B79xUTLB#0ZX14IsHP_BV3yU13e9qIeGON9X08nPz6hXaQ_cmFaY', 'Episodio 290', '¡Fuera de control! El Rumble prohibido de Chopper', ''],
    ['https://mega.nz/embed/J7UFUSiJ#LiMQjqVhyvXHAqy4H32iaCxk9wgXvz2Gx-k21otEM_U', 'Episodio 291', '¡El regreso del jefe Luffy! ¿Sueño o realidad en la lotería?', ''],
    ['https://mega.nz/embed/0nlCQB6S#6De8Q28zpH2rVbUyQkYX5JwYDBOBwd8RhQoPEzWKpdY', 'Episodio 292', '¡La gran carrera de pasteles del festival! La trampa de la nariz de burbuja', ''],
    ['https://mega.nz/embed/wz8iVQ7J#P7iYW1mR-N-SyvmOT_uBK77gJTKyhbnO5WpvvwXNlH0', 'Episodio 293', '¡Kalifa, la maestra de las burbujas! Nami se aproxima a la trampa de jabón', ''],
    ['https://mega.nz/embed/Z39xmTpZ#qbHeeALrp1jCeyze1Y8ByzrpAOnE2JLRsthoezm_ab4', 'Episodio 294', '¡Las malas noticias se propagan! ¡Activación de la Buster Call!', ''],
    ['https://mega.nz/embed/l7Nw2D7L#9xNF9AdrYcxkokaUIRt13gxXOcHze63zqXuJfocZrWQ', 'Episodio 295', '¿Cinco Namis? ¡El contraataque con espejismos!', ''],
    ['https://mega.nz/embed/lnNAXJSa#2TbfxRQqJe9tERSjo9PI9SFUTj-Td13sAhcPz87auCY', 'Episodio 296', '¡La decisión de Nami! ¡Atacar al descontrolado Chopper!', ''],
    ['https://mega.nz/embed/5u1S3RIB#aKVKLpIEsRotXy_8l8DNLIT8L_zKybSJU6Y0bu4eKwM', 'Episodio 297', '¿Aparece el cazador Sanji? Una dedicatoria para el lobo mentiroso', ''],
    ['https://mega.nz/embed/02NgBICY#2QcrNL-FdE7Gkt9TruLGQdW0v2X_RUurOrSkil6EEIA', 'Episodio 298', '¡La patada de fuego! El menú completo de las técnicas de pies de Sanji', ''],
    ['https://mega.nz/embed/w2EERCTb#aMpyl9qQdmhjgKaCO7sE45_WbXfHsOZPJs-e6-Hy0vY', 'Episodio 299', '¡El fiero asalto de las espadas desenvainadas! Kaku contra Zoro', ''],
    ['https://mega.nz/embed/4zd3CZ5D#QkHVu9xJMePu4S17wg1YhX094JunrIsCEmbCvhJuxg4', 'Episodio 300', '¡Zoro, Dios de la guerra! La encarnación de Ashura revelada por su alma', ''],
    ['https://mega.nz/embed/QuM0nIKT#P-4rnOo25enW6qfMs0HWLSH-sOuHrjGMXDcWN8cc2i4', 'Episodio 301', '¡Spandam se sorprende! El héroe que se alza en la torre de la justicia', ''],
    ['https://mega.nz/embed/QmUxGRbA#8pO4unE9SGUWVpsPokAPWcIk9naF5Z4cEM8VBHAUtI8', 'Episodio 302', '¡Robin liberada! Luffy contra Lucci, la cima del combate a muerte', ''],
    ['https://mega.nz/embed/8qlRgZKD#2nkVsjKVLeotwLWCOiz4lRVrbphQ6rh0ZugWuET7dWA', 'Episodio 303', '¿El criminal es el jefe Luffy? Persecución del gran árbol de cerezo perdido', ''],
    ['https://mega.nz/embed/8zsnhR4D#7nYYbPW79IXaVJeatiqDZ6kvRUmcpZfZ558F7L9bFqo', 'Episodio 304', '¡Si no puedo ganar, no podré proteger a nadie! Gear Third activado', ''],
    ['https://mega.nz/embed/A3dXlJxI#xfMe7Z25OBzXSGaLTsOS8-fTaHWyCnWn-O-ax5L2k2Y', 'Episodio 305', '¡El aterrador pasado! Rob Lucci y la justicia oscura', ''],
    ['https://mega.nz/embed/M7kCBSLI#rq7hLCme3PA9uNxN29rfH4OmQKvMAgkadaLY0sau8Wo', 'Episodio 306', '¿Aparece una sirena ilusoria? En medio de la pérdida de la conciencia', ''],
    ['https://mega.nz/embed/omU21JCK#TXwosGkldjlZeB4uH9GAmsZi8ebWoXzuNio4-cOd5mI', 'Episodio 307', '¡La isla se hunde bajo los disparos! El lamento de Franky', ''],
    ['https://mega.nz/embed/pysygBxL#d_sjGYiIHBU12UK3xp25FRp-BGMmjy0KKAJoeRA6EeA', 'Episodio 308', '¡Esperar a Luffy! ¡Combate a muerte en el puente de la vacilación!', ''],
    ['https://mega.nz/embed/pztjEYJL#uYbm_la_AyY7KoXzmf4HChiVZ9qckipIJxPuLfOx5Pw', 'Episodio 309', '¡Sentimientos vertidos en los puños! El contraataque definitivo de Luffy', ''],
    ['https://mega.nz/embed/Ry0lhQLJ#1whEHx22hqsxxjhMJ0wG0L2k08uOH08c5Ss3EH4A-Sg', 'Episodio 310', '¡Un compañero viene desde el mar! El lazo eterno de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/RrsDEaRJ#SCSi8qGKt6z9pUDDDFrlynlzub0o_znE-2uOFknGd94', 'Episodio 311', '¡La gran huida! El camino hacia la victoria de los piratas', ''],
    ['https://mega.nz/embed/k7UGlBCK#swTBeAwTH_kg7WLLQ10eQypgWTnMm2UaT1ByjDXHW3Q', 'Episodio 312', '¡Gracias, Merry! El mar de las despedidas en la nieve', ''],
    ['https://mega.nz/embed/QjtTDDDI#jUKgPbxofPakuH_RgeM1qNvbPNUqwsnAKK9Tip04Uj4', 'Episodio 313', '¡El descanso perturbado! El Vicealmirante de la Marina con el puño de amor', ''],
    ['https://mega.nz/embed/s61QSKpY#rCy7A4t90HshTsSJGlpAOQFTkS7BHeZH0Z5udPXrmjY', 'Episodio 314', '¿La familia definitiva? ¡La verdad revelada sobre el padre de Luffy!', ''],
    ['https://mega.nz/embed/g7VjAIZK#EutOIukFPeO9EhjIkgAtupHSMrRc9V-KlvTHTrsVCSc', 'Episodio 315', 'Su nombre es Nuevo Mundo. El paradero de la Grand Line', ''],
    ['https://mega.nz/embed/9qlUDLrI#78p84Hq93vKK0EO_9GwlyPZsmEDgl4DBf8WoHeL_U_8', 'Episodio 316', 'Shanks se mueve. Ceremonia para la era de la extravagancia', ''],
    ['https://mega.nz/embed/prNwjSTK#e_PR2EPz4HjZBJoNzBRBoWDRQ0kXviITFdH8i4qMpp0', 'Episodio 317', '¡La muchacha que busca el Yagara! Gran investigación en la ciudad del agua', ''],
    ['https://mega.nz/embed/hn110Twa#7hw43NdvGYqhivdtQWkRjBaG2crVzy9EDj6GiZyjArE', 'Episodio 318', '¡La madre es fuerte! La comedia de la ayuda doméstica de Zoro', ''],
    ['https://mega.nz/embed/gi8A0CCA#SU3xaL7kBF7C4D5zTJjhO3eLv3j3qjt5hIw3reyPMDo', 'Episodio 319', '¡El impacto de Sanji! El misterioso anciano y su comida deliciosa', ''],
    ['https://mega.nz/embed/wz9ywQQZ#nx3LdnmFB1Fux0l-CC6-Nmzzz08z3W9l4ni7SKp2qbk', 'Episodio 320', '¡Finalmente se ofrece una recompensa! ¡La tripulación supera los seiscientos millones!', ''],
    ['https://mega.nz/embed/U6EnDS7B#fveQi4MwAblhA66_ec6MHRRMEWFPMlOVmAQe3aCLte8', 'Episodio 321', '¡El rey de las bestias que surcará el mar! ¡El barco de los ensueños completado!', ''],
    ['https://mega.nz/embed/wj9CzApZ#m0QrSkdYQlXLbRO7nl_lH_nOTJbngTgTVfJS7jmj7C8', 'Episodio 322', '¡Adiós a la querida familia de Franky! La partida de Franky', ''],
    ['https://mega.nz/embed/AvcwRAjI#fM14_LV1OJmPU4yMXpXtBnwcaVllY2oCx0Q2iNxL7yc', 'Episodio 323', '¡Partida de la ciudad del agua! El honor de un hombre, el arreglo de Usopp', ''],
    ['https://mega.nz/embed/530FgI7B#_kmnBU6OAUaqYCQalsYDKQ1qMpDs0dJ165CcekgbUlU', 'Episodio 324', '¡Los carteles de recompensa circulan! ¡Los pueblos natales bailan mientras el barco avanza!', ''],
    ['https://mega.nz/embed/Ri0EVLCQ#wMi4BFBwjZVouMQDhbSu4p9r35NeMdC0Xac_ylo09LY', 'Episodio 325', '¡La habilidad más malvada! La oscuridad de Barbanegra ataca a Ace']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason5Episodes = [
    ['https://mega.nz/embed/9z9EzTQa#_D1dMZGw89tj1Nv_46wIIGRAL6LhXndKEq6OshAzW-U', 'Episodio 326', '¡La misteriosa tripulación pirata! El Sunny y una trampa peligrosa', ''],
    ['https://mega.nz/embed/9qEnxZTQ#DaNFmIi_PTK4R_XH_8xTp0mQ5bh24NsXdCZh0b_0EPE', 'Episodio 327', '¡El Sunny en apuros! Ruge, el arma secreta de supervelocidad', ''],
    ['https://mega.nz/embed/5zdUxbAQ#qevHJHoleslpG-EIfiFGvPwEO78ASAHd22yrg3ahfdY', 'Episodio 328', '¡El sueño hundido en el Nuevo Mundo! El pirata del desespero, Puzzle', ''],
    ['https://mega.nz/embed/t79B1Ypb#W2oH3ghDu7aZG04PK4HGV42xtbvenMuzDvH5c7o8K8U', 'Episodio 329', '¡Los asesinos atacan! Comienza la gran batalla sobre el hielo', ''],
    ['https://mega.nz/embed/RvEySLhJ#Tc8qoc-CycxoDLJGOj18sQ1tEkpiSRuj-k0AoCOsNTI', 'Episodio 330', '¡Luchas de los Sombrero de Paja! El alma pirata depositada en el hielo', ''],
    ['https://mega.nz/embed/AvNk0DRJ#WGQ3V5Tpxe_3j2Qdpu2bEiEMTTn7xTxdIaZ4V1nqEkM', 'Episodio 331', '¡Calor a tope! El poder magnético de los gemelos se aproxima', ''],
    ['https://mega.nz/embed/020VECZI#CRhe4vVB_jVAHJdskuZxKvWEp9WcdCSeWkX__cZQMb8', 'Episodio 332', '¡El gran caos de la mansión! El Don enfadado y la tripulación prisionera', ''],
    ['https://mega.nz/embed/A3kWAbBL#xOcz8FVc-NSLo-xRIZm41wWJIVNJ82EWGCsrMNv-9Fs', 'Episodio 333', '¡El regreso del fénix! El sueño de la bandera pirata jurado a un amigo', ''],
    ['https://mega.nz/embed/Y7F2TJxa#fl5w_yUfjCjK_p4dc0sabRGuQ-EqWsf5ZN1ZNewpJs0', 'Episodio 334', '¡La batalla decisiva al rojo vivo! Luffy contra el Don ardiente', ''],
    ['https://mega.nz/embed/9iN3DZhJ#vGymQjfW1tGtgEcOiZrR6Wq_3eEj4OUVcCjaemPcH24', 'Episodio 335', '¡Esperando en el Nuevo Mundo! Adiós a los piratas valientes', ''],
    ['https://mega.nz/embed/ojkSUD5B#64XeddXAGjS9MzyP_x5aa15_iPNEyHSNvePktUvFNdI', 'Episodio 336', '¡Chopperman en acción! Proteger la estación de televisión de la playa', ''],
    ['https://mega.nz/embed/M6MjjBqC#4edg8MilkFwBzq0re_R0X-j9FYgTrSy2Ec4ZYZw5YQs', 'Episodio 337', '¡Irrupción en el mar del diablo! El misterioso esqueleto flotando en la niebla', ''],
    ['https://mega.nz/embed/wrEDTSJC#HYE0pJ4k0X8uP0Dingw4DLGMuxEjZZyigNstzci0XDA', 'Episodio 338', '¡El placer de conocer a gente! El verdadero carácter del esqueleto caballeroso', ''],
    ['https://mega.nz/embed/oiVGWQbC#IKBfebeHFD9Lxm6KhDZT2yH7nmyM6xlXvDziqyLJ830', 'Episodio 339', '¡Sucesión de fenómenos misteriosos! Desembarco en Thriller Bark', ''],
    ['https://mega.nz/embed/dmdRHTqI#d0LM8bLOAq794yoLapFnG9Uvof558pCqG29F4AVnVEo', 'Episodio 340', '¡El hombre llamado genio! ¡Aparece Hogback!', ''],
    ['https://mega.nz/embed/c6EjiZYR#EhkwYxen6tfyWV6McK93AftjUtGc22usNwoc3DCEc-8', 'Episodio 341', '¡Nami en peligro! La mansión de los zombis y el hombre invisible', ''],
    ['https://mega.nz/embed/Brl0wK6B#rcxbKr_DD-zm8CJrlMqWn9JX9BCfGJw86cV0RFnLidM', 'Episodio 342', '¡El misterio de los zombis! El laboratorio de pesadilla de Hogback', ''],
    ['https://mega.nz/embed/YydmiBQR#LXwtdw-d5wLZqejAnBXCCmC59u8zHr8OMESkLCKIkpo', 'Episodio 343', '¡Su nombre es Moria! La trampa del gran pirata que atrapa las sombras', ''],
    ['https://mega.nz/embed/UiVVTKTb#ij3HanRWiO1qVq5SjH22gzCctwF3hjVBrfX-q0voQ_o', 'Episodio 344', '¡La fiesta del canto de los zombis! La campana del ataque nocturno es el sonido de la oscuridad', ''],
    ['https://mega.nz/embed/V2c0VZYT#k7-HTVDw4wUlForLXhTLq83lMU5SuWvXYK1HlcEB0fM', 'Episodio 345', '¿Lleno de animales? El jardín maravilloso de Perona', ''],
    ['https://mega.nz/embed/B20ViTbQ#eocpVgoqOQbbF4ec6lWXXQbqw-D52b3q5yJkoaDSJfc', 'Episodio 346', '¡La tripulación de los Sombrero de Paja desaparece! El misterioso espadachín aparece', ''],
    ['https://mega.nz/embed/Yu1kWYqT#yng5NgktgdUjAsu6dhTNZyrH9xVaQGDJV7S1SBxmuxc', 'Episodio 347', '¡Caballería remanente! El zombi traidor que protege a Nami', ''],
    ['https://mega.nz/embed/NyNlwCDb#CI7Nt5D-xMRHyLEnyu97ewh5gd8VYIBEP9V4yolScZ0', 'Episodio 348', '¡Caído del cielo! Ese hombre es el espadachín susurrante', ''],
    ['https://mega.nz/embed/0qMUFbbI#THc7b91wPw0QwEuFv9x5Ecg3U_KkCltm-v81BQECGGY', 'Episodio 349', '¡Luffy en peligro! El destino de la sombra más fuerte', ''],
    ['https://mega.nz/embed/9rkRjbDR#v_0cm7U1cX9ns5PZvlqfxKdItB_z0awK5M71tIepUUQ', 'Episodio 350', '¡El guerrero llamado zombi especial! El despertar de Oars', ''],
    ['https://mega.nz/embed/YjF1RRAb#tCNNzLa5u8uoaboZLz4o95l0yLVzXmqK5HHKMH72r48', 'Episodio 351', '¡El despertar después de quinientos años! ¡Oars abre los ojos!', ''],
    ['https://mega.nz/embed/5v00wQTI#Gwhme2c5FcNUxAaMflfTlY7kZkyOIBf_A9q8R1go2ss', 'Episodio 352', '¡Convicción por la vida! Brook protege su afro', ''],
    ['https://mega.nz/embed/hiEijaTI#V-ScfprNGwqyWINvK8nuu5z6zlY38sPNAwbBHNQtx2U', 'Episodio 353', '¡La promesa de un hombre no muere! Para el amigo que espera bajo otro cielo', ''],
    ['https://mega.nz/embed/IyVz0CwK#WiGhg316gde5E6vYHuQMK2o2uAO3XzqYIe-vy5M7nD4', 'Episodio 354', '¡Seguro que nos volveremos a ver! Brook y el cabo de la promesa', ''],
    ['https://mega.nz/embed/0jkGQY5Q#3z5yjFY-i6jqU2KZrwx71Azj3iF2NsaTgE-99es7aPg', 'Episodio 355', '¡Comida, Nami y sombras! El contraataque del gran Luffy enfadado', ''],
    ['https://mega.nz/embed/FuMmCQzJ#zBc3Lxq3E11IHbro3SyP4Mgo0xWxXsk-c-d1rdGMgUo', 'Episodio 356', '¿Usopp el más fuerte? Dejadme los espíritus negativos a mí', ''],
    ['https://mega.nz/embed/t2dwVBKK#SJ37dM94IeqHH9J02PmJ3fU5bfhokT748KKQ5QPJHyY', 'Episodio 357', '¡La muerte instantánea de los zombis generales! Oars con ganas de aventura', ''],
    ['https://mega.nz/embed/UmEWHSbb#_pnFKKrJEffQVAnsRqxjyaGhCe7qVoUTT7CLJ5p3KmM', 'Episodio 358', '¡El caballero envuelto en llamas, Sanji! Patada a la ceremonia falsa', ''],
    ['https://mega.nz/embed/RqdVwCBI#Q5tDXyC9tJdl5fGgL2Nj6WSt9hTee68TdT9273dgNdU', 'Episodio 359', '¿El asunto de la invisibilidad? ¿El sueño robado de Sanji?', ''],
    ['https://mega.nz/embed/kylBzLga#EW7HxZpsUDeuKGO8mZzzHM1nYHiPIGF3xJ9rzFuozNY', 'Episodio 360', '¡Ayúdame, héroe! El enemigo es la princesa invulnerable', ''],
    ['https://mega.nz/embed/ljdiUCDT#zJ5Wq8qSX9pU7EUxXdj9U9oq-dLMg4cBVfItkIYYLKQ', 'Episodio 361', '¡El terror de Perona! El uso de la mentira en Usopp', ''],
    ['https://mega.nz/embed/5ykV1SaZ#uyuwgaQ2GDeBt-SPkSs0fTB7I9PEQWSF_1RtP3_YXzc', 'Episodio 362', '¡Duelo de espadas en la azotea! El final del Zoro contra Ryuma', ''],
    ['https://mega.nz/embed/VzdxjaTR#dyldkYmnHdxXdGEkX5QubUhrP3YW_3lZaO-smMfNVNo', 'Episodio 363', '¡La ira de Chopper! La demoníaca práctica médica de Hogback', ''],
    ['https://mega.nz/embed/tvkQhYBR#P9-_OUvy-Havtlb3tCkgbniLkGv-WshAGPqjoPlv2gM', 'Episodio 364', '¡El rugido de Oars! Salid, tripulación de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/1i9mjCKY#tQqVXCIbrXg9bnrAuWqr9G9vSCJ9cTH-vzBohZFHrUM', 'Episodio 365', '¡El enemigo es Luffy! El zombi definitivo contra la tripulación de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/0nNBxBJS#bVNf2mmSL-aS7A0ax2HnXeWRW8hmd9Z6PGAkHT9CzJ4', 'Episodio 366', '¡Derrotar a Absalom! ¡El ataque del trueno de la amistad de Nami!', ''],
    ['https://mega.nz/embed/0ztAzIbT#_prorMqkQI-K4gnj_qFpjZAPYQqYbKXnpk7fSTW-bys', 'Episodio 367', '¡Conseguir un derribo! ¿El ensamblaje definitivo de los Sombrero de Paja?', ''],
    ['https://mega.nz/embed/8jFywKhJ#NkCGbWosYRc8hrZ3hWuggAi4HtY3TfLjBEr19N9Xc0k', 'Episodio 368', '¡Infiltración silenciosa! El misterioso visitante, el Tirano Kuma', ''],
    ['https://mega.nz/embed/B7cTnAbb#B7SKYxNUa8coIGNSUPhcbKOb91rnOUlHkrZwrxhhj88', 'Episodio 369', '¡Oars mas Luffy! Combo definitivo de inteligencia y fuerza física', ''],
    ['https://mega.nz/embed/5yUUgZjb#TpcwswgnEB9ylElFzSmxvdJCjrMm3O1Z1XmKD2O8jqE', 'Episodio 370', '¡El plan secreto para dar la vuelta a la tortilla! La aparición de Nightmare Luffy', ''],
    ['https://mega.nz/embed/Q79HHQSS#ERc5aJ7oQ_sllZiBr4A0iJ8BtTHeoA_4td92-dKFmD8', 'Episodio 371', '¡La tripulación de los Sombrero de Paja aniquilada! El poder de la fruta Kage Kage a tope', ''],
    ['https://mega.nz/embed/EmEjBCQI#RtQ3Vc92Wc67foM0KN701gz1UhzjCtHYzkAiasXNLRI', 'Episodio 372', '¡Comienza la batalla por la superioridad! Luffy contra Luffy', ''],
    ['https://mega.nz/embed/V7VVBQrR#P7WKTLdJZb1lT1geh3qYBpBM_oTNQLJ3iOjbh0ox-y8', 'Episodio 373', '¡El desenlace se aproxima! Asestar el golpe definitivo', ''],
    ['https://mega.nz/embed/I6VEnC4C#izQILYVgJk7zpL2RlrCuEncsdxvu75u8pGmWk9iDO78', 'Episodio 374', '¡Los cuerpos desaparecen! El sol de la mañana penetra en la isla de la pesadilla', ''],
    ['https://mega.nz/embed/xmFRjBBR#uxBzeEeuPhSu1k89zy20w-ukgUc2gfsDRVwsOH1jAM8', 'Episodio 375', '¡La crisis interminable! La orden de exterminar a los Sombrero de Paja', ''],
    ['https://mega.nz/embed/xmkAgLqZ#JqvtPn1ZmPqw768tXo1wNMGc63VbdFVY5NwvBLOEQQ8', 'Episodio 376', '¡El poder de repelerlo todo! El poder de la fruta Nikyu Nikyu de Kuma', ''],
    ['https://mega.nz/embed/JmVzBRIb#jHZs9hGv4zcvpABkpujBRSTDHeLdLoLyTZCy2o-1AJ8', 'Episodio 377', '¡El dolor de mis compañeros es mi dolor! Zoro preparado para morir en combate', ''],
    ['https://mega.nz/embed/Jz8yXQwS#5OYXgtCeQ2q0H6myYYY61mnD4y3CXK_wTkKEfINdb6Q', 'Episodio 378', '¡La promesa de aquel día lejano! La canción de los piratas y la ballena pequeña', ''],
    ['https://mega.nz/embed/VylFSDQK#goWZAdyPGp3Vi0kv-pIWII0gtL_Z_k2Sq6uJuCWzr-c', 'Episodio 379', '¡El pasado de Brook! Triste despedida de la tripulación alegre', ''],
    ['https://mega.nz/embed/8ndXybIR#SmBxlW8r4ilJq2UzCkxbMoqdXIHlP4fYICvZG1FhugI', 'Episodio 380', '¡El sake de Binks! La canción que conecta el pasado y el presente', ''],
    ['https://mega.nz/embed/N3FHHIJS#Xm41NDdWq4V2XAaz4ZNSW7hknGzsFk7IqK_DqNVme5w', 'Episodio 381', '¡Un nuevo compañero! El músico, Brook Tarareo', ''],
    ['https://mega.nz/embed/Nn9W3AZA#XUULkAgGJ1Vhw72NWKk3dDzMGcIGn4j4eqsW1HJxR5U', 'Episodio 382', 'La amenaza de la fruta Noro Noro. El regreso de Foxy el Zorro Plateado', ''],
    ['https://mega.nz/embed/0qtyCKqZ#nXt9Nrqpd7T_FBfIuXHxliNrF73ap7doG6yXjwn-Uwg', 'Episodio 383', '¡La gran competición por el tesoro! ¡Derrumbamiento del Spa Island!', ''],
    ['https://mega.nz/embed/tvlElKaZ#EgmJgimbeIejryUjwGdo4698Gy6-9sl5wZi2tYoMfsc', 'Episodio 384', '¡La dura lucha de Brook! ¿El camino difícil para convertirse en un verdadero compañero?', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);


const onepieceSeason6Episodes = [
    ['https://mega.nz/embed/k6VQwQRQ#_OdqZeFeHYwDWBOP_WQZaS6379lHZkzPxtsZhnZt13U', 'Episodio 385', '¡Llegando a la mitad de la Grand Line! Red Line'],
    ['https://mega.nz/embed/w7tA3YAQ#W-ijKhnT_BNQWB2ftJYwakH6lWP9tQKp5tAeVCGRjzU', 'Episodio 386', 'El que odia a la tripulación de los Sombrero de Paja. Aparece Duval Máscara de Hierro'],
    ['https://mega.nz/embed/s20lxbLR#dVbSSv4DJbTIkwHR40LOSTjtjEjLpWJlA3c8R3TNCHE', 'Episodio 387', '¡Reunión fatídica! Salvar al tritón capturado'],
    ['https://mega.nz/embed/ZrswRTBI#edsXgnEH_7IH6oBJBuPdlOLbxIfErHuhx6YFfZ5K8tI', 'Episodio 388', '¡Tragedia! La verdad de Duval oculta tras la máscara'],
    ['https://mega.nz/embed/g3kUgZYB#NAlaK4XJAxiYVjYCk_Li3zcyzNq9FzYrH2Y5DVaFMCw', 'Episodio 389', '¡Estalla el gran ataque! El arma supersecreta del Sunny, el Gaon Cannon'],
    ['https://mega.nz/embed/A2VGkQba#9_5uLVm-prIj-BzK8KHU-2PPga9xt4q64SVG7NtI0SM', 'Episodio 390', 'Desembarco para llegar a la isla de los tritones. El Archipiélago Sabaody'],
    ['https://mega.nz/embed/J3l3mJRY#HyHJxZh5NGeTgq5FbWVCHuHIfYsUZ0oFKoLWTf8XThE', 'Episodio 391', '¡Tiranía! Los gobernantes de Sabaody, los Nobles Mundiales'],
    ['https://mega.nz/embed/NiFQ2BjQ#DjiUCPuYGX9hpUMKG3ksV6lKrX3J5pfLdpX6n6Avkc0', 'Episodio 392', '¡Los nuevos rivales se reúnen! Los once Supernovas'],
    ['https://mega.nz/embed/R78i0JSB#IB1y8CDDZnI3FZO33giCe9D_lmtch_g1G9zeJIHpytk', 'Episodio 393', '¡El objetivo es Keimi! La mano de los secuestradores profesionales se aproxima'],
    ['https://mega.nz/embed/kjUykAjY#25EnQ77pOPFQmAOEC1uTp3Uw6i8ZylLlo2V31QEGYj4', 'Episodio 394', 'Salvar a Keimi. La oscura historia remanente en el archipiélago'],
    ['https://mega.nz/embed/s31QnbwJ#r3Nrst9A9U_8Yqni6HgPQqb0KQhuHd6uHK7reEox_H4', 'Episodio 395', 'Límite de tiempo. Comienza la subasta humana'],
    ['https://mega.nz/embed/E6VhGSqB#UfgH52EWgifijcJGivQ8HB0bepSSOkO-bjYRl_P-J3A', 'Episodio 396', '¡El puño de hierro estalla! Destruir la subasta'],
    ['https://mega.nz/embed/xuE2yLYZ#4Gt39VEgXWDhyPpxBoNIRpDhKELhb8OQ6OEjKsTCEq0', 'Episodio 397', '¡Gran pánico! Pelea a muerte en el salón de la subasta'],
    ['https://mega.nz/embed/J3EiVZwT#kl24A2aiOGMb-X9D6XUSDx9eSWGBykFgG-GU1eivykA', 'Episodio 398', '¡El Almirante Kizaru se mueve! El Archipiélago Sabaody en alboroto'],
    ['https://mega.nz/embed/Zy1SnArb#OL_BpCu6DTzUIC5EqcCntWC55DPwYhRvxfMNgOXOURM', 'Episodio 399', '¡Romper la línea de defensa! Los marines contra los tres capitanes'],
    ['https://mega.nz/embed/43NRxaiJ#dLUln7Jr_C6TIFu0EIPJomtpJoJG-zFyoVmWKIth_t8', 'Episodio 400', 'Roger y Rayleigh. El Rey de los Piratas y su mano derecha'],
    ['https://mega.nz/embed/dyECBT4R#CqAQinG9XtnhYl_XSyUVQN97OX_lEGn3WnCPxRqfiIc', 'Episodio 401', '¿Imposible de esquivar? La patada a la velocidad de la luz del Almirante Kizaru'],
    ['https://mega.nz/embed/970ySJSS#8s-g-TcFrAXQlo-wn3gvURSm9yclQOemE0ml6i48HE0', 'Episodio 402', '¡Abrumador! Pacifista, el arma militar de la Marina'],
    ['https://mega.nz/embed/Q28jnAxS#H3l0INJjDgN3K5mobHd-2_NenYFe0sfuz_b1w6DbwTw', 'Episodio 403', '¡Aparece otro enemigo fuerte! Sentomaru, el portador del gran hacha'],
    ['https://mega.nz/embed/h28CmI6Q#f3zJ7fchR-xcU752oW5fauEmIIUWEIDzRIKJENdX7kE', 'Episodio 404', 'El fiero ataque del Almirante Kizaru. ¡La tripulación de los Sombrero de Paja en una situación desesperada!'],
    ['https://mega.nz/embed/dvUBgDZL#YDgMw6LiKw3n8G18oe_Ya2F6Tka2YyLMYlj-UeUfTwQ', 'Episodio 405', 'Los compañeros desaparecen. El último día de la tripulación de los Sombrero de Paja'],
    ['https://mega.nz/embed/Q391iBBQ#WX4_m2COD977BHTjrUPIJgiQ_HJ2V0okTNx5DujV0zQ', 'Episodio 406', 'Episodio especial histórico. El jefe Luffy aparece de nuevo'],
    ['https://mega.nz/embed/JqUADCKA#0UpwqDjSO9jjznl2bfkZntbF1XTKaR5bjHkLHaK8ykE', 'Episodio 407', 'Episodio especial histórico. ¡Destruir la trampa de la Compañía Thriller!'],
    ['https://mega.nz/embed/0nFWWDSZ#v4qE4Sx6UhAHNdgbNR3gknO3rFDwwz8CjkOHck4WfCY', 'Episodio 408', '¡Aterrizaje! La isla prohibida para los hombres, Amazon Lily'],
    ['https://mega.nz/embed/lvNn3LqA#PkA4ba-k2WBXjq1nyqol1sAmF9EwngUIVz3uo9U9q1U', 'Episodio 409', '¡Darse prisa! Regresar con los compañeros. Aventura en la isla de las mujeres'],
    ['https://mega.nz/embed/Z60BCKhY#DCwinmUGBUz_FqmwPwRCvq9vtrdp39EhyT_pRzwbD34', 'Episodio 410', '¡Todos borrachos de amor! La Emperatriz Pirata Boa Hancock'],
    ['https://mega.nz/embed/8ylQGZoD#8sWpUVegx3gZGD1vq83Fls8BEhuU35Nm-Uck-SsmL0U', 'Episodio 411', 'El secreto oculto en sus espaldas. Luffy y la Princesa Serpiente se encuentran'],
    ['https://mega.nz/embed/ty9iSALD#JOArzvid7IDC4vN9rihjhWcV5TFSMdxBRuxMxWJF5dM', 'Episodio 412', '¡Juicio sin piedad! ¡Margaret se convierte en piedra!'],
    ['https://mega.nz/embed/tu8EGTaK#jIjRazmKJ_XuDV6pa0woOcxmXVYQXHpZnN9SOiD36Ag', 'Episodio 413', '¡La dura lucha de Luffy! El poder de la ambición de las hermanas serpiente'],
    ['https://mega.nz/embed/0uUAhAob#cNt881nPxcC7Wmrtiv62B35_QY6p7D_IQVWZU5GWu3M', 'Episodio 414', '¡Batalla a tope de habilidades! Goma Goma contra Serpiente Serpiente'],
    ['https://mega.nz/embed/EiNR0Y7T#CI0OwtMCbkgYe6j6c9TQn26mA4E1K0-2waQnnhLsjF4', 'Episodio 415', 'La confesión de Hancock. El feo pasado de las hermanas'],
    ['https://mega.nz/embed/Y2dkRLyK#RJBSMIQ9-6H4UHAHk8QJi_Gtwhpovu_TO05v5sM5kxg', 'Episodio 416', '¡Salvar a Ace! El nuevo destino es la gran prisión'],
    ['https://mega.nz/embed/lqUCnapJ#4w1WcC6jMQvRqS1_3qWBYacsQRaiAgEtM2CShWAQlkk', 'Episodio 417', '¡El amor es un huracán! Hancock enamorada'],
    ['https://mega.nz/embed/AiF2yLxK#M06TvLK0jioEnuA-QzEHdtKDM5xTKro4NDOXMH20f9M', 'Episodio 418', 'El paradero de los compañeros. Ciencia del clima y la isla de los mecanismos'],
    ['https://mega.nz/embed/gm9wHKZB#9jfY7MS-d6Fxx-1P5yU903GWGkzxnfdsdyZxrSzz96k', 'Episodio 419', 'El paradero de los compañeros. ¡La isla de los pájaros gigantes y la isla rosa!'],
    ['https://mega.nz/embed/AzchgLIJ#UhUsAEiULT1lqBuABlHCMC4o3E0-cmKH526pO1oFfDo', 'Episodio 420', 'El paradero de los compañeros. El puente que conecta islas y las plantas flotantes'],
    ['https://jkanime.net/jkplayer/um?e=byt1L2hIUWFveHR2VE52cTRnc0t0aXQyMlY5Uk5uTVRhb1hHcGwxMTBkclJsbVZyS0lEU0tTQzB1UFZua3ZKSjo6NbWCtZgqACUrVoi6d_GIpQ--&t=9704a4fc48ae88598dcbdcdf57f3fdef&op=NTM5OQ==', 'Episodio 421', 'El paradero de los compañeros. La princesa negativa y el rey de los demonios'],
    ['https://mega.nz/embed/MrNASDSZ#UHvWUkvgLu9Fm3rzOHuQZOM53OPPakF_GbjhSnvOuA0', 'Episodio 422', '¡Infiltración mortal! La prisión submarina Impel Down'],
    ['https://mega.nz/embed/RjUBgIyA#QTdd7WXTsXd3cOSLPeugSmRr4NNngQXKppfUtzLQw5g', 'Episodio 423', '¿Reunión en el infierno? ¡El hombre de la fruta Bara Bara!'],
    ['https://mega.nz/embed/oylE3YqA#lR5QfqlhrVk76UeMVRpSfYJyx9cMjKnTvS1BDjs4Bss', 'Episodio 424', '¡Romper el infierno carmesí! El gran plan de Buggy para causar el caos'],
    ['https://mega.nz/embed/krkmUTRb#qebWEhfgXfQCkDniJr7VbDCMbApLHizOphhw79v0ib8', 'Episodio 425', 'El hombre más fuerte de la prisión. Aparece el Alcaide Magellan'],
    ['https://mega.nz/embed/NvMWAJzJ#xmEkThb7dUxQBpVqksR7CihaeKjvZHJDEiYnhjETI5w', 'Episodio 426', 'Especial previo a la película. La ambición del León Dorado se pone en marcha'],
    ['https://mega.nz/embed/1mFgmYoZ#AS2NeCQhKjeaxR4dfOqTmhrKdZyX599Y5n5pz7a3q5o', 'Episodio 427', 'Especial previo a la película. Amenaza en Little East Blue'],
    ['https://mega.nz/embed/NuFHxBCI#bkczMcco1DbuTU0YNbThZntt38mV90f3sxxl8XM6fPo', 'Episodio 428', 'Especial previo a la película. El fiero asalto de los piratas de Amigo'],
    ['https://mega.nz/embed/Mj0A2IgY#5-A_zMWqG06TId3nRmqBfJN3BP_-6pJdVq0nI_5bZW0', 'Episodio 429', 'Especial previo a la película. ¡Choque! Luffy contra Largo'],
    ['https://mega.nz/embed/QqN3wbwR#wpCms_N2jdiRH2rNqg5JIwsc9_BhBTTrbJr9GcGAaGc', 'Episodio 430', '¡El Shichibukai cautivo! Jinbe, el caballero del mar'],
    ['https://mega.nz/embed/IuUjDYSB#MA7rlxSXo51qVxmLOA5gDTjyzFzq-eaxdWHjsCUChOQ', 'Episodio 431', 'La trampa del jefe de los guardias Saldeath. El nivel 3, el infierno de las hambrunas'],
    ['https://mega.nz/embed/0j9hWQSA#UzqCtR6sDdpRzmmafUombyMFnOTh-oxKR0FcpFQlK4M', 'Episodio 432', '¡El cisne liberado! ¡Reunión con Bon Kurei!'],
    ['https://mega.nz/embed/8r90ULxJ#ZRmRe0baOdry_lgkoOLojM54uc0iZdbCiUlvk6QQhTE', 'Episodio 433', '¡La estrategia del Alcaide Magellan! El cerco a Luffy completado'],
    ['https://mega.nz/embed/Jj1kWQBS#vTcpwPrLNWXlw2PH8Uo5IUZto0IaD-fIsXynL2lgg-Q', 'Episodio 434', '¡Todas las fuerzas reunidas! Batalla en el nivel 4, el infierno ardiente'],
    ['https://mega.nz/embed/hnkHhART#U8PtrJ21iZEk8ZnPvaHmrLK-dNOWPFs9ipr2HflQKdM', 'Episodio 435', '¡El poder de Magellan! Bon Kurei huye ante su compañero'],
    ['https://mega.nz/embed/d7dEAapA#D4bfeGAxUuhFhWWeg73ZkdFxTHcZIBWY2SkNZejK2Sk', 'Episodio 436', '¡Duelo definitivo! El ataque a la desesperada de Luffy'],
    ['https://mega.nz/embed/UmESlTqY#q-Q2fK_7VMmxqa4nJ9p4-npwqyOBuRZi9hUOW_CWIu8', 'Episodio 437', 'Porque es mi amigo. El rescate a muerte de Bon Kurei'],
    ['https://mega.nz/embed/QjEjVTgY#MKxz8_P7Nt4FnRwQMNRsEtIcKjsPlsm4ZqB_mOo5lCU', 'Episodio 438', '¡Un paraíso en el infierno! Impel Down, nivel 5.5'],
    ['https://mega.nz/embed/Ay1y3Aib#EGNhpoeFQiJ7IrVCjajEBJxJze7RwRCX7X4a2CWbkIU', 'Episodio 439', '¡Comienza el tratamiento de Luffy! El milagroso poder de Emporio Ivankov'],
    ['https://mega.nz/embed/gy1DxI6b#veAbe7Q8bjW_xof34udge_PQYthkMWOoySrtadLHLVM', 'Episodio 440', '¡Creer en los milagros! El grito del alma de Bon Kurei'],
    ['https://mega.nz/embed/dzdSkBZY#6E7vhNnaxn-HL7yliEfftVfILQkXzU-E0Ys_G1_Gask', 'Episodio 441', '¡El regreso de Luffy! Comienza el plan de fuga de Ivankov'],
    ['https://mega.nz/embed/c3dWwCwZ#IkTAn9FDs-eY8kqpxTep4rjE7xwXojI1gq8VXT2obgA', 'Episodio 442', 'Comienza el traslado de Ace. Batalla en el nivel más bajo, el nivel 6'],
    ['https://mega.nz/embed/NntWmBQZ#ECrzJtz8L2TRl2vFHtZ8MRhBOoK1c9R8lHVa0crd79E', 'Episodio 443', 'El equipo más fuerte formado. ¡Gran alboroto en Impel Down!'],
    ['https://mega.nz/embed/M3dykQxD#cBVrSYuqdMaEOgeV0irbTwd1mxW50hdtQUiBCB174eE', 'Episodio 444', '¡Aún más caos! ¡La irrupción de Barbanegra, Marshall D. Teach!'],
    ['https://mega.nz/embed/wudFzJbA#ApsKt_8wA-fD9c3YP5oZUCD3fLIa6_7sJ1tDbZSzKkI', 'Episodio 445', '¡Un encuentro peligroso! Barbanegra y Shiryu de la lluvia'],
    ['https://mega.nz/embed/oqlh3Lra#53fdWiPCyUrvmqY9WYHWY77F9VuycJjf4Hufas_7kog', 'Episodio 446', '¡El espíritu indomable de Hannyabal!'],
    ['https://mega.nz/embed/Vzk3zA7Z#_RoQ05rL0Um3lwNrv96CudqJgNE4z4vf__gQORzwL4A', 'Episodio 447', 'El Jet Pistol de la ira. Luffy contra Barbanegra'],
    ['https://mega.nz/embed/FusWlBZQ#OJiBOkmcgl_xPTpb7Axd5d8zWi0nAJWVM-Zt1VlFoWg', 'Episodio 448', '¡Detener a Magellan! Ivankov desata su técnica secreta'],
    ['https://mega.nz/embed/pnk0VJQD#6ExNen0czWhtdp-9x7RfynDUnbAo_ncjqI7AD6r7h2E', 'Episodio 449', '¡La táctica de Magellan! Frustrar el plan de fuga'],
    ['https://mega.nz/embed/YvsBRRKY#l8t07A4Af8MspObWOLM4gMYxpjAJI4JARhDsJg-gknI', 'Episodio 450', 'El equipo de los fugados en apuros. La técnica prohibida, Venom Demon'],
    ['https://mega.nz/embed/QvtHRTAI#OI_rcXDpu-SjWduoCNJnIuLQ-FWtnrsYCvvwdOv4Eb0', 'Episodio 451', 'Crear el último milagro. Romper las puertas de la justicia'],
    ['https://mega.nz/embed/Ji0kDKxZ#v_pMWU1HGNvVB-Q22zdRFaxpO5Z04cdlVfZkhLgPXnA', 'Episodio 452', 'Hacia el Cuartel General de la Marina. ¡Rumbo a salvar a Ace!'],
    ['https://mega.nz/embed/Zq1iwJKA#LYpQvzjziDw-Kpa3c8Bj7aF1j7K1Ua0G43nkKJb6Je8', 'Episodio 453', 'El paradero de los compañeros. El informe de Weatheria y los animales mecánicos'],
    ['https://mega.nz/embed/0j0kWTbC#nrnL_2wPhhKK2mIsd3lQ2cvlCdHPc8o08VWPTmp5DL4', 'Episodio 454', 'El paradero de los compañeros. El polluelo de pájaro gigante y un enfrentamiento rosa'],
    ['https://mega.nz/embed/d7syVRBY#2n_RC9EYLny-o5QDxkWgXmNzgysJMvNCatE-LpX00-4', 'Episodio 455', 'El paradero de los compañeros. El ejército revolucionario y la trampa del bosque devorador de hombres'],
    ['https://mega.nz/embed/s28lkTKZ#neqtYZ1oxLpEOnEDjAp5KEjyHD_h0qumqCL7IPAWI04', 'Episodio 456', 'El paradero de los compañeros. La gran lápida y la deuda de las bragas'],
    ['https://mega.nz/embed/IqNmQJgJ#alg3sjWQaMKnx8nF_gZXnCSzvTVik7gRRj_s9CU3pwk', 'Episodio 457', 'Retrospectiva especial antes de Marineford. ¡El juramento de los hermanos!'],
    ['https://mega.nz/embed/YrUQEIpD#vyIo9KFpLsBFRA-X3Eox-JSEhTQO9JWKLEQRnLD_bvM', 'Episodio 458', 'Retrospectiva especial antes de Marineford. ¡Los tres Almirantes reunidos!'],
    ['https://mega.nz/embed/wjkRlILJ#ZFXspa4pMlK1qDDWu5N2cj7bCEg99i6d3-uXt6wLnG0', 'Episodio 459', '¡Se aproxima la hora de la batalla decisiva! La formación militar más fuerte de la Marina'],
    ['https://mega.nz/embed/JqkRRAAD#1pqQhmOq33IsxaMPJCtHr3CmlP6DQRm6yWzU9HfvD1s', 'Episodio 460', 'Aparece la gran flota. ¡Irrupción de los Piratas de Barbablanca!'],
    ['https://mega.nz/embed/kzUQzT5Z#xrm2Ep4SxZSTIXtP4T_vXgsWsLqcJK_digfr73gWOkk', 'Episodio 461', '¡Comienza la batalla! El pasado de Ace y Barbablanca'],
    ['https://mega.nz/embed/B6NHTIDZ#wnIqgTgSruMFPTzj3m60y--hzpu4nREFpzQZH5pv5oA', 'Episodio 462', '¡El poder para destruir el mundo! El poder de la fruta Gura Gura'],
    ['https://mega.nz/embed/U3slxCgS#oojfJItJ09RBM-X-ySqaRlUEXh5WjIzAdcEyLS5PHsA', 'Episodio 463', '¡Todo reducido a cenizas! El poder del Almirante Akainu'],
    ['https://mega.nz/embed/MrdA2RiS#XlhnEXzwXERYWNZN6Q57M-Ykjx3ehsQ906cuWj4kqQU', 'Episodio 464', '¡El descendiente del demonio! ¡Pequeño Oars Junior a la carga!'],
    ['https://mega.nz/embed/prk3WZ5Z#aPgLdW4S5XnaPxH5AJhx3Soxm6RB89vPR0Nl1-8XJnQ', 'Episodio 465', 'El ganador será la justicia. ¡La estrategia de Sengoku se pone en marcha!'],
    ['https://mega.nz/embed/l6FBRRpQ#kKi7SVO0YMuWF-LKN1X4VjJeDvqOWYmGqWG6xFgiwE8', 'Episodio 466', 'Llega el equipo de Impel Down. El campo de batalla se vuelve más caótico'],
    ['https://mega.nz/embed/J3U3kLBJ#o8fDTJKq1YTg6W0im1uPKvqXrMvK_5Ichki3oSM6GFY', 'Episodio 467', 'Salvar a Ace aunque me cueste la vida. Luffy contra la Marina, comienza la batalla'],
    ['https://mega.nz/embed/x71XmBrA#WmoTeiLsUIkBwGM1a3ko2RAGw5_uGo6q4iu51VLaVP8', 'Episodio 468', '¡Feros combates consecutivos! El ejército de usuarios de frutas del diablo contra el ejército de frutas del diablo'],
    ['https://mega.nz/embed/hmkUAKiT#aY_56Nr6VgypYng3s_HBLw8osfDQY21s4dIDIauzh70', 'Episodio 469', 'Una transformación causada por Kuma. El ataque de la ira de Iva-san'],
    ['https://mega.nz/embed/ljVFXLyS#uRLJxQdxfjvEPKXjDbs9I6gwwddfcE44FK_PAzPC6yc', 'Episodio 470', 'El maestro espadachín Mihawk. La espada negra corta a Luffy'],
    ['https://mega.nz/embed/969UECTZ#zZTgxid5ff2KumNLtf7gKe-mGzUepa-EgyEM0TH_gt8', 'Episodio 471', 'Comienza la estrategia de exterminación. El poder de los Pacifistas'],
    ['https://mega.nz/embed/Mi83kIpZ#80XLWNyRskKUgIKttnypdyeAKZ9L4J5rFkScO465gn0', 'Episodio 472', '¡La conspiración de Akainu! Barbablanca atrapado'],
    ['https://mega.nz/embed/93900CxZ#6WiAl3C1tdC91RQq88J1vYn22ckg00wuTUTnVX2VpRY', 'Episodio 473', 'Se activa el muro de asedio. ¡Los Piratas de Barbablanca acorralados!'],
    ['https://mega.nz/embed/1q9CyYBZ#Mgv9pih-PIgUS2OEhxfDzZQ7hWB_JhL177RihTMu5xU', 'Episodio 474', 'La orden de ejecución es dictada. ¡Romper el muro de asedio!'],
    ['https://mega.nz/embed/xrcw1Aia#Cf5zAwtj9XqifjS_cIKnTqCmzvb93Jt1B5HOgbxhY-M', 'Episodio 475', 'Irrupción en la fase final. El movimiento definitivo de Barbablanca'],
    ['https://mega.nz/embed/4n1lxRJQ#s8xa9eRDxF4xNl9D3XmShPvr2zGDaxSUVpIk7DqdjJo', 'Episodio 476', 'Luffy al límite de sus fuerzas. Guerra total en la plaza Oris'],
    ['https://mega.nz/embed/Y6dT3IYQ#1mZbagCS7rgvdoycAUjkvyyS5NAtPHi-RKdQYkf1wvM', 'Episodio 477', 'El poder que acorta la vida. Los niveles de tensión regresan'],
    ['https://mega.nz/embed/1n8hHQLb#eGtVMbeGmwpgeChG67c-z9Yw-d_T_FdPLSmKb6a3L6s', 'Episodio 478', 'Por una promesa. ¡Choque! Coby contra Luffy'],
    ['https://mega.nz/embed/duVzQIzR#iJbRZUsIf10qsb6xKNpVpFi-06bpWiy0bK4KmOMGmdg', 'Episodio 479', 'Frente a la plataforma de ejecución. ¡El camino hacia Ace se abre!'],
    ['https://mega.nz/embed/x7Ey0CCJ#KqBahTa0_AQuWqYrqqm8SGlodozu7J0bPvI2m-FQyTo', 'Episodio 480', 'El camino que cada uno eligió. Luffy contra Garp'],
    ['https://mega.nz/embed/8v8l3RBC#b7595U3c2dSJ1MlyQ3Z_hvRFwRu-sAdfMg_YzB2T3ow', 'Episodio 481', '¡Ace liberado! El último deseo de Barbablanca'],
    ['https://mega.nz/embed/IrNFXZZS#QrOdGcwKcBMbvVks6mBVoGuZuPzMt8zS_I2lAI5O1Dg', 'Episodio 482', 'El poder que quema el fuego. El implacable ataque de Akainu'],
    ['https://mega.nz/embed/pmdQUKrJ#FYQ0f-XYnlICWE5dePtIbKBNNyu4mUoiu8oX4a9h-h0', 'Episodio 483', 'Buscando una respuesta. Ace Puño de Fuego muere en el campo de batalla'],
    ['https://mega.nz/embed/FiEwDYjI#YfFxP5iPQbH7BLVf4ogiSYu0d1kJknsm0Xzv2UmnD-c', 'Episodio 484', 'El Cuartel General de la Marina se desmorona. La ira silenciosa de Barbablanca'],
    ['https://mega.nz/embed/g7VHTAgS#ZHBsW_LDeK2yOBPi5zxkE9th_ApTjqjjE0FQXtJwLls', 'Episodio 485', 'Ajuste de cuentas. Barbablanca contra los Piratas de Barbanegra'],
    ['https://mega.nz/embed/kysEEQJS#nKkfxd6kdVjccU6q_ciA_0SEKhjZGDb3powXEjSgkx0', 'Episodio 486', 'El comienzo del espectáculo. El plan de Barbanegra revelado'],
    ['https://mega.nz/embed/pnUWDQgD#RJ9L3DD1lHpPmEbBh69oSgF86MjQr_Q354HORCyBN8E', 'Episodio 487', 'El insaciable Akainu. Los puños de magma atacan a Luffy'],
    ['https://mega.nz/embed/QrNzFC5T#fWtR82JjAncJVZcyUGgEjRFcOP3Xag1My2YzV-RLaMM', 'Episodio 488', 'Un grito desesperado. Segundos de valor que cambiarán el destino'],
    ['https://mega.nz/embed/RvkxwRTB#tZKOEy9aUFUtLmzonudC76qNqwqhD32Dgcr28AjSAKY', 'Episodio 489', '¡Aparece Shanks! La gran guerra finalmente termina'],
    ['https://mega.nz/embed/8jl1yayC#QDZ1nNfNOKFdvG-8pYJCA9vd-X-Mv6pw7u1j_kQ264U', 'Episodio 490', '¡Fieros rivales independientes! Comienza la nueva era'],
    ['https://mega.nz/embed/ZqFBlSha#SCwzk-IJhFrqApEWV5Ijb6J_ndPs64V6Lp0F2ScfbJA', 'Episodio 491', 'Llegada a la isla de las mujeres. Una cruda realidad ataca a Luffy'],
    ['https://mega.nz/embed/hytnhRRJ#YLnWOSk28uTHyEKn3sFxkBQAkAowmi0xiZ7o_OU3NA4', 'Episodio 492', '¡El equipo definitivo! El fiero ataque culinario de Luffy y Toriko'],
    ['https://mega.nz/embed/c6U1hbqB#wmImsUTyra1sgcFIt9vVQBsfn-q7OB8luvSUpBQJ-Zc', 'Episodio 493', 'Luffy y Ace. La historia del encuentro de los hermanos'],
    ['https://mega.nz/embed/l79DCR7B#x4iRDWmaT1rYiaZYQIRnSCTsEVhoC62iUWkAk4pYByo', 'Episodio 494', '¡Aparece Sabo! El chico de la Terminal Gray'],
    ['https://mega.nz/embed/F60AwQwY#6eL4ABu9Y5NMxgKsmwFpG0ypx9Uz7AXIyluMizyIDe8', 'Episodio 495', 'No huiré. La operación de rescate a muerte de Ace'],
    ['https://mega.nz/embed/k2M2nRiQ#6YP950vjpcyvZoMYwfPqzcycd3912UlQkA1LHRRtxaU', 'Episodio 496', 'Algún día saldremos al mar. El brindis de juramento de los tres gamberros'],
    ['https://mega.nz/embed/02tgDCLY#-dUHUKpwgJqTsvrEKJp3a-kLWfnLBK7MVlpSApPLJO0', 'Episodio 497', '¿Adiós a la familia Dadan? La base secreta completada'],
    ['https://mega.nz/embed/UuMwmT7Y#2Vbd1JfVeFYFU-5cWp93z5_5qi1od2GA7Hn7HkKxxug', 'Episodio 498', '¿Luffy aprendiz? El hombre que luchó contra el Rey de los Piratas'],
    ['https://mega.nz/embed/lj8UxTDY#GMohPFcKUFUOk1cMw-SIIaL37o9c4yeApRcBdBCuESY', 'Episodio 499', '¡La batalla contra el gran tigre! ¿Quién será el capitán?'],
    ['https://mega.nz/embed/5jkWHD5Q#uiD6aPbTqfSjVDP8K0sh5azFD7gs4-8XWJ5ioJem8_4', 'Episodio 500', 'Libertad robada. La trampa de los Nobles se aproxima a los hermanos'],
    ['https://mega.nz/embed/E2sDFC6D#PAdaOyGl48cdYwyja5ek8UMFORwqVA2-k_LN7waqzz4', 'Episodio 501', 'El fuego se desata. Crisis en la Terminal Gray'],
    ['https://mega.nz/embed/JrUE1IJD#IFF-dmDdI1iScUw-FJEHf3C0xWvr2eFajg3JpZQcKVk', 'Episodio 502', '¿Dónde está la libertad? La triste partida del chico'],
    ['https://mega.nz/embed/IjsRVDyI#7nxk0fA3XZrXYzbqKzKgxExbYrWPv5iIGGIWR5Q0RYo', 'Episodio 503', '¡Cuento con vosotros! Una carta del hermano'],
    ['https://mega.nz/embed/12siGJ4T#1zHrAinMEDiY3B3sCsHRWZYuff0hNdJKFvk1kCKbqAU', 'Episodio 504', 'Para cumplir la promesa. Partidas independientes'],
    ['https://mega.nz/embed/t6dAmL5I#h5aHsnAW-mISnEeJouMxhYDeCX_5D6QqYDrhr-_k-eU', 'Episodio 505', 'Quiero verlos. El amargo llanto de Luffy'],
    ['https://mega.nz/embed/4i8BnSKR#mfupN_CnOcSCru75x9JkzZ6Id_LT5WWCvpBkafsdBoQ', 'Episodio 506', 'La tripulación de los Sombrero de Paja conmocionada. Las malas noticias son recibidas'],
    ['https://mega.nz/embed/V7MkCbTC#EfeIE6o4n0CpeufV1dGpIm2gor69FN-GfVXzgHSj4h4', 'Episodio 507', 'Reunión con el Rey Oscuro Rayleigh. La decisión de Luffy'],
    ['https://mega.nz/embed/d2NTGRYI#yC5ziRkbAX0Au8js5GQTK99lwbXUyMXi53MtbCtl-Tg', 'Episodio 508', 'Regresar con el capitán. La fuga de la isla del cielo y el caso de la isla de los mecanismos'],
    ['https://mega.nz/embed/kvtA2R7b#mCxHAEPlQf3nes4j4k32JtWfqr7ba67M4utVrnh65Ig', 'Episodio 509', '¡Contacto! El gran espadachín Mihawk y la fuerza de voluntad de Zoro'],
    ['https://mega.nz/embed/VnN30SJB#SptrAfIboDbRs5eXdCi7AdHx57ibbCBpUUN3iU7WxOY', 'Episodio 510', 'El sufrimiento de Sanji. La reina regresa a su reino'],
    ['https://mega.nz/embed/83sXSYjB#4v6mvdX8r0fMGSlBy6wOnMvKkcfEBVKBzpyUqYknicQ', 'Episodio 511', '¡Un regreso inesperado! ¡Luffy en el Cuartel General de la Marina!'],
    ['https://mega.nz/embed/lndGzaTQ#2J3fhf4_ge9-7J51ki9LnkotRS3xCZdr-pbtHkN58lY', 'Episodio 512', '¡Hacer llegar el mensaje a los compañeros! Las grandes noticias se propagan'],
    ['https://mega.nz/embed/pv901TIL#rAkxSMngumpoW9BSTGzO6b9T7sz2cKShwGdJi6wcfps', 'Episodio 513', 'Los piratas se ponen en marcha. El asombroso Nuevo Mundo'],
    ['https://mega.nz/embed/0ql0AQwB#drFyRJIpAYAytzVWjZoq4t3JgGoMfqgrAbRp28QVoa0', 'Episodio 514', 'Sobrevivir al infierno. El duelo de hombría de Sanji'],
    ['https://mega.nz/embed/Br8HyDzB#SOLfF2bT9P22AP9zlZ3ByVnJmNrjI5Y79wvN6DOWFfo', 'Episodio 515', '¡Me volveré mucho más fuerte! El juramento de Zoro al capitán'],
    ['https://mega.nz/embed/wv0AVTCa#tws5kC_MbyB3ib15LVD2N7uu4CWAHzYGPPLTnc4fuOo', 'Episodio 516', 'Comienza el entrenamiento de Luffy. La promesa en el lugar acordado, dos años después']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason7Episodes = [
    ['https://mega.nz/embed/lyFCxL6b#V8ADt9QshRe3_DeJS9V1jt7lfz3sSxkZGJkujJZZm0Y', 'Episodio 517', '¡Comienza el nuevo capítulo! ¡Reunión de la tripulación de los Sombrero de Paja!', ''],
    ['https://mega.nz/embed/BjcikabS#eGlmbw53CPVS1CS8X63hiMy5J4HIqQmrbXYIaDq5AnM', 'Episodio 518', '¡Situación explosiva! Luffy contra el falso Luffy', ''],
    ['https://mega.nz/embed/gq8wmQTC#0N6Vu26MBU6kRB2UrtH9UQl3KDTakdyzITpJjemLYpc', 'Episodio 519', 'Los marines se mueven. El objetivo es la tripulación de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/5m1l0DhQ#LLLY1n-mBqAhgos3rYq4bu7OYRStUblXsPrKmqHe_9I', 'Episodio 520', '¡Gran concentración! La amenaza de los falsos Sombrero de Paja', ''],
    ['https://mega.nz/embed/AuVSSAgB#wpljlnJUV3gqI3M1YpysonCp0ykKMgSidzjFoMGmzSc', 'Episodio 521', '¡Comienza la batalla! Demostrando los resultados del entrenamiento', ''],
    ['https://mega.nz/embed/EnElnBAJ#LenYSs8y2r3dDT5n2RPSHEs7g2Xw_xNjoVWwZWklTuU', 'Episodio 522', 'Todos reunidos. Luffy parte hacia el Nuevo Mundo', ''],
    ['https://mega.nz/embed/53siFYZb#xEH28gQrLwuCl0xNTEDQB3lKeigDe7G1yAZycZ8ZQG4', 'Episodio 523', 'Una verdad impactante. El hombre que protegió el Sunny', ''],
    ['https://mega.nz/embed/E6s3wKAC#SpQgWLqcavelHUFSCAgwBoUH_7uUwTpuTA_jxbA08Cw', 'Episodio 524', 'Peligro submarino. El demonio del fondo del mar aparece', ''],
    ['https://mega.nz/embed/ZrVDwAib#iz1NGNlV9T6qejjUaSryHjn2fx2tClSJi9nsr86VpME', 'Episodio 525', 'Perdidos en las profundidades marinas. La tripulación separada', ''],
    ['https://mega.nz/embed/NrEjyBSK#pclBAcjj5efisnwETdafTdmGAHaYAgbq6XebIiNjD2g', 'Episodio 526', 'Erupción volcánica submarina. Flotando hacia la Isla Gyojin', ''],
    ['https://mega.nz/embed/Mr12lK7Z#TxvbfjIX6-RvKZtsQEQV8leLMTqdBrP22kM0Nc554xA', 'Episodio 527', '¡Desembarco en la Isla Gyojin! Las bellas sirenas', ''],
    ['https://mega.nz/embed/gmM2DL6L#D_vvDWtyq035Mp_tzM1qEiGhaXC0xWPzipVl9xcBG7w', 'Episodio 528', '¡Explosión de emoción! La crisis de la vida de Sanji', ''],
    ['https://mega.nz/embed/BjdgRTAY#hH4I0lIDl4ZRl3h5M3RDiC4yPKvBC2pLUSYrh6YMuHs', 'Episodio 529', '¿La destrucción de la Isla Gyojin? La predicción de Shyarly', ''],
    ['https://mega.nz/embed/RvERAChS#HsFU0W1eQlOcPa1_NZgwYz6-VhYJv-lPO1mTrHTOSBI', 'Episodio 530', '¡El rey de la Isla Gyojin! El Dios del mar Neptuno', ''],
    ['https://mega.nz/embed/0i9yADJL#oqBTD2M1eRRIglhDEpwDCvBmgXJccKjHzhT0RYCgPDU', 'Episodio 531', '¡El Palacio de Ryuuguu! Guiados por el tiburón que salvaron', ''],
    ['https://mega.nz/embed/VvMTACKT#dvnPrqhQVRgdXY0tXfDKFbDUE1Hj2uex2O2oK15ZmeI', 'Episodio 532', '¡La cobarde y llorona! La princesa de la torre Kokaku', ''],
    ['https://mega.nz/embed/xj9yEBQA#VDbAa04qoGpy4J2XYbuC1pMykglI8Qq_4ud55Fw8zkI', 'Episodio 533', '¡Estado de emergencia declarado! El Palacio de Ryuuguu ocupado', ''],
    ['https://mega.nz/embed/5ncADaaI#fuzfvnwFHQAFUSw9ptrS4VkLmuUo71Pq74eztedoOAQ', 'Episodio 534', '¡El Palacio de Ryuuguu tiembla! El secuestro de Shirahoshi', ''],
    ['https://mega.nz/embed/o2EFARKK#NfB94JD1z0mJD5_UPseUnQqGx5GCGMLOYP5bmTh9bO4', 'Episodio 535', '¡La invasión de Hody! El plan de venganza se pone en marcha', ''],
    ['https://mega.nz/embed/l29iCATY#zOoaUJM5qv81sLzLhaUaigGfkEYcN9aw3iUi7H9_--c', 'Episodio 536', '¡Batalla en el Palacio de Ryuuguu! Zoro contra Hody', ''],
    ['https://mega.nz/embed/wmkGVI6K#8acmyD2Hpe64frLE7nfvqVywbGsmVWS2V8IWrGYONt0', 'Episodio 537', '¡Proteger a Shirahoshi! La persecución de Decken', ''],
    ['https://mega.nz/embed/YqMlRAJT#XxgVVXzZstPE9OdimuZwyjW3CDBY6IG-ZXKgfsWyNRc', 'Episodio 538', '¿La tripulación derrotada? Hody controla el Palacio de Ryuuguu', ''],
    ['https://mega.nz/embed/dnU32b5D#CP9JCBqFzafIY7EawhFcDvcSiWGzmYC8iVcKKkyE8NE', 'Episodio 539', '¿El lazo revivido? Nami y los Piratas del Sol', ''],
    ['https://mega.nz/embed/1uUGDC5I#eJN0YI45bYeIoc7ckyzHww1V8PPCQw3ZEjo5mkhrwxc', 'Episodio 540', 'El héroe de la liberación de los esclavos. El aventurero Tiger', ''],
    ['https://mega.nz/embed/x6NxWBKK#rkuaQELc1u0e-rzgZjZb8pc8q5wvCJFQjcSs4l-WqPU', 'Episodio 541', 'Aparece Kizaru. Una trampa dirigida a Tiger', ''],
    ['https://mega.nz/embed/ducywKRS#7W98N-Q67RG3XAI7y8JNZm5uzj4XIaMKHJwOD-3hBbs', 'Episodio 542', '¡Formación de equipo! Salvar a Chopper', ''],
    ['https://mega.nz/embed/0uskHYYC#-BouY0F-ZM_R0SO17vUpgSpHmePSPzgIp2dXaHZFFso', 'Episodio 543', 'El final del héroe. La verdad de Tiger', ''],
    ['https://mega.nz/embed/YrUiQBZb#GULFHIq6h3SuW8LtMKJkfVjJGOjcEQK01eeaEpeuLns', 'Episodio 544', 'Los Piratas del Sol se dividen. Jinbe contra Arlong', ''],
    ['https://mega.nz/embed/4vlk2aqJ#oCSy7hXFS7IHXppID5iVyQxprKK-tpvDxGBwcVVgTQ8', 'Episodio 545', 'La Isla Gyojin tiembla. El desembarco de un Noble Mundial', ''],
    ['https://mega.nz/embed/4rN0WbQT#XAr_LMS7EDS8d0qyjjIYRAboRLsMgi4Yb2SxriPfVP8', 'Episodio 546', '¡Tragedia repentina! La bala asesina que sella el futuro', ''],
    ['https://mega.nz/embed/kjNVnK7T#8CMFW__ep_iOT-vhUOgV9hjSaRmyyeQVuwJiQIRuXR8', 'Episodio 547', 'Regresando al presente. Hody se pone en marcha', ''],
    ['https://mega.nz/embed/s31VnDRZ#vcieBXzN8PCMDA0yVmOjPs9AHgTS5gqaDWmTt77Nugg', 'Episodio 548', 'El reino conmocionado. La orden de ejecución de Neptuno', ''],
    ['https://mega.nz/embed/FrVWFahD#8oAl9m_7X0lBfzaRn7v03xJTYF5dDO8rfuZfHAvnXOY', 'Episodio 549', '¿Una grieta en la tripulación? Luffy contra Jinbe', ''],
    ['https://mega.nz/embed/sjUwAKwI#3w0kPa0iEqa8ckrBsdYapAETPBrH-4SC0mcr-QyFLQo', 'Episodio 550', 'La transformación de Hody. El verdadero poder de las Energy Steroids', ''],
    ['https://mega.nz/embed/Uz9QGT7Q#jKEGIHODyWjYMQTHDX_L81aieiFRXx2Mj-KA_lT6VGU', 'Episodio 551', 'Comienza la batalla decisiva en la Plaza Gyoncorde', ''],
    ['https://mega.nz/embed/UzEH0RqC#07ZfA3R8AMHU1NpaolLUPU8nvrDLJXyLLEJSSP34Pog', 'Episodio 552', 'Confesión impactante. La verdad tras el asesinato de Otohime', ''],
    ['https://mega.nz/embed/8mFThI4Q#xxuxpjOf_sMqy6TEeabZJqOKTPglkMemZKXAY4YBNFY', 'Episodio 553', 'Las lágrimas de Shirahoshi. Luffy aparece en el campo de batalla', ''],
    ['https://mega.nz/embed/RzdEwRKL#1O25ZOjpLIyUdx_dEtHekJOP3Z4SpHl8A9gXXU61n6s', 'Episodio 554', '¡Gran enfrentamiento! La tripulación de los Sombrero de Paja contra cien mil enemigos', ''],
    ['https://mega.nz/embed/pucizLhD#XZWI-XuwG0ksTpigzc4OeSQaXlyje5MDKyByyuxaT1U', 'Episodio 555', '¡Técnicas explosivas una tras otra! Zoro y Sanji se mueven', ''],
    ['https://mega.nz/embed/1n0iAYQK#sOAZUB1iKxJ7qN2PykdfBWyLtFWrQtlzyX2n7tPhRYs', 'Episodio 556', '¡Estreno oficial! El arma secreta del Sunny, el Iron Pirate', ''],
    ['https://mega.nz/embed/knNFyZhZ#jfHFNZ8k0gPiDFetZws8VFvfpNuEa-cN3HMzU8P9rBA', 'Episodio 557', 'El Iron Pirate General Franky. El arma definitiva', ''],
    ['https://mega.nz/embed/Zm0HlazQ#h4_gpjv_Ga2UporSa7sSYEYpxOcfGhi1QghN18b3czA', 'Episodio 558', '¡Noah se aproxima! La crisis de la destrucción de la Isla Gyojin', ''],
    ['https://mega.nz/embed/wj0hwAKL#mXgqo-mUDQn-dcHfXaNyasrZqmggGdLHiGZuAkdmF1w', 'Episodio 559', '¡Darse prisa, Luffy! Shirahoshi en una situación desesperada', ''],
    ['https://mega.nz/embed/BudlhBYR#mvd36gnKQ_90gBEKg2p0CbvaKOwH83HE9GkbTuKFUeg', 'Episodio 560', '¡Comienza el fiero combate! Luffy contra Hody', ''],
    ['https://mega.nz/embed/tutS0RgQ#eyTPjrs79qIshezkwn53DBYFHMbuZN7g7iJ0ZUzOcTc', 'Episodio 561', '¡Batalla campal en el aire! Decken contra Hody', ''],
    ['https://mega.nz/embed/EnsHALLB#WkKDWUn72M9LtFMekp-rUwMF6Q7PoRZ2EjzNaZuHxIs', 'Episodio 562', '¡Luffy derrotado! La crisis del reino inmimente', ''],
    ['https://mega.nz/embed/431k3I4K#_EEEf4RgWkpNkUa5eN2zMlh7RkbiQ2oTz3IT4GNrJoU', 'Episodio 563', '¡La impactante verdad! La verdadera identidad de Hody', ''],
    ['https://mega.nz/embed/ImNGGbwa#O5Elc_CevfkZzfiOnykrzzEBN91_xN5iNiL68LmIq8M', 'Episodio 564', '¡A cero! El ferviente deseo hacia Luffy', ''],
    ['https://mega.nz/embed/JqsUCJpZ#xGOZvPOyJ3XWVvhi-POtJRd4eqxWd2Gyp6jxxGZoXYk', 'Episodio 565', 'El golpe a la desesperada de Luffy. El Red Hawk estalla', ''],
    ['https://mega.nz/embed/giF1WJSL#F2P65pycz_EbRZsIUJddKjJV--6ki5ZzPvuhC0ysXYU', 'Episodio 566', '¡Desenlace definitivo! La batalla final de Hody', ''],
    ['https://mega.nz/embed/kzkGkSyD#z9mYNHffOm3bRvygbGIB--jhauX2r3tZBh9woIt2GDM', 'Episodio 567', '¡Detener a Noah! El Elephant Gatling a la desesperada', ''],
    ['https://mega.nz/embed/p2MURTSC#QnFoLY1C8zOsuT6OQilaD7THFGgq5hGIbQsUjUEKgvs', 'Episodio 568', '¡Hacia el futuro! El camino que conecta con el sol', ''],
    ['https://mega.nz/embed/p2VS1DDb#eqRb3RoOGTnXUaOjfiH8fOrPa1r0pW0pfFEa3a61bZ8', 'Episodio 569', 'El secreto revelado. La verdad sobre las armas ancestrales', ''],
    ['https://mega.nz/embed/svVgiKpK#7m2X6bbvkRHx75JI4jQPQkhtb3e0zRRAgpV4J_PHNLw', 'Episodio 570', 'La tripulación sorprendida. El nuevo Almirante en Jefe de la Marina', ''],
    ['https://mega.nz/embed/kytn1JZA#2-l4Yt2YgNXalSX_MhKwmvYN5HTmkx9UCdzr4x1dn_k', 'Episodio 571', 'La amante de los dulces. La Emperatriz Pirata Big Mom', ''],
    ['https://mega.nz/embed/B2dmVYZD#YsDeLb3sWTPdNmBhloBFUlHtAMkv4bNwtayxFwo3cWI', 'Episodio 572', 'Perspectivas sombrías. Una trampa que espera en el Nuevo Mundo', ''],
    ['https://mega.nz/embed/QrMQUDQa#n4cZej66jKpLG4YTmflUn8tkens8jOPLzj3sigE6j-4', 'Episodio 573', 'Finalmente zarpamos. Adiós, Isla Gyojin', ''],
    ['https://mega.nz/embed/Jr8xyY7J#3RmRcZ6QAHW-9MVnN55wkCNIOA96eCOHw0yL-KbQzx0', 'Episodio 574', 'Hacia el Nuevo Mundo. Rumbo al mar definitivo', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason8Episodes = [
    ['https://mega.nz/embed/dn9mFCIQ#XW5Pxe4VCxjV-6YH20AmJqiVU58ttgK63d6EIvYcMgM', 'Episodio 575', 'La ambición de Z. ¡La pequeña gigante Lily!', ''],
    ['https://mega.nz/embed/ojNkFIpa#pxj5IYEwK7r-8i8kLh3NMZYicEeoj7KHrfmEOTOG0qw', 'Episodio 576', 'La ambición de Z. ¡Aparece un misterioso y poderoso ejército!', ''],
    ['https://mega.nz/embed/onc1HTZC#BI6tMP_WpTKfOyZRyD3RhGIpUkFLV6XmAw-PnjCJuR4', 'Episodio 577', 'La ambición de Z. ¡Un desesperado plan de huida a gran velocidad!', ''],
    ['https://mega.nz/embed/J7FWDDgI#XhXNTexqC2OyIRAM7uAeUJxDOdhV0y7jd_fY7EGhaHs', 'Episodio 578', 'La ambición de Z. ¡Luffy contra Shuzo!', ''],
    ['https://mega.nz/embed/QzkVxa6S#DI5p6Ak9Ykb3C8ekSUTMEE_shPh-jY4bON9CgpdPIDk', 'Episodio 579', '¡Llegada! Punk Hazard, la isla ardiente', ''],
    ['https://mega.nz/embed/1jUx3KzS#0Go9QVfbScXe50hcbZRS7oUPL16W3BF70RA1_d3r2Co', 'Episodio 580', '¡Una batalla ardiente! Luffy contra el dragón gigante', ''],
    ['https://mega.nz/embed/Rm0mgIxD#W4V36RzxmbSAGZLcoyjk4LmYYQDEYfWLD7rCRNGzfk4', 'Episodio 581', '¡La tripulación conmocionada! ¡Aparece el samurái decapitado!', ''],
    ['https://mega.nz/embed/kqcRXAgT#bfp3tPmBAthpDqYYvs8sp3B3qFHfvld-lFXeAjWwKRs', 'Episodio 582', '¡Sorpresa! El secreto de la isla es finalmente revelado', ''],
    ['https://mega.nz/embed/FmlUkLCZ#JzN8jefjLwgbt2GPpCOyxrMHkEoQHQeBMCWfpMHKm58', 'Episodio 583', '¡Salvar a los niños! Comienza el combate de la tripulación', ''],
    ['https://mega.nz/embed/MrFTATqB#AO4a4Mzi-rjg0T9EjTF6F5MwLkY9PThfdfV6c7F33Ds', 'Episodio 584', '¡Duelo de espadas! Brook contra el misterioso torso del samurái', ''],
    ['https://mega.nz/embed/ozMAAAIY#mLTLpMLccvFSbWSyj9FK4QGP-UYUefnlKwXL6nrvd3w', 'Episodio 585', '¡El Shichibukai! Trafalgar Law', ''],
    ['https://mega.nz/embed/h3MgBRQK#KAXEz76DPzBKdxlwHfFBVvtMwXk4Nwr-Mtb9Gg0ODwM', 'Episodio 586', '¡En un gran apuro! Luffy se hunde en el lago helado', ''],
    ['https://mega.nz/embed/luVhVLQA#JemCzGMVXHsNJSnxVX0iFWmv0XrjgYf4GIJa1BLqqzM', 'Episodio 587', '¡Choque! Law contra el Vicealmirante Smoker', ''],
    ['https://mega.nz/embed/lidwBLBJ#KnDxY6tk2DQKKyPbx84PkZZG5QF3k9UyKNl47VYpssE', 'Episodio 588', '¡Reunión después de dos años! Luffy y Law', ''],
    ['https://mega.nz/embed/cu1kBDRS#krEKU6fvfYn6BuJEgnNTNNvTgUtE4ujesGQIvFd0Jak', 'Episodio 589', '¡Lo peor del mundo! El aterrador científico Caesar Clown', ''],
    ['https://mega.nz/embed/Iq00yASS#rJcFNswULLE7paPBtPWn0VWtPGrU052PGYkC7hyVSFg', 'Episodio 590', '¡La colaboración más fuerte de la historia contra el glotón del mar!', ''],
    ['https://mega.nz/embed/s281BQrL#0BFgjqYejXXJW6st7F-54zyXFl3344h-pozaigZvhKw', 'Episodio 591', '¡La ira de Chopper! Los crueles experimentos del Maestro', ''],
    ['https://mega.nz/embed/Um0GmKiR#oGXk9_RpM4tbqfQc6YyuzqiP1z3HOtDCIGtR78tv538', 'Episodio 592', '¡Asegurar a la tripulación! Los asesinos legendarios de Yeti Cool Brothers', ''],
    ['https://mega.nz/embed/srdimQ7J#EPm5gEj9AK84WNiVzstl7FVoclDiVzsMzpVMGPjjIpM', 'Episodio 593', '¡Salvar a Nami! Luffy lucha en las montañas nevadas', ''],
    ['https://mega.nz/embed/Ny9nhCKQ#JrjrwlJWMvzLEjA4JDWBzmQmAQGSVV3W_di5srhMAUM', 'Episodio 594', '¡Formación! La alianza pirata de Luffy y Law', ''],
    ['https://mega.nz/embed/g3kByIaC#qm_BwQH5WGc-10ALW-y4uU4jK1uoUSizuaIF-0pK680', 'Episodio 595', '¡Capturar al Maestro! La operación de la alianza pirata comienza', ''],
    ['https://mega.nz/embed/h2kzxDwD#47p31gYMM8BIJziXs3JlYHQRtX6P06mdo98wvM-O-RA', 'Episodio 596', '¡Crisis de destrucción! El monstruo de la muerte cae del cielo', ''],
    ['https://mega.nz/embed/92cABQIQ#NePYpNEbE7Lgreak3cZxn806TvQLZVLmp9Td1adCfPs', 'Episodio 597', '¡Feroz combate! Caesar activa su verdadero poder', ''],
    ['https://mega.nz/embed/djkAiCaK#OJyJPan8snOemTEoJNlXfAFB_YrktaKnXGGE6k81Bgg', 'Episodio 598', '¡El samurái que corta el fuego! Kin\'emon de Foxfire', ''],
    ['https://mega.nz/embed/I28mWDzS#3-vp3fmZBOL-sKZk5CpfR3j9cg87ZrUgGc1O-0LIVUs', 'Episodio 599', '¡La identidad de Vergo! El comandante del G-5 de la Marina', ''],
    ['https://mega.nz/embed/Nq0UnDSB#GrQGLerZs4TKLKcBhcYQiaIzt7iZCN1Gxq6UE1Frz0c', 'Episodio 600', '¡Proteger a los niños! La mano malvada del Maestro se aproxima', ''],
    ['https://mega.nz/embed/0mMjmAbJ#DUwSz67jAKoFcXPTLx6guwASIY9gYdFYO9toEjqodeU', 'Episodio 601', '¡El Nuevo Mundo tiembla! El experimento de pesadilla de Caesar', ''],
    ['https://mega.nz/embed/1y0zCACQ#xPAGxknSWFqQPwlelY_XYgU6W7XHHa3zc-9EgCAzVG8', 'Episodio 602', '¡El arma de destrucción masiva más malvada! Shinokuni', ''],
    ['https://mega.nz/embed/F6UGkaoL#rbzo5kXJZUGFglC0GP4fp46Kf1VQARIVzDeW_9xm2KI', 'Episodio 603', '¡Comienza el contraataque! La gran huida de Luffy', ''],
    ['https://mega.nz/embed/wmdEFBCS#mSh7KLrMpPGIB_iwo6PIz7H-YJzk5_sMnFqbvsvo-BI', 'Episodio 604', '¡Rumbo al Edificio R! El gran avance de la alianza pirata', ''],
    ['https://mega.nz/embed/JvUEHCQC#kfMER5IYxZOJqKYFu4n91dnppfwAB3WVBQso7mz67Zk', 'Episodio 605', '¡Las lágrimas de Tashigi! El plan de avance a la desesperada del G-5', ''],
    ['https://mega.nz/embed/YyclRDAY#wLRCcTALbNk4PztPNANGLXNi47EaKKGQiaP-T62HcTU', 'Episodio 606', '¡La traición de Vergo! El Demonio de Bambú se mueve', ''],
    ['https://mega.nz/embed/8r9RQTga#fOI6-JdvOuCimNt82xtXSKg_8bs01HiY4Iae2oaFPC4', 'Episodio 607', '¡Feroz combate en el Bloque B! Luffy contra Caesar', ''],
    ['https://mega.nz/embed/YnsBjIBJ#0tTx-u4CLQo4rEqoDkfNzSRXZHloYFYcQqEaRRT8GbE', 'Episodio 608', '¡El cerebro en las sombras! Doflamingo se mueve', ''],
    ['https://mega.nz/embed/tyt3QSSZ#y2Kd_R2PylPb6D69IZTmjl5PA2b0b4TD6L7qCSihPf4', 'Episodio 609', '¿Luffy congelado? La terrorífica mujer de las nieves, Monet', ''],
    ['https://mega.nz/embed/h71jmbaR#Mr-q5BQo4uNNcvyD-XxnBeFx6Xqg3k8Dw2tWeub67W4', 'Episodio 610', '¡Choque de puños! Duelo de los dos Vicealmirantes', ''],
    ['https://mega.nz/embed/hys1kCJb#HzeXf1gg-DcteFvuhslnGRoAJR655BCVpLMryDRgOJE', 'Episodio 611', '¡El pequeño dragón! Momonosuke aparece', ''],
    ['https://mega.nz/embed/B2tziRwa#c4q388MkXPVIHmrYm_MOAJhg2xhalCLcA2bCtwnlZlM', 'Episodio 612', '¡Combate en la tormenta de nieve! Los Sombrero de Paja contra la Mujer de las Nieves', ''],
    ['https://mega.nz/embed/ZnlCCbiC#1TS4YRFq6R7rBfi39dEXWEOlKKBQNRSkIXxCreWDB-Y', 'Episodio 613', '¡Explosión de la técnica secreta! El estilo de una espada más fuerte de Zoro', ''],
    ['https://mega.nz/embed/lmk1DIyb#-fWs_Lm3n9HdSw9f5SMLXAqW1FGO_WOBGQsyL6ydCGI', 'Episodio 614', '¡Protegeré a mis amigos! La huida a la desesperada de Mocha', ''],
    ['', 'Episodio 615', '¡El lamento de Barbamarrón! El golpe de ira de Luffy', ''],
    ['https://mega.nz/embed/AidRwC5T#19gA2T7xXJHMJus2Uyt4Ua9UNW5yxXMGREk-IYbBBBM', 'Episodio 616', '¡Desenlace impactante! ¡Smoker contra Vergo!', ''],
    ['https://mega.nz/embed/AucCiASK#ZaG3ibOyKcV1Jt5yEQoVyqajlqwaQMINc2gKsnUbVgw', 'Episodio 617', '¡Derrotar a Caesar! El Grizzly Magnum definitivo', ''],
    ['https://mega.nz/embed/Rv0BFabC#NT7BH655csmB6WSIjWTIW54teAQQdSE_7e3NT7rIJ5Q', 'Episodio 618', '¡Invasión! Los asesinos de Dressrosa', ''],
    ['https://mega.nz/embed/l3MVjIoB#2lZK4kHegN5TGvrPiAPSKh0SYS_Awvoz69PQKxb9eVU', 'Episodio 619', '¡Gran alboroto! El invencible General Franky', ''],
    ['https://mega.nz/embed/97UT1aRa#CUbgj4f1B9buQjYxAYOt-WX2R3LXh8m9V2v56y7YOJg', 'Episodio 620', '¡Situación desesperada! La destrucción de Punk Hazard', ''],
    ['https://mega.nz/embed/pjsVgCKK#A8_FJCck3i0raq0xmOHIkwX9aqEeVoQ5lXgP17BQZzM', 'Episodio 621', '¡Capturar a Caesar! Las ráfagas del General Cannon', ''],
    ['https://mega.nz/embed/Em1RlC5R#xR3PC4TW3gw4qItbRuFVfg45tzTwum7cIYvnHj-6Dtk', 'Episodio 622', '¡Reunión trágica! Momonosuke y Kin\'emon', ''],
    ['https://mega.nz/embed/5jliha7J#mPX3oOC9ZQb7vUT30QHIeIU7IsPdFA5BlREwC1DvV84', 'Episodio 623', '¡La hora de la partida! Adiós a Punk Hazard', ''],
    ['https://mega.nz/embed/U6cV1bqQ#FKeyhx3ZkLGl8_lolLtcvdCWBlIGPXc2GQkC6fGHzwc', 'Episodio 624', '¡La aniquilación del G-5! ¡El asalto sorpresa de Doflamingo!', ''],
    ['https://mega.nz/embed/k3lXHbTA#I8NR-3OgoA3Lvy_b1_P9OR6KYifNc3tOS10MtKs9e8Q', 'Episodio 625', '¡Tensión! Aokiji contra Doflamingo', ''],
    ['https://mega.nz/embed/cq1EGJwK#HJm4OIHMDhASOyYFFD0REDay9dBJkKYO-0Mab5qinp4', 'Episodio 626', '¡Caesar desaparece! Las incursiones de la Alianza Pirata', ''],
    ['https://mega.nz/embed/5j0AVDxY#rh9vR6Ei98bOOekBkkNiaHrjfqyaXqlx3o-gv8saduk', 'Episodio 627', '¡Luffy muere en el mar! El colapso de la Alianza Pirata', ''],
    ['https://mega.nz/embed/J3dm0bqb#z83RdrxFa1dGDfhYSm5YIjE0SM8Bj3PT-T3O2mCCjr4', 'Episodio 628', '¡Gran contraataque! El puño de la ira de Luffy estalla', ''],
    ['https://mega.nz/embed/MnUkXRJL#WfAaNtFyp5HGqABHwMy0A-8SGlpX_EOhFI8EtGlKu5g', 'Episodio 629', '¡Impacto! Las grandes noticias que conmocionan al Nuevo Mundo', ''],
    ['https://mega.nz/embed/0rswXTSY#krRwaR027C570cU9k7Yh9P9IVko5_Cd2gjvNSJBcHSM', 'Episodio 630', '¡Aventura! El país del amor y la pasión, Dressrosa', ''],
    ['https://mega.nz/embed/BytAmZ7b#4P-LNPmMOTV0SC4iUuC8Jv0NS9pYXRVJMw-x4NZKzaY', 'Episodio 631', '¡Entusiasmo desatado! El Coliseo de la Corrida', ''],
    ['https://mega.nz/embed/hm8znRrB#gmBUuXMEUDLyOoydIMxFqtgyKaP8fHS_9tReyhUbULs', 'Episodio 632', '¡Amor peligroso! Violet, la bailarina de Dressrosa', ''],
    ['https://mega.nz/embed/o2kDkayQ#FEG2jGUTXyI71CzwwPDgL-jZUqq8iVYP7MYS7DIFJlA', 'Episodio 633', '¡El guerrero desconocido más fuerte! Aparece Lucy', ''],
    ['https://mega.nz/embed/o3NkiC6I#7CIvXspongSY0Ot6zQ7lwoet_itQYVYN0DCdiRBA2No', 'Episodio 634', '¡El príncipe pirata Cavendish!', ''],
    ['https://mega.nz/embed/IqV23LjJ#5OcacqB3WMTridDJk-9ugUXeFelwx_vcaShmraZIQIQ', 'Episodio 635', '¡Reunión fatídica! Bellamy la Hiena', ''],
    ['https://mega.nz/embed/Nr92kbJJ#f5H0kcOo_8w-9dWYFd3ePulOEWuWGSRTRl_311nZ0Y8', 'Episodio 636', '¡Un Supernova! Bartolomeo el Caníbal', ''],
    ['https://mega.nz/embed/B7dxRBDC#TpnTIvZcI5IsAD29snr3QFd-Oega96Tqbklk28Jqyac', 'Episodio 637', '¡Gran rivalidad de pesos pesados! ¡El Bloque B en llamas!', ''],
    ['https://mega.nz/embed/Mr91kIhR#obz_87EwGocANuc1YgiB4DztjKy_AKgJ9vA5wR_jgJ4', 'Episodio 638', '¡Un golpe mortal! El Puño del Rey definitivo', ''],
    ['https://mega.nz/embed/NnUWyLDZ#cqR-0_hiVxPc0a7fcqcCeabSzRstrWcNHtEFY0azvp4', 'Episodio 639', '¡El ataque de los peces luchadores! Cruzar el puente de hierro de la muerte', ''],
    ['https://mega.nz/embed/gqc1TCKS#RV5-k1I3YeO0JClzFQcWoBD56-NaWJG7_jLJ00tkiWI', 'Episodio 640', '¡Aventura! La isla de las hadas, Green Bit', ''],
    ['https://mega.nz/embed/Im8WkIAR#Prmqa40D56UvGys8cpZmIMTQjUdtkU5U003eJlSYQ4w', 'Episodio 641', '¡El mundo desconocido! El Reino de Tontatta', ''],
    ['https://mega.nz/embed/cndhBTyL#G-EAo23my0NShTccEArbw7zPC83Z-CCQmLOSghYA7Bc', 'Episodio 642', '¡El plan del siglo! Law contra Doflamingo', ''],
    ['https://mega.nz/embed/QrtDWbLS#m4Ln6lwo0bt8ky91mJiB5Q53IC3b-1TQTu3aX40ahgg', 'Episodio 643', '¡El cielo y la tierra tiemblan! El poder del Almirante Fujitora', ''],
    ['https://mega.nz/embed/h20EhATL#Zt4RH7s_IQ7Kqkmn4TmqQNEKpP00fEB4bxvr0v59aHI', 'Episodio 644', '¡Un golpe de ira! El gigante contra Lucy', ''],
    ['https://mega.nz/embed/Q2EX1RIJ#8fCO3iNX8AkFigGa0-tkPDTrwBsUqOomds9mlsAu_5M', 'Episodio 645', '¡La explosión del cañón destructor! Lucy en peligro', ''],
    ['https://mega.nz/embed/BnsQFDqY#rolgI_4KibrYzMVEuucr-sHA__wumdlTCHEchkrBDhU', 'Episodio 646', '¡El pirata legendario! Don Chinjao', ''],
    ['https://mega.nz/embed/Ru9wxCLA#VX6lWGw_gtAl-YSdTR4DZrXCu3352eYVzegTPG9glo0', 'Episodio 647', '¡Luz y sombra! La oscuridad oculta tras Dressrosa', ''],
    ['https://mega.nz/embed/h6dFRBoK#Ld37Id8D4pcLr0QJ0pj_i3pzOTxKoOp4bPYjcV_xSDA', 'Episodio 648', '¡Hacia la batalla! El héroe legendario Usoland', ''],
    ['https://mega.nz/embed/UuVQzYrB#H8HDrBAdTx-Umhh3HMeWHElIEYIVR82HYK_AZodh4h8', 'Episodio 649', '¡El final de una fiera batalla! Lucy contra Chinjao', ''],
    ['https://mega.nz/embed/EydmkbqJ#PjFUDZ-dYiFt_SG7okBdaEWMue8YpXauTX1j6-fUu8k', 'Episodio 650', '¡La gladiadora del destino! Rebecca', ''],
    ['https://mega.nz/embed/ly1TGTjZ#yKu2fyRC60etyNhdNGeDH_AqSAVrP-0geE8QeKuZQOk', 'Episodio 651', '¡Protegeré a Rebecca! El Going Free y el campo de girasoles', ''],
    ['https://mega.nz/embed/Ju9mDYgB#8dkN9Qea7HZ0aRdYgiRlVSjCnI48TUtlG04yukkaF5g', 'Episodio 652', '¡El Bloque D en una situación crítica! El fiero combate comienza', ''],
    ['https://mega.nz/embed/EjUBSJDJ#2rl2eHBFHD_KABmorbnD2CJR57sv8STj4upkkt8Gmmw', 'Episodio 653', '¡Combate decisivo! Jora contra los Sombrero de Paja', ''],
    ['https://mega.nz/embed/VqklkaIR#w5T76M-ZrVhqivmRERZLYaC3lqIkCP7ofagsN2sDiuI', 'Episodio 654', '¡La espada de la belleza! Cavendish el Caballero Blanco', ''],
    ['https://mega.nz/embed/pm9FlaZZ#-NhilnMOSG3-S_UiA0q-AD2iNAjuGdDXMWkliUL4di0', 'Episodio 655', '¡Gran enfrentamiento! Sanji contra Doflamingo', ''],
    ['https://mega.nz/embed/Yil1lDqI#5U7gmZBeka2NJhGZkjKxaqP8KrtrdehKc3NaHwG-Hf8', 'Episodio 656', '¡La espada mortal de Rebecca! La danza de la espada sobre el agua', ''],
    ['https://mega.nz/embed/1vlhXa4C#7_JfnqSiCXviykCCUa3r40O5juK5FUsy5JQSdAp5YM0', 'Episodio 657', '¡El guerrero más violento! Logan contra Rebecca', ''],
    ['https://mega.nz/embed/Mj9QQTCJ#CIuWJDx2KA50aJLTHI2k-o9ztZ7qCJycHnQ45Q_bneE', 'Episodio 658', '¡Gran impacto! La verdadera identidad del soldado de juguete', ''],
    ['https://mega.nz/embed/RyVhyTDZ#EoN7FB2sGqBL49fLkwP6ZsrCI2btM02iRR3Fe_KeHPo', 'Episodio 659', '¡El pasado trágico! El secreto de Dressrosa', ''],
    ['https://mega.nz/embed/Bm10ATRD#-2aPppbtM5eZuZVjhgzjCxX33qhaxc2n2LDVDVf7TZY', 'Episodio 660', '¡Pesadilla! La noche de la tragedia de Dressrosa', ''],
    ['https://mega.nz/embed/VqsXVb7J#O7I8RwRfKusi9-ubUGkEnIeJLD3qE8NpOLfO_afaMpA', 'Episodio 661', '¡Enfrentamiento de Shichibukais! Law contra Doflamingo', ''],
    ['https://mega.nz/embed/Br9S1ArY#ShdAIlrmzV5tHkGzjpckdAFcLtGDw6mGbOYp-d_lxPk', 'Episodio 662', '¡Encuentro de dos grandes rivales! Tres Sombrero de Paja y Puño de Fuego', ''],
    ['https://mega.nz/embed/YyM00ZDT#Q6dtuw0tndyySLeu45InUL2TQl8ob3ZjcsDw8hRLLf4', 'Episodio 663', '¡Luffy conmocionado! El hombre que hereda la voluntad de Ace', ''],
    ['https://mega.nz/embed/02V0xTpY#vdhpGeiSJgsrrlLKrwGm_OSp9bn3M-hDni65sYAuyRs', 'Episodio 664', '¡Comienza la Operación SOP! El asalto de los Tontatta', ''],
    ['https://mega.nz/embed/d3EHjSQR#maBYsZbTLvXA2__7DU-mCAtrCizS_AEJ4pRqYB6QRxo', 'Episodio 665', '¡Sentimientos ardientes! Rebecca contra Suleiman', ''],
    ['https://mega.nz/embed/JzNkFJDZ#it8OSFs7vixPaCiEfIg1xwAPnNYCZCFSWj5KYq3QmLc', 'Episodio 666', '¿El fin del combate? El impactante desenlace del Bloque D', ''],
    ['https://mega.nz/embed/MrsSWBxR#WNiAr2GXdxSDyzhPfiKQRnyXBaB0bAR-DJPBe_gdRrU', 'Episodio 667', '¡La decisión del Almirante! Fujitora contra Doflamingo', ''],
    ['https://mega.nz/embed/4v0zEDqR#YAW_psGRE_z1MqsiaaVF52Sa0WUt7iYmglE2ISqCpsQ', 'Episodio 668', '¡Comienza la ronda final! Los héroes del coliseo entran en acción', ''],
    ['https://mega.nz/embed/42kmCLiQ#k1FT2nRgPuDZuWpRyi_ZP-ievqJn9yrEWS3SHVSzL9Q', 'Episodio 669', '¡El palacio tiembla! El oficial supremo Pica aparece', ''],
    ['https://mega.nz/embed/RqkVha4K#gitxjhQTOL6o-uXIzeSBixEZWAt8CBtCAQmbdNXfHrY', 'Episodio 670', '¡Explosión del Garra de Dragón! ¡El ataque definitivo de Lucy!', ''],
    ['https://mega.nz/embed/V7UiXaDL#ekr7eVPUNmhWtrmCNih79izzJJtDlskO00cr09Cp0nQ', 'Episodio 671', '¡Derrotar a Sugar! ¡El ataque de los soldados enanos!', ''],
    ['https://mega.nz/embed/A2tGWJKI#q3ME7Tmq1Ha2x5ofNqWD2HsJYQh1jXb28cgY-QZFgqs', 'Episodio 672', '¡La última luz! El secreto del capitán de los juguetes', ''],
    ['https://mega.nz/embed/M7N1WYRb#1Z_be28hQKcZVPYlkPII2RSNlEfDpX4wJphjE7aGYrE', 'Episodio 673', '¡La fruta de la mutación! La gran explosión de la fábrica de SMILE', ''],
    ['https://mega.nz/embed/9nVlWBqA#gPXM3k0vsn2KPQu51bfuOUZ_cQ7zHGEnAs0PFEjzUKs', 'Episodio 674', '¡El mentiroso Usoland huye a la desesperada!', ''],
    ['https://mega.nz/embed/F3EkzIQC#kvySSLBydllrN74Fw3UoqxXa6i_MrGFneGL3YCC7CSk', 'Episodio 675', '¡Reunión fatídica! El soldado Kyros y el Rey Riku', ''],
    ['https://mega.nz/embed/krllzZLD#9zt489F2LosfvkTk4sWpGSpHKNUBRIBBowBE0PAITuE', 'Episodio 676', '¡Sugar se desmaya! ¡Los soldados de juguete recuperan sus formas originales!', ''],
    ['https://mega.nz/embed/gmNhCQAI#6XDsLLnBmva4uVtEgqa8ItTnhJeqyNkZqgWmFVAY8G8', 'Episodio 677', '¡La leyenda revive! El ataque a la desesperada de Kyros', ''],
    ['https://mega.nz/embed/snlUUI4Z#sja5BmUw8UI6-llxReXq73ogVwabCu3QJB5S5lm2oXU', 'Episodio 678', '¡La explosión del Puño de Fuego! El poder de la fruta Mera Mera revive', ''],
    ['https://mega.nz/embed/EvUx2BpY#mEz4ehbsJPXEJnT82n-7caH7KlFNqRCbSXp50qEhZxo', 'Episodio 679', '¡Aparece el Sabio! El Jefe de Personal del Ejército Revolucionario, Sabo', ''],
    ['', 'Episodio 680', '¡La trampa de Doflamingo! El plan de exterminación de la Jaula de Pájaros', ''],
    ['https://mega.nz/embed/1vlChAAQ#RRoZy5Sy4UXuDlb8dFp9au893SBlD9A7rur8SW6r2y8', 'Episodio 681', '¡El hombre de los quinientos millones! El objetivo es Usoland', ''],
    ['https://mega.nz/embed/sqs1lTTL#KWrNBeM5uAWVVWVgQID_2xOZ9HJ36IN3yjW_KI-Ncbs', 'Episodio 682', '¡Romper las líneas enemigas! El contraataque de Luffy y Law comienza', ''],
    ['https://mega.nz/embed/l78lzJza#5r7wtRkCAeMNw1NrOVX9z5DPwlJ4UNt9KfOy56Gg5mM', 'Episodio 683', '¡La tierra tiembla! El gigante Dios de la destrucción, Pica', ''],
    ['https://mega.nz/embed/ZjVmxRaR#I3nPuMh-nyNrrOPe4PbbmbOuk5hBDQMZr6VmteRZQyg', 'Episodio 684', '¡Gran reunión de fuerzas! Luffy y el ejército de guerreros brutales', ''],
    ['https://mega.nz/embed/lr8igYTL#fzIumN9-mbn_V57EX4BK9Ot0uzZPi2TkRdLZxOoepwo', 'Episodio 685', '¡Gran avance! El ejército de Luffy contra Pica', ''],
    ['https://mega.nz/embed/kvkiDYxY#dNvxumcrtXQaeSK2vHexJoP7Vds-8Bv0sft4su5-_7I', 'Episodio 686', '¡Confesión impactante! El juramento del alma de Law', ''],
    ['https://mega.nz/embed/w7EXCAiZ#J4XAsMC85oEo2rD3_JLsR30dsfhyv_emPMgFbRpJQDg', 'Episodio 687', '¡Gran choque! El Jefe de Personal Sabo contra el Almirante Fujitora', ''],
    ['https://mega.nz/embed/JilllKKC#3IsmP0J_CrrgqUzfxc1ta1Qgcv6ir4Pfj8-rHFpoPaE', 'Episodio 688', '¡Situación desesperada! Luffy atrapado en la trampa', ''],
    ['https://mega.nz/embed/AykFHDZQ#XnsUGkLsuIfeyYxwvNsvTmzoFgND1roIaxeXw_UoRbM', 'Episodio 689', '¡Gran huida! El rescate milagroso del elefante de goma de Luffy', ''],
    ['https://mega.nz/embed/xvl2jYoA#MwScBHjKz5DOscW4Z3pPmbS0l4MeNtUCFmwc-nTnZCo', 'Episodio 690', '¡Frente unido! El camino hacia la victoria de Luffy', ''],
    ['https://mega.nz/embed/16VSgIiS#kx6zgVx5jchkq4c18riGq16UIgglAAHNP4fcKffuoCw', 'Episodio 691', '¡El segundo samurái! Kanjuro la Lluvia Nocturna aparece', ''],
    ['https://mega.nz/embed/Ay91GZCT#_qhIAWn33SZmVRNQ_mRo07ajKzFzGaoem5nwoJz1_ak', 'Episodio 692', '¡Feroz combate con Pica! El golpe definitivo de Zoro', ''],
    ['https://mega.nz/embed/MmExSAoT#5NKpBANXo5BvrJZpwQ7o2UcC6S2eWVPbF3_UM1K_Wqc', 'Episodio 693', '¡La princesa de los Tontatta! La princesa cautiva Mansherry', ''],
    ['https://mega.nz/embed/UjFRmZ4Y#kT7Rik5IAi51GK98lC6tAApXXLYE18SetdM9fRW8XVU', 'Episodio 694', '¡Invencible! El aterrador ejército de los muñecos cabeza de tuerca', ''],
    ['https://mega.nz/embed/w3FjjD4L#KO7-rhp38e8W4_g7Dbn4KtEysZdvKqE171hVjb1rm1o', 'Episodio 695', '¡Arriesgar la vida! Luffy es la carta del triunfo para la victoria', ''],
    ['https://mega.nz/embed/l3VShQRL#v_I5Wqn30-KUXdpkVT3j_KUxCgcNXhzaXwdnO9lxnBQ', 'Episodio 696', '¡Reunión llena de lágrimas! Rebecca y Kyros', ''],
    ['https://mega.nz/embed/NzFGTZLb#y_FbMihwQwd4Iqzib63mDC3vIv6yPQd_pSMEPATrRfQ', 'Episodio 697', '¡Un disparo mortal! El hombre que salvará a Dressrosa, Sogeking', ''],
    ['https://mega.nz/embed/Zm8VSQBZ#tzbL6caYzKyjovMvV7pljfSPU_qDXAwZbQWmDfwtRIU', 'Episodio 698', '¡La ira estalla! El plan definitivo de Luffy y Law', ''],
    ['https://mega.nz/embed/N2kyRD6K#6rAEW2Vqc4IhD9htONWmGq0BDY4pXvf5xgJV_CpWpjU', 'Episodio 699', '¡La familia noble! La verdadera identidad de Doflamingo', ''],
    ['https://mega.nz/embed/gvVHSTgS#Ad73watYFZMZ4Og4yFRqUgNNH8ybjSTaCf9hQqKhnRE', 'Episodio 700', '¡El poder definitivo! El secreto de la fruta Ope Ope', ''],
    ['https://mega.nz/embed/8vVBVRKT#SZd0gZeZu4coDOGYNSuxUg_oJZHD_G7VJC7qU50Xab0', 'Episodio 701', '¡Recuerdos tristes! Law, el chico de la Ciudad Blanca', ''],
    ['https://mega.nz/embed/NqVVxDaa#7x4Fu9i5ZjfVq2gzdfO_l0qm2TYsjOLoFel5anW9YGU', 'Episodio 702', '¡Un Noble Mundial! El pasado turbulento de Donquixote Corazón', ''],
    ['https://mega.nz/embed/p7lXSYxA#wDIzRICKlDnAv2zPEuJKcxiwKd90OdwvQyVIJbSzf4c', 'Episodio 703', '¡Un camino difícil! El viaje de la vida de Law y Corazón', ''],
    ['https://mega.nz/embed/py9hAboQ#LQQxB09o_lrDOIDZ8V4-zxga9OYB4UvBkQcayTUwyD4', 'Episodio 704', '¡La hora de la verdad! La carrera por la fruta Ope Ope', ''],
    ['https://mega.nz/embed/1msUGBaS#_jy7TfXmR67qSWgl_ZLOHjJki3GHpDidZDGdNlL7HK4', 'Episodio 705', '¡El momento de la resolución! La sonrisa de despedida de Corazón', ''],
    ['https://mega.nz/embed/I6lyFCbB#s_93IsiVgZF-d-_Xfl16tb6S5niV157uv1QKmMjKcyo', 'Episodio 706', '¡Adelante, Law! El combate final del hombre de buen corazón', ''],
    ['https://mega.nz/embed/oz93GbbZ#nIT4ZXjEFq1DTUFHEnmcnn1YEI8np60u8yMfWfY2b_I', 'Episodio 707', '¡Hacia la libertad! El Injection Shot de Law estalla', ''],
    ['https://mega.nz/embed/hvdlkKBD#gQZak0LQI0tiTRn7wszbym8sGABOe2qQs2k4m6U8DZw', 'Episodio 708', '¡Feroz combate! Law contra Doflamingo', ''],
    ['https://mega.nz/embed/VnkVRK6Z#TtqgGRsYrWDYFAIFK17OQEjFb6VtyJ9wei1Furn5nbw', 'Episodio 709', '¡Duelo definitivo en el aire! El orgullo de los guerreros del coliseo', ''],
    ['https://mega.nz/embed/V30mzbIC#1uBE-dPYCdgduYnEgYKbpiJRVzA4sox9EBWG8COkhlY', 'Episodio 710', '¡El combate del amor! El nuevo líder Sai contra Baby 5', ''],
    ['https://mega.nz/embed/J7MR3RBK#miRUjr2jag3DCYSY8YMNUQzWcC6cIx5C7ieQ17t3bTw', 'Episodio 711', '¡El honor de un hombre! El contraataque final de Bellamy', ''],
    ['https://mega.nz/embed/NiFGFAzI#tjbMlTjUeJZ5pEn5SXKztLaAJ5UzvHdHa0bIYMgGBeg', 'Episodio 712', '¡Tempestad de velocidad! El Caballero Blanco contra Hakuba', ''],
    ['https://mega.nz/embed/wjdVgB5Z#eQ3dKQg4ZBxsLA3JZw8jZ5b1XvOMGqVwFO-X_5QZxz0', 'Episodio 713', '¡La fruta Bari Bari! El homenaje de Bartolomeo al dios Luffy', ''],
    ['https://mega.nz/embed/N3d1FJKb#OFoErdGH1-odh86tjmdpZYNYfKJfadNgobNmNgId7B0', 'Episodio 714', '¡La princesa de la curación! Salvar a Mansherry', ''],
    ['https://mega.nz/embed/5iNmgTZA#cEZ4h0asyvcza3PcZvkwDZ3SjhO_EBfLYDdxNFsAi20', 'Episodio 715', '¡Duelo de hombres! El réquiem de amor de Señor Pink', ''],
    ['https://mega.nz/embed/A28GHLhZ#0fbJz1w7Q2ntxHOrlqYdxwM7nfwb0wKTwZMUJTfbvGc', 'Episodio 716', '¡Polvo de estrellas de la muerte! La tormenta de ataques feroces de Diamante', ''],
    ['', 'Episodio 717', '¡Trueno del deseo! El ataque de ira definitivo de Kyros', ''],
    ['https://mega.nz/embed/oqVQlAbK#cAhjdvveMZVAlOboeyOV8poMZQlrPL6Jm_J__wUJVv4', 'Episodio 718', '¡Gran avance por la tierra! El gigante Dios estatua Pica se mueve', ''],
    ['https://mega.nz/embed/RjMFHSZT#qxQ3FbqS19TcXUvBCovCBa2n-HdJesYqX2nbAjZEkv0', 'Episodio 719', '¡Batalla decisiva en el aire! La nueva técnica secreta de Zoro estalla', ''],
    ['https://mega.nz/embed/o6tnXZrD#xenHGlRZMH38bcaHVqaHhsX43m1ikbnakZLb7NkZ8Vg', 'Episodio 720', '¡Adiós Bellamy! El golpe de la despedida del alma', ''],
    ['https://mega.nz/embed/hz1UjRxJ#3fzkdOL8hAZNLx4sh-tZpW17KKsJU3xGtXgRrR5baK4', 'Episodio 721', '¡Law muere! El asalto de ira desbocada de Luffy', ''],
    ['https://mega.nz/embed/An8zkLbL#eGV-cHng0eYdWHL2JMIFnRLdn_Z6G7HrZ_MHe_Vkdk0', 'Episodio 722', '¡La espada de la venganza! El Gamma Knife de Law estalla', ''],
    ['https://mega.nz/embed/NjczWRQI#PFl3XMc-5V5LrzkhUIJARI5j7apWh-nz6xGbMauBlxc', 'Episodio 723', '¡Choque de ambiciones! El choque de voluntades de Luffy y Doflamingo', ''],
    ['https://mega.nz/embed/ZvEnnYhI#IaKS9q3gQ4Z2n-YrdBA7nO6WqL_jxbCQ3gWr6uMHCaA', 'Episodio 724', '¡Imposible de atacar! El secreto del oficial supremo Trebol', ''],
    ['https://mega.nz/embed/52shXYDT#y0yViEl6RwYg1bhQcDfgmZ0c51gOn090cGUsd-eAmeI', 'Episodio 725', '¡La ira estalla! Yo me encargaré de todo', ''],
    ['https://mega.nz/embed/w6twAbaK#R8nge56csLr2bj8SJytf1CByqTwj6zlnSsxCIY6DCGM', 'Episodio 726', '¡Gear Fourth activado! El increíble hombre rebote', ''],
    ['https://mega.nz/embed/IzMiyJaQ#iQPrJnYbcPcBZLRNHFtJhzrCykslVOT4YYWz3jK7pDw', 'Episodio 727', '¡Gran contraataque! El despertar de la fruta de Doflamingo', ''],
    ['https://mega.nz/embed/Vz0X2QbT#xjLPLiL4WNzf9a4-L4TwasvkmKvpqy1xvrgA1xiCn-0', 'Episodio 728', '¡Luffy a tope! El Leo Imperio Bazooka definitivo', ''],
    ['https://mega.nz/embed/Jj9RQI5R#BnZpaLEcihqIQ-Sez42YWOT3oGg_x0HINvZfq3UFYis', 'Episodio 729', '¡Llama del dragón rey! Proteger la vida de Luffy', ''],
    ['https://mega.nz/embed/x30wUKSC#-er5C4oOE55taQfqC1RvApVHixPJSFiSqsqioHVmHiM', 'Episodio 730', '¡Las lágrimas de la curación! El milagro del Reino de Tontatta', ''],
    ['https://mega.nz/embed/VqsmRb5K#iwNb07nsAlRlPMW1UvOJhI6ar-yUGr03UeYHpINRPv8', 'Episodio 731', '¡Hasta el último aliento! Detener la Jaula de Pájaros de la muerte', ''],
    ['https://mega.nz/embed/wmly1RyD#chaagPd1e2GkH52-vyxbnSGVaZsJlSXScAXTaCx_sag', 'Episodio 732', '¡Vida o muerte! Comienza la cuenta atrás para el destino', ''],
    ['https://mega.nz/embed/Fjs23bwR#sExI9cVJMqUs_EV6FFTgDGMeNSi0mHkpfQfUeENdQXE', 'Episodio 733', '¡Golpear el cielo! El King Kong Gun de ira de Luffy', ''],
    ['https://mega.nz/embed/x70R2QpY#_6L4vGWtCxIJdMHyCFbmnUd-wlyaAgyct9Brx8fvrZg', 'Episodio 734', '¡Hacia la libertad! ¡Dressrosa celebra la victoria!', ''],
    ['https://mega.nz/embed/830xUTwI#_WgJXznqGm5K3eOKS-IyCalhLxp-9mx12p_q67cC7AA', 'Episodio 735', '¡Una era sin precedentes! El Almirante Fujitora se mueve', ''],
    ['https://mega.nz/embed/pjEgTJpI#a8x0ZV1dq310MH14RBmW_dESWg0JKE3XlARshHRChVI', 'Episodio 736', '¡El Nuevo Mundo tiembla! La peor generación entra en acción', ''],
    ['https://mega.nz/embed/NqchWIoQ#l27lYNHvRxtaT4LMitTAlxqOaAnKOBt8tLS5bUygusM', 'Episodio 737', '¡El nacimiento de la leyenda! Las aventuras del guerrero revolucionario Sabo', ''],
    ['https://mega.nz/embed/ZyMHnTyL#v1QCnE53D9cAcgDt_QpAO-C9sMnup2YsEwq6JL1J85A', 'Episodio 738', '¡El lazo de los hermanos! La historia de la reunión oculta de Luffy y Sabo', ''],
    ['https://mega.nz/embed/9itHVKiC#i5GbbWxG-jQnQE0uVh2yYmDMY_9sJfTEp7E81NYpaFI', 'Episodio 739', '¡La criatura más fuerte del mundo! El Yonkou Kaido el de las Bestias', ''],
    ['https://mega.nz/embed/omMjFBzD#6DKQkecwou7DhhavSs_r3xzWH7eNgJqC3ejS4NVmFSs', 'Episodio 740', '¡Fujitora se mueve! El asedio total a los Sombrero de Paja', ''],
    ['https://mega.nz/embed/pysFURSA#gS2ruchzU8vH0ueKueHw4OV8-077u3RO7nH3slDspbo', 'Episodio 741', '¡Estado de emergencia! Rebecca es secuestrada', ''],
    ['https://mega.nz/embed/VvtjhTpa#rihnzpkghWVhwUQqdOAHMh4f0EzxFmKLYA4AVrrGQcY', 'Episodio 742', '¡El lazo de padre e hija! Kyros y Rebecca', ''],
    ['https://mega.nz/embed/dnEGRTCZ#Wf5wjWOxkYnQ43rdnuiLlLaGNfG24HVkHZehD4Czgps', 'Episodio 743', '¡El orgullo de un hombre! Choque directo de Luffy contra Fujitora', ''],
    ['https://mega.nz/embed/Nzsg0SLb#6np__Nr92AhA2pJc6ZYzamtwigWJ2qLe62Dk3DUYXt4', 'Episodio 744', '¡Sin escapatoria! La red de persecución implacable del Almirante Fujitora', ''],
    ['https://mega.nz/embed/06lUTDZQ#NRI9ITo50oR4pwznwRzMYnMzotcbdwm2KvYW6pBcCsA', 'Episodio 745', '¡El brindis de los hijos! ¡Se forma la Gran Flota de los Sombrero de Paja!', ''],
    ['https://mega.nz/embed/pv0SxZBR#3OMrgtWaHoZuXpjOoo-BQ6tz1FsB65r01xEZOsW2bYM', 'Episodio 746', '¡Guerra de los más fuertes! Los rebeldes del Nuevo Mundo entran en acción', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason9Episodes = [
    ['https://mega.nz/embed/N2MnhbgT#CYyAKAH0mld7MjPutDXEEZRSDNl8sG0U4zNt7LQRQEo', 'Episodio 747', 'El zorro de plata Foxy aparece de nuevo. La fortaleza de la niebla de plata', ''],
    ['https://mega.nz/embed/Ni1WBIoL#sROe5joFL1TsN7xOT1oRovyB6saF6CuJmy5_qf2bbLo', 'Episodio 748', 'Aventura subterránea. Gran persecución en el tren minero', ''],
    ['https://mega.nz/embed/F3tDWRIa#P0I9evuQrhUWD5wrFuiC719NttMBI_6JgQLbW7vh0Wk', 'Episodio 749', 'Choque de espadas. Zoro contra el asesino de la velocidad de la luz', ''],
    ['https://mega.nz/embed/xn1XhSKD#eq82vzq5pyrFTj0a0MSPQAAn4mSEm7gszRDcdMU88Wo', 'Episodio 750', 'Situación desesperada. El combate ardiente de Luffy', ''],
    ['https://mega.nz/embed/xy8yRDrA#t_WUQK8Dokhv8SUEpjs0xr0_KOVXDb0oAOoijh4dm-A', 'Episodio 751', 'Comienza la aventura en la isla misteriosa. Desembarco en la isla flotante, Zou', ''],
    ['https://mega.nz/embed/FmcklR7Y#u5Xd7sdu9wP7SAJbod6ZzXpgm17BTGcGCfjLK6s6Opg', 'Episodio 752', 'El nuevo Shichibukai. El hijo del pirata legendario aparece', ''],
    ['https://mega.nz/embed/RmElkKQA#Afvg1iEXQkrRm_VY0adIaH_087ZMJodMr_DFCX40yzg', 'Episodio 753', 'Escalada mortal. Gran aventura a lomos del elefante gigante', ''],
    ['https://mega.nz/embed/MzN30JTb#nshk50VvtcTCBf7skV5wXj7scN6WBWFEAqcbQE3kgX0', 'Episodio 754', 'Comienza el combate. Luffy contra la tribu Mink', ''],
    ['https://mega.nz/embed/cuETSBwA#ySg77n2y-ZPmMHBNUPQJXTSn0J8m4iPFP2GoROvgrik', 'Episodio 755', '¡Garchu! Los Sombrero de Paja se reúnen de nuevo', ''],
    ['https://mega.nz/embed/grsyWIwA#PTFgHbjQTZ2Sn_6V0eLtoDESOTvcCvPZ1r51lOW36-g', 'Episodio 756', 'Comienza el contraataque. El plan de movimiento de la tripulación rizada', ''],
    ['https://mega.nz/embed/EnUwhQqY#nVjZqPHTaAT9ViTNZ_Qfu3FG8yFCOfzp7vLjOFscHT4', 'Episodio 757', 'Una amenaza inminente. El día de la destrucción de la tribu Mink', ''],
    ['https://mega.nz/embed/Z6NFiBQZ#oKe2rwJoDE6qxxLmlvIFOVIoFtlxeJLSdujQ0WF2PDc', 'Episodio 758', 'El rey del día. Aparece el duque Inuarashi', ''],
    ['https://mega.nz/embed/UuVUiaJD#1tgYrH3d-ZJqtTpTwjC34xMjkvX9fLx04X4OzecvdE0', 'Episodio 759', 'El rey de la noche. Aparece el jefe Nekomamushi', ''],
    ['https://mega.nz/embed/t3FRnToS#R5CxH9dUNCC8aVi8aMnTEzFEKXeVk7bEOa-0ItvFRTQ', 'Episodio 760', 'La destrucción de la capital. Los piratas de las Bestias al asalto', ''],
    ['https://mega.nz/embed/d3kAFbYS#x4vQZGX0lFlk98GARM7dz7w5VnGMbo1o6-l_SB31JVw', 'Episodio 761', 'Límite de tiempo. El lazo de la tribu Mink y los Sombrero de Paja', ''],
    ['https://mega.nz/embed/kvkQjbTR#8UZRUywCiP8JSIqeYflts5omxJaolQkDHiT1Ts2B6Z0', 'Episodio 762', 'El regreso del canalla. Los asesinos de la Emperatriz Big Mom', ''],
    ['https://mega.nz/embed/gmFWXQIa#pexZT9XXzyh0NWBMY0Stu57OyDVkxrpuIub3Mcb6nrw', 'Episodio 763', 'La verdad tras la desaparición de Sanji. Una invitación impactante', ''],
    ['https://mega.nz/embed/Iy0SnKJQ#hIFjG35k1QzJ-P6ZT8fcoAtKC2bsphqYtVr22svz0uw', 'Episodio 764', 'Para mis amigos. La carta de despedida de Sanji', ''],
    ['https://mega.nz/embed/g2FjTKaa#J7_Me6upAHnKJlCFvkLV3CunzejSxjEaxOx_nH9XB5g', 'Episodio 765', 'Vayamos a ver al jefe Nekomamushi', ''],
    ['https://mega.nz/embed/I2lnAAIT#l64Q29cbQPYgS2-bLlNHlkRQRiHQuPO4V8Mak6yXPvE', 'Episodio 766', 'La decisión de Luffy. ¡Sanji en peligro de deserción!', ''],
    ['https://mega.nz/embed/oisWBCwT#H3CpHS-_hzZoPwMpn8IG41roAuqyU_XsPoxtieCh6ww', 'Episodio 767', 'Una situación explosiva. El perro, el gato y el samurái', ''],
    ['https://mega.nz/embed/UjVjAKxS#cdfX-6K0ggL3cYRdiz5OM5bX1oTVv9bFPkKk4hcsAOs', 'Episodio 768', 'El tercero aparece. El ninja Raizo de la Niebla', ''],
    ['https://mega.nz/embed/5ndVmLRZ#x4FwlHAm7-LlfxIzi8AermrwStD-VmircA10d_VtacY', 'Episodio 769', 'La piedra roja. La guía hacia el One Piece', ''],
    ['https://mega.nz/embed/Z7dglbpD#9ybwFrkAkLbVDFpMEQ0fC5YnWHQ_gw9926wcNnNMrK0', 'Episodio 770', 'El secreto del país de Wano. El clan Kozuki y el Poneglyph', ''],
    ['https://mega.nz/embed/Emc0gJxI#KUDHJeFD2cSKQJoSu7xvMrjBWGYhjnFVrHhDC7QxW68', 'Episodio 771', 'El juramento de dos hombres. Luffy y Kozuki Momonosuke', ''],
    ['https://mega.nz/embed/ty8ljKCL#jJFGbr0wCjcUivAJLoePeC1D0gWkkOYTLHu8yl9uMrM', 'Episodio 772', 'El viaje legendario. El perro, el gato y el Rey de los Piratas', ''],
    ['https://mega.nz/embed/Yq8HmJYI#Lr47gtoTd2vv4WpAS0LLhQ0jipFFT3xWH5UavQWXl5k', 'Episodio 773', 'Pesadilla en el mar del diablo. El plan de destrucción de Jack', ''],
    ['https://mega.nz/embed/4zEnRLgB#g5zlo4esV_TF5vR0qW8dOl-2qfFDRKFPXp2lPkYSRvg', 'Episodio 774', 'Combate defensivo en Zou. ¡El elefante gigante se mueve!', ''],
    ['https://mega.nz/embed/hnM1VApT#gD_sV90REMlwES7iNqiUST0bAWz_gqF-hqHUAaRvPhA', 'Episodio 775', 'Salvar al elefante gigante. La operación de rescate de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/IidXwTbC#Tdxy2T9PrJx36552TsQJEvYdbTwILe_ICBuTHDw8k-g', 'Episodio 776', 'Adiós a Zou. Salida hacia el rescate de Sanji', ''],
    ['https://mega.nz/embed/cmEVATDL#uxI4fHZU0hayNoO9cAl69o8bCEiem2WQuIUxWOaol8k', 'Episodio 777', 'Hacia el Reverie. La princesa Vivi y la princesa Shirahoshi', ''],
    ['https://mega.nz/embed/5uMmiaIK#g0JsZgbJkEnt8mUdTl6b-eJU4zbb1sczfWUS0vi-APw', 'Episodio 778', 'Hacia el Reverie. Rebecca y el Reino de Sakura', ''],
    ['https://mega.nz/embed/MjFlgRCT#m63BE7LoKLdCfp6hOj5bxI_bp9jBZSP3pzps578RMQw', 'Episodio 779', 'Kaido regresa de nuevo. La peor generación amenazada', ''],
    ['https://mega.nz/embed/4jNhTS6I#rljHE_Jc6UileHeWEaLoHMHF0107koap9h0pogktxko', 'Episodio 780', 'Frente de hambre en la Marina. ¡Luffy infiltrado!', ''],
    ['https://mega.nz/embed/0n9QFRBb#SUknw7WX89snK7BV7X-jCIFV2ZkayI9bDJCW4QOz22I', 'Episodio 781', 'Los tres cabezotas de la Marina. Gran persecución de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/tr80XIrb#Tpn0xUIkEgeitZZSxX9GpVtHogrNn9qsKTay-FfNor4', 'Episodio 782', 'El puño del diablo. Duelo definitivo: Luffy contra Grant', ''],
    ['https://mega.nz/embed/1yFT1YgK#afJmB3m0VeY0ftBjwQq8QIq8F34HY4YmWdshaigAAbw', 'Episodio 783', 'Sanji regresa a casa. Hacia el territorio de Big Mom', ''],
    ['https://mega.nz/embed/hrEH3aCB#mBjivM7bPTOtcMvER-1Btqfu_x13ZvpirTOWMYTJ8Q8', 'Episodio 784', 'El veneno estalla. Reiju y Sanji', ''],
    ['https://mega.nz/embed/kyECQACJ#ulMBw29VUVZVo0ojNLUjpVGK6Tck0AKRjui2Awt2AHw', 'Episodio 785', 'El mar de los dulces. Totto Land y la Emperatriz Big Mom', ''],
    ['https://mega.nz/embed/4q0UkI6A#o9tbRKfZelr-5Tz2gHm8qyue_n17kJhZ-EvZPD2EmGM', 'Episodio 786', 'Totto Land. Aparece uno de los oficiales supremos, Sanji', ''],
    ['https://mega.nz/embed/knEFwZAZ#6A5EJBVNEp4oh3AENgidYLnp5j35FGzAmSHJSjHVsQY', 'Episodio 787', 'La hija de la Emperatriz. Pudding la prometida de Sanji', ''],
    ['https://mega.nz/embed/pv8wCSAQ#lrKXWl4DYRJVCVl_-daQhiXJym_bFuUdwIxUB8GWog4', 'Episodio 788', 'Gran ataque de ira. Big Mom hambrienta', ''],
    ['https://mega.nz/embed/UiM0gRzR#GJytQ9_obUPs7PXRrzNDbB4NSwb5hL39jUQmzzBZkmM', 'Episodio 789', '¿El fin de la vida? El precio de la longevidad de Jinbe', ''],
    ['https://mega.nz/embed/o3s3kRDY#ckrHKYqbSoAeYKshaT6I6AnR4RDlhkx-D8AYoqPTlrA', 'Episodio 790', 'El castillo de la Emperatriz. Llegada a Whole Cake Island', ''],
    ['https://mega.nz/embed/J6lgACoY#-EFHYumLW7op5iIBfGPISxx5ebtv19fqNlyTUWJ-ZFs', 'Episodio 791', 'El bosque de los dulces misterioso. Luffy contra Luffy', ''],
    ['https://mega.nz/embed/sqt3wJjY#TAN_zvz9Ul0_B8Xk-Zy9NWw1yJvmb6RMqEPsRakaVRk', 'Episodio 792', 'El asesino de Big Mom. El bosque de la tentación', ''],
    ['https://mega.nz/embed/N71BQYaC#vkEBMBqcIqjJzRufEsASAaWx99Jogwkbzk0JxmI8wC4', 'Episodio 793', 'El reino flotante en el mar. El Rey de Germa, Judge', ''],
    ['https://mega.nz/embed/B6FHiADR#5-FCQBumAooSPr_AMvvfWnWRko5sEckeDqI5As4W6QQ', 'Episodio 794', 'Combate de padre e hijo. Judge contra Sanji', ''],
    ['https://mega.nz/embed/kv1gGCAK#Ax74csGqRpx1u5SgoAi4c6PHgvW1AGjYOI28lrby2cQ', 'Episodio 795', 'Gran ambición. Big Mom y Caesar Clown', ''],
    ['https://mega.nz/embed/FqNCgCRQ#mbwP87iaKy8n0cYukhfSnn213WqRRLXpH85bosBUrcw', 'Episodio 796', 'El Reino de las Almas. El misterioso poder de Big Mom', ''],
    ['https://mega.nz/embed/cr9RVKgD#d59dekwY2I7pua5yxPVCEtMIiyKIH_OsR0gOc5lszu4', 'Episodio 797', 'Oficial supremo. Aparece Cracker el de las mil manos', ''],
    ['https://mega.nz/embed/wyVnWKQT#MInCCYFQL0AksMuAaXYRRpxwrAfNYJPhFuJagNWdg-Y', 'Episodio 798', 'Enemigo de ochocientos millones. Luffy contra Cracker', ''],
    ['https://mega.nz/embed/Ry0ABDRI#qdaDKbNTfFOZNZdNFi4pxWfvFFb-NilaUNOjGMDkuo8', 'Episodio 799', 'Feroz combate a tope. Gear Fourth contra la habilidad Bisu Bisu', ''],
    ['https://mega.nz/embed/I3shQaLA#VVMYs_3-La_K9O8vXMdU34Dc0ahbsTB6PUtKs9UZLSU', 'Episodio 800', 'El uno y el dos se reúnen. La familia Vinsmoke', ''],
    ['https://mega.nz/embed/4nty1YpZ#9wQ2VyUnRbFYpq8HrbHTXDFASqSmOScj0XCM6hhntf4', 'Episodio 801', 'La vida del benefactor. Sanji y el maestro Zeff', ''],
    ['https://mega.nz/embed/pudWFbjb#Lcpo4D1KQJBVOyUisCEhWqm9MYDtrHU7a-0XhLudJ4A', 'Episodio 802', 'La ira de Sanji. El secreto del Germa 66', ''],
    ['https://mega.nz/embed/w6UgiarY#YKjTaVh2xFZkDvZ30vVuD8ViTd24M6lw7JhCF5X0ZaM', 'Episodio 803', 'El pasado descartado. Vinsmoke Sanji', ''],
    ['https://mega.nz/embed/x28WXQhL#9JsAaCOAlIK5Q5OCGrHj2wlRbhU0fRjl-Y1dptFJzZA', 'Episodio 804', 'Hacia el East Blue. La partida decidida de Sanji', ''],
    ['https://mega.nz/embed/AmVkUDwB#PKuFErNrp2tMXExIqfyYi6HG7dgzIF022nye_-damVA', 'Episodio 805', 'Combate al límite. Luffy y las galletas infinitas', ''],
    ['https://mega.nz/embed/x38kRZJK#zsWZtY70Nke-ATWyxyFgQ8SrFnVMBmoVPrTQbwrUeFg', 'Episodio 806', 'El poder de la saciedad. El nuevo Gear Fourth, Tankman', ''],
    ['https://mega.nz/embed/liUFlAzR#ui6KZ-JEmOUma4rPyS0TT7aIUGKgoyIjHqKFpXhvHB0', 'Episodio 807', 'Feroz duelo trágico. Luffy contra Sanji (Parte 1)', ''],
    ['https://mega.nz/embed/Nm0U1AbQ#Uxi-VhftwMK-lViCvNQa6iWO4inQZkUg3TbMG2CHGcU', 'Episodio 808', 'Feroz duelo trágico. Luffy contra Sanji (Parte 2)', ''],
    ['https://mega.nz/embed/Zm1ECD5S#mSVVOfzs-RitruavJYDIYt7K8uXf7aRVtJu9QwsGuu8', 'Episodio 809', 'Tormenta de ira. El ejército furioso al asalto', ''],
    ['https://mega.nz/embed/83MxiJCS#c2oHuius0Na6MNkUCF0RNP0s_C-M6DYKq02e7Wd1MyM', 'Episodio 810', 'El fin de la espera. Luffy capturado en el territorio enemigo', ''],
    ['https://mega.nz/embed/o3FxGCqR#D9MQS5FbYdmp-jwFgkz_LwUtTpzg0aKCGhBqW90z_6c', 'Episodio 811', 'Operación de infiltración en el castillo. Robar el Road Poneglyph', ''],
    ['https://mega.nz/embed/Q31XERYD#MXqPV4eHanj62Ro-L-0MouSlpycTt98YDKvv7TULLpM', 'Episodio 812', 'Confrontación con la Emperatriz. Brook contra Big Mom', ''],
    ['https://mega.nz/embed/4ykFECBK#SSgx4MDFQdYVFm90G5XmpzxddRmkMrmugwYqgysBx0A', 'Episodio 813', 'El grito del alma. El plan de rescate de Luffy y Brook comienza', ''],
    ['https://mega.nz/embed/p28wRKST#GrrJEQOhoLycb1_Qr4tWlRi7-UETDB50M9ry5YpYxeI', 'Episodio 814', 'El lamento de las lágrimas de Pudding. La verdad oculta', ''],
    ['https://mega.nz/embed/szMwTZiY#IHMPwcU6MmMFOZwNUbjaYsPKNHwI5_K-G2z3MXXz-QQ', 'Episodio 815', 'El código de caballería de un hombre. Brook contra los peones de ajedrez', ''],
    ['https://mega.nz/embed/RrdiiaLK#w6ONCS_0WLq8hqJV-1vrJtbvcEYI2tLxBu15ZHFVaQQ', 'Episodio 816', 'El destino del ojo izquierdo. Pedro contra el barón Tamago', ''],
    ['https://mega.nz/embed/03EDFJ7a#jetZe460cNiFLnjYPWmUq4RzdsKkx0inT9Lzhpcf2kE', 'Episodio 817', 'Humo de cigarrillo. La verdad sobre la boda de Sanji', ''],
    ['https://mega.nz/embed/Yy1zVRLL#UvZzesIT_mbsO70QY44cENrBmdrToDBQiN-yYf3zV_Y', 'Episodio 818', 'El alma indomable. Brook contra el Homie gigante', ''],
    ['https://mega.nz/embed/V68CgCJI#tDQxnLEdtLWswv7s0msmXxEkd95wn2OKdw5N6cSjmSI', 'Episodio 819', 'El deseo de una madre. El secreto del Germa', ''],
    ['https://mega.nz/embed/1itWAZzZ#o7lafoHl0FoCfXWReUie51nUSEi4wcYdf6hyDG-NfNU', 'Episodio 820', 'Correr hacia Sanji. El gran avance de Luffy', ''],
    ['https://mega.nz/embed/kmMT0TZD#THRKSgZLiBVD499vl5KZOUxxSE7f7ZIggX9PcWgZqwg', 'Episodio 821', 'Gran caos en el palacio. Luffy hacia el lugar acordado', ''],
    ['https://mega.nz/embed/IjVDBDhI#-9SAIe7K8_Dp3GVCcUlAtCQwbX-nHrt8cwgza5Bz2wA', 'Episodio 822', 'La decisión de la despedida. Sanji y el almuerzo de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/En8gSLAB#-GloelmUQbR_y0UQtNeuruG-Uv-3QBwsx_fUV6WpHps', 'Episodio 823', 'La Emperatriz se gira en su cama. El plan de escape de la prisión de libros', ''],
    ['https://mega.nz/embed/h2FSjKxb#e2-cuDu771wXSCoFd3H03tEljwP-uMyP2yQkD23Bln4', 'Episodio 824', 'El lugar acordado. Luffy al límite de sus fuerzas', ''],
    ['https://mega.nz/embed/RqFGCQiI#YWobDKwS_d1SP3tTERlHqPUbl_wv8su84-02S5Pp0UU', 'Episodio 825', 'Mentiroso. Luffy y Sanji se reúnen de nuevo', ''],
    ['https://mega.nz/embed/c3sEQTSZ#Taddw1oiR4NhgxStl9waifonxeOrlBB-zEP4s9MlBMw', 'Episodio 826', 'Sanji regresa. Derribar la fiesta del té de pesadilla', ''],
    ['https://mega.nz/embed/pitShZAa#1IdjPDXeupjCbO_KqeLaKBvDAg4q1CAm2ucHNb59t9g', 'Episodio 827', 'Reunión secreta. Luffy contra los piratas de Fire Tank', ''],
    ['https://mega.nz/embed/RrNjjC5b#2Jb_TovyRtU_U4jRcCWjBrTXSwpEwF_1aWbnRPUWTrU', 'Episodio 828', 'El pacto mortal. Las fuerzas aliadas de Luffy y Capone Bege', ''],
    ['https://mega.nz/embed/tu9kGI6I#rBJVSRj8cw5eU84s7BTut3jr0LiwWOom8ZUfUqVA1mc', 'Episodio 829', 'El plan secreto se pone en marcha. La víspera de la fiesta del té de la boda', ''],
    ['https://mega.nz/embed/kmtRBLSK#m6r2VLfcFuOWV_op3L0YOnV71upoCWq1qZHs_EXgAjk', 'Episodio 830', 'La familia se reúne. Comienza la fiesta del té del infierno', ''],
    ['https://mega.nz/embed/8yMmXJgB#386gkCbJ0yQxLZ04K7Y8oJ0a9iWrW3iZ0Mzw6gbc-AQ', 'Episodio 831', 'La novia falsa. El plan de destrucción del pastel de bodas', ''],
    ['https://mega.nz/embed/hrsSTSyC#aWuCejkFng0Kub4ATXIgrVNGdf2qk1yyiX1XbZ9482g', 'Episodio 832', 'Beso mortal. Comienza el plan de asesinato de la Emperatriz', ''],
    ['https://mega.nz/embed/tvd3VTqZ#zn0URoeBzu4NX3bI1zPT6jgbzk_oOwWn_M6HyDTxI6I', 'Episodio 833', 'Ofrenda de la copa de sake. El honor del caballero del mar Jinbe', ''],
    ['https://mega.nz/embed/F3ExUZ7R#vx3eKWAra6aYg4odt5U9RbjZdE78WmRsWnZG6cuJ_dI', 'Episodio 834', '¿El plan fracasa? Los piratas de Big Mom contraatacan', ''],
    ['https://mega.nz/embed/Y21ghAwK#R8YJqT0rKt1ygTqWOXcJWficXmZz0hJU5aFd8j2X2a4', 'Episodio 835', 'Corre, Sanji. SOS Germa 66', ''],
    ['https://mega.nz/embed/Jn8ghIBR#5tttwVoAwLchOa-M7M2tD5vEL6X42j5dyL7s287K7ZM', 'Episodio 836', 'El misterio de Big Mom. La isla de los gigantes, Elbaf', ''],
    ['https://mega.nz/embed/J6tkmAAT#fx0Sabwg19heqN90iFfGTncHduD_Rp9dlXBtqQX8l5w', 'Episodio 837', 'El nacimiento de la Emperatriz. El día en que Carmel desapareció', ''],
    ['https://mega.nz/embed/8vcWzR6I#B9Y-TmNHe-gvzlmtrNcaJAgWtQm2K-OOr0iIMap5F-Y', 'Episodio 838', 'El veneno estalla. El plan de asesinato de Big Mom', ''],
    ['https://mega.nz/embed/xiMiyKpA#zJZMj0WcE8J6LtcBHjpfuuy1FTptoiSsirnXY8j77Ow', 'Episodio 839', 'El ejército del mal. Transformación del Germa 66', ''],
    ['https://mega.nz/embed/8qsnTCxJ#TZbaDaMhDiMSqp-pgsjXHHfM2pwbpZlhubf-Dab_MVk', 'Episodio 840', 'Cortar el lazo del padre. Sanji y Judge', ''],
    ['https://mega.nz/embed/gi0hFbCQ#__bk750GqIOMCqXU8Th92Y0g6K_6eQpBpd0W7BQ3Gf4', 'Episodio 841', 'Huida de la fiesta del té. Luffy contra Big Mom', ''],
    ['https://mega.nz/embed/I7dm1YoS#cvU0G4TYqIrvCQWiNCz76im5NPY2UV_WpMyMD22hP88', 'Episodio 842', 'Comienza la ejecución. Las fuerzas aliadas aniquiladas', ''],
    ['https://mega.nz/embed/gmFDUTwD#s5kDwqseK_edTRcum7i14hUPMFIqua4E3fMNNZ-fUyw', 'Episodio 843', 'El castillo colapsa. Comienza la gran huida de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/UukkGTza#rcYR73wHEH05fXl_VeugqBOxUFwfY0KcUWfUCX-vZws', 'Episodio 844', 'La lanza de Elbaf. Big Mom vuela por el cielo en persecución', ''],
    ['https://mega.nz/embed/AidRUD4L#-izs0oCtGpYq11qYTmOLI8NpPuLxZ5dgl912txmjVEU', 'Episodio 845', 'La determinación de Pudding. El bosque de la tentación en llamas', ''],
    ['https://mega.nz/embed/5q0xgbgb#3xBgQjaw_XZRj9ZxKsMY1EPDrR76FHDrpTB3NVSADk0', 'Episodio 846', 'El contraataque del trueno. Nami y el Homie Zeus', ''],
    ['https://mega.nz/embed/1ul1UarC#Yjp5WBulW2UDjhoAMozua9xYiO_ihHRxKe-5e-opSq8', 'Episodio 847', 'Reunión casual. Sanji y la enamorada Pudding', ''],
    ['https://mega.nz/embed/QyUgEbra#GGAjmfoqmfxXB2xWlFnHCw6DZoQEI6EWTf4VPL-uOu4', 'Episodio 848', 'Proteger el Sunny. El combate a muerte de Chopper y Brook', ''],
    ['https://mega.nz/embed/pntSkS6b#_JBibkKzp08fusHFzrE4-4S4qp9v-ZI6z7ExUwLnPpE', 'Episodio 849', 'Antes del amanecer. Pedro, el líder de los guardianes', ''],
    ['https://mega.nz/embed/YzVC0ART#Fug8JbEwU_CjbNJnlPjolBkwubDTLFPUGdxw-t5DSQw', 'Episodio 850', 'Regresaré. La partida a la desesperada de Luffy', ''],
    ['https://mega.nz/embed/EzVhxBrA#hRE0TEcNWLO_mGCmbCV-Ga-b0cigGJ9KBaYr59zyz_o', 'Episodio 851', 'El hombre de los mil millones. El comandante dulce Katakuri', ''],
    ['https://mega.nz/embed/BzdxkArJ#repJBWqxP7jVc__Ahf-rX06MoRA8krgPEjv7tz0_aww', 'Episodio 852', 'Comienza el combate. Luffy contra Katakuri', ''],
    ['https://mega.nz/embed/YrMBTZLC#uLVRa8WVGrO6893-RslnLRiswTfzgdQCNEEUZpuB-m0', 'Episodio 853', 'El Green Room. El timonel invencible Jinbe', ''],
    ['https://mega.nz/embed/cjcmxJSA#6DXgAjLsB2xo9p3nw3iGPH5bv1WbnBFZ4kwaKsd9NAM', 'Episodio 854', 'La amenaza de la lanza de tierra. El combate en el mundo de los espejos', ''],
    ['https://mega.nz/embed/8jcDhLpT#RVX__qZK9Nfnp8uBZXwwfKGcU8zLvDVM1uvT7gGD3pA', 'Episodio 855', '¿El fin del fiero combate? La ira silenciosa de Katakuri', ''],
    ['https://mega.nz/embed/EiEUlZbA#Qyy_8PLiLn0xpGcTOhDl-_HVYNbKC5AWR6K6R_NolVg', 'Episodio 856', 'El secreto prohibido. La merienda de Katakuri', ''],
    ['https://mega.nz/embed/tntSkDbT#0hV2hZHT_ZUYMcygK4So3136YkmgZV8jjYx8PkxTMgc', 'Episodio 857', 'El contraataque de Luffy. El punto débil de Katakuri revelado', ''],
    ['https://mega.nz/embed/ci9C1L5K#1QFUUMH73Xm40QvobX_gyhj5pQtRXwyUgPiK1W6GcwM', 'Episodio 858', 'Situación crítica otra vez. Gear Fourth contra Mochi Mochi', ''],
    ['https://mega.nz/embed/trNSRYoI#hVRpHcUPFu1BC7G9nacZ2VUW0yHZVmmMDD_JcWN0Qtw', 'Episodio 859', 'Chiffon la rebelde. La operación de transporte del pastel de bodas', ''],
    ['https://mega.nz/embed/EnMXDbZA#DgATx55v5lQ4UMl0nXb8H6-tZsjQqvD3xilHCxo_8-E', 'Episodio 860', 'El estilo de vida de un hombre. La decisión de los capitanes Luffy y Bege', ''],
    ['https://mega.nz/embed/Uq0nmC4T#2ovMFHbgPZz3l6uhzQzlq7Kvp9qP2k6U-ONL4Jq3PTs', 'Episodio 861', '¿El pastel se hunde? La persecución de Bege y Sanji', ''],
    ['https://mega.nz/embed/NqtDnJ7K#GXiODNf4xCCVFrNSEBerd0pEC8i-YV6e124fCtWaLKk', 'Episodio 862', 'Sulong. La gran transformación mística de Carrot', ''],
    ['https://mega.nz/embed/FqU1FRzI#KKxEpEnDkO6nwbJMRFky5ZQ-0YMT7gtgzGNKihD8ZrM', 'Episodio 863', 'Abriéndose paso. La gran batalla naval de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/Z2k0VQbK#UHXhIbUaxr48k5SSvacxsIAbKJJ2UtMsWdeVVS9t42Y', 'Episodio 864', 'Choque directo. El Yonkou contra los Sombrero de Paja', ''],
    ['https://mega.nz/embed/AqsjGDiT#AGug5SItkt7NIUl-fOky_EHoAjDe9OF31LL3W_MOLKg', 'Episodio 865', 'Las enseñanzas del Rey Oscuro. El combate con Katakuri se intensifica', ''],
    ['https://mega.nz/embed/hiNkmI7R#7OGqR5GwJfk5oyp14aM9i2JtTaGAJBnjrRwd56PYb8U', 'Episodio 866', 'Sanji regresa. Detener el gran ataque de ira de Big Mom', ''],
    ['https://mega.nz/embed/l6MhTKpC#9a3dlapwruEqamrUNCHVVA8p_RrtJQ9eCvmcqnvvRiI', 'Episodio 867', 'Al acecho en la oscuridad. El asesino que ataca a Luffy', ''],
    ['https://mega.nz/embed/9jEgGJ4K#6-aTsKWd96HD88rPaKBBea_nQeAESNoXd6p-Wiq7Xzk', 'Episodio 868', 'La determinación de un hombre. El gran duelo limpio de Katakuri', ''],
    ['https://mega.nz/embed/pnt2yTzb#Qc_vF1Rm2CYCslXP2ElZa8DWqBAxt_s-2IGxSsgJDqc', 'Episodio 869', 'Despertar. El nivel de ambición que supera los límites', ''],
    ['https://mega.nz/embed/Qu9zkR5b#d6nrINVHlog-dtqxR-WvTtu_bOII3XS9xLY7XlDQYMk', 'Episodio 870', 'El golpe de la velocidad de la luz. El nuevo Gear Fourth, Snakeman', ''],
    ['https://mega.nz/embed/g39ECIiD#QummQVGWVSHDKpmtB85032kWY7D69mTy2F4GNo5OwbI', 'Episodio 871', 'Desenlace final. Luffy contra Katakuri', ''],
    ['https://mega.nz/embed/En1DSDTZ#Xc3PbKqdMOC-y_TcxKFCEa36AV3Zjhp2D3cPFUT48KY', 'Episodio 872', 'Situación desesperada. El cerco total a Luffy completado', ''],
    ['https://mega.nz/embed/l2FhWDTB#FIA6cK6ntzIgyKWKJKXq5SsAK1hgd1D_sDNUqN2JysE', 'Episodio 873', 'Huida del infierno. Germa 66 entra en acción', ''],
    ['https://mega.nz/embed/UnMQWDLQ#EdpAy3Ga-ZzULu9bdYnbWucmNZbJvnWISSCPUOt0Zt4', 'Episodio 874', 'La última esperanza. Los Piratas del Sol aparecen', ''],
    ['https://mega.nz/embed/N3kBlIoC#MTCafxEsUm1Tk8nXGatsbQWK597EGmD8A2kW3adMN6w', 'Episodio 875', 'El sabor cautivador. El pastel de la felicidad de Sanji', ''],
    ['https://mega.nz/embed/li1lzCra#TOlmJxkQA7hqGDBKBkCIPZH2eR2DNVq79VL6QcTuKtI', 'Episodio 876', 'El caballero de la justicia y el mar. Jinbe al rescate', ''],
    ['https://mega.nz/embed/cvEgxK7S#J_EjHstwVcO4x1l2_4f36_6IUAFQmlZtxrPeT0UV9Fc', 'Episodio 877', 'El tiempo del adiós. El último deseo de Pudding', ''],
    ['https://mega.nz/embed/l7dEBQIY#4JWSRm31KlL9Jv6d649BbefVOz_fbEfpxuJXbR740BE', 'Episodio 878', 'El mundo conmocionado. El quinto Emperador aparece', ''],
    ['https://mega.nz/embed/VzNVlJoZ#zYQw9KC59dGjSP_qM5bkQPftT-6iF2zBmRoy2I3XCkQ', 'Episodio 879', 'Hacia el Reverie. Reunión de los amigos de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/N6lRwADS#tEf_qAgl8AdR5elc6T0dilaeDul6fk9e3NiQFVmsMjU', 'Episodio 880', 'Sabo se mueve. Aparecen los comandantes del Ejército Revolucionario', ''],
    ['https://mega.nz/embed/Yrl3gZjS#5z3XmDV7nJmoKWoA5g4gq0zbzrOJks1RZ-YnDiT62Ks', 'Episodio 881', 'El Almirante en Jefe Sakazuki se mueve. El fiero complot del Reverie', ''],
    ['https://mega.nz/embed/tmNFyDCR#QHxDHdcexcgz4PSX5vL5Hh4jZrA_vm-IOgtdEAikpZ4', 'Episodio 882', 'La guerra de la cumbre revive. La voluntad heredada del Rey de los Piratas', ''],
    ['https://mega.nz/embed/4ulgiCoS#-R6Uqax7tMHVmizoPkhZX6__9BvEGu-id2rdftcmQrA', 'Episodio 883', 'El sueño de la princesa Shirahoshi. Conectar con el sol', ''],
    ['https://mega.nz/embed/Br9DyZoB#b-zVuU69xIEKuAiQ4Wl17S0KPXeb61-qoVhtBAA5Pi4', 'Episodio 884', 'Quiero volver a verlo. Los recuerdos de Luffy y Vivi', ''],
    ['https://mega.nz/embed/luNh2Qib#VxQI7I6Wy7RNgcKBg3mskEgrgGV5I6ZvTVATPXyNJsI', 'Episodio 885', 'La oscuridad del templo sagrado. El misterioso sombrero de paja gigante', ''],
    ['https://mega.nz/embed/x71zAYJR#_Hb-RZ5A65TKMwjKyB9kdLH_r9xVLSV3e7VEH_JYi0Q', 'Episodio 886', 'El alboroto del palacio sagrado. La princesa Shirahoshi amenazada', ''],
    ['https://mega.nz/embed/o2liyCSR#7sJhk0yB_ojRa5ZOokn-IOf0HoiG5WIgV956XK4GCM0', 'Episodio 887', 'Situación explosiva. Dos Yonkou tras Luffy', ''],
    ['https://mega.nz/embed/hj0wjYoa#8fX5kUfohZe_bNUbcQ-8B59xLKPmOD2O4RQwCMSYrUo', 'Episodio 888', 'Sabo enfurecido. La tragedia del oficial del Ejército Revolucionario Kuma', ''],
    ['https://mega.nz/embed/QmFnHb4I#pTr2RZMkqg8zx9Swa6jAmjpSLNWUg6XSvmkMPaR-OzI', 'Episodio 889', 'Finalmente comienza. El gran Reverie de la conspiración', ''],
    ['https://mega.nz/embed/l3kUUbYB#eUBKRHY9H1rmPWPKbLML9GLPm-vG5glwBWm1vE-m_bs', 'Episodio 890', 'Marco. El guardián del último recuerdo de Barbablanca', ''],
    ['https://mega.nz/embed/pnkwzZQB#VZf3rVbeX7o3DSsJhRi0MbOqo_gTvAwJJLM3Wxh5U8E', 'Episodio 891', 'Escalando la cascada. Gran aventura en el mar del país de Wano', ''],
    ['https://mega.nz/embed/czlXyLgA#JGKM3Cqjafvjl-0ho0XZYw2-4xYAXDGqt5tJ8rGgNAI', 'Episodio 892', 'El país de Wano. Hacia la tierra de los cerezos en flor', ''],
    ['https://mega.nz/embed/4vdBGapK#vujsKcIy5Ci3jduS0h0moanwEyZiJ_NeQAEIS4PfCww', 'Episodio 893', 'Aparece Otama. Luffy contra el ejército de Kaido', ''],
    ['https://mega.nz/embed/Bm90BZrQ#P6BNc5pUrc9mDO_ohT8SSjy3L8_ovub7ucnzsgNnL2o', 'Episodio 894', 'Volveré. La leyenda de Ace en el país de Wano', ''],
    ['https://mega.nz/embed/d2sD3ATB#icR79Q3pS1j64PKZWe_NgaOn7HtsDZcllUBMyugmiSY', 'Episodio 895', 'Especial de la película. El cazador de recompensas más fuerte, Cidre', ''],
    ['https://mega.nz/embed/M2kEwIzZ#CO1jvutO6VHhQwrEwmh7RO3TsIjKrG9qUdK7b2BdkSU', 'Episodio 896', 'Especial de la película. ¡Duelo definitivo! Luffy contra Cidre', ''],
    ['https://mega.nz/embed/5ykyGAYT#PCFRX6GY80M53TpvlpC6_q0hEbG9VAtvZLHZ_Q5pT0Q', 'Episodio 897', 'Salvar a Otama. El viaje por el desierto del país de Wano', ''],
    ['https://mega.nz/embed/gmcwQboQ#NNw5bfrgZe5IMi6CRNByRvqcleJS4iGmrmqx6bUkSQw', 'Episodio 898', 'El oficial supremo. Aparece Hawkins el Mago', ''],
    ['https://mega.nz/embed/Vm0llAoC#c9l88Nxf8vU2pXi0wO3ACIq_3axMrjViwWPFDBNhLRg', 'Episodio 899', 'La derrota es inevitable. El fiero asalto del Straw Man', ''],
    ['https://mega.nz/embed/cvVHySIC#wVAM-_mKfhqRWvAPDziCKDJS9qYHMLVbM-z8foJ-6jU', 'Episodio 900', 'El gran día. El té de la curación de Tsuru', ''],
    ['https://mega.nz/embed/4P9BVZxB#cBHn8-RPHlsA65BlhKy7b3B_W_lFdl6gNPh2_5njKQ4', 'Episodio 901', 'Irrupción en el territorio enemigo. La ciudad de Bakura', ''],
    ['https://mega.nz/embed/0XN3EawS#7n70NpPIuliqz9RbmthfkH_5wXPOXcCIRJXKVlfMnIo', 'Episodio 902', 'Choque en el coliseo de sumo. El gran Yokozuna contra Urashima', ''],
    ['https://mega.nz/embed/Jetg0aiQ#4gSgs_SVzN125hV0dR3AmshsV3GTVGCcAKQmYjoCArA', 'Episodio 903', 'Combate de sumo definitivo. Luffy contra el Yokozuna', ''],
    ['https://mega.nz/embed/RCVVVTaQ#vjk1PlwXCa-d0IKrBiiuC7Cc6eFv0Qe8sKo8nrVsBRw', 'Episodio 904', 'La ira de Luffy. Salvar a Otama de las garras del enemigo', ''],
    ['https://mega.nz/embed/gOs3VLKZ#z1SfiD7JRC1CJNk0kJR3atXpRCKBR3DzihC_XeBpztg', 'Episodio 905', 'Recuperar a Otama. Feroz combate con Holdem', ''],
    ['https://mega.nz/embed/gTsg1RxB#vsybIhb2H6l07WGiX97nI6hDEO4pfd3cEPIBXzkhFvk', 'Episodio 906', 'Duelo de magos. Zoro contra Hawkins', ''],
    ['https://mega.nz/embed/tHtXRAqJ#JlHmeD7UP6kfqqfwrMEeD4bASiymND0WaLIx4BDTyGU', 'Episodio 907', 'Romance Dawn. El amanecer de la gran aventura de Luffy', ''],
    ['https://mega.nz/embed/wOEgzZxS#Xwza7M_SE1SnGNE9IC-sgDRkNsAUGn-Qdc1DCKvLgJ0', 'Episodio 908', 'La llegada del barco de los tesoros. Usoland reparte felicidad', ''],
    ['https://mega.nz/embed/QHFUyYRB#iYqNqO-TR5-O0wPdM1hCHun8-xwFTsuOdNrENux5SKY', 'Episodio 909', 'Ruinas misteriosas. Reunión en el castillo de Oden', ''],
    ['https://mega.nz/embed/UjtXnAqY#92aP8gUJZxz3rhD-njg0zDcNLh0erUpcrpwj5743VV8', 'Episodio 910', 'El samurái legendario. El hombre que habla de misterios, Oden', ''],
    ['https://mega.nz/embed/MvlxmaCA#nfcdktFPo27hNPv1wIfKYD8ceW1mRk94woTiBa9MCiE', 'Episodio 911', 'Derribar al Yonkou. Comienza la operación secreta', ''],
    ['https://mega.nz/embed/E2sAXQxB#r-ZjEwL00oKb0Ebtj39yT50V_0BoGVlAr5CZPnq7aEs', 'Episodio 912', 'El hombre más fuerte del mundo. El comandante supremo Kaido', ''],
    ['https://mega.nz/embed/9mECTSAY#39zF9HfMx3K0Vqlab65Or2RgS7hXE-htGW5d9P95BJk', 'Episodio 913', 'Destrucción total. El rugido del dragón divino Kaido', ''],
    ['https://mega.nz/embed/lmkAjLSC#YEi4yrUj9QHx9VMjZraf48lqYxx5fNZLPN0ki5gJHq8', 'Episodio 914', 'Choque directo. El golpe de ira de Luffy contra Kaido', ''],
    ['https://mega.nz/embed/sylwiJaK#BSgb1WPN1dgOsfPBjSsem6oWtTGVCSXyWkPCORN2964', 'Episodio 915', 'Destrucción destructiva. El Raimei Hakke definitivo de Kaido', ''],
    ['https://mega.nz/embed/Vz1kkQTD#2SOpHFdd8UgigC2_Gug0Be4yMoBWNRfGrmLzrGBF_Jg', 'Episodio 916', 'El infierno de la prisión. Luffy en la mina de Udon', ''],
    ['https://mega.nz/embed/Fj0ABbzY#Ufj5jLSXtUZA4VBHI2WDCPApkPKWdgfPpAj47em7Iwc', 'Episodio 917', 'El gran alboroto del Cuartel General. La risa del Yonkou Barbanegra', ''],
    ['https://mega.nz/embed/JvsDkBIB#AuVup6a7bBEIkhw_IdbzyS6FkMD0Jepi7WxJQ1tE_rU', 'Episodio 918', 'Comienza la operación de resistencia. Gran reunión de las fuerzas aliadas', ''],
    ['https://mega.nz/embed/dqkGia7C#xwdiEEVtouQQ4D3e7D2AsPda2RdBfDxky4EiM-iyDUM', 'Episodio 919', 'Gran alboroto en la prisión. Luffy y Eustass Kid', ''],
    ['https://mega.nz/embed/YyVkDQyC#5DRGyWDIUu_xIRW4Cs4XnyhaVzi50hFeBWPfTUYp0Qo', 'Episodio 920', 'La sensación de la ciudad. El soba especial de Sanji', ''],
    ['https://mega.nz/embed/wm0SkbJZ#BvlVt3Te_m7izdRwSdtLFIIvcH6jEgGFvQ8oEF7NJsY', 'Episodio 921', 'La belleza deslumbrante. Komurasaki la cortesana', ''],
    ['https://mega.nz/embed/s39HiIoB#lKbEAk1kKVzJMR3l7_8TjH8fSenu0p8AMwtv4ZUJusM', 'Episodio 922', 'Crónica de héroes. El viaje de Zoro y Tonoyasu', ''],
    ['https://mega.nz/embed/0vEhRYKa#0B9A8npevNWe4aLtQJxi2Hca3XRswerpwEPMigSs3AE', 'Episodio 923', 'Estado de emergencia. Big Mom se aproxima a Wano', ''],
    ['https://mega.nz/embed/t7lUBALB#2_cRIgGcg5_9duitiv-x3HS-pSmiWJLzQrbVUy7X9qY', 'Episodio 924', 'El palacio sagrado en alboroto. El asesino de Orochi y Sanji', ''],
    ['https://mega.nz/embed/UjFhWRZY#CcjinvRyauR2JXyZ5HHCCvoNHrgXzPINljqir9gJnvA', 'Episodio 925', 'El héroe de la justicia. Osobamask el de Germa', ''],
    ['https://mega.nz/embed/En1VEbrQ#31bXHQTZz07A_yVKcjjqz0C7wwMZlKQyaZsqNCLr0Do', 'Episodio 926', 'Situación desesperada. Los ninjas de Orochi contra Robin', ''],
    ['https://mega.nz/embed/46knjIBQ#ahtUgv5hERkKZkCYcZiYD8cnF17DafQUSqXE5W-IiHc', 'Episodio 927', 'El banquete del terror. Orochi enfurecido', ''],
    ['https://mega.nz/embed/wrcBXLwT#B1JgmS-Czx-D-QaWRwlnv9tw4H6xpXj85VFchXyr3G8', 'Episodio 928', 'Las flores caen. El trágico final de Komurasaki', ''],
    ['https://mega.nz/embed/4n8VSKDB#UvZJ4_ol1JZOp-QYJDst5uzJ2d4H1ljYnMCUbzF3Bp4', 'Episodio 929', 'El lazo de los prisioneros. Luffy y el viejo Hyo', ''],
    ['https://mega.nz/embed/A7sm2SLA#DZTeaEmnvgRpNuEQ8_23pasFq76--1XFg9iDFmx5lRM', 'Episodio 930', 'El oficial supremo. Aparece Queen la Plaga', ''],
    ['https://mega.nz/embed/g7cHAA5Z#0LwVHZaepZNTdvwwK5S278r2xBaQNtwCk31cGKrSVWk', 'Episodio 931', 'Escalada mortal. El infierno del torneo de sumo de Udon', ''],
    ['https://mega.nz/embed/0i1CCL7T#NQhKqllTd0Q-PZ5Le3Ho4rFpDiPCsn30jeLv1lKu0Zs', 'Episodio 932', 'Vivo o muerto. El baño público de la capital en alboroto', ''],
    ['https://mega.nz/embed/pydiiT6Q#_NYZIIfiV1086z1jKCRkTlTAfX6sp2GtD5tIwEMlrHw', 'Episodio 933', 'El asesino Gyukimaru. Zoro en el puente Oihagi', ''],
    ['https://mega.nz/embed/13M1RYQA#vL1W_kDCN90ENKfJE83Q9k0WJSq4hecMWW0RHFN36Q8', 'Episodio 934', 'Gran contraataque. El estilo de tres espadas supera los límites', ''],
    ['https://mega.nz/embed/RrFCEYqA#6EhbK6KcQqHBTpdEKH5kC3gADEWGICQo4K1Cw_pC3H0', 'Episodio 935', 'El asombro de Zoro. La verdadera identidad de la bella mujer', ''],
    ['https://mega.nz/embed/Ji1xRCxA#jJlcPZgd_3PJX0Y_Rw7trpWkI5tyKnTl0S2ElrSMz4g', 'Episodio 936', 'Aprender el Ryou. La ambición del país de Wano', ''],
    ['https://mega.nz/embed/Z31iEbII#uzI1SgfhvYoxoFPREUSxVEbb_W4D0wsd7D7AsgHrjzY', 'Episodio 937', 'Tonoyasu. El hombre más querido de la ciudad de Ebisu', ''],
    ['https://mega.nz/embed/Qq1HBCgb#13TX6O7VgqT6hKTgRTaFDVPdGXqKsomYFq5BsozwL80', 'Episodio 938', 'La identidad de Tonoyasu. La verdad oculta', ''],
    ['https://mega.nz/embed/J7cmmAha#nZxjwwk-lX81LYsvOUrHr6j78OFTyA-nPWE6cn8_kok', 'Episodio 939', 'El lamento del pueblo. El trágico final de Tonoyasu', ''],
    ['https://mega.nz/embed/ki80iaQA#IR47I9SJGh0YOyWIIXlMO7d6IDXjA7GCvZ70yo_RGGU', 'Episodio 940', 'La risa de Ebisu. Las crueles sonrisas de las SMILE', ''],
    ['https://mega.nz/embed/B38hDCQQ#33yD7PO2lF0TaiduwEOIsY7HXVu8-0szSJ8JH1mvHKY', 'Episodio 941', 'Las lágrimas de Toko. El golpe de ira de Luffy y Zoro', ''],
    ['https://mega.nz/embed/w7UB3QCI#yaqbERqdmeheR4R9KH1c0P0d7HvDrJorTJZkfF9AnyI', 'Episodio 942', 'Irrupción en la plaza de ejecución. El combate de las fuerzas aliadas', ''],
    ['https://mega.nz/embed/pa1hRTAJ#VZy5h5UfasH5mEVLvUiHUUrk7mo7CFvxfhnz-5vkNds', 'Episodio 943', 'La ira de Luffy. El infierno del torneo de sumo continúa', ''],
    ['https://mega.nz/embed/M21jGJxR#-XJM_C61tsS6y5tsa9yjxlHgKy2RVKhnUvkmw66SdWQ', 'Episodio 944', 'La llegada de la tormenta. Big Mom en la mina de Udon', ''],
    ['https://mega.nz/embed/sj1ETI4b#nqfdfaXaBd5mOdG5zhFWeKa9JUhKR0Vix8FxMXKBS88', 'Episodio 945', 'Ajuste de cuentas por la sopa de judías rojas. El ataque de Big Mom', ''],
    ['https://mega.nz/embed/NvVzSazL#J5mGxmA34Y3IivxAk-72dWbcL6JV0Zqd_NJpihknF5w', 'Episodio 946', 'Detener a la Emperatriz. El plan secreto de Queen', ''],
    ['https://mega.nz/embed/dydijLAJ#vnnCLDBeAf2H4JB6flivYEG-uJMVV5eS3FC5obuZOaE', 'Episodio 947', 'El arma de la desesperación. Las balas de plaga de la mina de Udon', ''],
    ['https://mega.nz/embed/8r03BRRC#SbXd1W9Qq7hu_na2YUJVnEuYro2dIC0PWsqRWdkmHZQ', 'Episodio 948', 'Comienza la rebelión. Luffy y el samurái de Akazaya', ''],
    ['https://mega.nz/embed/JqtCGLZQ#b_FYT_fjITujXrwNwITAaYjW6154Se7JInXu--39Ekw', 'Episodio 949', 'Hemos venido a ganar. El grito del alma de Luffy', ''],
    ['https://mega.nz/embed/p2U3ELgD#D8DXOu1KCCkBKKYfXto2Q0_ya_yjTXxMIafcGx98wfk', 'Episodio 950', 'El sueño de los guerreros. El plan de conquista de Udon completado', ''],
    ['https://mega.nz/embed/5yNF3RIZ#PmimRaiHuVlUac_qyCNQ3_kIoYoVQMV4VjEmvGcP6LM', 'Episodio 951', 'La red de persecución de Orochi. El plan de escape de Zoro', ''],
    ['https://mega.nz/embed/dnsGFKBK#EmfSocZZsoeesp9-WjmfqwRJ5iEtAAw31cwUZ7iI9sY', 'Episodio 952', 'Tensión en Onigashima. Encuentro de dos Yonkou', ''],
    ['https://mega.nz/embed/5v8Hza6Y#JkHRLzS5yrlXTMNY48Vz3jEvqCE4n-1yxEc4tgj50hs', 'Episodio 953', 'La confesión de Hiyori. Reunión en el puente Oihagi', ''],
    ['https://mega.nz/embed/Jj8G2CIT#_IqyVVKf_ATaM8JV8_SZ587QmZJFtqFq4UghMrIJDQ8', 'Episodio 954', 'Su nombre es Enma. La espada legendaria de Oden', ''],
    ['https://mega.nz/embed/knMATSqB#89FxHYb3_IK72h4UOZm7ev27yh-B2a_B6-ZMM3Z-ZqE', 'Episodio 955', '¿Una alianza de Yonkou? El destino del mundo decidido', ''],
    ['https://mega.nz/embed/sylTmChI#kYB5wKwAvERgmIW7cHA4xossSpUK9d4blA-RuRdyqjs', 'Episodio 956', 'La gran batalla se aproxima. La tripulación afilando sus espadas', ''],
    ['https://mega.nz/embed/BqdwDSJS#cxlTMH8U4fOLFIjZqh_1AnAWShrGXs-eNUlWl4iRlTs', 'Episodio 957', 'Grandes noticias. El fin del sistema Shichibukai', ''],
    ['https://mega.nz/embed/orNnCCiY#Yam2tCfQN_t6kS-0Va9PXZF2gq3GzMvOERK6qOUECEQ', 'Episodio 958', 'La batalla legendaria. Garp y Roger', ''],
    ['https://mega.nz/embed/UHd1TaAA#CEDWm1jB90yzklUn74Cpoh6MQDTAgMWIRYooFHChijU', 'Episodio 959', 'El puerto acordado. Comienza el tercer acto del país de Wano', ''],
    ['https://mega.nz/embed/MOsyXLqT#LQ9o5PVfZ0PA0opnFBKTp9AKy25bKr_zSO6kj_N_QFY', 'Episodio 960', 'El samurái número uno del país de Wano. Aparece Kozuki Oden', ''],
    ['https://mega.nz/embed/hu0QTRjQ#vZ3aAm5c5Zs8-SDLHQzD7zAwJlmuCJgAKEfo5MPCSVY', 'Episodio 961', 'Ofrenda de fidelidad. Oden y Kin\'emon', ''],
    ['https://mega.nz/embed/ozV3zKQA#LcyEq9M6GX4gwIWkTIgUtOHEIPnJ3ZUwQ_pr_3Ofkcs', 'Episodio 962', 'El destino del país. Comienza el viaje de Oden', ''],
    ['https://mega.nz/embed/piVVgQbQ#bfJbZ-MhB26g5H_7jP22VJ_Yaeaz8F53xM-sx2VcYfc', 'Episodio 963', 'El encuentro con el gran pirata. Barbablanca aparece', ''],
    ['https://jkanime.net/jkplayer/um?e=V3JnT0JLSFZieWpOOHE1VzFrL2VIZHVqMFBFaDFvUnNwWVZ2K09wNVBQeExmdmJoK1JCOSt5Mk51cXA5b3c3RTo6Hpt_fioQURZuj7pG7vD5LA--&t=dc21753db42f43c29b7afb732f3c921c&op=NDQ4Mjg=', 'Episodio 964', 'El hermano de Barbablanca. La gran aventura de Oden', ''],
    ['https://mega.nz/embed/haFBiBIA#eqjKVcE2nOrX0YqRHmj8w8Idp2vl2hd1Z5t0wVTpo1Q', 'Episodio 965', 'Choque de espadas. Roger contra Barbablanca', ''],
    ['https://mega.nz/embed/JGNy3DSR#_IydYw09v0RUhixAv-2uj4duUHfR7H-kuUZGQQM0Mmo', 'Episodio 966', 'El deseo de Roger. El viaje de Oden con el Rey de los Piratas', ''],
    ['https://mega.nz/embed/JvsAWDia#sra_m-SUsnI-4Zb4uict21KZwFEbwb_Iw5OaP2UBs2Y', 'Episodio 967', 'El final del viaje. La aventura definitiva de Roger', ''],
    ['https://mega.nz/embed/1mdVCI6T#tO8vJNoJ9gQg0rttPqOX48FclvWx3k5DX5PrVizGtjs', 'Episodio 968', 'El nacimiento del Rey de los Piratas. Llegada a Laugh Tale', ''],
    ['https://mega.nz/embed/su0XgIgI#UnQLJjF36F3EHtK6_C33FeXUksyqJILS1mfUk9vlI9c', 'Episodio 969', 'Hacia el país de Wano. Los piratas de Roger se dividen', ''],
    ['https://mega.nz/embed/cy9ngZBR#acVZ1lHhKKChGA6x0qHbl46ZeRGEvW8bRQY7G8J6Wa8', 'Episodio 970', 'Tristes noticias. Comienza la era de la gran piratería', ''],
    ['https://mega.nz/embed/Jnd0USBb#zT5GKMM9A0crqABxBeSPGT-kcPfCwbFQ6LQwXjeiTg0', 'Episodio 971', 'Asalto al palacio de Orochi. El enfado de Oden', ''],
    ['https://mega.nz/embed/lTsgXADD#dZPmQRweNq6QntnbjkKd2sfxcNbzaJ92C0UQmI3GXag', 'Episodio 972', 'La hora del destino. Oden contra Kaido', ''],
    ['https://mega.nz/embed/QzM2hCRY#kUq6RYtKqOgvNLq2iXdA2IpBEtPTuW1ezpTPPxHar0Y', 'Episodio 973', 'Ejecución pública. La hora del legendario hervido de Oden', ''],
    ['https://mega.nz/embed/d2tmAbIJ#jjovoDp3GT3GSXkz2n6qzk60VaQxjxfwnH5nEegzcQA', 'Episodio 974', 'Si el soba no hierve, no es soba. El final de Oden', ''],
    ['https://mega.nz/embed/BH0BkBKL#hfDCpWW545UP_F0rwLVwG0QL-G8ndKrBmEOzGkCIIrM', 'Episodio 975', 'El castillo de Oden en llamas. El destino del clan Kozuki', ''],
    ['https://mega.nz/embed/0OsmFIoL#OVIydKVR7QrQTFbR2RXSwp0DtpualKRR9iEk9P3Nm48', 'Episodio 976', 'Regreso al presente. El salto de veinte años en el tiempo', ''],
    ['https://mega.nz/embed/VGsUzDwY#e0UXgxGrc36yk2STMb_5Kgyg1OudCr29DV_fx9atByw', 'Episodio 977', 'Los piratas del mar. Irrupción en el puerto de la batalla', ''],
    ['https://mega.nz/embed/cmthVZhI#lIGfiWW2-RiXLVzwMfjQegdILNYOp3npa4wIkAsuA5s', 'Episodio 978', 'La peor generación aparece. Gran batalla naval en la tormenta', ''],
    ['https://mega.nz/embed/Un0D3QgR#w18obzTX-zBpsT7emEugf_TB_fFrqbcd5Ar3UxLo95w', 'Episodio 979', 'Buena suerte. El plan del líder Kin\'emon', ''],
    ['https://mega.nz/embed/ZDs2CSBa#817MYaO-ytozFJqE5lNo3wD4Qfo1dlJ4yiLZJ6vlvVk', 'Episodio 980', 'Una promesa entre lágrimas. El secuestro de Momonosuke', ''],
    ['https://mega.nz/embed/ZC1nFSYa#VMH_asbLuHi6Jujm0Kh-BooN6HT0x9f4Wk2jkR2UIFs', 'Episodio 981', 'Un nuevo compañero. El caballero del mar Jinbe se une oficialmente', ''],
    ['https://mega.nz/embed/9b9jERjK#Y7i71gcEjqbRp_K7sXXD2HNcFyle1SFmw0GM46bomAU', 'Episodio 982', 'La carta de triunfo de Kaido. Aparecen los Tobi Roppo', ''],
    ['https://mega.nz/embed/pjF1kRDQ#YtIyHVmYt5RNfBk-JJ5szoWQ-NW2wNKXcG8bFhKL544', 'Episodio 983', 'La determinación de los samuráis. Desembarco en Onigashima', ''],
    ['https://mega.nz/embed/030DkDiZ#QYGTUhFMXKOnOg7ZmxwyMGhXLQvpr94fs-kFL4S41fo', 'Episodio 984', '¿Luffy fuera de control? Infiltración en el banquete de Kaido', ''],
    ['https://mega.nz/embed/FmFyWRiT#T2GQaHmekh-l1ZYhDjB1P5WbNSDJalNKUEeuRrUbNwM', 'Episodio 985', 'Sentimientos por Otama. El golpe de ira de Luffy', ''],
    ['https://mega.nz/embed/J3UxFDja#yjL8hoycaTmkOV4IAxnHm1pwuf8FsV0W27R5qFIo1UA', 'Episodio 986', 'El sabor del sake. El ataque sorpresa de los piratas enemigos', ''],
    ['https://mega.nz/embed/gnsh3BaZ#B4CM3yi6lrfkdtJ7KxkBaFhDqQOyyUK9RIVjIE3eF3c', 'Episodio 987', '¿El plan fracasa? El camino hacia Kaido bloqueado', ''],
    ['https://mega.nz/embed/xHcxXJhT#wvqJg7mWE7o09lIgSGgDY9QLThI28rCNDOELdfM6rIY', 'Episodio 988', 'Llega la ayuda. Los piratas de Barbablanca aparecen', ''],
    ['https://mega.nz/embed/c7tFFILD#B2MzIbEYKEuL5a0FkbEjBVOdcrHFQFS27GBhLJeIILg', 'Episodio 989', 'El pacto de un hombre. El gran avance de la alianza', ''],
    ['https://mega.nz/embed/A6tWGLhY#SO8l45c5ukpo8_muo2fw1845O7KRIlbGWsf9oBnYYJ4', 'Episodio 990', 'El trueno de la ira. Aparece el hijo de Kaido, Yamato', ''],
    ['https://mega.nz/embed/gHt1BbrA#aFqLb68uQAdKL9EqK5ems9aE4ZONPuTCSW_xA5BFOd0', 'Episodio 991', '¿Amigo o enemigo? Luffy y Yamato', ''],
    ['https://mega.nz/embed/ULsw1YLJ#-kCGd3SaC_c887xf-fURVCUQ7eUS8pJNskDSlNRep24', 'Episodio 992', 'El deseo de convertirse en Oden. El sueño de Yamato', ''],
    ['https://mega.nz/embed/ATVlWDDR#fg0sikDMLs8pUQ2_DyFu3jvfxjOVj6xFtsqMiluMSro', 'Episodio 993', 'Explosión. Las esposas que encadenan la libertad de Yamato', ''],
    ['https://mega.nz/embed/kvMV1JzL#ay1Qva3Gyi8dk8chSXtm40nK0HUVm8AkPBAT_BdP6bI', 'Episodio 994', 'El duelo de Akazaya. El regreso de la voluntad de Oden', ''],
    ['https://mega.nz/embed/0rMijLQA#Cg63W8GgJvxyREN1BruWdWFRB6DuJqLR0tsNstZ2TWE', 'Episodio 995', 'Asalto sorpresa. Comienza la venganza de Akazaya', ''],
    ['https://mega.nz/embed/9OsFkKzQ#9nMNSQOYwDCmyuadgWH8DRsX6gymupIhO_lFCol4dBE', 'Episodio 996', 'Gran conmoción en Onigashima. El combate total de Luffy comienza', ''],
    ['https://mega.nz/embed/oOkE0TzK#ts275iZpOH-sf41u0iiSShSz5n-sRCecR_oc1Lyuk2A', 'Episodio 997', 'Bajo la luz de la luna. El rugido del Sulong de la tribu Mink', ''],
    ['https://mega.nz/embed/FWNzDSxS#UeDuMCSEpkN62Unst9C37EyCHrkC4KWS7uluAw6kip4', 'Episodio 998', 'La traición de Zeus. Nami en una situación crítica', ''],
    ['https://mega.nz/embed/YrdwnQJL#NM0IVgO3lk09lDCFW6GJ8KWGS4oDjuIpQ_EYgzbc0Tg', 'Episodio 999', 'Te protegeré. El encuentro de Yamato y Momonosuke', ''],
    ['https://mega.nz/embed/omNnzbSJ#zw11lBgQsZmTV7F1XIAgSmggqFMA13gvx9bxDEJMWSU', 'Episodio 1000', 'Fuerza abrumadora. El contraataque de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/gKFXSCYJ#sStE98tV8YNtRj1TcJmQ9dLV5ByUC67-HqpDdwBhBAg', 'Episodio 1001', 'Invitación peligrosa. El plan de exterminación de Queen', ''],
    ['https://mega.nz/embed/E70hmTCR#w7KZqfq9TtQGsYY1XwHXDC7qELSMw3uJfUNihQbbx4s', 'Episodio 1002', 'Un nuevo lazo. Luffy y X Drake', ''],
    ['https://mega.nz/embed/tudUDbjB#grAwRAb-cSGjOOa52I03A4uyGCknd4baEJqgnOuK8oE', 'Episodio 1003', 'La determinación de un hombre. Las tácticas de combate de Akazaya', ''],
    ['https://mega.nz/embed/13V0wCRK#92IC_X8uOItY8850Krg2Bo5AmZks54j0iC6oNQtXyXI', 'Episodio 1004', 'Técnica heredada. La explosión del estilo de Oden de Akazaya', ''],
    ['https://mega.nz/embed/ZPsBwRQB#x56M4XKir07r7-K8DPyKkV1hvOEofJr8LEzEn0FuJ0g', 'Episodio 1005', 'El terror del virus de hielo. Las balas de plaga de Queen', ''],
    ['https://mega.nz/embed/Yfd1jITL#Jk0YnPXSDXdZVRH0ILgnxHkRtoZ_k1Zfd28UXEsBEwA', 'Episodio 1006', 'No te perdonaré. La determinación de Chopper', ''],
    ['https://mega.nz/embed/gbNnFB6C#fKR9XZH2EUwcyUjDFNQ9VTiZX1twAPBX0hfbUf1Esao', 'Episodio 1007', 'La persecución de Zoro. El juego del antídoto de Oni Maru', ''],
    ['https://mega.nz/embed/Q6tUGKgS#uxqBxH4P0kBALl4B8JNO8akXdRqZv1y1MdmsH2Fx3hA', 'Episodio 1008', '¿Nami se rinde? El implacable ataque de Ulti', ''],
    ['https://mega.nz/embed/NiUSVT6Z#IyUGDOYvNRPz8LhWJ4S2jw851zdRY_7QFGg4kaNw-2k', 'Episodio 1009', 'El fiero asalto de las Bestias. Carrot y Wanda Sulong', ''],
    ['https://mega.nz/embed/JP1hESLb#gWkFpne2SwxhlX8Ae7uUn4GLxm1buYvtG4ikUnDllwA', 'Episodio 1010', 'El fin de la plaga de hielo. El milagro del laboratorio de Chopper', ''],
    ['https://mega.nz/embed/ByVQ2RCQ#3FeMqn41HN_EHiYPmOoheMv9_MxmvyXhzMbN51ItqE0', 'Episodio 1011', 'No pasa nada. Sanji atrapado en la trampa de Black Maria', ''],
    ['https://mega.nz/embed/NesBBQBb#PoqzzJTMZ1Il4YCTasRSVIQ7q_Pf3U7cGvtdQ5R00SA', 'Episodio 1012', 'Gran contraataque. El plan de avance de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/caMWDSpa#ULi3yawPjIQY6jF4LdOv1eAUQq1fPogkVJDhXn9y8ag', 'Episodio 1013', 'El pasado de Yamato. El hombre que buscaba a Ace', ''],
    ['https://mega.nz/embed/ojsUXCZR#lUrrqh_3SVdLs8p78xvP57D10QOgi2_K9Cc_Rs5bFS4', 'Episodio 1014', 'El destino de los hermanos. Luffy hacia la azotea de Onigashima', ''],
    ['https://mega.nz/embed/dmEwmBRb#hvY3aPxk7u2NXdHLx0HxEi2z-_OrTAL5XXdz7dxIomY', 'Episodio 1015', 'Sombrero de Paja Luffy. El hombre que se convertirá en el Rey de los Piratas', ''],
    ['https://mega.nz/embed/5XVn3SoB#QJlx2ucHmUwZHzW53NXbxX_wxb7IlFQC8iRoCm6dElE', 'Episodio 1016', 'Feroz combate en la azotea. La peor generación contra dos Yonkou', ''],
    ['https://mega.nz/embed/0z9VlDwR#pJUIb9wjvCyjb_wG4w9IQs3gysfUmcII8V8JniDYKOo', 'Episodio 1017', 'Aluvión de técnicas potentes. El ataque combinado de la peor generación', ''],
    ['https://mega.nz/embed/1nEHibAJ#FMlwPCVtzGVoY8SdFwRNtnkfMppYgpWeht4Hfm3UHWg', 'Episodio 1018', 'Kaido sonríe. El modo dragón humano de las Bestias', ''],
    ['https://mega.nz/embed/4iV1WIaa#EdVw3Nmpy9QvE3ynvwC_HP8K3OQfzP5RPsrQv5Pknso', 'Episodio 1019', 'El plan secreto de Otama. La operación de las albóndigas Kibi Dango', ''],
    ['https://mega.nz/embed/lqdXELID#f09WIHo1fHZGhH2b1fheCgPBhO-x4mJgz1sXKX-1-M0', 'Episodio 1020', 'El grito de Sanji. SOS que resuena en Onigashima', ''],
    ['https://mega.nz/embed/J7sgVQrZ#T_3YmCLvi_jju8ixTX-kIBpUjSM7plRxyhjbR5MWgDw', 'Episodio 1021', 'Estalla el golpe de Robin. La técnica secreta de la mujer demonio', ''],
    ['https://mega.nz/embed/lLkm3J6J#XdY2aYxsmXMR-zPbPc8nigPuBCQuW_l4mVkSTctj25M', 'Episodio 1022', 'Sin arrepentimientos. El maestro Hyo y la voluntad heredada', ''],
    ['https://mega.nz/embed/IK8xhbxI#pl6ea68_aIkYsDmMmmTu3D3OYF8nBAZwB1gKMaCSiZw', 'Episodio 1023', 'Preparación completada. El antídoto de Chopper estalla', ''],
    ['https://mega.nz/embed/RXtUjIrL#eiYcoQG1NcUBifrsymJb_5g7vzIcztdlQ40t3A0A0Qw', 'Episodio 1024', 'El regreso de Oden. La agitación de los samuráis de Akazaya', ''],
    ['https://mega.nz/embed/cOMAlIIQ#O_0IIpBpnOPhyRTOu_WMszIQo18-ywUshh4Vrqed8Tk', 'Episodio 1025', '¿La peor generación aniquilada? El ataque combinado definitivo de los Yonkou', ''],
    ['https://mega.nz/embed/5OM3yZLJ#MiB0kS4bFbuERnlTavxXgWjqfW6YoxZpgZPcqu7k1Yk', 'Episodio 1026', 'El contraataque de los Supernovas. El plan de separación de los Yonkou', ''],
    ['https://mega.nz/embed/8rUjDCjT#Wbt7UNxBmW_AAaw-4bWTEEHqxzuTOWwU3Sxxaes7Yq4', 'Episodio 1027', 'Proteger a Luffy. Las técnicas de espada de Zoro y Law', ''],
    ['https://mega.nz/embed/8OcG2LCY#ej38lMZ5KA-R2NdU1I4C2NdE53F3dUuFnYr0R-WHIJQ', 'Episodio 1028', 'Superar al Yonkou. El puño de la ambición con rasgos de rey de Luffy', ''],
    ['https://mega.nz/embed/EWVTjCjL#e6uuPrv7wLZwZIWbVsUU6FoGDhxH-kSNTyx9S2KhZw0', 'Episodio 1029', 'Especial de la película. El pasado de Luffy y Uta', ''],
    ['https://mega.nz/embed/hT9yTa4L#Zz3VFITsXf75VNZSwuAiWkHoT5S_z5RBVRrvFngM67s', 'Episodio 1030', 'Especial de la película. El juramento de la nueva era de Luffy y Uta', ''],
    ['https://mega.nz/embed/828V3KgY#rHJkoS_Nl9RVuKMWUK41avHFyhcx5PsN4Hp5eDLOmqg', 'Episodio 1031', 'El grito de Nami. El fiero ataque de ira de la Emperatriz Big Mom', ''],
    ['https://mega.nz/embed/w3ECiBoa#EVCuK5J6rjXhs4LJE7oql6xYiMTDqUmC8-ngRAAbnzk', 'Episodio 1032', 'El destino del país de Wano. El avance de la alianza pirata', ''],
    ['https://mega.nz/embed/FDtjVaJK#8tTf1c2RNThY3lDtNmgvf_BdKal9JMnhlA0g2-B-SK0', 'Episodio 1033', 'Desenlace en la azotea. El King Kong Gun de ira de Luffy estalla', ''],
    ['https://mega.nz/embed/4LVETAgR#ghSkpIWk3qclRHmXL3cgjY0HmgcyKcogedAmI4uDCoI', 'Episodio 1034', 'Luffy derrotado. Los piratas de las Bestias celebran la victoria', ''],
    ['https://mega.nz/embed/ZbkjxJDL#lYyuOISqrCLJ8-lMKRi5x2YVHsd_uEe83obhJ52u8J4', 'Episodio 1035', 'Los samuráis de Akazaya pisoteados. El final de la resistencia', ''],
    ['https://mega.nz/embed/Rb82CabQ#IsOeU1RjYHwiwfNhrvjzEsLhY1ihRYxakcvaphWIriw', 'Episodio 1036', 'Resistencia a muerte. El grito del alma de Chopper', ''],
    ['https://mega.nz/embed/IHEHyCoB#zoTtO_1JbGgN72LSmAq1Kb0NZ9OHWgbmiOlbzqHmL6w', 'Episodio 1037', 'Por el futuro del país de Wano. El mensaje de Luffy desde el fondo del mar', ''],
    ['https://mega.nz/embed/NDknCbTJ#wVqpdAjYfnZyJmulCVSa_MKiQzHjcG4HncJl3PkGrDE', 'Episodio 1038', 'El Clima Tact de Nami potenciado. El nacimiento de Zeus el Homie', ''],
    ['https://mega.nz/embed/QO9ikDYA#-7hO7RNHu966vusE_RVOFiwEvDTFfWQofnWbtLBTAKs', 'Episodio 1039', 'Gran reunión de aliados. El contraataque de los samuráis comienza', ''],
    ['https://mega.nz/embed/YLlxQTjL#8KNERvWcUBFXw8pmb3mm556jBMb9kvjERP6gLRsPi7E', 'Episodio 1040', 'El orgullo del timonel. La ira del caballero del mar Jinbe', ''],
    ['https://mega.nz/embed/43VV1Z6a#qsYleoI8MQHIFpdKpWT0kbXntzLKal--P7E1kU8Qg44', 'Episodio 1041', 'Feroz combate de monstruos. Yamato contra Franky', ''],
    ['https://mega.nz/embed/pyknCIAR#jVuIUSsRfwnCr2nlaCw30_AIrWvAT48OLtDsJEg8JC8', 'Episodio 1042', 'La trampa de la mujer demonio. Las ilusiones de Black Maria contra Robin', ''],
    ['https://mega.nz/embed/9Kc0CRKQ#nvgEe509Z0uglqCOo_BlWtIwNviXaUakAVi1viF96-Q', 'Episodio 1043', 'Cortar las pesadillas. El ataque de Robin con rasgos de demonio', ''],
    ['https://mega.nz/embed/MHkVlADT#JzuDq3ajVRcn8SnWp6ddt9YI2LOQnez72p5ecAJP9IM', 'Episodio 1044', 'Demonio. La gran transformación mística de Nico Robin', ''],
    ['https://mega.nz/embed/IDMVkTgC#IPTQfebzCMko2n4u5ObcaLThWB-Ao5U3ItIM7T4jh0w', 'Episodio 1045', 'Terquedad. El combate a muerte de Kid y Zoro contra los oficiales enemigos', ''],
    ['https://mega.nz/embed/wzc2TDAY#z404qUeYUrdH2P-jf4XnoEQmjoDNqOly3Bq6kio5kXU', 'Episodio 1046', 'El combate decisivo de los dos grandes oficiales. Zoro y Sanji al frente', ''],
    ['https://mega.nz/embed/R3kiTayS#Del3yYaeZ36-MLr7bu_bboXXzl0GxqOpruUbk24H-sE', 'Episodio 1047', 'Escalada hacia el amanecer. El dragón rosa Momonosuke se mueve', ''],
    ['https://mega.nz/embed/IvMhnapY#RJHzzQzGBlfySZizXad6g93hDfm63tZ2iVWRqy2HUFw', 'Episodio 1048', 'Hacia el futuro. El juramento de Yamato y los samuráis legendarios', ''],
    ['https://mega.nz/embed/4aNGRAhT#5Q7c3jlrniMMFDZ5__wio97DHkv_XZEAd4dz-Fy6RHk', 'Episodio 1049', 'Luffy vuela por el cielo. El regreso del dragón rosa Momonosuke', ''],
    ['https://mega.nz/embed/w78BwbyK#OTLOAiwMi0GRvuQ0IfjLl4nDHq8J_0JWcqN484W3tM8', 'Episodio 1050', 'Choque de dos grandes dragones. La determinación de Momonosuke', ''],
    ['https://mega.nz/embed/xr00ha7a#Qj81lCZYE7vGjKUKxlYNFnl6vdUE8DzX4Mr8LVz3dwc', 'Episodio 1051', 'El cielo se parte. Luffy contra Kaido otra vez', ''],
    ['https://mega.nz/embed/A7k2nYRS#rzDPUWjK66sn1AEMVLZE_WCVwLcNX-hSGbpAba4JwsA', 'Episodio 1052', 'Situación crítica en Onigashima. El plan de destrucción de la isla flotante', ''],
    ['https://jkanime.net/jkplayer/um?e=R1lPNmpwWm1GSnI5Nkk4aVNmMzRrMFBKV2xoNDlocXQ0MzFWRVJKWlQ2K2RSbTQ3NXhEMGlSNVg0OG9IQU9abGEzbnNMNGhiekI4dnNzdnZaSDdPdlE9PTo6lqQWEyBl5iCToPdEukbxtg--&t=0b92c7619bd9ee5cbfc7bb9cd8468b01&op=NTE5OTY=', 'Episodio 1053', 'La mutación de Sanji. Las dos alas en peligro de destrucción', ''],
    ['https://mega.nz/embed/lLlyiSaC#ttUPIKdnbNL00L_4Ody8wDL9LNp9nW3IP0ZYvZExl-A', 'Episodio 1054', 'El honor de la mano derecha. El combate a muerte de Killer contra Hawkins', ''],
    ['https://mega.nz/embed/978VkB7I#WCEIQT_bJIpUb9rAiZgq1xwlXYCRf3sfg9CW7TihU5w', 'Episodio 1055', 'El cerebro en las sombras se mueve. El plan secreto de Orochi y Kazenbo', ''],
    ['https://mega.nz/embed/lDEAiaaS#l0acW6O_UOEsP3nINAgbJgHC9d5pKv0xx0ycrhX2lRw', 'Episodio 1056', 'Contraataque a la desesperada. Las técnicas despertadas de Law y Kid', ''],
    ['https://mega.nz/embed/1CsXEJLC#WNUab51NvCY9p9KuhYlZGSCL9H76rLi3Nj0wYwdYQG8', 'Episodio 1057', 'Por el bien del capitán. El código de caballería de Sanji y Zoro', ''],
    ['https://mega.nz/embed/QXtxQTTJ#kLfENV7C844BYO62BLIf5TWl-dauqGnslVAsgaVjsys', 'Episodio 1058', 'El terror de Kazenbo. El palacio de Onigashima en llamas', ''],
    ['https://mega.nz/embed/AGU1lKhK#lEIlDuuFFtpw92aZJpv7vrfsW_rPi3s1_ihv4HUmFwA', 'Episodio 1059', 'Zoro en peligro de muerte. La canción de la espada Enma', ''],
    ['https://mega.nz/embed/xTcWRLIK#G3Zgm5RYBbLXh0xu7byy2OYgaclIfvEB4E7V6hMvlso', 'Episodio 1060', 'El camino del espadachín. Zoro acepta el reto del Rey del Infierno', ''],
    ['https://mega.nz/embed/1GtQ1RzT#cZPQ1sTFzMMDUQT1isi_RVArRDOr-YD3DjiSeWk9Uaw', 'Episodio 1061', 'El ataque de las alas de fuego. Sanji contra Queen', ''],
    ['https://mega.nz/embed/cfUmQRqA#OI5iSVxKxw6q3FfD7RFnEPHPXCyZwehmwrIa1PVEBsc', 'Episodio 1062', 'El estilo del Rey del Infierno. Zoro contra King el de las llamas', ''],
    ['https://mega.nz/embed/UjMw1IjJ#7IYPu4qkq8gvO9_gFeaoV67jlQqy5GuUDqZy01HltDk', 'Episodio 1063', 'Momonosuke se mueve. Detener la caída de Onigashima hacia la capital', ''],
    ['https://mega.nz/embed/QqEEVTzI#yn7VNF9jX0rkcFA5K07IurR00ZivL7DuFPVwOhL-2z4', 'Episodio 1064', 'El modo dragón borracho de Kaido. El fiero asalto de las Bestias', ''],
    ['https://mega.nz/embed/RmdXlbgQ#ddOgyBoEoJd-k5HtcgWNiJKeCqCHeSF5xdFHivu-BkU', 'Episodio 1065', 'El colapso de las fuerzas enemigas. La peor generación contra Big Mom otra vez', ''],
    ['https://mega.nz/embed/9jMQ0RhD#pq47yvzeA0cfhL7pIa2NJy1SNCijnCWcrQEh2Y-LSiI', 'Episodio 1066', 'El ataque definitivo de Law y Kid. La caída de la Emperatriz Big Mom', ''],
    ['https://mega.nz/embed/5j9DWbRC#Io4OoUAANyM7wltMOJcbXSWaz4fNTjxR9Fl-xQQR_fw', 'Episodio 1067', 'Hacia la nueva era. Desenlace definitivo: Derrotar a la Emperatriz', ''],
    ['https://mega.nz/embed/la0TXTDA#6OGBpvmJgrGmUMU6qRGavO98-HE4QTSI9DnlIqiZUTI', 'Episodio 1068', 'El eco del tambor de la liberación. El destino de Luffy decidido', ''],
    ['https://mega.nz/embed/tLUmDB6R#1K-w7m74yb01a7RGw_yicj1JDo_R1kLeRPMVjq9fmJU', 'Episodio 1069', 'Victoria o derrota. El golpe definitivo de Kaido estalla', ''],
    ['https://mega.nz/embed/UKFEEKDQ#1Arf_ZpN1_kt16ZaKlGFWHUQRHL8Ft6gPJcdbDydn88', 'Episodio 1070', 'Luffy pierde los signos vitales. El lamento de los aliados', ''],
    ['https://jkanime.net/jkplayer/um?e=azlKbWxDbWI0aDkxVW1rYnRXMFB0MzY3V20wWkVnVGd0dkdXeGZuOTdUOFVHTE5pVGNqNk8xWVBtUTVmVTkwRXdmbThSS2hZZkVpZDJnK3YvbkRuSXc9PTo6Gem8.Kfblh6hbVSTVJyIVg--&t=23ee8c0be7010554fb09e2a97c2eb65f&op=NTM2Njg=', 'Episodio 1071', 'El nivel máximo de Luffy. Activación del Gear Fifth', ''],
    ['', 'Episodio 1072', 'El poder ridículo. El Gear Fifth en acción en Onigashima', ''],
    ['https://mega.nz/embed/gHlGnLzB#x3RtthDkm2jc2_34RkqT4Z15RoHWO6UUwR_XWWiM3qI', 'Episodio 1073', 'Sin escapatoria. El infierno de Onigashima en llamas completado', ''],
    ['https://mega.nz/embed/5KdEWDTa#2yKvTDwl-s2_qlGK0xcxjR5YGqKy_8PT8OPPAk7WgqA', 'Episodio 1074', 'Creer en Luffy. El último ataque de la alianza samurái', ''],
    ['https://mega.nz/embed/wq0CBKxA#UtoAemCl6K4l7vCr4OpxjPTLIdM2GaM_JeJ5MKqAXyU', 'Episodio 1075', 'Veinte años de rezos. Recuperar la libertad del país de Wano', ''],
    ['https://mega.nz/embed/82tjyazQ#4__Ulx9n1MuusOde4pdmWUeecERNTRjXeu7w8IrGZaI', 'Episodio 1076', 'El mundo que Luffy desea. El golpe definitivo de ira estalla', ''],
    ['https://mega.nz/embed/VHsVUSha#TAQTBGtRJWWlhEtO6kmZ8TuvmT-VP_GOUyJZuzl66IM', 'Episodio 1077', 'El amanecer del país de Wano. La victoria de la alianza samurái', ''],
    ['https://mega.nz/embed/8j91HKxb#xMjXSa_AsyE_anz4famPNUxTAchDJdldugLfZzV6QzQ', 'Episodio 1078', 'El regreso del clan Kozuki. El nuevo Shogun Momonosuke', ''],
    ['https://mega.nz/embed/a4ZHwK7Z#jLHBMTnCriwp88LOJhdeHBVz3DTUIx7NiT0JU2yKf64', 'Episodio 1079', 'El descanso de los héroes. El banquete de la victoria del país de Wano', ''],
    ['https://jkanime.net/jkplayer/um?e=RE5adzdicDJ2RnFIamNucTU5bmxuWG4vMzdxckx6bi9JME1ydm16VVU3enpuRXdLNkh4M1dueEx3di9Xejdkb05kNzMvM2haYUtIV2tDVlZSL2g2K1E9PTo6LdZbFpH2VJHB9wd9AHQpTg--&t=a0f391ea0cbadcfd06f95c30a8c9b21e&op=NTQ1NjY=', 'Episodio 1080', 'El festival de la capital. El nuevo Yonkou de la peor generación', ''],
    ['https://mega.nz/embed/MmUn0T4B#FjUg-Rx9obyR8AEYdu4By3TeIdMW5f7qMdHh8-GydlQ', 'Episodio 1081', 'El mundo en llamas. El asalto del Almirante de la Marina Ryokugyu', ''],
    ['https://mega.nz/embed/EeVVhKAT#LjNwXe3OT8X1co9DhLnPSrR5N6L61MEaM68zjWhvVJ8', 'Episodio 1082', 'El amanecer de la nueva era. La ira silenciosa de Shanks el Pelirrojo', ''],
    ['https://mega.nz/embed/EmdmwaAQ#RYUTxe_vZ1UBqRVr6w2fPigJcgx0tOc4hYe_h051j6s', 'Episodio 1083', 'Los piratas se mueven. La nueva organización de recompensas, Cross Guild', ''],
    ['https://mega.nz/embed/onUX0KYZ#MUm3OPmaewWw0Nosk_8WlZ4rsk2CHbHIMjM-1KPJHFE', 'Episodio 1084', 'El tiempo de la partida. El agradecimiento de la tripulación a Wano', ''],
    ['https://jkanime.net/jkplayer/um?e=QWxxSC9GWVg3OHNxOUFRNDduR1dWOU1lc2RVQW9pTzVpSDdSV3pQaENYZWxtSkU0K1JZWklVQ0N2WGg1NW9TUW9xYnRBcXFyczladWpoRXlwdmdIM0E9PTo6dZD8fVlss16z_UEv72kSEA--&t=929d10ba7f6d0ffd8f7d1b958b9db0f5&op=NTUwNTM=', 'Episodio 1085', 'El final del tercer acto. Adiós al país de Wano', ''],
    ['https://mega.nz/embed/BjFHHYaA#BFF4GgqnO1PQKD0_Z3745uyFLlRh8wIrPZGFtDVXzgA', 'Episodio 1086', 'El nuevo emperador del mar. Buggy el Payaso de Cross Guild', ''],
    ['https://jkanime.net/jkplayer/um?e=VDVaQnFWTUNZWjRnd2ZDYXVUMzNmYkZOR25EU1dPOXlrSkFTeU1TUHJTTmpjZUFMdEJ2LzJaVmVjTFZ0UysxK3RNY2ZqYzBHM3FBRkJMZzJGa01UZXc9PTo66eg9Ve4hVFf8fjQWP7644Q--&t=d0284dd88b01126d3d4550ae3b6950f6&op=NTUyMzU=', 'Episodio 1087', 'La invasión de la isla de las mujeres. El Yonkou Barbanegra al asalto', ''],
    ['https://jkanime.net/jkplayer/um?e=NHp2MTRyN3FzUW5iYWR3Y3ladXdmQ0xwZDBtSzMyQTVZRjhOTDgvM1RjYW1iWDM0ZmlOVXNYNnBiZnNXdUdTODhNV2JUazVIVFdBM2NIM0NKcjZyZlE9PTo6pCDEqWEh4xypz5d8idFKAg--&t=75e7bdb0059c3da8a7275115e78ffa48&op=NTUzMzQ=', 'Episodio 1088', 'El sueño de Luffy. El camino hacia el final de la gran aventura', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const onepieceSeason10Episodes = [
    ['https://mega.nz/embed/Ve00DYZJ#sok_CzpCt3YRgXoezpqwMD6FSFtRBsRpY-vafyh0klg', 'Episodio 1089', '¡Comienza un nuevo capítulo! El camino de Luffy y Sabo', ''],
    ['https://mega.nz/embed/pO1inABB#FUyr_ReNYGjZvoplJ06_oOwTMiPWRG61NrPpDYqFGHU', 'Episodio 1090', '¡Una nueva isla! La isla del futuro, Egghead', ''],
    ['https://mega.nz/embed/NrMRlRTI#rFTI9hvqv7yYhqSJsZxDUCpz_NZUGZHc8rwHte-sLbs', 'Episodio 1091', '¡Lleno de milagros! La aventura en la isla del futuro', ''],
    ['https://mega.nz/embed/12sxTBqS#yl60HmFiYWImenTzYDUYHBBu0QQ5nXDr8xIKkGLqbvg', 'Episodio 1092', '¡El lamento de Bonney! La oscuridad oculta en la isla del futuro', ''],
    ['https://mega.nz/embed/5ndClbCS#1jkQJP8DPIMjCfgxXct6xnI__vAiWNmoR0Q2sp-XjQo', 'Episodio 1093', '¡El hundimiento del barco! La trampa de la Marina se aproxima', ''],
    ['https://mega.nz/embed/sPtTTBjb#XWSTnwT_rWVUUoIl2mzTdiXMJ9x-0jsaWCfUPdgHG44', 'Episodio 1094', '¡El misterio crece! El laboratorio del Edificio Labo-Phase', ''],
    ['https://mega.nz/embed/pLUkDTIb#gdbycw2V6guaexOY-niolCYlU6Nv44ss36n9cHb3dGI', 'Episodio 1095', '¡El cerebro del genio! Dr. Vegapunk aparece', ''],
    ['https://mega.nz/embed/E7EmCKjY#56sTImNUGtlpUhrBzYcCxjUE6hSqrupmxrvGSTOO4-c', 'Episodio 1096', '¡La historia prohibida! El secreto del antiguo reino', ''],
    ['https://mega.nz/embed/1jMSmAKR#NPpOnJsEeKxdcZQeoyKKh9O3HIPYoW1Cd3RklTU9TKI', 'Episodio 1097', '¡La voluntad de Ohara! La investigación heredada', ''],
    ['https://mega.nz/embed/QT11kbCa#BZ_CoYK5mP5t1Uwnx7FNJSix6mQ5rk5ryJKLGantU_k', 'Episodio 1098', '¡El plan excéntrico! El sueño del Dr. Vegapunk', ''],
    ['https://mega.nz/embed/5DkEnQAT#1XzeDQ7Vq3DH8Hjxw7Oa2deCM3AahTqg4PYGDdIuKCk', 'Episodio 1099', '¡Preparación para el asalto! El CP0 se pone en marcha', ''],
    ['https://jkanime.net/jkplayer/um?e=SVlkbVluNGovYUVwazFNN0JaT3hBeFdxd0dMbnh3MnY0QnlFdGR4bmRtVXVuc3pnOGs0YnZyZklSdWQ5WTRBR2FwVjcxT2Y4d2YxWDRhK1NJZ3cyYXc9PTo6Bq5fRAEU5XR49oUOnhTdUA--&t=f7c5e3d202b883a16a27057b4f4222f8&op=NTY3NjU=', 'Episodio 1100', '¡Poderes de otra dimensión! ¡Luffy vs. Lucci!', ''],
    ['https://mega.nz/embed/p7FRnJjD#CsL3pTCb2COXa8YTvnq4NBfMJM557K_1vLC7h-U9TRQ', 'Episodio 1101', '¡La Forma de Humanidad más Poderosa! ¡La Habilidad de los Seraphim!', ''],
    ['https://mega.nz/embed/MDcRiCKa#Fq5d0Bw9bRlxbxbVJkWselgBRksHIAo5dVS34tgZPT8', 'Episodio 1102', '¡Una conspiración latente! Operación de escape de Egghead', ''],
    ['https://jkanime.net/jkplayer/um?e=V2FZamcrYit1T282Zklhdi9ZamxrT1FGVERMMjBGUndnZWVUTk5WaHBPR0ZBME56MlZHZXd3MVE0SFBBZktuQ2FzUi82bU9aY1J5TDlOSlR1MS9xbWc9PTo63X31lxJLPac0KqIyWOqc0g--&t=9bfe83c7ff65b70058b33a9a4b9a9a7d&op=NTcxMjE=', 'Episodio 1103', '¡Regresa el trauma! La verdad tras el dolor de Kuma', ''],
    ['https://jkanime.net/jkplayer/um?e=Z3E1aHpyZVVZUkhSMFVBeG1qWVVtRUtqS3J1ZzRJUVVKQkVSQ3BuVjJPVnU5ZFluSW5YdUU1WXVuMVBydm9kMnIwU0Nia1EvcnlrRWhsK1pRSVdKTnc9PTo6QBblCNBBiK1PjScXLmNZrg--&t=5b79845b7bfea9c22925122f137c6ab5&op=NTcyMTA=', 'Episodio 1104', '¡Situación caótica en Egghead! El plan de escape se complica', ''],
    ['https://jkanime.net/jkplayer/um?e=OXBGR21JbWZuSVdOS3R3RXFVMHNWcnZyQTZmTStYeHY2cEhYNG5uUEtkcGk4S1c3N3llaVJ3YWhEV1FJb2VTbCtGckQ3RVcrc1NaMDZCdXl1Wk9ncHc9PTo6dFYJfw8arfcmY0ESfyCvdA--&t=e07b2e2d70479ffdb3ff930f6a264702&op=NTcyOTI=', 'Episodio 1105', '¡La traición de Stussy! El clon de los piratas de Rocks', ''],
    ['https://jkanime.net/jkplayer/um?e=NWJpUzIzUCtoNVZWQzZRUzFoMXpWTWFpU3lPY0RWUjQ5ZEZZU0F1RkdWWFQvMnE1NVdDendaK3VBVHg3WXlGSEFZWUtmSXh6bUlSOVBEQ0JmZmFVQUE9PTo6u.dgDdTR9VVziZjIGbCSKg--&t=202965e802a43d38bd9efe2911a762c8&op=NTczNzM=', 'Episodio 1106', '¡El laboratorio en peligro! Buscar al Vegapunk desaparecido', ''],
    ['https://jkanime.net/jkplayer/um?e=Rjg3MVZJcUhHZHFLMStlKzU1c0tyZmJ4M0d0U0EyK1hIbldqeTJadmp4MTAvV2VVeFoxekhXSFUxL3pZNzUrNzUvYWIreW8reW5SWXZUWXdrK0Ezcmc9PTo6xWwwHRbJbU8xAwv547RLXw--&t=44578a98235c9aca8392f563f2faf81a&op=NTc0Njg=', 'Episodio 1107', '¡Un fiero ataque sorpresa! Comienza el juego de supervivencia', ''],
    ['https://jkanime.net/jkplayer/um?e=Vkptako0OTRwZGZzczY3cWtQQk82b1ZqekxQM2RRWlBTQUUyMmZYeFJwVEQva1BEVE41eFZ4eVlKa3RiM0pCTFZhUXQvWWQ0RTNzTGw4eTU3bnFiQ2c9PTo62yoFfACPUJFcpp11_eclCQ--&t=910fb043e86d744913489b5507f4abe7&op=NTc1NTM=', 'Episodio 1108', '¡Luffy y Lucci unen fuerzas! El frente unido de la peor generación', ''],
    ['https://jkanime.net/jkplayer/um?e=b2pESXJIbE5ja2hnRFRkOVpnblFMZ1RsMmtqRFlHVGZ3OGJ0aFFIdmFsVkp5ZXJJM1pnL1liKzByOFhLQVBZTWFoTndkMmRkZnJTc1BBUkVTNGZaVGc9PTo6MrzGyVUExddMbK8S2VV9wQ--&t=6ceaa128cd96e506eaa53f093ff25834&op=NTc2OTU=', 'Episodio 1109', '¡Una decisión difícil! Romper el cerco del edificio Labo-Phase', ''],
    ['https://jkanime.net/jkplayer/um?e=NzdjeXNBRDZBSFBQWjVwVEJTZENER1ZRMXhmdXNJditOUUg3eURDUXhaZ0lXUUpoZ3UyTmpQV2hLV2tUS0F2TzZMVE5uMzNGaVVyUWZpenE5YWxRZVE9PTo6J_gnVOKxmlpTherBCicP6Q--&t=37d7a1bf42597fc4301fc934c19dba0e&op=NTc3NDk=', 'Episodio 1110', '¡Estalla el contraataque! Las técnicas combinadas de los aliados', ''],
    ['https://jkanime.net/jkplayer/um?e=K2ZlQW9DempaL0hBdDk2UWhJa1VubTNlYmFYVk1TODcvRHMzdE5CTGFha09UYjJIMXR1M1lDcEZnb3kzU0p3aEt1cmRIeUVBRGhVTEhnU3ZSTHN4ZlE9PTo67eeK1cBOZgMdmE7VnSaYQw--&t=2ee9850ddc5d646ea4ca442beb30f775&op=NTc4MzE=', 'Episodio 1111', '¡El misterio del traidor! Las intenciones del Vegapunk York', ''],
    ['https://jkanime.net/jkplayer/um?e=RTFTR3E5c1JaOGlOSmZVN3lXemNaWjc5cWx3Y3l6b3RJRVJ5UXYrelM2VTRmbVo3eWtSTkJkVi9FTnBaNEl0c0dKU216TW1NNlYzemVaYmtvRmM1YVE9PTo62vkZM8yPihP5nEaQgZWp6w--&t=2c8ab4d3fddbffd82fa05614f0e25aee&op=NTc5MTI=', 'Episodio 1112', '¡Gran impacto! El fiero asalto de los piratas de Shanks el Pelirrojo', ''],
    ['https://mega.nz/embed/seNGVILJ#TG4dh4wfeOulrHAA1rszzWuhqswAgLeFhpT_hSRaEiY', 'Episodio 1113', '¡El heroismo de Koby! El plan de rescate de la isla Hachinosu', ''],
    ['https://jkanime.net/jkplayer/um?e=UWRDY3RwV1k2Mnl2LytXaG9PU3VNeEJzR05mU1ZUQzBwSEN0RCtrVjA0SkN3UTZLQXpKYXdaYXRNM1J3Wlh0YTNEeGw0SGtIbS9GbGxGU3UvcUw2Y2c9PTo6LNrRRRhe070mH7s6LswuJQ--&t=2c1dc715991fa35169d721ce6dea0df5&op=NTgyMDM=', 'Episodio 1114', '¡Por el bien del discípulo! El puño de la justicia del Vicealmirante Garp', ''],
    ['https://mega.nz/embed/27BUhLiD#cPSCcL8vkHz6t-QalWhz07o3jFZD_GABawhJJuzktrg', 'Episodio 1115', '¡Feroz combate en la isla de los piratas! Garp contra Kuzan', ''],
    ['https://jkanime.net/jkplayer/um?e=a3FReTk4cU9kcitqa3VNd3AweXZMYk1EVWpJc0N2Qm5mWGl0d0ErUVFoTlkyakRCeDhydXo2ZnFwZmtqblJkbVY1ZlUxdzFXd1hWOTF1SHAxLzRXY3c9PTo62qbguY7upC8wR_BAz_YWvQ--&t=29327ef54f4237088eb897f4d8760ea1&op=NTgzOTY=', 'Episodio 1116', '¡El alboroto del mundo exterior! El fin del Reverie revelado', ''],
    ['https://jkanime.net/jkplayer/um?e=N3E0cXpiZFp5cEsxZkRrV2hrRUFOdEFDTFJ5WnFzZ01ZVlVFSGhXdGxiS1BrSDNzTFFYQ1hBV0NaRHdsU2c1WUZjaHVZbk5RSmxUTTVXUlNzZWJCRmc9PTo6FKVGRuOKQ.tmn90o2KKz8A--&t=debdde81c5da780b178e2413ddbbf157&op=NTg2Mjk=', 'Episodio 1117', '¡El regreso de Sabo! La impactante verdad sobre el asesinato de Cobra', ''],
    ['https://jkanime.net/jkplayer/um?e=ZW5tUktPU1lKOWx0bHFuWVdFQmRxQjJwTWE0ZUg3blV5Z0V3OXN0OE5wSTFQbFpDdXpPVmJFZ1MzeFdNT2hoUk1JV2RzWlNOOGo1MEc2eXE5T2IxSVE9PTo6SkUnFtKPNYwWR.lCDvzQ2Q--&t=820f76d0c61262a3600a454fc23d8e7d&op=NTg3MTk=', 'Episodio 1118', '¡El palacio sagrado tiembla! El trono vacío y el Rey Imu', ''],
    ['https://jkanime.net/jkplayer/um?e=azVGblRPVmZpaHdJRE9tbFgyRWlYZmZSaldwb1dHSURKV2VzRWU5SW1IYUpueFN0SGdmbUtpQUJjTWVIWnlRcWdiVlJkQUlYdFJEeVM5TWU1MXU4T3c9PTo6m4IKeVyuDyflSRBEbldPRg--&t=98e9461ba17515d6ee953602a28e93cc&op=NTk5MzQ=', 'Episodio 1119', '¡El mensaje enviado! Las últimas palabras de Nefertari Cobra', ''],
    ['https://jkanime.net/jkplayer/um?e=RnJMdUdZSVlZVllPSTdweHhibTNucGZCQ0ZPYkZJTzdZQWVIRmtUMnNSYk5QR0NveVI2RDJRQlZOZXR2T2hnL0h6Szk2dW9QOVU0RHdGTkRRcnRPS2c9PTo6rTVC0R7iMHWDUOb0osbasA--&t=ae9ab2031ed81a1e51509a4216c437d0&op=NjAwMTc=', 'Episodio 1120', '¡El world en vilo! El plan de destrucción del Reino de Lulusia', ''],
    ['https://jkanime.net/jkplayer/um?e=bGZza0VmSit1bXNKcVlJNVJVSktiTGc2WmtVWnJWd3RRUHFKbXczbldhMnJMMGVqN0NKWm15Z2x6NzAxVWZkNmVyVHVORUdOSUVpeFlGSjA4U2RleFE9PTo65laiYpyz.vXyx1.5cX67hw--&t=b97c44910b6c0d7e9fa1075d64575a0f&op=NjAxNjA=', 'Episodio 1121', '¡La hora de la partida! Sabo y los refugiados huyen', ''],
    ['https://jkanime.net/jkplayer/um?e=cUhPZHFGbEtLNmxtSExEOGpHZml3NldHZ3pRY0tabjJGQXBTOVNQcXVWZkdSUmt6WkpDTTREQ3NTSC84L1Y4MEJ5aWs5Skt4UWJHUkx1OXkrNTFoWlE9PTo6WKS6O_kjTpFqhOwuo7k4FQ--&t=5aa11141c93fedec92a513541d04b875&op=NjAyNDI=', 'Episodio 1122', '¡La última lección! El Impacto de Honestidad de Koby estesta', ''],
    ['https://jkanime.net/jkplayer/um?e=YnlZdUNFb0pUY1VyUUhXRXNqdklHdkVCYlN1MzZnK2RpRDZrN2o0RGk5M2lJR1JZdVhsSm9IUThuS25EcnQ4L0VUZCtQVGFRc2VtZFpNYndnN3NCZVE9PTo6OUbci_h4b6Q9IQLJ4y5C6A--&t=bc40feca34b895a519823e3b120f9670&op=NjI1Njk=', 'Episodio 1123', '¡La llegada de la gran flota! El Almirante Kizaru y San Jaygarcia Saturn', ''],
    ['https://jkanime.net/jkplayer/um?e=ZG16Q0RzU3RreDVxdTZxRUFYNkdhcVdBQ0V6aktQY1FKYzFUTS8wVk5kK2NyTUxqL096MU95SlBvZ0N3WjNxa1Bqek95VlB3K1hXSTJib3EwUk5JVlE9PTo6UpdbERgVneOUv6gx_dffsA--&t=75a4a9d05b928cc80c8af2c65b268604&op=NjI1ODQ=', 'Episodio 1124', '¡El cerco total a Egghead! Cien barcos de la Marina al asalto', ''],
    ['https://jkanime.net/jkplayer/um?e=dXVmK1oxcE1YSVROMEdPMVk5Y0xReXdQV2FmZlU5QlpmQitPY2NRM05QaVRlQkVuZFg0RXBGL0NCY3Jvei9TeVdLMDFLOVVJVTVrMmE0bTJ2K3hyS1E9PTo65Hf.x8jtgI3d5hKuRst6qA--&t=44adfa7c0c9a7baea2b8b60a589d14d5&op=NjI3MDc=', 'Episodio 1125', '¡Feroz combate en el laberinto! Luffy contra los Serafines otra vez', ''],
    ['https://mega.nz/embed/yjQkjCjQ#JzyvxWyzZ7WxNqQNB3LbfEiEq9nlghu8YOc8mF51OPg', 'Episodio 1126', '¡La ira de Kizaru! El fiero asalto a la velocidad de la luz comienza', ''],
    ['https://mega.nz/embed/Rp5CgLRQ#ZqUhXAhSD5mSdxG9TgaBtJdpjBo-QYnAPjFQkl53Wng', 'Episodio 1127', '¡Proteger a Vegapunk! El contraataque de los Sombrero de Paja', ''],
    ['https://mega.nz/embed/tisX1QbA#DNOdhmT69tnzBtoPCopW5mGNftFfVZUAyXni-ZWi0sk', 'Episodio 1128', '¡El poder abrumador del Gorosei! Saturn desembarca en Egghead', ''],
    ['https://mega.nz/embed/U0QQnapb#hL0X6j2EtvieZgU9gODXTo7sVbLvDLSK9EiYYhktUe8', 'Episodio 1129', '¡Situación desesperada otra vez! El terror del demonio científico', ''],
    ['https://mega.nz/embed/a0R2jYbK#hqKriVPUK1uuRskeL1J85HTPq3hwcmOUQlJvk58YkcA', 'Episodio 1130', '¡El rugido del Gear Fifth! Luffy contra Saturn y Kizaru', ''],
    ['https://mega.nz/embed/kJhUEKIT#0k2UU8SSxsIGmYgUAQIgMIL7wFFlz9yHfGYFIWX6Xwg', 'Episodio 1131', '¡La llegada del gigante místico! El robot antiguo se mueve', ''],
    ['https://jkanime.net/jkplayer/um?e=TlBUZmxPcVVhdW90T2hGaXBpT2twNG9GVllveGVHTURGUGtHMVNrTlJyd0hwL2FTRFliTmo3dkpoUkhtak5PVHlRZ3BwQitqeWNGWWd1VEhnQStQaXc9PTo6fEyKx36ceYLcxp3R_ZTMQg--&t=8ff419ec074bbf9732f03febaf1ef79c&op=NjM0NjU=', 'Episodio 1132', '¡Recuerdos de una vida! El pasado trágico de Bartholomew Kuma', ''],
    ['https://jkanime.net/jkplayer/um?e=MXFaMXJVZTdPS29xMWpSWlNRV0FCcmUxVWMrS1pGY2g2U1BmaTZBd1ZFRXZMYzZzRUhHNW8yVTlFL29WS2xTd2tMNjh0RGw5U25MZmgzZDJ4UU4yekE9PTo6aLyR.CrCb9Kgrz4OJmv.8w--&t=18844d6c157a50ca46664576b0a93eb0&op=NjM1NDg=', 'Episodio 1133', '¡El nacimiento de un pacifista! El pacto de Kuma y Vegapunk', ''],
    ['https://jkanime.net/jkplayer/um?e=eGJnNW5JVmlDUHNUTERKN3FBK0YzN0I3elRPcG0xNlFOMXR0MDFqem5mMUVjV0ZnMWF4NTBVL1loVDFPMUlYOWh2VUVRNEttd0VLaUcyUWFRQ01aeUE9PTo6U1o9Y1F.g.g7ilJW45HJ0A--&t=5e81115816e5cebc472334864932012a&op=NjQyMTc=', 'Episodio 1134', '¡El viaje de la desesperación! Kuma en busca de la salvación de Bonney', ''],
    ['https://jkanime.net/jkplayer/um?e=azRRald0d0lvbmdmMXpxVFl1SDl6QlZ2VktTZkxnZ01kSW1jSEFuZWFSRFpUUEdTaGxNcE14YVlkNXAyZUpiOXMwdjBqVXp0eG0xQUxFM2s0SkNYQVE9PTo6HnZ.ZFdw3XxihACyofC80A--&t=5a2e3dae010c41ba7909c0cd803bbe93&op=NjQyOTU=', 'Episodio 1135', '¡El fin de la humanidad! El día en que Kuma perdió su conciencia', ''],
    ['https://jkanime.net/jkplayer/um?e=NnFOcmk2Q2JlS0drL2ZHdkZQRmZ5eDdPcmRCWjE1VjZXNXptbFNLOUh6akwwYWNhVHRPZHN2TnZhS0FBSzdpNWE0cXkzU1RxVjYzanpJVXRnZGxTc2c9PTo6k_tVdVbE73wv7OOPXfmviQ--&t=5a4293fc414c826e47f8cb2583f9cd46&op=NjQ0Nzg=', 'Episodio 1136', '¡El golpe de la redención! Kuma llega al rescate de Egghead', ''],
    ['https://jkanime.net/jkplayer/um?e=SE1iVUhrdjVReTI0cW9HM2hNZDJ1SGhBemt6NjVNYkExUndwNVVKYXVNaGViQlZtNXBRN0RUUHhvY0Y4akJFK1VscmhtOGZ1S2JQajltVXBadFNhQnc9PTo6Fwo6ZYG.pPmpfHtOZ3ER2Q--&t=8266b7074d3f701ce58c7d0e1d5bc644&op=NjU0MTI=', 'Episodio 1137', '¡Ira sagrada! El puño de Kuma contra el Gorosei Saturn', ''],
    ['https://jkanime.net/jkplayer/um?e=dE9ieHM5VnN3bjZWWFg0c0RmMmlyM29qcXlOeXJtMmROK2dNWE5kcXdiNEIzZEJEcFFaanpubVVWeEE0TkJUQkluMlovYXBWaG5DMHd1cmc3MDU4YWc9PTo6zlfm4yPLzvyFq1eWMxcceA--&t=cc41e89feb3bab138e15f0ee76295490&op=NjU4NTE=', 'Episodio 1138', '¡El contraataque definitivo de la ciencia! El gigante de hierro despierta', ''],
    ['https://mega.nz/embed/YN4XgC6L#sK1NN9hz2NvbodxUhF4YyuObD8DcqYe5bROoOBfLhmU', 'Episodio 1139', '¡Gran alboroto en el cielo! La llegada de los gigantes Dorry y Brogy', ''],
    ['https://mega.nz/embed/yhZBAb5a#mdbV1Qnaa86KslOCrs6T-NDMnZ6511iVBROTSkeAEBs', 'Episodio 1140', '¡La peor pesadilla del mundo! El Gorosei al completo es invocado', ''],
    ['https://jkanime.net/jkplayer/um?e=VCt5WDU5RWZONGthVzI5SGdvMzg0TXJhS3hMcGJjOGxNaE9vVGlCWUw1dDJhRHd4eXRNaktSSC9NZlZuUzZVQ1ROK01kK3JPNEM4NHQxTnVnRXorTEE9PTo6enu.2q57afNY1zmKhyW5JQ--&t=2a057a8226c4bce227d145cfea12fb44&op=NjcwNjk=', 'Episodio 1141', '¡Feroz combate de monstruos gigantes! El Gear Fifth contra los cinco demonios', ''],
    ['https://mega.nz/embed/xUAzhTjT#HvV3qrbu4A3aDF4453UtCszIbJ8pdCWRaxeqjF3fafo', 'Episodio 1142', '¡El mensaje del Dr. Vegapunk! La verdad del mundo comienza a transmitirse', ''],
    ['https://jkanime.net/jkplayer/um?e=R1RoRVNaMFowcmloNXZHeUZnREpIS0JxWmVITzFFMHJKYUVqdmNrV2xWTW1oL0s1M21ZaDJyWDl4U3czVFAvSlh4anFUNGd0eUs4NkJEMmNTNDZ1TWc9PTo66blCforHlM7CXGjfU1w57Q--&t=2bd9abbd94409cac45f7c479944fbb48&op=Njc1MzI=', 'Episodio 1143', '¡El mundo tiembla! Las revelaciones sobre el Siglo Vacío', ''],
    ['https://mega.nz/embed/Ogpi3awa#ZSMa4ku7geKTC4NYxWwqXv9z2j_DUbX_X74OcOtXsC4', 'Episodio 1144', '¡La inundación global! El destino de las islands del mundo decidido', ''],
    ['https://jkanime.net/jkplayer/um?e=RmRRYUc3RGpVRHBYNnR0ZU1YY01RWXVvS0JKUE9CREYwSXlid051T1Yza1RQd0hvRzJPelJiR1hRdkpKM1Vpei9KQ2RGeG1lRE4ydDZXSHJHRUc2dUE9PTo6wxfYTsr5hwVOw6dM1m4A6A--&t=175d4a98d7cde92f6e27dd4b82a43b22&op=Njc3MjA=', 'Episodio 1145', '¡El contraataque de los aliados! Abrir paso hacia el barco de los gigantes', ''],
    ['https://jkanime.net/jkplayer/um?e=eGZHSHMxVXhTbVRiWHQ2b0RnUUFkTUxGUDV5aFlkVXdLRWMzZW5TZnpYYWZnbEpBeXZPa01BTWZNRlNzV3ZJaTNJRWlmWmxrOXBVbno4OHpRaDJ2S0E9PTo62CyTxIzdyVm64Ux0Y.shpg--&t=472de25f1b85c7b83e71119de0c1beb4&op=NjgxMjI=', 'Episodio 1146', '¡El honor de la mano derecha! El combate a muerte de Zoro contra Nusjuro', ''],
    ['https://mega.nz/embed/pJtw2a7S#qt9HbPoS4D5oK9RhW9u_gDqcWl_LlV6TvPLqsGcJavU', 'Episodio 1147', '¡El gigante de hierro se sacrifica! Detener el fiero asalto de Warcury', ''],
    ['https://jkanime.net/jkplayer/um?e=c00reVhBbmdHd0tVWmNZdWp2MzJZZVE3eW16YkhJZit2RS9QSjgyWGw3UlNJWFpJNHJXS3JLRzBFZmlWN3llak5pZWVIOHVtUHhEVi9NR0ZpaXJZZHc9PTo6.v75gnYqvrfo8sjYVVIVjw--&t=1de4d6484d29cdf0cc7c42ab7b862fa8&op=Njg0NjQ=', 'Episodio 1148', '¡El golpe definitivo de la liberación! El combo de Luffy y los gigantes', ''],
    ['https://jkanime.net/jkplayer/um?e=OTZvd3lUR2dFNjkweTZsc3liUDB0cDhxWmY5K2dpR2gvaWNwb2V2Rmx2ajNtTHdKN0J1RXNQemNzdXJMcnNjSHJTd1JDeEVLMlkyd1NzQlFwWWRVc0E9PTo6rDj3z8tETqplovAME494Ig--&t=eb2ab16794e847e3364de006e091e06e&op=Njg2MDg=', 'Episodio 1149', '¡Huida del infierno científico! El final del Dr. Vegapunk', ''],
    ['https://jkanime.net/jkplayer/um?e=VUYrRkFTL3M5VG91bUgvbkFadlU4VHAydG9MNnRod05neHMza01Qc3p5aHFIRkpvMG1aZ0Q0VEQvcUExdm9sMUhXM0wwcXZQcndDemFPbTJaeVg0N3c9PTo6VJj_MZq7ZxZBI2FoDaDTwg--&t=5419e873a1dba642e307ace19e4ad4d6&op=Njg4MDA=', 'Episodio 1150', '¡Adiós a la isla del futuro! El Sunny vuela hacia el cielo otra vez', ''],
    ['https://jkanime.net/jkplayer/um?e=eS9sZkpYdUlZWDFpWjNBL0IxNnJSUStOQWNrYVFGVjdueVdiNGl1SDV1RmJjSHYwQkdRNHRXMldPOXVQZ1pOdHl5b2s4MjNnRVhFS05kSFU5Y2o3WGc9PTo6SKmWMpK2fSH_PkE6avb7zw--&t=91ec88f10eca7dc215aa4fccf808b41e&op=NjkyODg=', 'Episodio 1151', '¡El mundo en llamas! Las consecuencias de la transmisión de Vegapunk', ''],
    ['https://jkanime.net/jkplayer/um?e=em1ZS1luWlYyK0NBY3QrY3A5QWgyU2lCdk12QmVUbGlqQnNJN1NlYXI5M0lOZE9DbWlJb0pjblEzWHRPbi9vcy9HMkt6T2d4MUprcjJiVDl4cUs2OFE9PTo6AvybDOTnazMYC6ufLJfa4w--&t=2dd0b5fe644dc4257393d0c4fc30588a&op=Njk3NTA=', 'Episodio 1152', '¡La ira de la Marina! El lamento del Almirante Kizaru', ''],
    ['https://jkanime.net/jkplayer/um?e=K2dOczdoenVVbTJvVUNObmZueWI1NDYrL0s4RnNhL3lRNGl6MUlwajF5ZldUNmRsRmU2a2VWeHRMdDVMZHAxejZSM254T2FoWWdFTnRsY1FFdFRRT3c9PTo66hY_G3dkNBzjZ_r_bW3kwQ--&t=047d25708cbcccac510e4c2f5f6a010e&op=NzAxMTI=', 'Episodio 1153', '¡Hacia la nueva era! Los piratas de la peor generación se mueven otra vez', ''],
    ['https://jkanime.net/jkplayer/um?e=VjZyOEdUODZlL0x4cngrVnQycHpKekdoM2l3WDVyNUxDT21PMEFSZ2ZnaFlic3J0b3Zqd3l0aUNPS0RGdHFweTI1Nmc1aDdJbUU4YW1nMkcxbEl1Q1E9PTo6agMoQUP.9Ax.6.CSEG.SQg--&t=c1e981a65bea7af5cd1c3da613c76c48&op=NzAyNzM=', 'Episodio 1154', '¡El nuevo orden del Gorosei! El ascenso de Garling Figarland', ''],
    ['https://jkanime.net/jkplayer/um?e=VWFqeGdHSDhybDM2U3M4RCtxYmZScGFLNEpya3dzcWhxMmFXS2FrUmFlaEFrenVINTcwMXBFMG9Hb0h0Z094UGxKZmVPNHJ2YytKYkM3c05Dc2s1dHc9PTo6hyDzGzywmptaAj.MzWsk4Q--&t=e390761c1491dbd65c8ea4c8c02710e2&op=NzA0MTY=', 'Episodio 1155', '¡El fin de Egghead! El rumbo fijado hacia la tierra de los gigantes', ''],
    ['https://jkanime.net/jkplayer/um?e=VjA2MU81ZGxxUmVhSmJycGVZTWlnc3dHQ3lZa1hEaWR6RkFVajYwdUg5aTlWemxoNlA2UmNDK2lDbTV2V283TG02WW1QQ2FvWFl2cDBNbzhmZnlGckE9PTo6jD493Z.Gaygbqlj3boULcQ--&t=2c89a23d6e87f6b5cc27fad0c2cd58bc&op=NzI0MDI=', 'Episodio 1156', '¡Llegada a la tierra de los sueños! El mar tempestuoso de Elbaf', ''],
    ['https://jkanime.net/jkplayer/um?e=V3phT3RkcHA4UEFIVEplWlNQSXE1eVZ4QnF5eGJKUVNSYXgxUFc2eXZ5SjJNN241YnA1UkFuL2VuTGQxVW82V25VK3oxaG8vNmNRZkxSNnRJMTc0d2c9PTo6paB46JX3SqVXbg2I_6ispw--&t=d51db3e42ecebeb4358f1c01c9e7c2bf&op=NzI1MDQ=', 'Episodio 1157', '¡La tripulación separada otra vez! Misterio en el barco de los gigantes', ''],
    ['https://jkanime.net/jkplayer/um?e=T3Jkb3VWTXVzVEx5R1dCSWRMOG1mU1AxUVB1MDlrcGVZOE1nSjZWaHNncXRRQ0N6amhMSURVSGxXY1ZNTmozSk8xeUg2eW1YS3FhQnJnNGp1UVh2YVE9PTo6hyOhl0c4h0I1TK.TxV5aGg--&t=0aa143ebbb79710dffbbb8f7221a40bf&op=NzI2NTg=', 'Episodio 1158', '¡El laberinto de bloques! La aventura de Luffy en el castillo misterioso', ''],
    ['https://jkanime.net/jkplayer/um?e=MnpXajFLemlaamRYRDExcFhGd29wS2tSRzFjb1BJQlc0SXJhRDBFdElscGVyU01SRFdlWkpuMXpzWjd0d1VtdHVaRGVLbVNCNEEvSG5wUWpmcjdFblE9PTo6ReSO6g0EgkXCm.fI7hbTTA--&t=5ecff4b22ea50ab77df2fef0316b27c1&op=NzI3NTg=', 'Episodio 1159', '¡Aparece el Dios del Sol! La amenaza que acecha a los Sombrero de Paja', ''],
    ['https://mega.nz/embed/5J1gFazC#BS-eR26z2LJwGgQn9zuEod-UUhcUz8ZzhXZ6ttUGO9k', 'Episodio 1160', '¡Estalla el contraataque! Romper el espejo de las ilusiones', ''],
    ['https://jkanime.net/jkplayer/um?e=eC9Fd094RERYUHNJUXAxa01GTHlhSGthQ2FGaUp3SjgwcUk0WVgwYkxQOUhOL2xBT3oxcGlWR2VHREFQQzBSeW1Pc05PTHYwSHMrNE9iSmR2VXlXQlE9PTo6FTRNpHVyJDQ32T9_Eu2rOw--&t=473adfc7c103194e97b39d57785b5a6a&op=NzMxNDU=', 'Episodio 1161', '¡El guerrero legendario de Elbaf! El encuentro con Loki el príncipe maldito', ''],
    ['https://jkanime.net/jkplayer/um?e=WUltSDZtOVRaeTVaNVY1R2xZZHJUZnQwaWZOWXc1SmZrcWFKVld4WjZkMnRmcU93M2VUZVhzVjFjWC9KVVI0b0VTVE1YUVplRTBNL1VKOXgzZEFKS3c9PTo6xQC7BnIbepqbSv..L9dsVQ--&t=1a1a923fbce74e094478c4637205853d&op=NzMyNzQ=', 'Episodio 1162', '¡El secreto de la fruta del diablo real! La ambición del príncipe de Elbaf', ''],
    ['https://jkanime.net/jkplayer/um?e=TzNKaDRjbzRzNldyL3ljQk05a1AveENDU0lHWG5LY0tFSUU4czdZTFZHM3lSN01XSWF2eDZvN1lqM0hXQ1RZN1RFN2hEWXN4eVUrZU53RXRTZlJCY0E9PTo6atreNNYl8rfk9dYj1RzlCg--&t=4e9f691c744beb5731d199eb8d9c41ac&op=NzMzNzg=', 'Episodio 1163', '¡La red de búsqueda de los gigantes! Buscar a la tripulación desaparecida', ''],
    ['https://jkanime.net/jkplayer/um?e=ZDV4VUo2YlhCRUdIQ1ZHbnp3cnhPZXd4MExQdExHRXNxNTgycDA0RHZTazNyNnYxRjNueHN4d2sxcDNZTlJ5b0hjQ0VJanBBRm5jMjRTenNkRDkra3o4NmR2NlpGQ3pqemhZNi9TZWMzcms9Ojo65G4CTlgjjW3E4T_tA.xk&t=645064bacdc774b91b4d6c03475b7256&op=NzM1NDE=', 'Episodio 1164', '¡El contraataque de Zoro y Sanji! Feroz combate con las bestias del bosque', ''],
    ['https://jkanime.net/jkplayer/um?e=UnpzQ1ZUT2JORFNOdXRUeVNIcm9NTFZVQlo2ZVhmV25UMXRzb3dCZEdyVGwxNnRFMTJaOXVHN3pYVm9LbFVaK2F0L0Vyak1CUi9yYnpGa0x2UlpLK1E9PTo6cFQ4HNMe34TK9U4d4B0mYw--&t=4f79d0449706ec987a6dd8059b3ab0aa&op=NzQxODg=', 'Episodio 1165', '¡La llegada de Shanks el Pelirrojo a Elbaf! Ajuste de cuentas inminente', ''],
    ['https://jkanime.net/jkplayer/um?e=L1VldzJOZmsvQ3BwcjUwNnJLdWl1Zi9TcHgrUWFMcXBFTnovS1dNQjRHT0lMQTF1K1pGRE1UWEY0YThKaS9EcGdlRzhnMWZjTmdrVFVYejlrMEcxc1E9PTo68bkxQW_qDZdLs.zyXq.4Yg--&t=ec6ab86ed93aedbcacba79e44d0f42ba&op=NzQzMzA=', 'Episodio 1166', '¡La verdad tras la guerra del pasado! El misterio de la isla de los gigantes', ''],
    ['https://jkanime.net/jkplayer/um?e=Y3FOREVuN2dpc09ULzBlenJFNHVLa1hqM28vREkyRHdORXUwMVpIKzFkdFVOMVh5SGhER3psZVJlUnhNdWlIYStkaU80V1djTGxpZUVSbUZna2Z1MUE9PTo6NYlvLEwGfQ0jb7saIzoNvg--&t=ef91ed88ef8ec974e6497a749f54eee3&op=NzQ2MjM=', 'Episodio 1167', '¡El frente unido de la peor generación en Elbaf! Luffy y Eustass Kid otra vez', ''],
    ['https://jkanime.net/jkplayer/um?e=WUNnVjBKU2dIN0xMajFTT1BXMHVhb0tIWWN0WGV3WHhpZzZBQ25vRCtHTkEwcHBHRS9pODhGTTdWZjZ3NHlQb1NOeHM5aXVsd2VoOWx4Q0VZV2VyNVE9PTo6epr29GydsBuJnOxIEbD8ZQ--&t=896c5cd23a399beb728ac239c807fc1e&op=NzQ3Mjg=', 'Episodio 1168', '¡La ira del príncipe maldito! Las cadenas de Loki comienzan a romperse', ''],
    ['https://jkanime.net/jkplayer/um?e=VVo4bEw4cXVhMW9PNnN3alZldUQwRGZnYlJ0dURoYkRiWUsrTDBCbHpXK3doZXFYSXlDM3RSMlNFNU01c2F0Qnhvd3JUN0pna0J1d2s3NnAzOXE2TlE9PTo6itb6BU2pvrOatevX0eL.PQ--&t=949b11897a70d1c4ad770bf777edc264&op=NzUwMDI=', 'Episodio 1169', '¡El rugido del Gear Fifth en Elbaf! Luffy contra el gigante legendario', ''],
    ['https://jkanime.net/jkplayer/um?e=WllJTnJDdHpSOG5yVjJndWdieG9oTDVIamxCN0FFTnpwM1ViTXJ1K3hzYzRvTHRDaXh5SWlQeWVKQkZobE85elF1UkYyenJTL25ydlE1cVhseUJ0S3c9PTo6qqJj8Awkbpf48PEouM2jiQ--&t=a0f1e098df543ad06a9b77cd2a22fd49&op=NzUxOTA=', 'Episodio 1170', '¡El plan de escape de la tierra de los gigantes! El Sunny en una situación crítica', ''],
    ['https://jkanime.net/jkplayer/um?e=azRJaXhCMEhKbVp3UkRNVEN4eUZOSHZKNHBOeUZzc1JSWXFNd1BHUTJHM2p3VWYwRjVnMElLMHNxY2J1TVFTeWF5OGZDMEVJOUk2elAxdGFuUWFCMkE9PTo66zID1.Av9GrJFqUrHZd6LQ--&t=eef772f543649423a7650321238537d6&op=NzU0MzQ=', 'Episodio 1171', '¡La llegada del Cuartel General! Los marines imponen su ley en Elbaf', ''],
    ['https://jkanime.net/jkplayer/um?e=cnZacEJEK2dCa3N0S3NtN0ZRRm9lV2ZzdU9pZkNmbjQzYmFMZzVqQ2g5VTJqY3VVOUxmQ3gzYTNjZTNzcjFiWHppc1d5aE1OckhDZEMwbzZrdnRLQkE9PTo6O1T_YRrpUoHHd12IowFIhw--&t=76ce7e952e16db5bd1e4ed0c7de6bb6b&op=NzYwNzI=', 'Episodio 1172', '¡Feroz combate en la costa! Los gigantes de Shandora entran en acción', ''],
    ['https://jkanime.net/jkplayer/um?e=TUE0a3lGUFFZbjArQ3gzZnhEVmJkOUVmZGlKZU5SYzRBTktISTBhVHY5VnB5WkpzRmpzOU0rMWgrSFdVTVZkZ0ZmMnZ4eDM5NDQ3MUxkQksyZXBtZnc9PTo6FaDyhYIPQUB0o86WwbDWVw--&t=905946be421405a9c86bca20d8e4b683&op=NzYxODE=', 'Episodio 1173', '¡El honor de la tripulación! El ataque combinado de los Sombrero de Paja', ''],
    ['https://jkanime.net/jkplayer/um?e=WVp0ZVErbDNjREFNZjJrQzdzMUJPckc3c0tZOXBab0hSQ2pGOHdBUGR1QitBOEdyYWlRUmxDcnBiNEwvQXd0RnF2cCszQjNhdnFWNndkOXJ6bjE0UFE9PTo6vGcKzwgeflPMNICAu7eRoQ--&t=e80a6ee7b13a543d2c3654a13adad130&op=NzY0OTc=', 'Episodio 1174', '¡La traición de Loki! El plan de destrucción de la tierra de los gigantes', ''],
    ['https://jkanime.net/jkplayer/um?e=dC9rSHNaS2ExSDh6R0h3RHdxUW5UWXJLc2gvQ2YzdEh2WWJ5VU9QNnNDRXVad1VEbE0rUGVCOVdGN0Rndnh3UDNLOE1CWmJHaDJJQmF0OWhKVmtwUEE9PTo6acBHqhEY43imVEV_Z0Yc.A--&t=893e8c43941338a7401c1b7fe540ebad&op=NzY3MjI=', 'Episodio 1175', '¡El golpe de la liberación en Elbaf! El King Kong Gun de ira estalla', ''],
    ['https://jkanime.net/jkplayer/um?e=azZ5d2d1UHhqWkFnUEE4QzBaSzYwemQ3NkQ1T3B2bXdkWms2Yy9lZ3VycGlqVkVibnZaQlBtNlhPR3ZKeStvdHQrcng3T2djaDYxclJpcTFCSVhaVmc9PTo6CzLh4mOMBv04CCMSY6MwQw--&t=3a23cefeceb6296e40cf00bb34f7c190&op=NzY5MzM=', 'Episodio 1176', '¡El sacrificio del héroe! El fin de la fiera batalla de la costa', ''],
    ['https://jkanime.net/jkplayer/um?e=L1ErQVdZWHNmdHUwV2FDRG5xbFd3NTdwTDRnTlJ0VDJhOFk5MkZDbXQzcklZa3VZdjMwME9CZDVkZnNRcTBrYVJUa2RZQU44VlVWUEZrL1QzdXphNXc9PTo62jgUHvQcPlNDge_FQ3wO2A--&t=3fe37896a8338542a2ffebfe34a0f27c&op=NzcyNTU=', 'Episodio 1177', '¡El mundo conmocionado otra vez! Las noticias de Elbaf se propagan', ''],
    ['https://jkanime.net/jkplayer/um?e=NjRNcjB2TUcxZUV2QUp1UmNNSzI2cGlZbldxNTNMR0NqUlhuZnlxUXZaVFpCaXpQeGxSSEJYMXdkZVNYWnZUdnkyb1VubXR3MHdxUGJ0MmNUQU1TZXc9PTo6KMx1TZMf37LIfNSTHYgsGg--&t=deebfcc208c5dc3851a6e7b7254a3609&op=Nzc0MTQ=', 'Episodio 1178', '¡Hacia el desenlace final! Los cuatro emperadores se preparan para el choque', ''],
    ['https://jkanime.net/jkplayer/um?e=SXVrS0puMHJMYkdQRGZ2T05lZHlKbHo4Rm5KMHJsWlV1WW9yN0N3WUJSTzYzUEhaQ1RKaHVSOUdUdWdRTmllRnJVam92SUpjRGxCKzJBdUg5azhSNDNvem9vZ2dyNXBOb05JL2xuMW5NMUE9OjqHKyK7I8C4MooIy6UAhbpW&t=0e7c1e79fc47c64ad7fce5f37d1012a3&op=Nzc4NzI=', 'Episodio 1179', '¡La víspera de la gran guerra! Las voluntades heredadas se reúnen en Elbaf', ''],
    ['https://jkanime.net/jkplayer/um?e=ZXlUL1dabERSK21qV0xOcDNwZ05tQjRnYkJoM05MZG1VVTY0SWZ4OW1jelQ4YjRIYjlRZ0grZitxR0xvL3FuajBRcmpnTzVINDlEenVPcUJDYnJZY2c9PTo6Sdpt35wtm1FGJBkqm34Iaw--&t=829d291a999fc7705554679a809bc446&op=NzgyMTQ=', 'Episodio 1180', '¡El amanecer de la gran aventura definitiva! El camino fijado hacia el One Piece', '']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const oshinokoSeason1Episodes = [
    ['https://mega.nz/embed/oXlzVaJI#blIGtiZn4OmCx3k4co4BGA8ecbRMnngw99pFzxgJeVc', 'Episodio 1', 'Madre e hijos (Especial de larga duración)', 'https://m.media-amazon.com/images/M/MV5BNmZlMTY0OWYtYTM5Yy00NGZjLTk4ZTktYWM4YWMxYTMyNGYwXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/AOtj2L5a#D15xpdWlD6HHhjtWo7Voofw7AvOSx-lfa57WX0pEIUI', 'Episodio 2', 'Tercera opción', 'https://m.media-amazon.com/images/M/MV5BNTljMTJmZGQtNDhjOS00NDIxLWFmZTgtNjkyMTc1ODEyYjg5XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/of0klToa#ERnKZXjui-8E7Uxzjktq3dbMQRSIR-r37GhtxlYB74E', 'Episodio 3', 'Serie de TV basada en un manga', 'https://m.media-amazon.com/images/M/MV5BNTM2ZjAxZGEtODlmOS00NGJlLWEyM2EtMmZhZDAyNDhmYmZkXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/Qi1gARaA#rD1Jd76UrpKwyGtii_0J4ofm9Ilt5xM-pIS8fNU75YU', 'Episodio 4', 'Artistas', 'https://m.media-amazon.com/images/M/MV5BMDhjYjQ3MDgtMDZkYy00Nzg1LTgxZTctZjc0Y2Q2MzE0ZjgwXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/Bb8z3ZBY#e8NP1GNla7DuZZ_XImXzwbLpnSxz5XBSz3t6JcMd86g', 'Episodio 5', 'Reality show de citas', 'https://m.media-amazon.com/images/M/MV5BMzQyMjNmMDYtMjNlYi00OGIxLTg1NDItYWUzNzMzYTk4NjYyXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/B6FE0QbC#X8k_a4oSO4H23SlFnRCBa7WCOeZGZDtOqIVJ3tpRQwQ', 'Episodio 6', 'Egosurfing', 'https://m.media-amazon.com/images/M/MV5BOWEyNjI3NzktYWVmNy00YzdjLWI4N2MtNWJjMzM3MTQ4MDFhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/hudWhJiJ#6X0I5DBL3YhZon9Pi8w4NktySXtb_0WvgOUNBHJauzo', 'Episodio 7', 'Viral', 'https://m.media-amazon.com/images/M/MV5BMjIyMzkxMGQtM2FhMC00YjA5LTlhODktNWY5NWMxZjg0ZmM2XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/U7VADIST#HnjfuQXgOPdNUzfqoXAR_8e1_gkhlsKVMLccQDOKFKI', 'Episodio 8', 'Primera vez', 'https://m.media-amazon.com/images/M/MV5BZDZiODllYTYtNjBhNC00OGE3LWJkNzItMWJkNGQzYzMyYTczXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/IydXTILT#jSVPdbH15Y8YMOmduttODwBZU5RTNmfreuB2b0Z-lA8', 'Episodio 9', 'B Komachi', 'https://m.media-amazon.com/images/M/MV5BNGYxZjU2OGUtODM2NC00M2Q3LWJiYzktMTAwMjFkMmQ4YjBjXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/1r92UQCZ#5hsGRZoVrryTJoztTirllTmdMF_VFDfRn0uBNXVrzLQv', 'Episodio 10', 'Presión', 'https://m.media-amazon.com/images/M/MV5BMGMzNzhiZjgtZmI0MS00YTk2LTk0NjgtNzY0MTZmMGM5MjMwXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://mega.nz/embed/Af83WZRA#MRlLfyLi08HFJwyNFpfmQx1dt90Yg552wOvOMiqWrLA', 'Episodio 11', 'Idol', 'https://m.media-amazon.com/images/M/MV5BMjkyOTAxYTgtYzgwNy00MDIzLTkxNjYtYTkzNTMwNWRlYTVlXkEyXkFqcGc@._V1_QL75_UX800_.jpg']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const oshinokoSeason2Episodes = [
    ['https://jkanime.net/jkplayer/um?e=WFo1ZktaZDhydTAvay90a0VEcEdVL0xNN3prQUR0L0o5Z1dGY3cxbktmY1JJK1dvRkY0Qk4yaXJOYkp4VVNqQWlySitETHluNXdDTStjUC9EQkhBRVE9PTo6vVjVYo8bxbKjXTA6YT9FJA--&t=245314e1674419430e1a76062c3af22d&op=NTc3ODY=', 'Episodio 1', 'Teatro en vivo', 'https://m.media-amazon.com/images/M/MV5BMGE4N2ZhZDQtZGY2ZS00MzFkLWEzOGQtNDYwODE0ZjBiYmJmXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=OFdPazhkQStEbVNVeU5NSHN1blNHdmg4cWtYcnF5MzFaNDlrekI3NWRRN3pWYTJCTHpVbjZvTGVQOGtRcDFoUS8rb0xRMFBzbkJUVnl6WGNWWFV4b0E9PTo6e1pbPFnPCkB00mFFMDFSdw--&t=42060d5e90f85de15078fe5fdc30454e&op=NTc4NjQ=', 'Episodio 2', 'Transmisión de emociones', 'https://m.media-amazon.com/images/M/MV5BZGFlMWNhMzQtZDE0YS00NjEyLWIwNzQtZWI4YzhlNzk2OWE3XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ZWJiNWdSb0JBOUlQejVFTTFHL3J6RzlKd1R6QnpkdjFGTjdBS3haL1pzUGxrSnpScGNjaGIvSWdqbWxNVnFkMVMvaEQ2MWYzVnJFZ2VKdVpVZVZPR3c9PTo6gYJwZwCiUoqD6sVgF_vefw--&t=5f31e0ae5e2c74d0e75d62a6299b11ef&op=NTc5NzI=', 'Episodio 3', 'Escritura creativa', 'https://m.media-amazon.com/images/M/MV5BMDA4NDNlZDItYzk0ZS00YzhiLWI5ZTYtZjRmNjY4ODQ1NmU4XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ek1WTXBlRUliakdjdjUrOTltLzVqczlPWU1iV2RSeGdCdUp1K1RIWWxnclZkRCs2aXBGcGQ2SVdCUjNWNFNxZFRnNmtxTUFGelBHdytodEFyTUxIeWc9PTo6zhbMHIU13.SJmT1ZJMV8BA--&t=beb48656d9543b4b25dab4cbe510b6d1&op=NTgwNTA=', 'Episodio 4', 'Actuación emotiva', 'https://m.media-amazon.com/images/M/MV5BZTRjMzAxZDItMDQ4Yy00YmY1LWIyMzItYzM5Y2VlZWJlYmJhXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=N1R5RG9tUi9HM2dwUEJ3cG5YV3U5ZytNSkt4ZXgvVFpTTWtXTFgxMFRXZTJiRjZuV1l1ekQ0Y0JXaFBJZ0MrWHhENEpMMVZ6VFpGbkxiN0lxVkNWWEE9PTo6XoHNM4CXzHltBd6pnZL4ng--&t=a634245597b1a300e967eb6a91a9c33b&op=NTgxNTA=', 'Episodio 5', 'Inalcanzable', 'https://m.media-amazon.com/images/M/MV5BYzU2NTBjM2MtNTFjOC00Y2ZmLTg3MmEtMTg5YjkwNTE5MTBiXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ZlJ2cVNWTjBoUUxQYVRxSG5ETWVrRkJLS1oyT3FxS1hscWtLVm1ndGg1dkxoQWNyRlFSMzV0WGJNYmJyaTBtL3p6dDlnRmdwUklKaFBkMTdZbnlZZUE9PTo6dk523h8sfVu99y4DouyOpg--&t=8bd55e3c1111548f11364f2a1e920de1&op=NTgyNDA=', 'Episodio 6', 'Crecimiento', 'https://m.media-amazon.com/images/M/MV5BMzE5OTg3NmMtNThjZS00NWI5LTg2NzEtN2UxNGE4MzQ3MjY3XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=NzZlb2wxNHJGRWFVbTlSbkQ4aFNBeXlEMlVzU1d1dWRuUFl5QW8za2V3QnczVzFwQ3JmejI3UExhMVhkYW9WSTU0WVJIQVVGNWtrVFJVS1dFZnRIZFE9PTo60NpgcJtr8bC61_g96d1yvg--&t=91630ab347f2ff21682ee7e37dafd106&op=NTgzMjY=', 'Episodio 7', 'Antorcha', 'https://m.media-amazon.com/images/M/MV5BY2Y4OGY5OWItNTNlZC00NDNmLTliODktNTNiMTlkNDU1NWRmXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=MFpHU1FSZlFpMEFmZzhkUFZBa0haMm5hbzVTeEd4dk5FRWRHUnZGc21LdXZ5V3AyRVRtbWdFVGJ2cmxHWDJCRXZMNEZlaE1yZC9WclhMWVFEM01vanc9PTo6st3Qtra0ctE4N4h4Ejdaug--&t=3775062cc8d9d513cdbe6a24409c515c&op=NTg0MTk=', 'Episodio 8', 'Gatillo', 'https://m.media-amazon.com/images/M/MV5BYjJiMGUwNTEtNGRlNi00MTNhLTg2YzgtNTg0MDY3ZTkyMTA1XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=cVV2anoxdGRoM2VmbVE5YUZYUE1yRmY1TUtlQThTT1pxVUZEZHRRZ0kzbEF5SExOWEY1Vm03SlRuMEl6MXI4aUUrbllCYnl5a01ETzVHMmY5VWRxdlE9PTo6rTEz91nH.3YFSJouFJmNUA--&t=e6a82abb7fd7502a2a2b83e3f4c255cf&op=NTg1NDg=', 'Episodio 9', 'Sueño', 'https://m.media-amazon.com/images/M/MV5BYjlkMDdmMjItOGM4OC00NDEzLWJhNzktMzBhZWZiYzRhNWUxXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=UnZPb1B2T1QyTFlhTFB1V29xNnpFMDNNa0c2N3Z3cVdpbUNmWEZ2YS90bWxHeFAzV2JiS3VVTTB4TjhSY01IRllKV1o3dUg3MHNLR0dGMHlyb2hIN1E9PTo62qns.uJgkdaIMMq6azsxEQ--&t=184b7d28196edfa361d4d5d8f2efd6b1&op=NTk4ODc=', 'Episodio 10', 'Liberación', 'https://m.media-amazon.com/images/M/MV5BY2JkNzY4MTUtZjZmOC00MjIwLTllZjMtZjY4NjEwNzZjZDkwXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=RGNhd0ZuQm9rTXJZaDUwdUtkU3A0NVJpYkJRek0vdFY5Kzc2VFozZlo4dXRoZFFYQllPZjZ1aEx2OTV2anVubytyZzYyUHdoSWpEc1NnU3BWK1JPeHc9PTo6puwn.lUi6HaYF.I6mEDq3w--&t=7129b40a20a210ce0a2f0f549207fc97&op=NTk5NzE=', 'Episodio 11', 'Libertad', 'https://m.media-amazon.com/images/M/MV5BZjFjNWU4NjQtMDAyNy00M2IyLTgyY2ItZmUzOWY4NWU2NTE1XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=SGk0a1dJMVBWaFZuc2xOVWh3QzhhdmJDcFZaRFdXQXFOODNwaGdWdGFrMk0rMjhpbXNoL2hLTWpyTEIwdDVqOHVoaW4rQk9vOG9iK1hES1EwdWx4VVE9PTo6P2fdruJFxt5fb.F9mOgiTg--&t=3076c17deb9b280f6e130fa7c284301e&op=NjAwNDc=', 'Episodio 12', 'Reencuentro', 'https://m.media-amazon.com/images/M/MV5BOGRlMGMzZWItN2FkMC00OGNiLThlZGQtMjRjOWIyMGVkMjIxXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=WCtxNXRicEZEL092d1QwYzMwazFhY0FtNHFNdWtxVDZDQlBNUitJcUplVHhMc3BwZlZ2N3FjZGNzWlppbjBMSGFhenVGMVFQaURwOU5XNVZtOXhTdXc9PTo6200qnHE5W8bvnXzpH_wHOQ--&t=5e41dae8bf2534bf43a9227f52938a73&op=NjAxNjU=', 'Episodio 13', 'Deseo', 'https://m.media-amazon.com/images/M/MV5BNjhhNDcwNGMtYWZjMS00MjU4LWEzNTgtMzYxMzNiMzlkMzhmXkEyXkFqcGc@._V1_QL75_UX800_.jpg']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const oshinokoSeason3Episodes = [
    ['https://jkanime.net/jkplayer/um?e=a0gzRnA1RUI1ekFHaGZWckZTejAxNkRuT0I1L01kMEIyaGwzVk9lczVFb25iRmtrZFYvQ2pUMXdZQkRQNmtTejNkUnZoQlQ4bUNnRE8rc1UvOHFGSlE9PTo64ngIBp6FF5Nn7.3749jvXA--&t=a40a53803966f1f7683a93c2b23223b1&op=NzA4MTA=', 'Episodio 1', 'Caída total', 'https://m.media-amazon.com/images/M/MV5BMTU1YWZmNmYtYmRkOS00N2JlLTkyN2EtZTVjYTIxNjcxNzQ4XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=WEQ2MGgraXp2R0JPb1VLOHVJbld1WXA3MlpHL1J2WTV1ZFI2YVlvcDN0bTBsOXJybGRtZms1QWx5bmQzRVNKTllqSllXc2dycEo0bytEbkYydjZtclE9PTo62tlvq.33emvxtpCqU1uJxA--&t=01e7695f0282f926bb6d0de485e32b31&op=NzA5Mjc=', 'Episodio 2', 'Ambición', 'https://m.media-amazon.com/images/M/MV5BNTc5YTY1ODgtZDBhOC00MTFhLWI1Y2UtOGM1ZTEwNzdhMWI5XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ekJTTjJBSmg2VDhDTktFM3h6dGxHMlFYOUppL2prb0FZUTB1azFHd0tUQkRFOTNCbDlyZjBFOGNuNjh0VENGc2Z0VTVnb1BsUTZubG1GOWNWQzlwY1E9PTo6y6xgN31Njf87iG95fhoaYg--&t=3cdf6658730a5e265fba7703ef0b9032&op=NzEwNTU=', 'Episodio 3', 'Estrategia', 'https://m.media-amazon.com/images/M/MV5BYzNmZjYyZDItODNlNy00YWYxLTliMmMtZDkyYTQzMzRmNjdiXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=Ry9TMGdTWERoT2Y2d21TamZQOWZUNTBqMm1menFDM1k5YkRLbjVndUhQWVpzMFhKRnlDVlFnVTIxZG9TbGsxZk1hVmlzNVEwY0hVNXEwWFhJbmVndEE9PTo6VCtHRegDYad9gCdH2K5f4w--&t=acadb2237f602f1d7539e0de0fb70818&op=NzExNzc=', 'Episodio 4', 'Voz', 'https://m.media-amazon.com/images/M/MV5BYWE1M2Y2Y2EtOTg0ZC00YmIwLThlZTQtZTM5ZWE2NzMzY2FlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=NEdBRmpqNnU1Y04ydGZYZHFKTnJHZkhZcXdreGV6eGVLKzFGNk9VNGJHSWFoUG9WM0JnckEyWDhhdit0ekk5NTA3NGF4TTJCdTBUZXlkbktSSXMyeUE9PTo6FV8di99BjhRtY9.9ZLrUSQ--&t=d49bc07c082b22bd76a6f51405dec03d&op=NzE0Mjk=', 'Episodio 5', 'Riqueza y pasión', 'https://m.media-amazon.com/images/M/MV5BZDRhNGE5NjItMzI5Ny00ZDhjLTllNDQtNDhlMWNjOWVmYjFiXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ZG1Kc1RvZVUvSExPeUMra2VOajlGb1ZENVZBRUlLRm5mckgrUjNQVm5sYVptTFV0SGE5S1BXOE9QckMzckVJVjcxYU9uUVVZdzN5QmpSQ2ptWDJxL0E9PTo6qeRnuSuCu4B8NBvSedStiQ--&t=273a6bd6b762dbcee037107ca65d506b&op=NzE1NjE=', 'Episodio 6', 'Oscuridad', 'https://m.media-amazon.com/images/M/MV5BOTc4OWQzNGQtZmM1OC00MDdiLTg3NGEtZWU1MThiMGM5N2I1XkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=N2duUTBHVHBDb1FGdFBhN2dzc2VYQkY1SldIS2pCd0dBMTUxdTBRbWN6cXhLV3dwTnBiT0swcktVbFN1UFl0bFd3dzlTSlo3V1JSb3NtM0hZTDU0UGc9PTo6TkXWsdhg.bzGn0MMUTqf8w--&t=7e5f4c05862fffce51b2c6866b848d8c&op=NzE3ODg=', 'Episodio 7', 'Venganza', 'https://m.media-amazon.com/images/M/MV5BNzA1MzYwMzEtY2MwMy00Nzg4LWJjMTktMmQzZmY3ZGUzYWFlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=ZFQ0N2hKLzk4Z3BUQm5adE8rNUJqK01laGNNZ3VyK1Q0dFNuczgyWkJJdEZVYTdIcjZFR01oM0ZtdGJBclN5Y0VyQzI3WVcrM2hMTDM3N0Z5cFJRTWc9PTo6vxY1B7vIUvYynUFrjdYhKw--&t=a57ed56d0e72f04338b07f78b23d501b&op=NzE5Mjg=', 'Episodio 8', 'Girasoles', 'https://m.media-amazon.com/images/M/MV5BMDljYjBhMTMtYzRlZi00NGIxLTg1YTYtYTA3MzhmMDgyNzIzXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=YkI4L2pVTEE2WTNwTUZlWnR2U0c4aWhUajhtbVN5b1h4bzZJU1JPSFdUaEp0Z2Z2Q2N1cXNPUFk1TUVMSEszemMxU1FFVXRuRG5nK2ZVcXhGUzRKS0E9PTo61y6xW2gtBQ263aFRsvrfWw--&t=2c5bf470929d4d41ecef60f44185ac8e&op=NzIwNTE=', 'Episodio 9', 'Juicio', 'https://m.media-amazon.com/images/M/MV5BNDJmYzRmNmEtODkzZC00Y2JhLTk4NjQtOGJkMGU3OWZmYjhlXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=b1hiWGVHbmlPZ2VaVmhub2J0VkhqbnpOTTZoV2JpRjFUVUhWZ3pxRVJoVFFXRWtmU3QvbDdidDZuK1ZmUWJtQW5RcTI3QjFmU3lxZ0gyaEYrWkxUcEE9PTo6jj65NuEVPGMZb0_OOnQC8w--&t=6ed94f911e8e2aa7110950d57ebdcde2&op=NzIxMzk=', 'Episodio 10', 'El rodaje', 'https://m.media-amazon.com/images/M/MV5BNjc5NGNmMDktYTQ3Ni00YjA1LTk3ZDktNmU4NTIzY2RiNjBmXkEyXkFqcGc@._V1_QL75_UX800_.jpg'],
    ['https://jkanime.net/jkplayer/um?e=NWNHMW1qOGV2WW15NGhsaXNsRWRKUTBIVkxnbmtwZEhlczF1cjBkRCtGU0Nvek9oaXkza0NIbFVTMlNnb05HSTJKYkVDYUtCRkJHYXViZE14SnpHeXc9PTo6QRwNhoS3Cl_XROYfIPAc2Q--&t=8e7967edcc3aad858a432fbe078acf1e&op=NzIyMzg=', 'Episodio 11', 'Así empezó todo', 'https://m.media-amazon.com/images/M/MV5BOWUyYTNkZjYtYmFiNS00YzM0LTk2ZDEtYjdmMDRjZWFkMzE5XkEyXkFqcGc@._V1_QL75_UX800_.jpg']
].map(([url, title, description, image]) => [
    url,
    title,
    description,
    image,
    'iframe'
]);

const catalogData = {
	aventuras: {
		label: 'CATÁLOGO 01', title: 'Mushoku Tensei', description: 'Cuando un autobús atropella a un joven de 34 años que no ha logrado mucho en su vida, su historia no termina ahí. Habiendo reencarnado en un niño, Rudy aprovechará cada oportunidad para vivir la vida que siempre quiso. ¡Con la ayuda de sus amigos, unas habilidades mágicas recién adquiridas, y el coraje para hacer las cosas que siempre ha soñado, se embarca en una aventura épica, con su...',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-Mushoku.jpg', videos: mushokuSeason1Episodes },
			{ title: 'Temporada 2', description: '25 Episodios', cover: 'img/Temp2-Mushoku.webp', videos: mushokuSeason2Episodes },
			{ title: 'Temporada 3', description: '14 episodios', cover: 'img/Temp3-Mushoku.jpg', videos: mushokuSeason3Episodes }
		]
	},
	documentales: {
		label: 'CATÁLOGO 02', title: 'Inazuma Eleven', description: 'Ramon Junior High School tiene un horrible programa de fútbol que está a punto de terminar. Endou Mamoru, un jugador estrella que alguna vez tuvo problemas, y un grupo de jugadores de rag-tag reconstituyen el equipo y crecen juntos mientras luchan para convertirse en formidables y agitan el mundo del fútbol.',
		seasons: [
			{ title: 'Temporada 1', description: '26 Episodios', cover: 'img/Temp1-Inazuma.jpg', videos: inazumaSeason1Episodes },
			{ title: 'Temporada 2', description: '41 Episodios', cover: 'img/Temp2-Inazuma.jpg', videos: inazumaSeason2Episodes },
			{ title: 'Temporada 3', description: '60 Episodios', cover: 'img/Temp3-Inazuma.jpg', videos: inazumaSeason3Episodes }
		]
	},
	especiales: {
		label: 'CATÁLOGO 03', title: 'Death Note', description: 'Light Yagami es un estudiante de secundaria que encuentra un cuaderno sobrenatural llamado "Death Note", que le permite matar a cualquier persona cuyo nombre escriba en él. Con la ayuda de este cuaderno, Light intenta crear un mundo sin crimen, pero pronto se encuentra con un brillante detective conocido como L, quien está decidido a detenerlo.',
		seasons: [
			{ title: 'Temporada 1', description: '37 Episodios', cover: 'img/Temp1-DeathNote.jpg', videos: deathNoteEpisodes }
		]
	},
	chainsaw: {
		label: 'CATÁLOGO 04', title: 'Chainsaw Man', description: 'Denji es un adolescente que vive con un demonio motosierra llamado Pochita. Para pagar la deuda que le dejó su padre tras su muerte, ha tenido que ganarse el pan como puede matando demonios y vendiendo sus cadáverse a la mafia, aunque su vida siempre ha sido miserable. Cuando una traición provoca la muerte de Denji, Pochita hace un contrato con él y Denji revive como "Chainsaw Man", un ser...',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Chainsaw.jpg', videos: chainsawSeason1Episodes },
			{ title: 'Chainsaw Man: Arco de Reze', description: '1 Película', cover: 'img/Movie1-Chainsaw.jpg', videos: chainsawMovie1Episodes }
		]
	},
	vinland: {
		label: 'CATÁLOGO 05', title: 'Vinland Saga', description: 'Cuando Thors, un gran guerrero viking muere asesinado en batalla a manos de Askeladd, un mercenario, su hijo, Thorfinn, jura vengarse. Para ello tendrá que demostrar su valía antes de ganarse el derecho a retar a un duelo al asesino de su padre.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-Vinland.jpg', videos: vinlandSeason1Episodes },
			{ title: 'Temporada 2', description: '24 Episodios', cover: 'img/Temp2-Vinland.png', videos: vinlandSeason2Episodes }
		]
	},
	hunter: {
		label: 'CATÁLOGO 06', title: 'Hunter x Hunter', description: 'Gon, un joven que vive en Isla Ballena, sueña con convertirse en un Cazador como lo era su padre, el cual se fue cuando Gon todavía era un niño.',
		seasons: [
			{ title: 'El Examen del Cazador', description: '26 Episodios', cover: 'img/Temp1-HxH.jpg', videos: hunterExamEpisodes },
			{ title: 'La Torre del Cielo / Coliseo del Cielo', description: '12 Episodios', cover: 'img/Temp2-HxH.webp', videos: hunterTowerEpisodes },
			{ title: 'Ciudad Yorknew / Phantom Troupe', description: '20 Episodios', cover: 'img/Temp3-HxH.jpg', videos: hunterYorknewEpisodes },
			{ title: 'Greed Island', description: '17 Episodios', cover: 'img/Temp4-HxH.webp', videos: hunterGreedIslandEpisodes },
			{ title: 'Hormigas Quimera', description: '61 Episodios', cover: 'img/Temp5-HxH.webp', videos: hunterChimeraAntsEpisodes },
			{ title: 'La Elección del 13º Presidente Cazador', description: '12 Episodios', cover: 'img/Temp6-HxH.jpg', videos: hunterElectionEpisodes }
		]
	},
	bluelock: {
		label: 'CATÁLOGO 07', title: 'Blue Lock', description: 'Tras la derrota de Japón en el Mundial de Fútbol, la Asociación Japonesa de Fútbol decide crear un programa de entrenamiento para encontrar al mejor delantero del país. Para ello, 300 jóvenes jugadores son encerrados en un complejo llamado "Blue Lock", donde deberán competir entre ellos para convertirse en el delantero definitivo.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-BlueLock.jpg', videos: blueLockSeason1Episodes },
			{ title: 'Película Episodio Nagi', description: '1 Película', cover: 'img/Peli-BlueLock.webp', videos: blueLockMovie },
			{ title: 'Temporada 2', description: '14 Episodios', cover: 'img/Temp2-BlueLock.webp', videos: blueLockSeason2Episodes }
		]
	},
	aoashi: {
		label: 'CATÁLOGO 08', title: 'Aoashi', description: 'Aoashi es un joven futbolista que sueña con convertirse en un gran jugador profesional. Tras ser descubierto por un entrenador, se une a un equipo juvenil y comienza su camino hacia la cima del fútbol japonés.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-Aoashi.jpg', videos: aoashiSeason1Episodes },
			{ title: 'Temporada 2', description: 'En estreno', cover: 'img/Temp2-Aoashi.webp', videos: aoashiSeason2Episodes }
		]
	},
	gurren: {
		label: 'CATÁLOGO 09', title: 'Gurren Lagann', description: 'Esta es la historia de un hombre que aún no comprende lo que el destino le depara… En un futuro lejano, la humanidad ha vivido silenciosa e inquieta bajo tierra durante cientos de años, expuesta a terremotos y derrumbes. En una de estas aldeas viven dos jóvenes: uno llamado Simon, tímido e ingenuo, y el otro llamado Kamina, quien cree en la existencia de un mundo en la superficie, sobre sus cabezas.',
		seasons: [
			{ title: 'Temporada 1', description: '27 Episodios', cover: 'img/Temp1-Gurren.jpg', videos: gurrenSeason1Episodes },
		]
	},
	jujutsu: {
		label: 'CATÁLOGO 10', title: 'Jujutsu Kaisen', description: 'Dificultades, arrepentimiento, vergüenza… Los sentimientos negativos de los humanos se convierten en Maldiciones que nos acechan en nuestra vida diaria. Las Maldiciones campan a sus anchas por todo el mundo, y pueden llevar a las personas a sufrir terribles desgracias e incluso dirigirlas a su muerte. Y lo que es peor: solo una Maldición puede exorcizar otra Maldición.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-Jujutsu.jpg', videos: jujutsuSeason1Episodes },
			{ title: 'Película Jujutsu Kaisen 0', description: '1 Película', cover: 'img/Movie1-Jujustu.jpg', videos: jujutsuMovie1Episodes },
			{ title: 'Temporada 2', description: '23 Episodios', cover: 'img/Temp2-Jujutsu.webp', videos: jujutsuSeason2Episodes},
			{ title: 'Película El tesoro escondido', description: '1 Película', cover: 'img/Movie2-Jujutsu.webp', videos: jujutsuMovie2Episodes},
			{ title: 'Temporada 3', description: '12 Episodios', cover: 'img/Temp3-Jujutsu.webp', videos: jujutsuSeason3Episodes }			
		]
	},
	nobleza: {
		label: 'CATÁLOGO 11', title: 'La nobleza de las flores', description: 'Tras conocerse por casualidad, el cada vez más fuerte vínculo entre Rintaro y Kaoruko podría conseguir lo imposible: limar asperezas entre sus institutos rivasles y sus amigos.',
		seasons: [
			{ title: 'Temporada 1', description: '13 Episodios', cover: 'img/Temp1-Nobleza.webp', videos: noblezaSeason1Episodes },
		]
	},
	yla: {
		label: 'CATÁLOGO 12', title: 'Your lie in April', description: 'Tras una tragedia, un prodigio del piano abandona la música hasta que conoce a una excéntrica violinista. Con su estilo libre y lleno de vida, ella lo obligará a enfrentar su pasado y a regresar a los escenarios en un emotivo viaje lleno de color, juventud y superación.',
		seasons: [
			{ title: 'Temporada 1', description: '22 Episodios', cover: 'img/Temp1-YLA.jpg', videos: ylaSeason1Episodes },
		]
	},
	clover: {
		label: 'CATÁLOGO 13', title: 'Black Clover', description: 'En un mundo en el que la magia lo es todo, Asta y Yuno son dos niños que encuentran abandonados el mismo día en una iglesia. Mientras que Yuno crece demostrando tener unos grandes poderes mágicos, Asta parece ser la única persona en el mundo que no posee capacidad mágica alguna. Cuando alcanzan los quince años de edad, ambos reciben sus propios grimorios, libros mágicos que amplifican la magia...',
		seasons: [
			{ title: 'Temporada 1 - Parte 1', description: '51 Episodios', cover: 'img/Temp1-Clover.jpg', videos: cloverSeason1Episodes },
			{ title: 'Temporada 1 - Parte 2', description: '51 Episodios', cover: 'img/Temp2-Clover.webp', videos: cloverSeason2Episodes },
			{ title: 'Temporada 1 - Parte 3', description: '52 Episodios', cover: 'img/Temp3-Clover.webp', videos: cloverSeason3Episodes },
			{ title: 'Película La espada del rey mago', description: '1 Película', cover: 'img/Movie1-Clover.jpg', videos: cloverMovie1Episodes },
			{ title: 'Temporada 1 - Parte 4', description: '16 Episodios', cover: 'img/Temp4-Clover.jpg', videos: cloverSeason4Episodes },
			{ title: 'Temporada 2', description: 'En estreno', cover: 'img/Temp5-Clover.webp', videos: cloverSeason5Episodes }
		]
	},
	ragnarok: {
		label: 'CATÁLOGO 14', title: 'Record of Ragnarok', description: 'Antes de erradicar a los humanos de la faz de la Tierra, los dioses le dan una última oportunidad para demostrar su valía. ¡Que empiecen las batallas de Ragnarok!',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Ragnarok.jpg', videos: ragnarokSeason1Episodes },
			{ title: 'Temporada 2', description: '15 Episodios', cover: 'img/Temp2-Ragnarok.jpg', videos: ragnarokSeason2Episodes },
			{ title: 'Temporada 3', description: '15 Episodios', cover: 'img/Temp3-Ragnarok.webp', videos: ragnarokSeason3Episodes }
		]
	},
	aot: {
		label: 'CATÁLOGO 15', title: 'Attack on Titan', description: 'Muchos años atrás, la humanidad estuvo al borde de la extinción con la aparición de unas criaturas gigantes que devoraban a todas las personas. Huyendo, la humanidad consiguió sobrevivir en una ciudad fortificada de altas murallas que se ha convertido en el último reducto de la civilización contra los Titanes que campan a sus anchas por el mundo. Ahora esa paz está a punto de verse interrumpida...',
		seasons: [
			{ title: 'Temporada 1', description: '25 Episodios', cover: 'img/Temp1-Aot.webp', videos: aotSeason1Episodes },
            { title: 'OVA Attack on Titan: No Regrets', description: '2 Partes', cover: 'img/OVA1-Aot.webp', videos: aotOVA1Episodes },
            { title: 'OVA Attack on Titan OAD', description: '3 Episodios', cover: 'img/OVA2-Aot.webp', videos: aotOVA2Episodes },
			{ title: 'Temporada 2', description: '12 Episodios', cover: 'img/Temp2-Aot.webp', videos: aotSeason2Episodes },
			{ title: 'Temporada 3', description: '22 Episodios', cover: 'img/Temp3-Aot.webp', videos: aotSeason3Episodes },
			{ title: 'Final Season', description: '30 Episodios', cover: 'img/Temp4-Aot.jpg', videos: aotSeason4Episodes }
		]
	},
	leveling: {
		label: 'CATÁLOGO 16', title: 'Solo Leveling', description: 'Lo que no te mata te hace más fuerte, pero en el caso de Sung Jinwoo, lo que lo mató lo hizo más fuerte. Después de ser brutalmente asesinado por monstruos en una mazmorra de alto rango, Jinwoo regresó con el Sistema, un programa que solo él puede ver y que eleva su nivel en todos los sentidos. Ahora, está decidido a descubrir los secretos detrás de sus poderes y la mazmorra que los engendró.',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Leveling.jpg', videos: levelingSeason1Episodes },
			{ title: 'Temporada 2', description: '13 Episodios', cover: 'img/Temp2-Leveling.webp', videos: levelingSeason2Episodes }
		]
	},
	opm: {
		label: 'CATÁLOGO 17', title: 'One Punch Man', description: 'Saitama comenzó a hacer héroe por pura afición, y tras tres años de un durísimo entrenamiento consiguió tal nivel de fuerza que puede acabar con cualquier enemigo de un solo puñetazo. La vida lo llevó a conocer a Genos, un cíborg que ahora es su fiel discípulo, y a convertirse en un héroe oficialmente bajo la Asociación de Héroes. Pero no todo es de color de rosa en la brillante (como su calva)...',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-OPM.webp', videos: opmSeason1Episodes },
			{ title: 'Temporada 2', description: '12 Episodios', cover: 'img/Temp2-OPM.jpg', videos: opmSeason2Episodes },
			{ title: 'Temporada 3', description: '13 Episodios', cover: 'img/Temp3-OPM.webp', videos: opmSeason3Episodes }
		]
	},
	dragonball: {
		label: 'CATÁLOGO 18', title: 'Dragon Ball', description: 'Las aventuras de Son Goku y sus amigos en la búsqueda de las bolas de dragón.',
		seasons: [
			{ title: 'Arco de Pilaf (1-13)', description: '13 Episodios', cover: 'img/Temp1-DragonBall.jpeg', videos: dragonBallPilafEpisodes },
			{ title: 'Arco del 21. Torneo Mundial de las Artes Marciales (14-28)', description: '15 Episodios', cover: 'img/Temp2-DragonBall.webp', videos: dragonBallWorldTournamentEpisodes },
			{ title: 'Arco del Ejército del Listón Rojo (29-78)', description: '50 Episodios', cover: 'img/Temp3-DragonBall.jpg', videos: dragonBallRedRibbonEpisodes },
			{ title: 'Arco del 22.º Torneo Mundial de las Artes Marciales (79-101)', description: '23 Episodios', cover: 'img/Temp4-DragonBall.jpg', videos: dragonBall22TournamentEpisodes },
			{ title: 'Arco del Rey Demonio Piccolo (102-122)', description: '21 Episodios', cover: 'img/Temp5-DragonBall.webp', videos: dragonBallDemonKingEpisodes },
			{ title: 'Arco del 23.º Torneo Mundial de las Artes Marciales (123-153)', description: '31 Episodios', cover: 'img/Temp6-DragonBall.jpg', videos: dragonBall23TournamentEpisodes }
		]
	},
	haikyu: {
		label: 'CATÁLOGO 19', title: 'Haikyu!', description: 'Shoyo Hinata se une al club de voleibol del instituto Karasuno para ser como su ídolo, el Pequeño Gigante. Allí descubre que debe formar equipo con su némesis del instituto, Tobio Kageyama. Sus estilos opuestos se convierten en un arma sorprendente, pero ¿podrán vencer a sus rivales del instituto Nekoma en la esperada Batalla del Basurero?',
		seasons: [
			{ title: 'Temporada 1', description: '25 Episodios', cover: 'img/Temp1-Haikyu.jpg', videos: haikyuSeason1Episodes },
			{ title: 'Temporada 2', description: '25 Episodios', cover: 'img/Temp2-Haikyu.jpg', videos: haikyuSeason2Episodes },
			{ title: 'Temporada 3', description: '10 Episodios', cover: 'img/Temp3-Haikyu.webp', videos: haikyuSeason3Episodes },
			{ title: 'Temporada 4', description: '25 Episodios', cover: 'img/Temp4-Haikyu.jpg', videos: haikyuSeason4Episodes }
		]
	},
	yourname: {
		label: 'CATÁLOGO 20', title: 'Your Name.', description: 'Una chica de una zona rural despierta de vez en cuando en el cuerpo de un chico de ciudad que vive esa vida emocionante con la que ella siempre ha soñado.',
		seasons: [
			{ title: 'Temporada 1', description: '1 Película', cover: 'img/Temp1-YourName.jpg', videos: yournameSeason1Episodes },
		]
	},
	fullmetal: {
		label: 'CATÁLOGO 21', title: 'Fullmetal Alchemist: Brotherhood', description: 'Una chica de una zona rural despierta de vez en cuando en el cuerpo de un chico de ciudad que vive esa vida emocionante con la que ella siempre ha soñado.',
		seasons: [
			{ title: 'Temporada 1 LATINO', description: '64 Episodios', cover: 'img/Temp1-Fullmetal.jpg', videos: fullmetalSeason1LATEpisodes },
            { title: 'Temporada 1 JAP SUB', description: '64 Episodios', cover: 'img/Temp1-Fullmetal.jpg', videos: fullmetalSeason1Episodes },
		]
	},
	drstone: {
		label: 'CATÁLOGO 22', title: 'Dr. Stone', description: 'Senku es un joven extremadamente inteligente con un gran don para la ciencia y una acida personalidad, y su mejor amigo es Taiju, que es muy buena persona pero mas apto para usar los musculos que para pensar. Cuando tras cierto incidente toda la humanidad acaba convertida en piedra, ellos logran despertarse en un mundo miles de años despues, con la civilizacion humana completamente desaparecida y con toda la humanidad congelada en piedra como ellos estuvieron. Ahora es su obligacion rescatar a la gente y crear un nuevo mundo',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-DrStone.jpg', videos: drstoneSeason1Episodes },
			{ title: 'Temporada 2', description: '11 Episodios', cover: 'img/Temp2-DrStone.webp', videos: drstoneSeason2Episodes },
			{ title: 'Pelicula: Ryusui', description: '1 Película', cover: 'img/Movie1-DrStone.jpg', videos: drstoneMovie1Episodes },
			{ title: 'Temporada 3', description: '22 Episodios', cover: 'img/Temp3-DrStone.jpg', videos: drstoneSeason3Episodes },
			{ title: 'Temporada 4', description: '37 Episodios', cover: 'img/Temp4-DrStone.jpeg', videos: drstoneSeason4Episodes }
		]
	},
	quintillizas: {
		label: 'CATÁLOGO 23', title: 'Las Quintillizas', description: 'Fuutarou Uesugi es un estudiante de segundo año de instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian...',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Quintillizas.webp', videos: quintillizasSeason1Episodes },
			{ title: 'Temporada 2', description: '12 Episodios', cover: 'img/Temp2-Quintillizas.webp', videos: quintillizasSeason2Episodes },
			{ title: 'The Quintessential Quintuplets Movie', description: '1 Película', cover: 'img/Movie1-Quintillizas.jpg', videos: quintillizasMovie1Episodes }
		]
	},
	cyberpunk: {
		label: 'CATÁLOGO 24', title: 'Cyberpunk', description: 'En una distopía de corrupción e implantes cibernéticos, un chico prodigioso y temerario busca convertirse en un mercenario proscrito, conocidos como edgeruners.',
		seasons: [
			{ title: 'Temporada 1', description: '10 Episodios', cover: 'img/Temp1-Cyberpunk.jpg', videos: cyberpunkSeason1Episodes },
			{ title: 'Temporada 2', description: '10 Episodios', cover: 'img/Temp2-Cyberpunk.jpeg', videos: cyberpunkSeason2Episodes }
		]
	},
	tomodachi: {
		label: 'CATÁLOGO 25', title: 'Tomodachi Game', description: 'Un grupo de cinco buenos amigos se ve involucrado en un incidente en el cual desaparece el dinero que la clase había reunido para una excursión. Las desconfianzas surgente, pero todo se complica cuando tienen que participar en un extraño juego de deudas y confianza que pondrá a prueba su amistad.',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Tomodachi.webp', videos:tomodachiSeason1Episodes }
		]
	},
	gachiakuta: {
		label: 'CATÁLOGO 26', title: 'Gachiakuta', description: 'En una ciudad flotante donde los ricos desechan tanto basura como personas, a Rudo lo acusan de asesinato y lo lanzan al Abismo, un vertedero infernal habitado por bestias polutas. Para sobrevivir deberá utilizar su recién descubierto poder y unirse a los Limpiadores. Rudo no solo aspira a combatir contra los monstruos, sino que también quiere vengarse de quienes lo lanzaron a ese infierno.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-Gachiakuta.jpeg', videos:gachiakutaSeason1Episodes }
		]
	},
	yourpancreas: {
		label: 'CATÁLOGO 27', title: 'I Wanna Eat Your Pancreas', description: 'Trata sobre la inesperada y profunda relación entre Haruki, un estudiante de secundaria apático y solitario, y Sakura, una compañera de clase extravertida que sufre en secreto una enfermedad pancreática terminal',
		seasons: [
			{ title: 'Temporada 1', description: '1 Película', cover: 'img/Temp1-YourPancreas.jpg', videos:yourpancreasSeason1Episodes }
		]
	},
	bunnygirlsenpai: {
		label: 'CATÁLOGO 28', title: 'Seishun Buta Yarō', description: 'Síndrome de la pubertad: ciertas experiencias poco corrientes que se rumorea en Internet que son la causa del exceso de sensibilidad e inestabilidad durante la adolescencia. Este año, Sakura Azusagawa, estudiante de segundo en una preparatoria cercana a Enoshima, conocerá a varias chicas que están pasando por ese "síndrome de la pubertad". Por ejemplo, en la biblioteca conoce a una salvaje...',
		seasons: [
			{ title: 'Temporada 1', description: '13 Episodios', cover: 'img/Temp1-BunnyGirlSenpai.jpg', videos:bunnygirlsenpaiSeason1Episodes },
			{ title: 'Temporada 2', description: '13 Episodios', cover: 'img/Temp2-BunnyGirlSenpai.jpg', videos:bunnygirlsenpaiSeason2Episodes }
		]
	},
	ippo: {
		label: 'CATÁLOGO 29', title: 'Hajime no Ippo', description: '¡Ippo, un adolescente con un corazón puro y una determinación implacable, descubre su pasión por el boxeo después de que el veterano luchador Takamura lo salve de los matones.',
		seasons: [
			{ title: 'Temporada 1 (Español latino)', description: '76 Episodios', cover: 'img/Temp1-Ippo.jpg', videos:ippoSeason1Episodes },
			{ title: 'Película Champion Road', description: '1 Película', cover: 'img/Movie1-Ippo.jpg', videos:ippoMovie1Episodes },
			{ title: 'OVA Mashiba vs. Kimura', description: '1 Película', cover: 'img/Movie2-Ippo.jpg', videos:ippoMovie2Episodes },
			{ title: 'Temporada 2', description: '26 Episodios', cover: 'img/Temp2-Ippo.jpg', videos:ippoSeason2Episodes },
			{ title: 'Temporada 3', description: '25 Episodios', cover: 'img/Temp3-Ippo.jpg', videos:ippoSeason3Episodes }
		]
	},
	erased: {
		label: 'CATÁLOGO 30', title: 'Erased', description: 'Erased (Desaparecida) es una serie de ciencia ficción que cuenta la historia de Satory Fujinuma, un autor de manga sin mucho éxito que sufre de un peculiar fenómeno conocido como Resucitación en el cual se transporta a la fuerza atrás en el tiempo hasta el momento anterior de que ocurra algo que supone un peligro para una vida. Satoru no tarda en descubrir que el fenómeno persiste hasta que la...',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Erased.jpg', videos:erasedSeason1Episodes }
		]
	},
	deathparade: {
		label: 'CATÁLOGO 31', title: 'Death Parade', description: 'Hay un lugar después de la muerte que no es el Cielo o el Infierno. No puedes irte si no se termina el juego y, cuando acaba, quizá tu vida también acabe.',
		seasons: [
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-DeathParade.webp', videos:deathparadeSeason1Episodes }
		]
	},
	pingpong: {
		label: 'CATÁLOGO 32', title: 'Ping Pong The Animation', description: 'Peco y Smile son dos estudiantes de instituto muy diferentes, pero grandes amigos con una afición en común: El Ping Pong. Peco es el animado, el decidido, el que se cree siempre un buen jugador, aunque en realidad sabe que Smile está siempre por encima de él. Smile es apático, casi un robot sin sentimientos. Cuando Peco es vencido por un jugador chino, decide dejar el deporte, mientras que Smile por su carácter, siempre evita ganar a Peco aunque sea mejor que él. Dos caminos diferentes en los que cada uno intentará aprovechar su potencial a su manera.',
		seasons: [
			{ title: 'Temporada 1', description: '11 Episodios', cover: 'img/Temp1-PingPong.jpg', videos:pingpongSeason1Episodes }
		]
	},
	sao: {
		label: 'CATÁLOGO 33', title: 'Sword art online', description: 'En un futuro cercano, un Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) llamado Sword Art Online permite que los jugadores se introduzcan en el juego directamente mediante el uso del Nerve Gear, un casco que les sumerge por completo.',
		seasons: [
			{ title: 'Temporada 1', description: '25 Episodios', cover: 'img/Temp1-SAO.jpg', videos:saoSeason1Episodes },
			{ title: 'SAO: Extra edition', description: '1 Episodio', cover: 'img/Extra1-SAO.webp', videos:saoExtra1Episodes },
			{ title: 'Temporada 2', description: '24 Episodios', cover: 'img/Temp2-SAO.webp', videos:saoSeason2Episodes },
			{ title: 'Película Ordinal Scale', description: '1 Película', cover: 'img/Movie1-SAO.jpg', videos:saoMovie1Episodes },
			{ title: 'Temporada 3', description: '47 Episodios', cover: 'img/Temp3-SAO.jpg', videos:saoSeason3Episodes }
		]
	},
	burst: {
		label: 'CATÁLOGO 34', title: 'Burst Angel', description: 'Jo es la nueva sheriff de la ciudad y es un enigma incluso para ella misma. Junto a Sei, Amy y Meg, lucha por los ciudadanos que no pueden defenderse. Enfrentándose a la corrupción y a la ciencia retorcida, estas chicas están en llamas y son la única esperanza de la ciudad herida.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-Burst.jpg', videos:burstSeason1Episodes }
		]
	},
	fireforce: {
		label: 'CATÁLOGO 35', title: 'Fire Force', description: 'Tokio está ardiendo y los ciudadanos sufren misteriosas combustiones espontáneas por toda la ciudad. La responsable de apagar este infierno es la Brigada Especial Antiincendios y Shinra está listo para unirse a su lucha. Ahora, como parte del 8.º Escuadrón, usará sus poderes para evitar que la ciudad acabe reducida a cenizas.Sin embargo, un secreto de su pasado podría hacer arder todo.',
		seasons: [
			{ title: 'Temporada 1', description: '24 Episodios', cover: 'img/Temp1-FireForce.jpg', videos: fireforceSeason1Episodes },
			{ title: 'Temporada 2', description: '24 Episodios', cover: 'img/Temp2-FireForce.jpg', videos: fireforceSeason2Episodes },
			/*{ title: 'Temporada 3', description: '25 Episodios', cover: 'img/Temp3-FireForce.webp', videos: fireforceSeason3Episodes }*/
		]
	},
	chihiro: {
		label: 'CATÁLOGO 36', title: 'El viaje de Chihiro', description: 'Una niña de 10 años llamada Chihiro descubre un mundo misterioso gobernado por una bruja que convierte en animales a quienes lo desobedecen',
		seasons: [
			{ title: 'El viaje de Chihiro la Película', description: '1 Película', cover: 'img/Temp1-Chihiro.jpg', videos:chihiroSeason1Episodes }
		]
	},
	kuroko: {
		label: 'CATÁLOGO 37', title: 'Kuroko no Basket', description: 'El equipo de baloncesto de la preparatoria Teiko. La clase que produjo tres temporadas perfectas de un solo golpe, con cinco jugadores que solo se ven una vez en su generación, llamados "La Generación Milagrosa".',
		seasons: [
			{ title: 'Temporada 1', description: '25 Episodios', cover: 'img/Temp1-Kuroko.jpg', videos: kurokoSeason1Episodes },
			{ title: 'Temporada 2', description: '25 Episodios', cover: 'img/Temp2-Kuroko.jpg', videos: kurokoSeason2Episodes },
			{ title: 'Temporada 3', description: '25 Episodios', cover: 'img/Temp3-Kuroko.webp', videos: kurokoSeason3Episodes },
			{ title: 'Película Last Game', description: '1 Película', cover: 'img/Movie1-Kuroko.jpg', videos: kurokoMovie1Episodes }
		]
	},
	codegeass: {
		label: 'CATÁLOGO 38', title: 'Code Geass', description: 'Año 2017 del calendario imperial. Lelouch, un joven cuyo derecho de sucesión al trono le fue arrebatado, se convierte en "Zero", el hombre enmascarado, y conduce una insurrección a gran escala, la "Rebelión Negra", contra su propia patria, la superpotencia del Sacro Imperio de Britannia. Mientras el sentimiento anti Britannia se hace más fuerte, el imperio decide utilizar su abrumador poderío...',
		seasons: [
			{ title: 'Temporada 1', description: '25 Episodios', cover: 'img/Temp1-CodeGeass.jpg', videos: codegeassSeason1Episodes },
			{ title: 'Temporada 2', description: '25 Episodios', cover: 'img/Temp2-CodeGeass.jpg', videos: codegeassSeason2Episodes }
		]
	},
	monster: {
		label: 'CATÁLOGO 39', title: 'Monster', description: 'Monster es uno de los thrillers psicológicos más aclamados de la historia del anime. La historia sigue al Dr. Kenzo Tenma, un brillante neurocirujano japonés que ejerce en Düsseldorf, Alemania. Su vida cambia por completo cuando decide desobedecer las órdenes del director del hospital y opera a un niño herido de bala llamado Johan Liebert en lugar de atender primero a un alcalde',
		seasons: [
			{ title: 'Temporada 1', description: '74 Episodios', cover: 'img/Temp1-Monster.jpg', videos:monsterSeason1Episodes }
		]
	},
	akamegakill: {
		label: 'CATÁLOGO 40', title: 'Akame ga Kill!', description: 'Bajo el gobierno de un imperio tirano, Tatsumi, un joven espadachín, parte de su pueblo natal para intentar salvarlo de una pobreza extrema. En su viaje conocerá a Akami, una chica que fue comprada por el imperio, criada y entrenada para convertirse en un aasesina de élite miembro del grupo "Night Raid". Juntos, Tatsumi y Night Raid se enfrentarán a la corrupción del imperio.',
		seasons: [
			{ title: 'Temporada 1 (JAP SUB)', description: '24 Episodios', cover: 'img/Temp1-AkameGaKill.jpg', videos:akamegakillSeason1Episodes },
			{ title: 'Temporada 1 (LAT DOBLADO)', description: '24 Episodios', cover: 'img/Portada-AkameGaKill.jpg', videos:akamegakillLATSeason1Episodes }
		]
	},
	demonslayer: {
		label: 'CATÁLOGO 41', title: 'Demon Slayer', description: 'Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio.Destrozado por los acontecimientos Tanjiro decide convertirse en un matademonios para poder devolver a su...',
		seasons: [
			{ title: 'Arco de Resolución Inquebrantable', description: '26 Episodios', cover: 'img/Temp1-DemonSlayer.jpg', videos: demonslayerSeason1Episodes },
			{ title: 'Película: El tren infinito ', description: '1 Película', cover: 'img/Movie1-DemonSlayer.jpg', videos: demonslayerMovie1Episodes },
			{ title: 'Arco del Distrito del Entretenimiento', description: '11 Episodios', cover: 'img/Temp2-DemonSlayer.png', videos: demonslayerSeason2Episodes },
			{ title: 'Arco de la Aldea de los Herreros', description: '11 Episodios', cover: 'img/Temp3-DemonSlayer.webp', videos: demonslayerSeason3Episodes },
			{ title: 'Arco del Entrenamiento de los Pilares', description: '8 Episodios', cover: 'img/Temp4-DemonSlayer.webp', videos: demonslayerSeason4Episodes },
			{ title: 'Película: Castillo Infinito', description: '1 Película', cover: 'img/Movie2-DemonSlayer.webp', videos: demonslayerMovie2Episodes }
		]
	},
	souleater: {
		label: 'CATÁLOGO 42', title: 'Soul Eater', description: '¡Luchando con ghouls y monstruos junto con sus compañeros de clase, Maka y Soul son la última línea de defensa del mundo contra la maldad!',
		seasons: [
			{ title: 'Temporada 1', description: '51 Capitulos', cover: 'img/Temp1-SoulEater.jpg', videos:souleaterSeason1Episodes }
		]
	},
	tokyoghoul: {
		label: 'CATÁLOGO 43', title: 'Tokyo Ghoul', description: 'Dos años después de la incursión en Anteiku, el CCG selecciona al joven Haise Sasaki para liderar un equipo rebelde de humanos infundidos con poderes ghoul.',
		seasons: [
			{ title: 'Temporada 1 (Tokyo Ghoul)', description: '12 Capitulos', cover: 'img/Temp1-TokyoGhoul.jpg', videos:tokyoghoulSeason1Episodes },
			{ title: 'Temporada 2 (Tokyo Ghoul √A)', description: '12 Capitulos', cover: 'img/Temp2-TokyoGhoul.jpg', videos:tokyoghoulSeason2Episodes },
			{ title: 'OVAS ("JACK" y "PINTO")', description: '2 OVAS', cover: 'img/OVA1-TokyoGhoul.webp', videos:tokyoghoulOVASEpisodes },
			{ title: 'Temporada 3 (Tokyo Ghoul:re)', description: '24 Capitulos', cover: 'img/Temp3-TokyoGhoul.jpg', videos:tokyoghoulSeason3Episodes }
		]
	},
	tokyorevengers: {
		label: 'CATÁLOGO 44', title: 'Tokyo Revengers', description: 'Takemichi Hanagaki es un trabajador que ha tocado fondo en la vida. Entonces descubre que la única novia que tuvo jamás, en sus años de secundaria, la joven Hinata Tachibana, ha muerto a manos de la pandilla Tokyo Manji. El día que descubre la noticia de su muerte, está en la estación de tren cuando alguien lo empuja a las vías. Cierra los ojos pensando que está a punto de morir, pero cuando...',
		seasons: [
			{ title: 'Temporada 1', description: '24 Capitulos', cover: 'img/Temp1-TokyoRevengers.jpg', videos:tokyorevengersSeason1Episodes },
			{ title: 'Temporada 2', description: '13 Capitulos', cover: 'img/Temp2-TokyoRevengers.jpg', videos:tokyorevengersSeason2Episodes },
			{ title: 'Temporada 3', description: '13 Capitulos', cover: 'img/Temp3-TokyoRevengers.jpg', videos:tokyorevengersSeason3Episodes },
			{ title: 'Temporada 4', description: 'En emisión', cover: 'img/Temp4-TokyoRevengers.jpg', videos:tokyorevengersSeason4Episodes }
		]
	},
	madeinabyss: {
		label: 'CATÁLOGO 45', title: 'Made in Abyss', description: 'En las profundidades del Abismo, una chica llamada Riko se topa con un robot que parece un niño pequeño. Riko y su nuevo amigo descienden a un territorio inexplorado para desvelar sus misterios, pero ¿qué les aguarda en la oscuridad?',
		seasons: [
			{ title: 'Temporada 1', description: '13 Capitulos', cover: 'img/Portada-MadeInAbyss.jpg', videos:madeinabyssSeason1Episodes },
			{ title: 'Película: Dawn of the Deep Soul', description: '1 Película', cover: 'img/Movie1-MadeInAbyss.jpg', videos:madeinabyssMovie1Episodes },
			{ title: 'Temporada 2', description: '12 Capitulos', cover: 'img/Temp2-MadeInAbyss.webp', videos:madeinabyssSeason2Episodes }
		]
	},
	onepiece: {
		label: 'CATÁLOGO 46', title: 'One Piece', description: 'Monkey. D. Luffy se niega a que nadie se interponga en su camino por la búsqueda para convertirse el rey de todos los piratas. Con un camino trazado por las traicioneras aguas del Grand Line y más allá, se trata de un capitán que nunca se dará por vencido hasta que consiga el tesoro más grande de la Tierra: el Legendario One Piece.',
		seasons: [
			{ title: 'Saga del East Blue', description: '61 Episodios', cover: 'img/Temp1-OnePiece.jpg', videos:onepieceSeason1Episodes },
			{ title: 'Saga Arabasta', description: '74 Episodios', cover: 'img/Temp2-OnePiece.jpg', videos:onepieceSeason2Episodes },
			{ title: 'Saga de Skypiea', description: '71 Episodios', cover: 'img/Temp3-OnePiece.webp', videos:onepieceSeason3Episodes },
			{ title: 'Saga de Water Seven', description: '119 Episodios', cover: 'img/Temp4-OnePiece.webp', videos:onepieceSeason4Episodes },
			{ title: 'Saga de Thriller Bark', description: '59 Episodios', cover: 'img/Temp5-OnePiece.jpeg', videos:onepieceSeason5Episodes },
			{ title: 'Saga de la Guerra de Marineford', description: '132 Episodios', cover: 'img/Temp6-OnePiece.jpg', videos:onepieceSeason6Episodes },
			{ title: 'Saga de la Isla Gyojin', description: '58 Episodios', cover: 'img/Temp7-OnePiece.webp', videos:onepieceSeason7Episodes },
			{ title: 'Saga de Dressrosa', description: '171 Episodios', cover: 'img/Temp8-OnePiece.jpg', videos:onepieceSeason8Episodes },
			{ title: 'Saga de los Cuatro Emperadores/Yonko', description: '342 Episodios', cover: 'img/Temp9-OnePiece.webp', videos:onepieceSeason9Episodes },
			{ title: 'Saga Final', description: 'En emisión', cover: 'img/Temp10-OnePiece.jpg', videos:onepieceSeason10Episodes },
		]
	},
    oshinoko: {
		label: 'CATÁLOGO 47', title: 'Oshi No Ko', description: 'Un médico recientemente fallecido y su paciente, renacen como hijos gemelos de una famosa ídolo musical japonesa y atraviesan los altibajos de la industria japonesa del entretenimiento.',
		seasons: [
			{ title: 'Temporada 1', description: '11 Episodios', cover: 'img/Temp1-OshiNoKo.webp', videos: oshinokoSeason1Episodes },
			{ title: 'Temporada 2', description: '13 Episodios', cover: 'img/Temp2-OshiNoKo.jpg', videos: oshinokoSeason2Episodes },
			{ title: 'Temporada 3', description: '11 Episodios', cover: 'img/Temp3-OshiNoKo.jpg', videos: oshinokoSeason3Episodes }
		]
	},
};

const videoGrid = document.querySelector('#video-grid');
const seasonGrid = document.querySelector('#season-grid');
const catalogKey = new URLSearchParams(window.location.search).get('catalogo');
const selectedCatalog = catalogData[catalogKey] || catalogData.aventuras;
const animeSearch = document.querySelector('#anime-search');

const renderBreadcrumbs = (items) => {
	const breadcrumbContainer = document.querySelector('#breadcrumbs');
	if (!breadcrumbContainer) {
		return;
	}

	const list = document.createElement('ol');
	items.forEach((item, index) => {
		const listItem = document.createElement('li');
		const isCurrent = index === items.length - 1;
		if (item.href) {
			const link = document.createElement('a');
			link.href = item.href;
			link.textContent = item.label;
			if (isCurrent) {
				link.setAttribute('aria-current', 'page');
			}
			listItem.appendChild(link);
		} else {
			const current = document.createElement('span');
			current.textContent = item.label;
			if (isCurrent) {
				current.setAttribute('aria-current', 'page');
			}
			listItem.appendChild(current);
		}
		list.appendChild(listItem);
	});
	breadcrumbContainer.replaceChildren(list);
};

if (animeSearch) {
	const animeGrid = animeSearch.closest('.videos-section')?.querySelector('.catalog-grid');
	const emptyState = document.querySelector('#anime-search-empty');
	const normalizeSearchText = (text) => text
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLocaleLowerCase();

	if (animeGrid && emptyState) {
		animeSearch.addEventListener('input', () => {
			const query = normalizeSearchText(animeSearch.value.trim());
			let visibleCards = 0;

			animeGrid.querySelectorAll('.catalog-card').forEach((card) => {
				const title = normalizeSearchText(card.querySelector('h3')?.textContent || '');
				const matches = title.includes(query);
				card.hidden = !matches;
				visibleCards += Number(matches);
			});

			emptyState.hidden = visibleCards > 0;
		});
	}
}

if (seasonGrid) {
	document.querySelector('#catalog-label').textContent = selectedCatalog.label;
	document.querySelector('#catalog-title').textContent = selectedCatalog.title;
	document.querySelector('#catalog-description').textContent = selectedCatalog.description;
	const currentCatalogKey = catalogKey || 'aventuras';
	document.querySelector('.back-link').href = 'catalogo.html';
	renderBreadcrumbs([
		{ label: 'Inicio', href: 'index.html' },
		{ label: 'Catálogo', href: 'catalogo.html' },
		{ label: selectedCatalog.title, href: `temporadas.html?catalogo=${currentCatalogKey}` }
	]);

	selectedCatalog.seasons.forEach((season, index) => {
		seasonGrid.insertAdjacentHTML('beforeend', `
			<a class="catalog-card" href="categoria.html?catalogo=${currentCatalogKey}&temporada=${index}">
				<div class="catalog-cover catalog-cover-season"><img src="${season.cover}" alt="Portada de ${selectedCatalog.title}, ${season.title}"></div>
				<div class="video-info"><h3>${season.title}</h3><p>${season.description}</p></div>
			</a>
		`);
	});
}

if (videoGrid) {
	document.querySelector('#category-label').textContent = selectedCatalog.label;
	document.querySelector('#category-title').textContent = selectedCatalog.title;
	document.querySelector('#category-description').textContent = selectedCatalog.description;

	const seasonIndex = Number(new URLSearchParams(window.location.search).get('temporada')) || 0;
	const selectedSeason = selectedCatalog.seasons[seasonIndex] || selectedCatalog.seasons[0];
	const currentCatalogKey = catalogKey || 'aventuras';
	const seasonUrl = `temporadas.html?catalogo=${currentCatalogKey}`;
	document.querySelector('.back-link').href = seasonUrl;
	document.querySelector('#category-label').textContent = `${selectedCatalog.label} · ${selectedSeason.title}`;
	document.querySelector('#category-title').textContent = selectedCatalog.title;
	document.querySelector('#category-description').textContent = selectedSeason.description;
	renderBreadcrumbs([
		{ label: 'Inicio', href: 'index.html' },
		{ label: 'Catálogo', href: 'catalogo.html' },
		{ label: selectedCatalog.title, href: seasonUrl },
		{ label: selectedSeason.title, href: `categoria.html?catalogo=${currentCatalogKey}&temporada=${seasonIndex}` }
	]);

	const seasonSwitcher = document.querySelector('#season-switcher');
	if (seasonSwitcher && selectedCatalog.seasons.length > 1) {
		seasonSwitcher.hidden = false;
		selectedCatalog.seasons.forEach((season, index) => {
			const isCurrent = index === seasonIndex;
			const item = isCurrent ? document.createElement('span') : document.createElement('a');
			item.className = `season-switcher__item${isCurrent ? ' is-current' : ''}`;
			item.textContent = season.title;
			if (isCurrent) {
				item.setAttribute('aria-current', 'page');
			} else {
				item.href = `categoria.html?catalogo=${currentCatalogKey}&temporada=${index}`;
			}
			seasonSwitcher.appendChild(item);
		});
	} else {
		const seasonSwitcherSection = document.querySelector('.season-switcher-section');
		if (seasonSwitcherSection) {
			seasonSwitcherSection.hidden = true;
		}
	}

	selectedSeason.videos.forEach(([video, title, description, thumbnail, type = 'video'], episodeIndex) => {
		const episodeId = generateEpisodeId(selectedCatalog.title, selectedSeason.title, title);

		videoGrid.insertAdjacentHTML('beforeend', `
			<article class="video-card" data-video="${video}" data-type="${type}" data-episode-id="${episodeId}" data-catalog-key="${catalogKey || 'aventuras'}" data-season-index="${seasonIndex}" data-episode-index="${episodeIndex}" role="button" tabindex="0" aria-label="Reproducir ${title}">
				<div class="thumbnail">
					<img src="${thumbnail}" alt="Portada de ${title}">
					<span class="play-button" aria-hidden="true">▶</span>
				</div>
				<div class="video-info">
					<h3>${title}</h3>
					<p>${description}</p>
				</div>
			</article>
		`);
	});
}

const featuredAnimeGrid = document.querySelector('#featured-anime-grid');
if (featuredAnimeGrid) {
	Object.entries(catalogData).slice(0, 6).forEach(([key, anime]) => {
		const firstSeason = anime.seasons?.[0];
		if (!firstSeason) {
			return;
		}

		const link = document.createElement('a');
		link.className = 'catalog-card featured-anime-card';
		link.href = `temporadas.html?catalogo=${encodeURIComponent(key)}`;
		const cover = document.createElement('div');
		cover.className = 'catalog-cover';
		const image = document.createElement('img');
		image.src = firstSeason.cover;
		image.alt = `Portada de ${anime.title}`;
		image.loading = 'lazy';
		cover.appendChild(image);
		const info = document.createElement('div');
		info.className = 'video-info';
		const title = document.createElement('h3');
		title.textContent = anime.title;
		const description = document.createElement('p');
		description.textContent = firstSeason.title;
		info.append(title, description);
		link.append(cover, info);
		featuredAnimeGrid.appendChild(link);
	});
}

const videoModal = document.querySelector('#video-modal');
const videoPlayer = document.querySelector('#video-player');
const videoFrame = document.querySelector('#video-frame');
const videoError = document.querySelector('#video-error');
const closeModalButton = document.querySelector('#video-modal .close-modal');
const nextEpisodeButton = document.querySelector('#next-episode-button');
const videoActionMessage = document.querySelector('#video-action-message');
let activeVideoEpisode = null;

const createEpisodeMetadata = (catalogKey, seasonIndex, episodeIndex) => {
	const catalog = catalogData[catalogKey];
	const season = catalog?.seasons?.[seasonIndex];
	const videoData = season?.videos?.[episodeIndex];

	if (!catalog || !season || !videoData) {
		return null;
	}

	const [video, title, description, thumbnail, type = 'video'] = videoData;
	return {
		catalogKey,
		seasonIndex,
		episodeIndex,
		series: catalog.title,
		season: season.title,
		title: title || 'Episodio',
		description: description || '',
		thumbnail: thumbnail || '',
		video,
		type,
		episodeId: generateEpisodeId(catalog.title, season.title, title || 'Episodio')
	};
};

const getEpisodeMetadata = (card) => {
	const catalogKey = card.dataset.catalogKey || catalogKeyFromPage || 'aventuras';
	const episode = createEpisodeMetadata(
		catalogKey,
		Number(card.dataset.seasonIndex || 0),
		Number(card.dataset.episodeIndex || 0)
	);

	return episode ? { ...episode, card, episodeId: card.dataset.episodeId || episode.episodeId } : null;
};

const catalogKeyFromPage = catalogKey || 'aventuras';

const getNextEpisode = (episode) => {
	const catalog = catalogData[episode?.catalogKey];
	if (!catalog) {
		return null;
	}

	for (let seasonIndex = episode.seasonIndex; seasonIndex < catalog.seasons.length; seasonIndex += 1) {
		const season = catalog.seasons[seasonIndex];
		const firstEpisodeIndex = seasonIndex === episode.seasonIndex ? episode.episodeIndex + 1 : 0;
		for (let episodeIndex = firstEpisodeIndex; episodeIndex < (season.videos || []).length; episodeIndex += 1) {
			const nextEpisode = createEpisodeMetadata(episode.catalogKey, seasonIndex, episodeIndex);
			if (nextEpisode?.video) {
				return nextEpisode;
			}
		}
	}

	return null;
};

function openVideo(cardOrEpisode) {
	if (!videoError || !videoModal) {
		return;
	}

	if (videoPlayer && !videoPlayer.hidden) {
		videoPlayer.pause();
	}
	if (videoFrame && !videoFrame.hidden) {
		videoFrame.removeAttribute('src');
	}

	const episode = cardOrEpisode?.dataset ? getEpisodeMetadata(cardOrEpisode) : cardOrEpisode;
	if (!episode?.video || !episode.episodeId) {
		return;
	}
	activeVideoEpisode = episode;
	window.VIDEON_PROGRESS?.activateEpisode(episode);
	if (videoActionMessage) {
		videoActionMessage.textContent = '';
		document.body.classList.add('video-is-open');
	}
	if (nextEpisodeButton) {
		nextEpisodeButton.disabled = false;
		nextEpisodeButton.textContent = getNextEpisode(episode) ? 'Siguiente episodio' : 'Marcar como visto';
	}

	videoError.hidden = true;
	if (episode.type === 'iframe') {
		if (videoPlayer) videoPlayer.hidden = true;
		if (videoFrame) {
			videoFrame.hidden = false;
			videoFrame.src = episode.video;
		}
	} else {
		if (videoFrame) videoFrame.hidden = true;
		if (videoPlayer) {
			videoPlayer.hidden = false;
			videoPlayer.src = episode.video;
			videoPlayer.play().catch(() => {});
		}
	}
	videoModal.classList.add('is-open');
	videoModal.setAttribute('aria-hidden', 'false');
}

function closeVideo() {
	if (videoPlayer) {
		videoPlayer.pause();
		videoPlayer.removeAttribute('src');
		videoPlayer.load();
	}
	if (videoFrame) {
		videoFrame.removeAttribute('src');
	}
	if (videoModal) {
		videoModal.classList.remove('is-open');
		videoModal.setAttribute('aria-hidden', 'true');
	}
	if (videoActionMessage) {
		videoActionMessage.textContent = '';
	}
	document.body.classList.remove('video-is-open');
	activeVideoEpisode = null;
}

window.catalogData = catalogData;
window.openVideo = openVideo;
window.closeVideo = closeVideo;

if (videoModal) {
	if (videoGrid) {
		videoGrid.addEventListener('click', (event) => {
			const card = event.target.closest('.video-card');

			if (card) {
				openVideo(card);
			}
		});

		videoGrid.addEventListener('keydown', (event) => {
			const card = event.target.closest('.video-card');

			if (card && (event.key === 'Enter' || event.key === ' ')) {
				event.preventDefault();
				openVideo(card);
			}
		});
	}

	if (videoPlayer) {
		videoPlayer.addEventListener('error', () => {
			if (videoError) videoError.hidden = false;
		});
	}

	if (closeModalButton) {
		closeModalButton.addEventListener('click', closeVideo);
	}

	if (nextEpisodeButton) {
		nextEpisodeButton.addEventListener('click', async () => {
			if (!activeVideoEpisode || nextEpisodeButton.disabled) {
				return;
			}

			const nextEpisode = getNextEpisode(activeVideoEpisode);
			nextEpisodeButton.disabled = true;
			nextEpisodeButton.textContent = 'Guardando…';
			if (videoActionMessage) {
				videoActionMessage.textContent = '';
			}

			const result = await window.VIDEON_PROGRESS?.markActiveEpisodeCompleted();
			if (!result?.success) {
				nextEpisodeButton.disabled = false;
				nextEpisodeButton.textContent = nextEpisode ? 'Siguiente episodio' : 'Marcar como visto';
				if (videoActionMessage) {
					videoActionMessage.textContent = result?.reason === 'unauthenticated'
						? 'Inicia sesión para guardar tu progreso.'
						: 'No se pudo guardar el progreso. Inténtalo de nuevo.';
				}
				return;
			}

			if (nextEpisode) {
				openVideo(nextEpisode);
			} else {
				nextEpisodeButton.textContent = 'Visto';
				if (videoActionMessage) {
					videoActionMessage.textContent = 'No hay más episodios disponibles. El episodio se marcó como visto.';
				}
			}
		});
	}

	videoModal.addEventListener('click', (event) => {
		if (event.target === videoModal) {
			closeVideo();
		}
	});
}

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		if (videoModal) {
			closeVideo();
		}
	}
});

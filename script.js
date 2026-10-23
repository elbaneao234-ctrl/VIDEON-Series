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
	['https://mega.nz/embed/8wxzlBSK#KmhxqDYcKG19d_p09eRI_KizSwi4I-Kzav9kB0yV4f0', 'Episodio 9', 'Juramento', 'img/Vinland/Portada-Tmp2-Cap9-Vinland.jpg', 'iframe'],
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
	['https://mega.nz/embed/JFFywBSJ#NkkCh473m9T-qfKGJBlhvARdkyg0rdX7kh6OlTwJJlA', 'Episodio 1', 'Línea de salida'],
	['https://mega.nz/embed/JUtkhYhC#QadwcqUwiRPKIK-7OrSF_PvnHqmSf78LW5uDHrdQXX0', 'Episodio 2', 'La caña pensante'],
	['https://mega.nz/embed/sYtngDDJ#EYMXOpZL-UXG9-ilZCKjMtLU6dO5Oy2EECnhIMUJiPw', 'Episodio 3', 'Jornada 7, partido contra el IFP Kashiwa']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Aoashi/Portada-Tmp2-Cap${index + 1}-Aoashi.jpg`,
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
    ['https://mega.nz/embed/dBNghSbZ#wQxUlshkoSbUDQNYS506Uf-c_2wb_xXEWtFQqVdXqQQ', 'Episodio 171', 'Comienza la guerra'],
    ['https://mega.nz/embed/1UlRCayB#VpXA-JFbgyjBbd8Mtk_T7z3SZKwove80R2GwvivG1vI', 'Episodio 172', 'La puerta al infierno'],
	['https://mega.nz/embed/AY9hiCrZ#hLekjdCShsNXkv0bL51sYw4BA75AR637yhdR57km9KQ', 'Episodio 173', 'El defensor cubierto de negro'],
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Clover/Portada-Tmp5-Cap${index + 1}-Clover.jpg`,
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
    ['https://mega.nz/embed/4Htk2RgA#kBb0nNIIJiOZYcClwRmSAmWO-qljwlPgpgjuTilRcoE', 'Episodio 1', 'Ya estoy acostumbrado'],
    ['https://mega.nz/embed/9CVjxIRJ#suYaujR65YCeYNW8QkUxQb2AXqtPfcm8W_epBZ5baNI', 'Episodio 2', 'Si tuviera otra oportunidad'],
    ['https://mega.nz/embed/0rs3GCiS#hPTJymiDdTMqycbJCuqDSDRyDQ2X3KRAAIEZhyTg_S0', 'Episodio 3', 'Es como un videojuego'],
	['https://jkanime.net/jkplayer/um?e=T1Rib1VYUU5HekcrSGJoRVh1U3Q2R0ZzdGdpNGxaNjNvRFgvZ1NCc1RCVXFEL3lYcjlGa251MDBIb0hidFBaNHVSSklkU3J3ckFpSDRkSHBBVEd4RVpDNFNkL2hJSE1GTFdINGhQaWNXNlU9Ojr_G4LUxVTEKfskXZNf9VTo&t=872a0592f5d9338d0ef888235dd28edc&op=NTU3NjI=', 'Episodio 4', 'Tengo que hacerme más fuerte'],
	['https://mega.nz/embed/W9wRjIoY#s1q-rZGz2MPo4yUgpG4YrCVPQSIzhhQAcPGZGquyTP4', 'Episodio 5', 'Un muy buen rato'],
	['https://mega.nz/embed/t7EAkRAA#wfk2Cz96cIByWG3aGEZXGMeQ_C6x5LXuMZdisK9hWy4', 'Episodio 6', 'Comienza la verdadera caza'],
	['https://mega.nz/embed/oOEDTbjb#pLoTfHMeTOcSebjfTYEbQzbTugR3hoUrpylpTCyDdKQ', 'Episodio 7', 'Veamos hasta dónde puedo llegar'],
	['https://mega.nz/embed/RHdjHTgI#EOlZdevW_6CELRhVT8satl03cIqE-5ir0i_QOxjlUCg', 'Episodio 8', 'Esto es frustrante'],
    ['https://mega.nz/embed/EycV0Zoa#K80gOk3Mu3O_YXN333nZfI3V1R9prXytQV3hLpx8hVA', 'Episodio 9', 'Has estado ocultando tus habilidades'],
    ['https://mega.nz/embed/92VxXQSK#-_Xei9ZUJ-96BYXMhvoQyhRCTxTEUsqP18GB2-nuHLk', 'Episodio 10', '¿Qué es esto, un picnic?'],
    ['https://mega.nz/embed/hGsmXSzT#DeNoTtOd_l6T-OZ4r25LwD5W-7kPIaVB1vKz2_6vUhk', 'Episodio 11', 'Un caballero defendiendo un trono vacío'],
	['https://mega.nz/embed/ljlXmL6K#Nvl27t9Iffi40eGhdt61uc2ASwAGZlK9PV8zn1U4LwQ', 'Episodio 12', 'Álzate']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Leveling/Portada-Tmp1-Cap${index + 1}-Leveling.jpg`,
    'iframe'
]);

const levelingSeason2Episodes = [
	['https://mega.nz/embed/HFdi2LiT#WkjkJnDKAqXx7BB14ugfwtqyyoatlys8VUVIuiQ8Md8', 'Episodio 1', 'No eres de rango E, ¿verdad?'],
    ['https://jkanime.net/jkplayer/um?e=ejBGZHhiUy9rVTg0NjdBSUVXUVV3Mjh6dkZidDdxRGVnRFA0UmxvVE9nMmxHTVZ5aG8zWk5zZlFvWnRmUnZjNk1KYjg0QWdmblNaMW90TTFmZlJ2NlZGbGMzM0dyR3cra1RNejNYSkxsRVE9OjouTDLQIRShkXbVrgmEkF.I&t=80525e4b2b01c40bbfd426549dc230cf&op=NjEzNTI=', 'Episodio 2', 'Parece que tú mismo no lo sabes'],
    ['https://mega.nz/embed/y2JHkZIL#kackqxBzTfMbqkgptwm9smyCoQLrAdKjK8kWxcSJilk', 'Episodio 3', 'Aún queda mucho camino'],
    ['https://jkanime.net/jkplayer/um?e=YmNjM1hMNXIvZjFwK291aDY3VnBmaDVPY3g3SG80d0d4ZjNSb0Y5NU9CRlI3bGJmMkFQYTNPNkxuTUJGZHJoeTl6ZWJzSlZ4UHJnWWFSYmVEWnhJUTZyYTFXNmxJcnU2aGV1QmY3Y21nbWM9OjoHxyr7Q0.nt.CPhi.6yWBr&t=0d6bd33ab42493582d2f904935e8c98f&op=NjE1OTY=', 'Episodio 4', 'Tengo que dejar de fingir'],
	['https://jkanime.net/jkplayer/um?e=cVhOdkc0OWJPK252T1BaQ1JEUTIwczhGMXBReGNtWWwvb3gvQVpMcEpxOGJ5U2hvU25zak1nQ3pWczZFTmp4YWhuYzhJRzVHcTgzenZwaVdabHpKZGlwbWYzOVhTVlltanpxNmxXbnRXYzQ9Ojo2e8yo.ku34Oox74SzJN3K&t=619bb1d83a2d850d61dca80ce62b87f8', 'Episodio 5', 'Estamos entrenados para  esto'],
	['https://mega.nz/embed/dEYxmQzL#g1WG9IKfyacEh5Wj90LWlzOBf5yc61tEr1xnJtIgq8E', 'Episodio 6', 'No menosprecies a los míos'],
	['https://jkanime.net/jkplayer/um?e=ZkUvN0dNbGtmVnE1akRDakorcmxFUmhXclJLRnRLWlhma25uZURFYXpWcnQ3VVNWRVRjekNXYTZxeWJvZ2Zvb09GYzFlT1hDdzU4UHVrc2doUnpWSXpDbEhySXpFUXYvRmY3VmpSNWpaWUE9OjpQBosh_Zs1KC5_apNuEiLc&t=7f012d8776a55b1f6ec1cffcaf7302c7&op=NjE5Mzg=', 'Episodio 7', 'El décimo Cazador de rango S'],
	['https://jkanime.net/jkplayer/um?e=Y3c4eDdDMUN0bm5WeVcxMTdtQWdlSDJ0QVJJN1ZteEM0TVd4KzZtZGR3NUpRUWJRZkNmR2pOdktnQ0VxZ0lxYUJvcjh1bXJwbjRIZ0ozTkhaM0p4dDBhZFlJaVdmT29qNFdvaVhtTW5EZVU9Ojpcj1a2i9QituyEXy4agMYR&t=e3bba492b291e670dd0b0465dadff3b8&op=NjIwMjY=', 'Episodio 8', 'Mirar hacia arriba me estaba cansando'],
	['https://jkanime.net/jkplayer/um?e=NkZaSWlZSjVneHNLWWJJMDBkd0w2eGZzWFYyaUxMZkg1M2Z1M2cxUms0ZExqeXovZ0J2UmgwQjRWVGdYcUhwd2I4U3hQdUdRSmpML2Nsam1icGxHNmxUWXVQL3U5WGl4TTI3d0plZmhTQjA9OjpSdFv1S5TU1bPy9uct1PTK&t=d0d514f204719958d006b9e264be7cc3&op=NjIxMjM=', 'Episodio 9', 'Valió la pena'],
    ['https://jkanime.net/jkplayer/um?e=Y1dxaGo0YTlUSTJ5bWRWaGsweEFHU3ZwQThBSytEYThHTHRkMU9rdmo3bXVHSDF1UW8wUTAwbEhHamJkaGdkc3ZaT1pWMklyQjZiWEZ2RzNwZmg5VXhBcG0wejd5WWQrMkV6SDh0ZGphZjA9OjqnxSOVhAvSGgKG4Rjv21_3&t=397fedb64966a7a644c1374ae95aecea', 'Episodio 10', 'Necesitamos un héroe'],
    ['https://mega.nz/embed/IOdDQCKb#-zJWvt_fGnBFeExEy66VGJ1Vzcn_1K3-UVN2KHnl1AM', 'Episodio 11', 'Se va a poner aún más intenso'],
    ['https://jkanime.net/jkplayer/um?e=YW1ZcWZ1bVZYa2ZpWmRiWTVMcEhCSHVKampla0lwcVN4bXpNRDlSKzlLcDl3QVRHRU4xZGRSYnBNT0w4YnorbTREelJwdnI4RTJYTTZIQ1dPMzNuYkpWT0E0YVlTWjg1bUFjdmF5dFFSeFE9OjrOEHVPTvuVyfEQirgxv9xS&t=1cf9a090a34f57d4606f733102284f0c&op=NjI0MTM=', 'Episodio 12', '¿Eres el rey de los humanos?'],
	['https://jkanime.net/jkplayer/um?e=TFdQamNwdmY0dFU2RG0yUG1TbWk2cTJ2eWF4SldDT3dHV3J1L2FNODBWazBreG9KYSsxMXY4clJGSlRibWNnajliRkJLMmloRXVTZFpPY1pyQ2VXcjJ1SDRRN0JYRGl3akEwOHZrM25UM009Ojr_Inbld1AlLBLDzARyhm28&t=bc2f4235c7d6a01f005310905f727eff&op=NjI0OTk=', 'Episodio 13', 'A por el siguiente objetivo']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Leveling/Portada-Tmp2-Cap${index + 1}-Leveling.jpg`,
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
    ['', 'Episodio 1', '(Estreno 20 de octubre de 2026)']
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
    ['', 'Episodio 1', 'Altomundo'],
    ['', 'Episodio 2', 'Receptáculo'],
    ['', 'Episodio 3', 'Sotomundo'],
	['', 'Episodio 4', 'El cuartel general de los limpiadores'],
	['', 'Episodio 5', 'Saqueadores'],
	['', 'Episodio 6', '¡Te partiré la boca a puñetazos'],
	['', 'Episodio 7', 'Conclusión'],
	['', 'Episodio 8', 'Un paso al frente'],
    ['', 'Episodio 9', 'La ciudad de los grafitis'],
    ['', 'Episodio 10', 'Penta, el Dominio Prohibido Desértico'],
  	['', 'Episodio 11', 'Las atenciones de Amo'],
    ['', 'Episodio 12', 'Como una maldición'],
	['', 'Episodio 13', 'Mirada mortecina'],
    ['', 'Episodio 14', 'La tormenta antes de la tormenta'],
    ['', 'Episodio 15', 'Oe, en serio'],
	['', 'Episodio 16', 'De genios y mediocres'],
	['', 'Episodio 17', 'Recuerdos de un mediocre'],
	['', 'Episodio 18', 'Anterior empleo'],
	['', 'Episodio 19', 'La colección Custodia'],
	['', 'Episodio 20', 'Símbolo'],
    ['', 'Episodio 21', 'Contra reloj'],
    ['', 'Episodio 22', 'El poder del protector'],
  	['', 'Episodio 23', 'El hombre que se hará fuerte'],
    ['', 'Episodio 24', 'Excursión']
].map(([url, title, description], index) => [
    url,
    title,
    description,
    `img/Gachiakuta/Portada-Tmp1-Cap${index + 1}-Gachiakuta.jpg`,
    'iframe'
]);

const yourpancreasSeason1Episodes = [
    ['', 'Japonés sub', 'Kimi no Suizou wo Tabetai - 1'],
	['', 'Dob Castellano', 'Me quiero comer tu páncreas - 1']

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
    ['https://mega.nz/embed/VmkUwAJD#Y0ohDsTFKUSvTqBTywbCnuG9IBv7rx-e2ZXozvAPDXo', 'Episodio 9', ' Cierre'],
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
			{ title: 'Temporada 1', description: '12 Episodios', cover: 'img/Temp1-Chainsaw.jpg', videos: chainsawSeason1Episodes }
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
			{ title: 'Temporada 1', description: '64 Episodios', cover: 'img/Temp1-Fullmetal.jpg', videos: fullmetalSeason1Episodes },
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
			{ title: 'Temporada 2', description: 'En estreno', cover: 'img/Temp2-Cyberpunk.jpeg', videos: cyberpunkSeason2Episodes }
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
};

const videoGrid = document.querySelector('#video-grid');
const seasonGrid = document.querySelector('#season-grid');
const catalogKey = new URLSearchParams(window.location.search).get('catalogo');
const selectedCatalog = catalogData[catalogKey] || catalogData.aventuras;
const animeSearch = document.querySelector('#anime-search');

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

	selectedCatalog.seasons.forEach((season, index) => {
		seasonGrid.insertAdjacentHTML('beforeend', `
			<a class="catalog-card" href="categoria.html?catalogo=${catalogKey || 'aventuras'}&temporada=${index}">
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
	document.querySelector('.back-link').href = `temporadas.html?catalogo=${catalogKey || 'aventuras'}`;
	document.querySelector('#category-label').textContent = `${selectedCatalog.label} · ${selectedSeason.title}`;
	document.querySelector('#category-title').textContent = selectedCatalog.title;
	document.querySelector('#category-description').textContent = selectedSeason.description;

	selectedSeason.videos.forEach(([video, title, description, thumbnail, type = 'video']) => {
		const episodeId = generateEpisodeId(selectedCatalog.title, selectedSeason.title, title);

		videoGrid.insertAdjacentHTML('beforeend', `
			<article class="video-card" data-video="${video}" data-type="${type}" data-episode-id="${episodeId}" role="button" tabindex="0" aria-label="Reproducir ${title}">
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

const videoModal = document.querySelector('#video-modal');
const videoPlayer = document.querySelector('#video-player');
const videoFrame = document.querySelector('#video-frame');
const videoError = document.querySelector('#video-error');
const closeModalButton = document.querySelector('#video-modal .close-modal');

function openVideo(card) {
	if (!videoError || !videoModal) {
		return;
	}

	videoError.hidden = true;
	if (card.dataset.type === 'iframe') {
		if (videoPlayer) videoPlayer.hidden = true;
		if (videoFrame) {
			videoFrame.hidden = false;
			videoFrame.src = card.dataset.video;
		}
	} else {
		if (videoFrame) videoFrame.hidden = true;
		if (videoPlayer) {
			videoPlayer.hidden = false;
			videoPlayer.src = card.dataset.video;
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

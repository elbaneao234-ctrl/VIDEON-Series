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
	['https://mega.nz/embed/CWYlDDAL#VG5-_751oihYPUPBcrSfftj7NwLIGrCMAeka0766z-I', '¡EL PARTIDO DEFINITIVO! GÉNESIS, SEGUNDA PARTE'],
	['https://mega.nz/embed/PD4XwA5Z#MAL41LkbzVrdT-VM-YEAE3V1LNJG1RWLXlS9rAo-NVU', '¡LA AMENAZA CONTINUA!'],
	['https://mega.nz/embed/DfwADZaA#mi7vUrOfn1OXqQE0t2uzs8iQGs7HRDHegmVrw8Jj4jM', '¡DUELO! ¡RAIMON CONTRA RAIMON!'],
	['https://mega.nz/embed/KOIhyTbD#B3EEEc6Rcfvck6x9C4hNP0R7GA6ZJGWwskWX5l_CkVI', '¡LA ULTRA-SUPERTÉCNICA DE LA AMISTAD!'],
	['https://mega.nz/embed/3HRVELLK#6J9muMD7s7sdUeTn5z2QFYYtUi2Uz-R9uoj6KHU1DgU', 'EL CAMINO AL MEJOR EQUIPO DEL MUNDO: LA VENTISCA']
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
	['https://mega.nz/embed/QkJT1YyB#evMlTL8CLau45OZLhGIfasgnGcnvh8oxBO5nmjxm9xc', 'Episodio 20', 'Dolor', 'img/Vinland/Portada-Tmp2-Cap20-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/8lQSUYyL#aUSiCq4z3TpRKZQM_mApVK2-TMFBPw2SHOP3yO9TOr8', 'Episodio 21', 'Coraje', 'img/Vinland/Portada-Tmp2-Cap21-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/JGkmmbba#79dFCnBi5zppf8Bzk3l3DXhz7xjrMRO75KUWlvC5AP4', 'Episodio 22', 'El rey de la rebelión', 'img/Vinland/Portada-Tmp2-Cap22-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/95IhwbwC#QVV2ERisuHwef_zBG7UXU6RqOFitjkBlNml58O4-9_0', 'Episodio 23', 'Dos caminos', 'img/Vinland/Portada-Tmp2-Cap23-Vinland.jpg', 'iframe'],
	['https://mega.nz/embed/s0IwRZTA#vM9ldrSLknrWzwGoEmRd6Xk-kcdNDjSjBgj-EvooPLs', 'Episodio 24', 'Hogar', 'img/Vinland/Portada-Tmp2-Cap24-Vinland.jpg', 'iframe']
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

const catalogData = {
	aventuras: {
		label: 'CATÁLOGO 01', title: 'Mushoku Tensei', description: 'Cuando un autobús atropella a un joven de 34 años que no ha logrado mucho en su vida, su historia no termina ahí. Habiendo reencarnado en un niño, Rudy aprovechará cada oportunidad para vivir la vida que siempre quiso. ¡Con la ayuda de sus amigos, unas habilidades mágicas recién adquiridas, y el coraje para hacer las cosas que siempre ha soñado, se embarca en una aventura épica, con su...',
		seasons: [
			{ title: 'Temporada 1', description: '26 Episodios', cover: 'img/Temp1-Mushoku.jpg', videos: episodeSets('aventuras-t1-episodio', ['Episodio 1', 'Episodio 2', 'Episodio 3']) },
			{ title: 'Temporada 2', description: '25 Episodios', cover: 'img/Temp2-Mushoku.webp', videos: episodeSets('aventuras-t2-episodio', ['Episodio 1', 'Episodio 2', 'Episodio 3']) },
			{ title: 'Temporada 3', description: '14 episodios', cover: 'img/Temp3-Mushoku.jpg', videos: mushokuSeason3Episodes }
		]
	},
	documentales: {
		label: 'CATÁLOGO 02', title: 'Inazuma Eleven', description: 'Ramon Junior High School tiene un horrible programa de fútbol que está a punto de terminar. Endou Mamoru, un jugador estrella que alguna vez tuvo problemas, y un grupo de jugadores de rag-tag reconstituyen el equipo y crecen juntos mientras luchan para convertirse en formidables y agitan el mundo del fútbol.',
		seasons: [
			{ title: 'Temporada 1', description: '26 Episodios', cover: 'img/Temp1-Inazuma.jpg', videos: inazumaSeason1Episodes },
			{ title: 'Temporada 2', description: '40 Episodios', cover: 'img/Temp2-Inazuma.jpg', videos: inazumaSeason2Episodes },
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
	}
};

const videoGrid = document.querySelector('#video-grid');
const seasonGrid = document.querySelector('#season-grid');
const catalogKey = new URLSearchParams(window.location.search).get('catalogo');
const selectedCatalog = catalogData[catalogKey] || catalogData.aventuras;

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

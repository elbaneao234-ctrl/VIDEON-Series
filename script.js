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
	['https://mega.nz/file/LwQmhYLK#zN_Egg6hKYZjoh6FWBostgGtP1aWC6h95lIvVFadOvE', 'Un final y un comienzo']
].map(([url, description], index) => [
	url,
	`Capítulo ${index + 1}`,
	description,
	`img/Mushoku/Portada-Tmp3-Cap${index + 1}-Mushoku.jpg`,
	'iframe'
]);

const inazumaSeason1Episodes = [
	['https://mega.nz/embed/qWxShCrT#nvmBgyJW0DKXPfoCYDRLrMjEVUzHLmvPWGKe4fym-Es', 'Episodio 1', '¡Juguemos Al Fútbol!'],
	['https://www.youtube.com/embed/x5_udff7_Y8', 'Episodio 2', '¡AQUÍ ESTÁ LA ROYAL ACADEMY!'],
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

const catalogData = {
	aventuras: {
		label: 'CATÁLOGO 01', title: 'Mushoku Tensei', description: 'Cuando un autobús atropella a un joven de 34 años que no ha logrado mucho en su vida, su historia no termina ahí. Habiendo reencarnado en un niño, Rudy aprovechará cada oportunidad para vivir la vida que siempre quiso. ¡Con la ayuda de sus amigos, unas habilidades mágicas recién adquiridas, y el coraje para hacer las cosas que siempre ha soñado, se embarca en una aventura épica, con su...',
		seasons: [
			{ title: 'Temporada 1', description: '26 Episodios', cover: 'img/Temp1-Mushoku.jpg', videos: episodeSets('aventuras-t1-episodio', ['Episodio 1', 'Episodio 2', 'Episodio 3']) },
			{ title: 'Temporada 2', description: '25 Episodios', cover: 'img/Temp2-Mushoku.webp', videos: episodeSets('aventuras-t2-episodio', ['Episodio 1', 'Episodio 2', 'Episodio 3']) },
			{ title: 'Temporada 3', description: '12 episodios', cover: 'img/Temp3-Mushoku.jpg', videos: mushokuSeason3Episodes }
		]
	},
	documentales: {
		label: 'CATÁLOGO 02', title: 'Inazuma Eleven', description: 'Ramon Junior High School tiene un horrible programa de fútbol que está a punto de terminar. Endou Mamoru, un jugador estrella que alguna vez tuvo problemas, y un grupo de jugadores de rag-tag reconstituyen el equipo y crecen juntos mientras luchan para convertirse en formidables y agitan el mundo del fútbol.',
		seasons: [
			{ title: 'Temporada 1', description: '26 Episodios', cover: 'img/Temp1-Inazuma.jpg', videos: inazumaSeason1Episodes },
			{ title: 'Temporada 2', description: '40 Episodios', cover: 'img/Temp2-Inazuma.jpg', videos: inazumaSeason2Episodes },
			{ title: 'Temporada 3', description: '60 Episodios', cover: 'img/Temp3-Inazuma.jpg', videos: episodeSets('documentales-t3-episodio', ['El último archivo', 'Historias del presente', 'Más allá del tiempo']) }
		]
	},
	especiales: {
		label: 'CATÁLOGO 03', title: 'Death Note', description: 'Light Yagami es un estudiante de secundaria que encuentra un cuaderno sobrenatural llamado "Death Note", que le permite matar a cualquier persona cuyo nombre escriba en él. Con la ayuda de este cuaderno, Light intenta crear un mundo sin crimen, pero pronto se encuentra con un brillante detective conocido como L, quien está decidido a detenerlo.',
		seasons: [
			{ title: 'Temporada 1', description: '37 Episodios', cover: 'img/Temp1-DeathNote.jpg', videos: deathNoteEpisodes }
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
		videoGrid.insertAdjacentHTML('beforeend', `
			<article class="video-card" data-video="${video}" data-type="${type}" role="button" tabindex="0" aria-label="Reproducir ${title}">
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

const videoCards = document.querySelectorAll('.video-card');
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
	videoCards.forEach((card) => {
		card.addEventListener('click', () => openVideo(card));
		card.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				openVideo(card);
			}
		});
	});

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

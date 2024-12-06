# language: pt
Funcionalidade: Login

  Esquema do Cenário: Realizar Login para o cenário "<user_logado>":"<perfil_acesso>"
    Dado eu acesso o sistema com a visualização "<device>"
    E informo os dados nos campos "<usuario>" e "<senha>"
    Quando clico no botão acessar
    Então o sistema realiza o login e apresenta o usuario "<user_logado>" com o perfil "<perfil_acesso>"

    Exemplos:
      | usuario     | senha      | cenario | device | user_logado 						| perfil_acesso                                              |
      | 07206148808 | adminadmin | sucesso | web    | DILOG    						    |  COORDENADOR_LOGISTICA                     			     |
	  | 44481464720 | adminadmin | sucesso | web	| DISTRIBUIDOR    					|  ADMINISTRADOR_EMPRESA                      				 |
	  | 45849486747 | adminadmin | sucesso | web	| UE 				      		    |  ADMINISTRADOR_UE											 |
	  | 75377374444 | adminadmin |sucesso  | web	| UE DIRETA    						|  ADMINISTRADOR_UE											 |
	  | 42741233837 | adminadmin |sucesso  | web	| UE PARCEIRA 						|  ADMINISTRADOR_UE											 |
	  | 71317366000 | adminadmin |sucesso  | web	| CEI PARCEIRA 						|  DIRETOR_UE												 |
	  | 34830129905 | adminadmin |sucesso  | web	| DRE 		 						|  COGESTOR_DRE												 |
	  | 59652454087 | adminadmin |sucesso  | web	| DRE SAO MIGUEL					|  COGESTOR_DRE												 |
      | 81894395026 | adminadmin |sucesso  | web	| DRE PIRITUBA						|  COGESTOR_DRE												 |
	  | 78716427742 | adminadmin |sucesso  | web	| Terceirizada 						|  ADMINISTRADOR_EMPRESA								     |
      | 01341145409 | adminadmin |sucesso  | web	| CODAE     						|  COORDENADOR_GESTAO_ALIMENTACAO_TERCEIRIZADA				 |
	  | 63133486802 | adminadmin |sucesso  | web	| GESTAO PRODUTO CODAE  			|  COORDENADOR_GESTAO_PRODUTO								 |
	  | 13318331325 | adminadmin |sucesso  | web	| Especial  						|  COORDENADOR_DIETA_ESPECIAL								 |
	  | 26088238070 | adminadmin |sucesso  | web	|  NUTRICIONISTA SUPERVISAO 	    |  COORDENADOR_SUPERVISAO_NUTRICAO						     |
	  | 66118250103 | adminadmin |sucesso  | web	| NUTRIMANIFESTACAO 	            |  COORDENADOR_SUPERVISAO_NUTRICAO_MANIFESTACAOCOGESTOR_DRE	 |
	  | 26755818011 | adminadmin |sucesso  | web	| DRE    							|  DIRETOR_UE												 |
	  | 44331733637 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA EMEF			|  ADMINISTRADOR_UE											 |
	  | 21555208240 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA EMEI			|  ADMINISTRADOR_UE											 |
	  | 33763292497 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA CEI      	|  ADMINISTRADOR_UE											 |
	  | 24688885610 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA CCI			|  ADMINISTRADOR_UE											 |
	  | 61927274222 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA CIEJA		|  ADMINISTRADOR_UE											 |
	  | 48801758545 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA 2		    |  ADMINISTRADOR_UE											 |
	  | 68848414354 | adminadmin |sucesso  | web	| Escola EMEF 3    	  			    |  ADMINISTRADOR_UE											 |
	  | 32863695355 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA CEI CEU		|  ADMINISTRADOR_UE											 |
	  | 47998447680 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA CEMEI		|  DIRETOR_UE												 |
	  | 78495057000 | adminadmin |sucesso  | web	| CEU CEMEI ADMIN  				    |  ADMINISTRADOR_UE											 |
	  | 98585384212 | adminadmin |sucesso  | web	| SUPER USUARIO ESCOLA CEU EMEF	    |  ADMINISTRADOR_UE											 |
	  | 66154178638 | adminadmin |sucesso  | web	| ESCOLA EMEBS    					|  ADMINISTRADOR_UE											 |
	  | 66395865099 | adminadmin |sucesso  | web	|  CEU GESTAO   		  	        |  DIRETOR_UE					                             |
      | 24402217083 | adminadmin |sucesso  | web	| EMEF PFOM ADMIN					|  ADMINISTRADOR_EMPRESA									 |
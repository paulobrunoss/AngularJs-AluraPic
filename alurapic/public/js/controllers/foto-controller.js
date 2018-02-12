angular.module('alurapic').controller('FotoController', function($scope, $http){
    
    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            
             $http.post('v1/fotos', $scope.foto)
             .success(function(){
                 $scope.foto = {};
                 $scope.mensagem = "Imagem inserida com sucesso"
                     })
             .error(function(erro){
                 $scope.mensagem = "Erro ao inserir imagem"
             });
         }
            
        };

    
});
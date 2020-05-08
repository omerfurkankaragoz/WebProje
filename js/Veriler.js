var i = 0;
var app = angular
    .module("uyeModul", [])
    .controller("uyeController", function ($scope) {

        var uye = [
            { uyeadi: "ömer", uyesoyadi: "karagöz",kullaniciadi:"g191210381",sifre:"1234",email:"omer.karagoz2@sakarya.edu.tr"}
        ];

        $scope.uyeler = uyeler;
        $scope.sutunSirala = "uyeadi";
        $scope.cevir = false;

        $scope.veriSirala = function (sutun) {
            $scope.cevir = ($scope.sutunSirala == sutun) ? !$scope.cevir : false;
            $scope.sutunSirala = sutun;
        }

    });

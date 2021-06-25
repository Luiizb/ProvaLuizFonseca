import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  colunasCredito = ["nome", "valor"];

  nome!: string;
  cod!: string;
  preco!: string;

  constructor(private service: ProdutoService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {
    // Caso de edição de registro
    // Verificar se existe um id na url
    // Buscar o registro no backend
    // Atribuir para a variável global os valores do objeto que retornou do backend
   }

  cadastrar(): void {
    let produto = new Produto();
    produto.nome = this.nome;
    produto.cod = this.cod;
    produto.preco = Number.parseFloat(this.preco);
    this.service.cadastrar(produto).subscribe(produto => {
      console.log(produto);
        this.snack.open("Produto cadastrado com sucesso", "Sucesso", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        }) ;
        this.router.navigate([""]);
    })
  }
}

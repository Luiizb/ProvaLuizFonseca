import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  produtos!: MatTableDataSource<Produto>;
  displayedColumns: string[] = ['nome', 'cod', 'preco', 'criadoEm'];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      console.log(produtos)
      this.produtos = new MatTableDataSource<Produto>(produtos);
    });
  }
}

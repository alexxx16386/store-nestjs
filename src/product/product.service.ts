import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) { }


}

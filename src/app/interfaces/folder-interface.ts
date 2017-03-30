import { Instance } from 'sequelize';

export interface FolderAttributes {
    name: string;
    parent_id: number;
}

export interface FolderInstance extends Instance<FolderAttributes> {
    dataValues: FolderAttributes;
}

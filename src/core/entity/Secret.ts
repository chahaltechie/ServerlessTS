import {BaseEntity} from "../common/BaseEntity";

export class Secret extends BaseEntity {
    title: string;
    description: string;
    importance: Importance;
    items: Array<SecretItem>

    constructor(title: string, description: string, importance: Importance, secrets: Array<SecretItem>) {
        super();
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.items = secrets;
    }
}

export interface SecretItem {
    name: string;
    value: string;
}

export enum Importance {
    HIGH,
    MEDIUM = 1,
    LOW
}

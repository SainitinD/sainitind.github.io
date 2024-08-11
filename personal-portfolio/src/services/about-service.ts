import { NamedService } from "./abstract/named-service";
import aboutData from "@data/about.json";
import { About } from "../models/About";

export class AboutService implements NamedService {
  public static serviceName = "ProjectService";
  public serviceName = AboutService.serviceName;

  constructor() {
    this.import_files();
  }

  // no need for state as these are read only values
  private _firstname: string = "";
  private _description: string = "";
  private _jobTitleEmphasis: string = "";
  private _jobTitleNonEmphasis: string = "";

  public get firstname(): string {
    return this._firstname;
  }

  public get description(): string {
    return this._description;
  }

  public get jobTitleEmphasis(): string {
    return this._jobTitleEmphasis;
  }

  public get jobTitleNonEmphasis(): string {
    return this._jobTitleNonEmphasis;
  }

  private import_files() {
    const about: About = aboutData;
    this._firstname = about.firstname;
    this._description = about.description;
    this._jobTitleEmphasis = about.jobTitleEmphasis;
    this._jobTitleNonEmphasis = about.jobTitleNonEmphasis;
    this._firstname = about.firstname;
  }
}
